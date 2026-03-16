/**
 * Convenience wrappers that combine the battle engine with the sequencer.
 *
 * These functions call the core engine and automatically parse the
 * resulting log entries into BattleEvents, saving you a step.
 */

import type {
  BattleState,
  BattleAction,
  BattleLogEntry,
} from '../types';
import type { BattleEvent } from './types';
import { executeTurn } from '../engine/battle';
import { executeDoublesTurn } from '../engine/doubles';
import { throwPokeball as engineThrowPokeball } from '../engine/battle-items';
import type { PokeballType, CaptureContext, CaptureResult } from '../engine/capture';
import { parseBattleLog } from './parser';

export interface SequencedTurnResult {
  state: BattleState;
  log: BattleLogEntry[];
  events: BattleEvent[];
}

/**
 * Execute a singles battle turn and return structured events alongside the raw result.
 *
 * @example
 * ```ts
 * const result = sequenceTurn(state, playerAction, opponentAction);
 * const player = new BattleEventPlayer({ speed: 1 });
 * player.onEvent((e) => updateUI(e));
 * player.enqueue(result.events);
 * player.play();
 * ```
 */
export function sequenceTurn(
  state: BattleState,
  playerAction: BattleAction,
  opponentAction: BattleAction,
): SequencedTurnResult {
  const result = executeTurn(state, playerAction, opponentAction);
  return {
    state: result.state,
    log: result.log,
    events: parseBattleLog(result.log),
  };
}

/**
 * Execute a doubles battle turn and return structured events.
 */
export function sequenceDoublesTurn(
  state: BattleState,
  playerActions: BattleAction[],
  opponentActions: BattleAction[],
): SequencedTurnResult {
  const result = executeDoublesTurn(state, playerActions, opponentActions);
  return {
    state: result.state,
    log: result.log,
    events: parseBattleLog(result.log),
  };
}

export interface SequencedCaptureResult {
  result: CaptureResult;
  log: BattleLogEntry[];
  events: BattleEvent[];
}

/**
 * Throw a Pokeball and return structured events for the shake sequence.
 *
 * @example
 * ```ts
 * const capture = sequenceCapture(state, 'ultra-ball');
 * const player = new BattleEventPlayer();
 * player.onEvent((e) => {
 *   if (e.kind === 'ball_throw') showBallAnimation();
 *   if (e.kind === 'ball_shake') shakeBall(e.data.shake_number);
 *   if (e.kind === 'ball_capture') showCaptureSuccess();
 *   if (e.kind === 'ball_break_free') showBreakFree();
 * });
 * player.enqueue(capture.events);
 * player.play();
 * ```
 */
export function sequenceCapture(
  state: BattleState,
  ball: PokeballType,
  context?: CaptureContext,
): SequencedCaptureResult {
  const raw = engineThrowPokeball(state, ball, context);
  const { log, ...captureResult } = raw;
  return {
    result: captureResult,
    log,
    events: parseBattleLog(log),
  };
}
