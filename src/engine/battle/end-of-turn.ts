import type { BattleLogEntry, BattleSide, BattleState } from '../../types';
import { applyEndOfTurnWeather } from '../weather';
import { applyStatusDamage } from '../status';
import { getAbilityHandlers } from '../abilities';
import { getHeldItemHandlers } from '../held-items';
import { getActivePokemon, logEntry, applyDamage, hasAlivePokemon } from './helpers';

export function applyEndOfTurnEffects(state: BattleState, log: BattleLogEntry[]): void {
  // Weather chip damage
  if (state.weather.type !== 'none') {
    for (const side of [state.player, state.opponent]) {
      const pokemon = getActivePokemon(side);
      if (!pokemon.is_fainted) {
        let weatherDmg = applyEndOfTurnWeather(state.weather.type, pokemon);

        if (weatherDmg > 0) {
          const abilityHandlers = getAbilityHandlers(pokemon.ability);
          if (abilityHandlers?.onWeatherDamage) {
            weatherDmg = abilityHandlers.onWeatherDamage(weatherDmg, pokemon, state.weather.type);
          }
        }

        if (weatherDmg > 0) {
          applyDamage(pokemon, weatherDmg);
          const weatherName = state.weather.type === 'sandstorm' ? 'the sandstorm' : 'the hail';
          log.push(logEntry(
            state.turn,
            `${pokemon.nickname} was buffeted by ${weatherName}! (${weatherDmg} damage)`,
            'weather',
          ));
          if (pokemon.is_fainted) {
            log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
          }
        }
      }
    }

    if (state.weather.turns_remaining > 0) {
      state.weather.turns_remaining -= 1;
      if (state.weather.turns_remaining === 0) {
        log.push(logEntry(state.turn, `The ${state.weather.type} subsided.`, 'weather'));
        state.weather.type = 'none';
      }
    }
  }

  // Status damage (burn, poison, bad-poison)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted && pokemon.status) {
      pokemon.status_turns += 1;

      const abilityHandlers = getAbilityHandlers(pokemon.ability);
      const isPoisonHeal =
        abilityHandlers?.onEndOfTurn &&
        pokemon.ability.toLowerCase() === 'poison-heal' &&
        (pokemon.status === 'poison' || pokemon.status === 'bad-poison');

      if (!isPoisonHeal) {
        const statusDmg = applyStatusDamage(pokemon);
        if (statusDmg > 0) {
          applyDamage(pokemon, statusDmg);
          const statusMsg = pokemon.status === 'burn' ? 'hurt by its burn'
            : pokemon.status === 'poison' ? 'hurt by poison'
            : pokemon.status === 'bad-poison' ? 'hurt by poison'
            : '';
          if (statusMsg) {
            log.push(logEntry(
              state.turn,
              `${pokemon.nickname} was ${statusMsg}! (${statusDmg} damage)`,
              'status',
            ));
          }
          if (pokemon.is_fainted) {
            log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
          }
        }
      }
    }
  }

  // Ability end-of-turn effects (Speed Boost, Poison Heal, Ice Body, Rain Dish)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted) {
      const abilityHandlers = getAbilityHandlers(pokemon.ability);
      abilityHandlers?.onEndOfTurn?.(pokemon, side, state, log);
    }
  }

  // Held item end-of-turn effects (Leftovers, Black Sludge)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted && pokemon.held_item) {
      const itemHandlers = getHeldItemHandlers(pokemon.held_item);
      itemHandlers?.onEndOfTurn?.(pokemon, log, state.turn);
    }
  }

  // Decrement screen / tailwind timers
  for (const side of [state.player, state.opponent]) {
    if (side.light_screen_turns > 0) side.light_screen_turns -= 1;
    if (side.reflect_turns > 0) side.reflect_turns -= 1;
    if (side.tailwind_turns > 0) side.tailwind_turns -= 1;
    side.volatile.delete('flinch');
  }
}

export function checkWinCondition(state: BattleState, log: BattleLogEntry[]): void {
  const playerAlive = hasAlivePokemon(state.player);
  const opponentAlive = hasAlivePokemon(state.opponent);

  if (!playerAlive && !opponentAlive) {
    state.phase = 'finished';
    state.winner = null;
    log.push(logEntry(state.turn, 'Both sides have no Pokemon left! It\'s a draw!', 'info'));
  } else if (!playerAlive) {
    state.phase = 'finished';
    state.winner = 'opponent';
    log.push(logEntry(state.turn, 'Player has no Pokemon left! Opponent wins!', 'info'));
  } else if (!opponentAlive) {
    state.phase = 'finished';
    state.winner = 'player';
    log.push(logEntry(state.turn, 'Opponent has no Pokemon left! Player wins!', 'info'));
  } else {
    const playerActive = getActivePokemon(state.player);
    const opponentActive = getActivePokemon(state.opponent);

    if (playerActive.is_fainted || opponentActive.is_fainted) {
      state.phase = 'awaiting-switch';
    } else {
      state.phase = 'select-action';
    }
  }
}
