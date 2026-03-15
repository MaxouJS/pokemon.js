import type { BattlePokemon, Move } from '../types';
import { getStatStageMultiplier } from './stats';

/**
 * Check if a move hits based on accuracy.
 * Formula: effective accuracy = move.accuracy * (attackerAccuracyMod / defenderEvasionMod)
 * Moves with null accuracy always hit (e.g., Swift, Aerial Ace).
 */
export function checkAccuracy(
  move: Move,
  attacker: BattlePokemon,
  defender: BattlePokemon,
  accuracyStage: number = 0,
  evasionStage: number = 0,
): boolean {
  if (move.accuracy === null) return true;

  const attackerAccuracyMod = getStatStageMultiplier(accuracyStage, true);
  const defenderEvasionMod = getStatStageMultiplier(evasionStage, true);

  const effectiveAccuracy = move.accuracy * (attackerAccuracyMod / defenderEvasionMod);

  const roll = Math.random() * 100;
  return roll < effectiveAccuracy;
}
