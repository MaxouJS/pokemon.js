/**
 * Level-up learnset generation.
 *
 * Since we don't have per-game learnset tables, this module derives
 * approximate level-up learnsets from the existing move lists using a
 * heuristic that distributes moves across levels 1–100 based on power,
 * STAB priority, and damage class distribution.
 *
 * The algorithm:
 * 1. Separate moves into level-up candidates and TM/tutor candidates
 * 2. Score each move by "early-learn" criteria (low power, STAB, status)
 * 3. Sort by score and assign levels across the 1–100 range
 * 4. Ensure at least one move at level 1
 */

import type { LearnsetEntry, PokemonTypeName } from '../types';
import type { Move, Pokemon } from '../types';
import { getMove } from './index';

// Cache learnsets by pokemon id
const LEARNSET_CACHE = new Map<number, LearnsetEntry[]>();

/**
 * Score a move for learn-order sorting.
 * Lower scores = learned earlier (lower level).
 */
function moveLearnScore(move: Move, pokemonTypes: PokemonTypeName[]): number {
  let score = 0;

  // Base power drives level — stronger moves learned later
  if (move.power !== null && move.power > 0) {
    score += move.power;
  } else {
    // Status moves: learned mid-range
    score += 30;
  }

  // STAB moves learned slightly earlier
  if (pokemonTypes.includes(move.type)) {
    score -= 15;
  }

  // High-priority moves learned earlier (Quick Attack, Mach Punch)
  if (move.priority > 0) {
    score -= 10;
  }

  // Moves with very high power learned later
  if (move.power !== null && move.power >= 120) {
    score += 20;
  }

  // Low-accuracy moves learned later
  if (move.accuracy !== null && move.accuracy < 80) {
    score += 10;
  }

  return score;
}

/**
 * Generate the level-up learnset for a Pokemon.
 * Non-level-up moves (wide coverage, unusual types) are classified as TM/tutor.
 */
function generateLearnset(pokemon: Pokemon): LearnsetEntry[] {
  const resolved: { move: Move; name: string }[] = [];
  for (const name of pokemon.moves) {
    const move = getMove(name);
    if (move) {
      resolved.push({ move, name });
    }
  }

  if (resolved.length === 0) return [];

  // Separate into level-up and TM candidates.
  // Heuristic: STAB moves, normal-type moves, and status moves the Pokemon
  // "naturally" knows are level-up. Off-type coverage is TM/tutor.
  const levelUp: { move: Move; name: string; score: number }[] = [];
  const tm: { move: Move; name: string }[] = [];

  for (const { move, name } of resolved) {
    const isSTAB = pokemon.types.includes(move.type);
    const isNormal = move.type === 'normal';
    const isStatus = move.damage_class === 'status';

    // Classify: level-up if STAB, Normal, status, or low power
    if (isSTAB || isNormal || isStatus || (move.power !== null && move.power <= 60)) {
      levelUp.push({ move, name, score: moveLearnScore(move, pokemon.types) });
    } else {
      // Off-type damaging moves with moderate+ power → TM
      // But keep some for level-up variety (up to 30% off-type)
      if (Math.random() < 0.3 || levelUp.length < 8) {
        levelUp.push({ move, name, score: moveLearnScore(move, pokemon.types) });
      } else {
        tm.push({ move, name });
      }
    }
  }

  // Sort level-up moves by score (lower = earlier)
  levelUp.sort((a, b) => a.score - b.score);

  // Assign levels across the 1–100 range
  const entries: LearnsetEntry[] = [];
  const totalLevelUp = levelUp.length;

  for (let i = 0; i < totalLevelUp; i++) {
    const { name } = levelUp[i];
    let level: number;
    if (i === 0) {
      level = 1; // First move always at level 1
    } else if (totalLevelUp <= 4) {
      // Few moves: spread across low levels
      level = 1 + i * 8;
    } else {
      // Distribute across 1–80 range (leaving room for evolution moves)
      const fraction = i / (totalLevelUp - 1);
      level = Math.max(1, Math.round(1 + fraction * 79));
    }
    entries.push({ move: name, level, method: 'level-up' });
  }

  // Add TM moves (level 0 means "any level via TM")
  for (const { name } of tm) {
    entries.push({ move: name, level: 0, method: 'tm' });
  }

  return entries;
}

/**
 * Get the full learnset for a Pokemon.
 */
export function getLearnset(pokemon: Pokemon): LearnsetEntry[] {
  const cached = LEARNSET_CACHE.get(pokemon.id);
  if (cached) return cached;

  const learnset = generateLearnset(pokemon);
  LEARNSET_CACHE.set(pokemon.id, learnset);
  return learnset;
}

/**
 * Get level-up moves only (no TM/tutor).
 */
export function getLevelUpMoves(pokemon: Pokemon): LearnsetEntry[] {
  return getLearnset(pokemon).filter(e => e.method === 'level-up');
}

/**
 * Get all moves a Pokemon would know at a given level
 * (all level-up moves with learn level <= the given level).
 */
export function getMovesAtLevel(pokemon: Pokemon, level: number): LearnsetEntry[] {
  return getLevelUpMoves(pokemon).filter(e => e.level <= level);
}

/**
 * Get moves learned exactly at a specific level.
 * Used when a Pokemon levels up to check for new moves.
 */
export function getMovesLearnedAtLevel(pokemon: Pokemon, level: number): LearnsetEntry[] {
  return getLevelUpMoves(pokemon).filter(e => e.level === level);
}

/**
 * Get the default moveset a Pokemon would have at a given level
 * (last 4 level-up moves it would have learned).
 */
export function getDefaultMoveset(pokemon: Pokemon, level: number): string[] {
  const available = getMovesAtLevel(pokemon, level);
  // Take the last 4 (most recently learned)
  return available.slice(-4).map(e => e.move);
}
