import type { BattlePokemon, Move } from '../types';

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
 * Super Luck ability adds +1.
 * Scope Lens / Razor Claw held item adds +1.
 * Stage 0 = 1/24, Stage 1 = 1/8, Stage 2 = 1/2, Stage 3+ = always.
 */
export function checkCritical(move: Move, attacker: BattlePokemon): boolean {
  if (move.damage_class === 'status') return false;

  let stage = 0;

  stage += move.meta.crit_rate;

  if (attacker.ability.toLowerCase() === 'super-luck') {
    stage += 1;
  }

  if (attacker.held_item) {
    const item = attacker.held_item.toLowerCase();
    if (item === 'scope-lens' || item === 'razor-claw') {
      stage += 1;
    }
  }

  if (stage >= 3) return true;

  const rate = CRIT_RATES[stage] ?? CRIT_RATES[0];
  return Math.random() < rate;
}

/** The critical hit damage multiplier (Gen V+) */
export const CRITICAL_MULTIPLIER = 1.5;
