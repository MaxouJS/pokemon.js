import type { BattlePokemon, StatusCondition } from '../types';

/**
 * Calculate status condition damage for a Pokemon.
 * Burn: 1/16 max HP.
 * Poison: 1/8 max HP.
 * Bad poison: 1/16 * turns max HP (toxic damage that increases each turn).
 */
export function applyStatusDamage(pokemon: BattlePokemon): number {
  if (pokemon.is_fainted || !pokemon.status) return 0;

  switch (pokemon.status) {
    case 'burn':
      return Math.max(1, Math.floor(pokemon.max_hp / 16));
    case 'poison':
      return Math.max(1, Math.floor(pokemon.max_hp / 8));
    case 'bad-poison':
      return Math.max(1, Math.floor(pokemon.max_hp * pokemon.status_turns / 16));
    default:
      return 0;
  }
}

/**
 * Check if a paralyzed Pokemon is fully paralyzed this turn.
 * 25% chance to be unable to move.
 */
export function checkParalysisSkip(): boolean {
  return Math.random() < 0.25;
}

/**
 * Check if a frozen Pokemon thaws out this turn.
 * 20% chance to thaw each turn.
 */
export function checkFreezeThaw(): boolean {
  return Math.random() < 0.20;
}

/**
 * Check if a sleeping Pokemon wakes up.
 * Sleep lasts 1-3 turns.
 */
export function checkSleepWake(pokemon: BattlePokemon): boolean {
  if (pokemon.status_turns >= 3) return true;
  if (pokemon.status_turns >= 1) {
    return Math.random() < (1 / 3);
  }
  return false;
}

/**
 * Get the speed modifier applied by a status condition.
 * Paralysis: 0.5x speed.
 */
export function getStatusSpeedModifier(status: StatusCondition | null): number {
  if (status === 'paralysis') return 0.5;
  return 1;
}

/**
 * Get the physical attack modifier applied by burn status.
 * Burn: 0.5x physical attack.
 */
export function getBurnAttackModifier(status: StatusCondition | null): number {
  if (status === 'burn') return 0.5;
  return 1;
}
