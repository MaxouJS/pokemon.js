import type { BaseStats, EVs, IVs, NatureName, StatName } from '../types';
import { getNature } from '../data';

/**
 * Calculate HP stat.
 * Formula: floor((2*base + iv + floor(ev/4)) * level / 100) + level + 10
 * Shedinja always has 1 HP.
 */
export function calcHP(base: number, iv: number, ev: number, level: number): number {
  if (base === 1) return 1;
  return Math.floor(
    (2 * base + iv + Math.floor(ev / 4)) * level / 100
  ) + level + 10;
}

/**
 * Calculate a non-HP stat.
 * Formula: floor((floor((2*base + iv + floor(ev/4)) * level / 100) + 5) * natureMod)
 */
export function calcStat(
  base: number,
  iv: number,
  ev: number,
  level: number,
  natureMod: number,
): number {
  return Math.floor(
    (Math.floor((2 * base + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureMod
  );
}

/**
 * Get the nature modifier for a specific stat.
 * Returns 1.1 for the boosted stat, 0.9 for the reduced stat, 1.0 otherwise.
 */
export function getNatureModifier(natureName: NatureName, stat: StatName): number {
  const nature = getNature(natureName);
  if (!nature) return 1;
  if (nature.increased_stat === stat) return 1.1;
  if (nature.decreased_stat === stat) return 0.9;
  return 1;
}

/**
 * Calculate all 6 stats using base stats, IVs, EVs, level, and nature.
 */
export function calcAllStats(
  baseStats: BaseStats,
  ivs: IVs,
  evs: EVs,
  level: number,
  natureName: NatureName,
): BaseStats {
  return {
    hp: calcHP(baseStats.hp, ivs.hp, evs.hp, level),
    attack: calcStat(baseStats.attack, ivs.attack, evs.attack, level, getNatureModifier(natureName, 'attack')),
    defense: calcStat(baseStats.defense, ivs.defense, evs.defense, level, getNatureModifier(natureName, 'defense')),
    'special-attack': calcStat(baseStats['special-attack'], ivs['special-attack'], evs['special-attack'], level, getNatureModifier(natureName, 'special-attack')),
    'special-defense': calcStat(baseStats['special-defense'], ivs['special-defense'], evs['special-defense'], level, getNatureModifier(natureName, 'special-defense')),
    speed: calcStat(baseStats.speed, ivs.speed, evs.speed, level, getNatureModifier(natureName, 'speed')),
  };
}

/**
 * Get the stat stage multiplier for stages -6 to +6.
 * Normal stats: stage >= 0 ? (2+stage)/2 : 2/(2-stage)
 * Accuracy/evasion: stage >= 0 ? (3+stage)/3 : 3/(3-stage)
 */
export function getStatStageMultiplier(stage: number, isAccuracyOrEvasion: boolean = false): number {
  const clamped = Math.max(-6, Math.min(6, stage));
  if (isAccuracyOrEvasion) {
    return clamped >= 0 ? (3 + clamped) / 3 : 3 / (3 - clamped);
  }
  return clamped >= 0 ? (2 + clamped) / 2 : 2 / (2 - clamped);
}

/**
 * Apply a stat stage modifier to a base stat value.
 */
export function getEffectiveStat(baseStat: number, stage: number): number {
  return Math.floor(baseStat * getStatStageMultiplier(stage));
}
