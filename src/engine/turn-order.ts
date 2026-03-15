import type { BattleAction, BattlePokemon, Weather } from '../types';
import { calcAllStats, getEffectiveStat } from './stats';
import { getStatusSpeedModifier } from './status';
import { getAbilityHandlers } from './abilities';
import { getHeldItemHandlers } from './held-items';

/** The two sides that can act in a turn */
export type Side = 'player' | 'opponent';

/** Result of turn order resolution */
export interface TurnOrderResult {
  first: Side;
  second: Side;
}

/**
 * Get the priority of a battle action.
 * Move actions use the move's priority.
 * Switch actions have priority +7 (always go first).
 * Item actions have priority +6.
 * Flee has priority +7.
 */
function getActionPriority(action: BattleAction, pokemon: BattlePokemon): number {
  switch (action.type) {
    case 'move': {
      const move = pokemon.moves[action.move_index];
      return move ? move.priority : 0;
    }
    case 'switch':
      return 7;
    case 'item':
      return 6;
    case 'flee':
      return 7;
  }
}

/**
 * Calculate the effective speed of a Pokemon,
 * including ability and held item modifiers.
 */
function getEffectiveSpeed(pokemon: BattlePokemon, weather: Weather = 'none'): number {
  const stats = calcAllStats(
    pokemon.pokemon.stats,
    pokemon.ivs,
    pokemon.evs,
    pokemon.level,
    pokemon.nature,
  );
  let speed = getEffectiveStat(stats.speed, pokemon.stat_stages.speed);
  const statusMod = getStatusSpeedModifier(pokemon.status);
  speed = Math.floor(speed * statusMod);

  // Ability speed modifier (Swift Swim, Chlorophyll, Sand Rush)
  const abilityHandlers = getAbilityHandlers(pokemon.ability);
  if (abilityHandlers?.onModifySpeed) {
    speed = abilityHandlers.onModifySpeed(speed, pokemon, weather);
  }

  // Held item speed modifier (Choice Scarf, Iron Ball)
  if (pokemon.held_item) {
    const itemHandlers = getHeldItemHandlers(pokemon.held_item);
    if (itemHandlers?.onModifySpeed) {
      speed = itemHandlers.onModifySpeed(speed, pokemon);
    }
  }

  return speed;
}

/**
 * Resolve the turn order for a battle turn.
 * Priority moves go first. Same priority: faster Pokemon goes first.
 * Speed tie: random.
 */
export function resolveTurnOrder(
  playerAction: BattleAction,
  opponentAction: BattleAction,
  playerPokemon: BattlePokemon,
  opponentPokemon: BattlePokemon,
  weather: Weather = 'none',
): TurnOrderResult {
  const playerPriority = getActionPriority(playerAction, playerPokemon);
  const opponentPriority = getActionPriority(opponentAction, opponentPokemon);

  if (playerPriority > opponentPriority) {
    return { first: 'player', second: 'opponent' };
  }
  if (opponentPriority > playerPriority) {
    return { first: 'opponent', second: 'player' };
  }

  const playerSpeed = getEffectiveSpeed(playerPokemon, weather);
  const opponentSpeed = getEffectiveSpeed(opponentPokemon, weather);

  if (playerSpeed > opponentSpeed) {
    return { first: 'player', second: 'opponent' };
  }
  if (opponentSpeed > playerSpeed) {
    return { first: 'opponent', second: 'player' };
  }

  if (Math.random() < 0.5) {
    return { first: 'player', second: 'opponent' };
  }
  return { first: 'opponent', second: 'player' };
}
