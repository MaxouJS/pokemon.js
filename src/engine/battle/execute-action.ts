import type {
  BattleAction,
  BattleLogEntry,
  BattleState,
} from '../../types';
import { ZERO_STAGES } from '../../types';
import { useBattleItem, throwPokeball, type BattleItemName } from '../battle-items';
import type { PokeballType, CaptureContext } from '../capture';
import { getAbilityHandlers } from '../abilities';
import { applyEntryHazards } from '../hazards';
import type { Side } from '../turn-order';
import { getActivePokemon, logEntry } from './helpers';
import { executeMove } from './execute-move';

export function executeSwitch(
  state: BattleState,
  side: import('../../types').BattleSide,
  opponentSide: import('../../types').BattleSide,
  sideLabel: string,
  pokemonIndex: number,
  log: BattleLogEntry[],
): void {
  const oldPokemon = getActivePokemon(side);
  side.active_index = pokemonIndex;
  const newPokemon = getActivePokemon(side);

  side.volatile.clear();
  side.volatile_data = {};

  oldPokemon.stat_stages = { ...ZERO_STAGES };

  log.push(logEntry(state.turn, `${sideLabel} withdrew ${oldPokemon.nickname}!`, 'switch'));
  log.push(logEntry(state.turn, `${sideLabel} sent out ${newPokemon.nickname}!`, 'switch'));

  applyEntryHazards(side, newPokemon, log, state.turn);

  if (newPokemon.is_fainted) return;

  const abilityHandlers = getAbilityHandlers(newPokemon.ability);
  if (abilityHandlers?.onSwitchIn) {
    abilityHandlers.onSwitchIn(newPokemon, side, opponentSide, state, log);
  }
}

export function executeAction(
  state: BattleState,
  action: BattleAction,
  side: Side,
  log: BattleLogEntry[],
): void {
  const attackerSide = side === 'player' ? state.player : state.opponent;
  const defenderSide = side === 'player' ? state.opponent : state.player;
  const attackerLabel = side === 'player' ? 'Player' : 'Opponent';
  const defenderLabel = side === 'player' ? 'Opponent' : 'Player';

  switch (action.type) {
    case 'move':
      executeMove(state, attackerSide, defenderSide, attackerLabel, defenderLabel, action.move_index, log);
      break;
    case 'switch':
      executeSwitch(state, attackerSide, defenderSide, attackerLabel, action.pokemon_index, log);
      break;
    case 'item': {
      const itemAction = action as BattleAction & { item: string; target_index: number };
      const itemName = itemAction.item;

      const pokeballTypes = [
        'poke-ball', 'great-ball', 'ultra-ball', 'master-ball', 'safari-ball',
        'net-ball', 'dive-ball', 'nest-ball', 'repeat-ball', 'timer-ball',
        'luxury-ball', 'premier-ball', 'dusk-ball', 'heal-ball', 'quick-ball',
        'fast-ball', 'level-ball', 'lure-ball', 'heavy-ball', 'love-ball',
        'friend-ball', 'moon-ball', 'sport-ball', 'dream-ball',
      ];

      if (pokeballTypes.includes(itemName)) {
        const captureResult = throwPokeball(state, itemName as PokeballType, {
          turn: state.turn,
        } as CaptureContext);
        log.push(...captureResult.log);
        if (captureResult.caught) {
          state.phase = 'finished';
          state.winner = 'player';
        }
      } else {
        const targetIndex = itemAction.target_index ?? attackerSide.active_index;
        const targetPokemon = attackerSide.team[targetIndex];
        if (targetPokemon) {
          const result = useBattleItem(itemName as BattleItemName, targetPokemon);
          log.push(logEntry(state.turn, result.message, 'item'));
        }
      }
      break;
    }
    case 'flee':
      log.push(logEntry(state.turn, `${attackerLabel} fled from the battle!`, 'info'));
      state.phase = 'finished';
      state.winner = side === 'player' ? 'opponent' : 'player';
      break;
  }
}
