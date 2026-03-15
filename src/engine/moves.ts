import type { Move, Pokemon, LearnsetEntry } from '../types';
import { getMove, getMovesForPokemon } from '../data';
import { getLearnset, getLevelUpMoves, getMovesAtLevel, getMovesLearnedAtLevel, getDefaultMoveset } from '../data/learnsets';

/**
 * Get all moves a Pokemon can learn (flat list).
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

// ─── Level-up learnset functions ────────────────────────────────────

/**
 * Get the full learnset for a Pokemon (all methods).
 */
export { getLearnset, getLevelUpMoves, getMovesAtLevel, getMovesLearnedAtLevel, getDefaultMoveset };

/**
 * Check if a Pokemon should learn any new moves upon reaching a given level.
 * Returns the list of Move objects that should be offered to learn.
 */
export function checkLevelUpMoves(pokemon: Pokemon, level: number): Move[] {
  const entries = getMovesLearnedAtLevel(pokemon, level);
  return entries
    .map(e => getMove(e.move))
    .filter((m): m is Move => m !== undefined);
}

/**
 * Apply level-up move learning to a moveset.
 * If the Pokemon has fewer than 4 moves, the new move is added.
 * If it has 4 moves, returns the candidate (caller must handle replacement UI).
 */
export function applyLevelUpMove(
  currentMoves: string[],
  newMoveName: string,
): { moves: string[]; replaced: string | null; needsChoice: boolean } {
  if (currentMoves.length < 4) {
    return {
      moves: [...currentMoves, newMoveName],
      replaced: null,
      needsChoice: false,
    };
  }

  // 4 moves already — needs player choice
  return {
    moves: currentMoves,
    replaced: null,
    needsChoice: true,
  };
}

/**
 * Replace a move in a moveset with a new move.
 */
export function replaceMove(
  currentMoves: string[],
  oldMoveName: string,
  newMoveName: string,
): string[] {
  return currentMoves.map(m => m === oldMoveName ? newMoveName : m);
}
