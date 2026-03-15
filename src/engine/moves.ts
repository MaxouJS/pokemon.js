import type { Move, Pokemon } from '../types';
import { getMove, getMovesForPokemon } from '../data';

/**
 * Get all moves a Pokemon can learn.
 */
export function getLearnableMoves(pokemonIdOrName: number | string): Move[] {
  return getMovesForPokemon(pokemonIdOrName);
}

/**
 * Check if a Pokemon can learn a specific move.
 */
export function canLearnMove(pokemonIdOrName: number | string, moveName: string): boolean {
  const moves = getMovesForPokemon(pokemonIdOrName);
  return moves.some(m => m.name.toLowerCase() === moveName.toLowerCase());
}

/**
 * Get the best moves for a Pokemon by damage class and type coverage.
 * Returns up to `count` moves, prioritizing STAB and coverage.
 */
export function suggestMoves(pokemon: Pokemon, count: number = 4): Move[] {
  const allMoves = getMovesForPokemon(pokemon.id);

  // Score each move
  const scored = allMoves
    .filter(m => m.power !== null && m.power > 0)
    .map(m => {
      let score = m.power ?? 0;

      // STAB bonus
      if (pokemon.types.includes(m.type)) {
        score *= 1.5;
      }

      // Accuracy penalty
      if (m.accuracy !== null && m.accuracy < 100) {
        score *= m.accuracy / 100;
      }

      // Priority bonus
      if (m.priority > 0) score *= 1.1;

      return { move: m, score };
    })
    .sort((a, b) => b.score - a.score);

  // Pick top moves, favoring type diversity
  const selected: Move[] = [];
  const usedTypes = new Set<string>();

  for (const { move } of scored) {
    if (selected.length >= count) break;

    // Prefer type diversity
    if (usedTypes.has(move.type) && selected.length < count - 1) {
      continue;
    }

    selected.push(move);
    usedTypes.add(move.type);
  }

  // Fill remaining slots if we were too picky about diversity
  if (selected.length < count) {
    for (const { move } of scored) {
      if (selected.length >= count) break;
      if (!selected.includes(move)) {
        selected.push(move);
      }
    }
  }

  // Also consider one status move
  if (selected.length < count) {
    const statusMoves = allMoves.filter(m =>
      m.damage_class === 'status' &&
      (m.meta.healing > 0 || m.stat_changes.length > 0 || m.meta.ailment !== 'none')
    );
    if (statusMoves.length > 0 && selected.length < count) {
      selected.push(statusMoves[0]);
    }
  }

  return selected.slice(0, count);
}

/**
 * Validate a moveset for a Pokemon.
 * Returns errors if any moves are invalid.
 */
export function validateMoveset(
  pokemonIdOrName: number | string,
  moveNames: string[],
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (moveNames.length === 0) {
    errors.push('Pokemon must know at least 1 move');
  }
  if (moveNames.length > 4) {
    errors.push('Pokemon cannot know more than 4 moves');
  }

  // Check for duplicates
  const seen = new Set<string>();
  for (const name of moveNames) {
    const lower = name.toLowerCase();
    if (seen.has(lower)) {
      errors.push(`Duplicate move: ${name}`);
    }
    seen.add(lower);
  }

  // Check learnability
  for (const name of moveNames) {
    if (!canLearnMove(pokemonIdOrName, name)) {
      errors.push(`${name} cannot be learned by this Pokemon`);
    }
  }

  return { valid: errors.length === 0, errors };
}
