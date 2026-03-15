import type { BattlePokemon, Move } from '../types';
import { getAbilityHandlers } from './abilities';
import { getHeldItemHandlers } from './held-items';

/** Critical hit rate thresholds by stage (Gen VI+ rates) */
const CRIT_RATES: Record<number, number> = {
  0: 1 / 24,
  1: 1 / 8,
  2: 1 / 2,
};

/**
 * Check if a move scores a critical hit.
 * Base crit stage is 0.
 * High crit ratio moves add +1 (move.meta.crit_rate).
 * Ability onModifyCritStage hook (e.g. Super Luck +1).
 * Item onModifyCritStage hook (e.g. Scope Lens +1).
 * Stage 0 = 1/24, Stage 1 = 1/8, Stage 2 = 1/2, Stage 3+ = always.
 * Defender abilities can prevent crits (Battle Armor, Shell Armor).
 */
export function checkCritical(
  move: Move,
  attacker: BattlePokemon,
  defender?: BattlePokemon,
): boolean {
  if (move.damage_class === 'status') return false;

  // Defender ability can block crits entirely
  if (defender) {
    const defHandlers = getAbilityHandlers(defender.ability);
    if (defHandlers?.onPreventCrit?.(defender)) {
      return false;
    }
  }

  let stage = 0;

  stage += move.meta.crit_rate;

  // Ability crit stage modifier
  const atkHandlers = getAbilityHandlers(attacker.ability);
  if (atkHandlers?.onModifyCritStage) {
    stage = atkHandlers.onModifyCritStage(stage, attacker);
  }

  // Item crit stage modifier
  if (attacker.held_item) {
    const itemHandlers = getHeldItemHandlers(attacker.held_item);
    if (itemHandlers?.onModifyCritStage) {
      stage = itemHandlers.onModifyCritStage(stage, attacker);
    }
  }

  if (stage >= 3) return true;

  const rate = CRIT_RATES[stage] ?? CRIT_RATES[0];
  return Math.random() < rate;
}

/** The critical hit damage multiplier (Gen V+) */
export const CRITICAL_MULTIPLIER = 1.5;
