import type { PokemonTypeName } from '../types';
import { getTypeEffectiveness } from '../data';

/**
 * Get the effectiveness multiplier of an attack type against one or more defender types.
 * Returns 0, 0.25, 0.5, 1, 2, or 4.
 */
export function getEffectiveness(attackType: PokemonTypeName, defenderTypes: PokemonTypeName[]): number {
  return getTypeEffectiveness(attackType, defenderTypes);
}

/**
 * Get a human-readable effectiveness message based on the multiplier.
 */
export function getEffectivenessMessage(multiplier: number): string {
  if (multiplier === 0) return 'no effect';
  if (multiplier < 1) return 'not very effective';
  if (multiplier > 1) return 'super effective';
  return '';
}

/**
 * Check if a move gets Same Type Attack Bonus (STAB).
 * A move gets STAB when its type matches one of the Pokemon's types.
 */
export function isSTAB(moveType: PokemonTypeName, pokemonTypes: PokemonTypeName[]): boolean {
  return pokemonTypes.includes(moveType);
}
