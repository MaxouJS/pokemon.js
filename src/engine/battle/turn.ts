import type { BattleAction, BattleLogEntry, BattleState } from '../../types';
import { resolveTurnOrder } from '../turn-order';
import { cloneState } from './clone';
import { getActivePokemon } from './helpers';
import { executeAction } from './execute-action';
import { applyEndOfTurnEffects, checkWinCondition } from './end-of-turn';

/**
 * Execute a full turn of battle.
 * PURE function: takes state and returns new state + log.
 * Does NOT mutate the input state.
 */
export function executeTurn(
  state: BattleState,
  playerAction: BattleAction,
  opponentAction: BattleAction,
): { state: BattleState; log: BattleLogEntry[] } {
  const newState = cloneState(state);
  newState.turn += 1;
  newState.phase = 'executing';

  const turnLog: BattleLogEntry[] = [];

  const playerPokemon = getActivePokemon(newState.player);
  const opponentPokemon = getActivePokemon(newState.opponent);
  const order = resolveTurnOrder(
    playerAction,
    opponentAction,
    playerPokemon,
    opponentPokemon,
    newState.weather.type,
  );

  const firstAction = order.first === 'player' ? playerAction : opponentAction;
  const secondAction = order.first === 'player' ? opponentAction : playerAction;

  executeAction(newState, firstAction, order.first, turnLog);

  if ((newState.phase as string) === 'finished') {
    checkWinCondition(newState, turnLog);
    newState.log = [...newState.log, ...turnLog];
    return { state: newState, log: turnLog };
  }

  const secondPokemon = order.second === 'player'
    ? getActivePokemon(newState.player)
    : getActivePokemon(newState.opponent);

  if (!secondPokemon.is_fainted) {
    executeAction(newState, secondAction, order.second, turnLog);
  }

  if ((newState.phase as string) === 'finished') {
    newState.log = [...newState.log, ...turnLog];
    return { state: newState, log: turnLog };
  }

  applyEndOfTurnEffects(newState, turnLog);
  checkWinCondition(newState, turnLog);

  newState.log = [...newState.log, ...turnLog];
  return { state: newState, log: turnLog };
}
