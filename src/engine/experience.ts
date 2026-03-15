import { getGrowthRate, getExperienceForLevel } from '../data';

/**
 * Calculate XP gained from defeating a Pokemon.
 * Gen V+ formula:
 *   xp = floor((base_exp * defeated_level / 5) *
 *         (1 / 7) *
 *         floor(((2 * defeated_level + 10)^2.5) / ((defeated_level + winner_level + 10)^2.5)) + 1) *
 *         trainer_bonus * lucky_egg_bonus)
 *
 * Simplified version used here for practical purposes.
 */
export function calculateExperienceGain(
  defeatedBaseExp: number,
  defeatedLevel: number,
  winnerLevel: number,
  options: {
    is_trainer_battle?: boolean;
    has_lucky_egg?: boolean;
    has_exp_share?: boolean;
    participated?: boolean;
  } = {},
): number {
  const trainerBonus = options.is_trainer_battle ? 1.5 : 1;
  const luckyEggBonus = options.has_lucky_egg ? 1.5 : 1;
  const expShareMod = options.has_exp_share && !options.participated ? 0.5 : 1;

  // Scaled XP formula (Gen V+)
  const a = defeatedBaseExp * defeatedLevel / 5;
  const levelDiff = Math.pow(2 * defeatedLevel + 10, 2.5) /
    Math.pow(defeatedLevel + winnerLevel + 10, 2.5);
  const base = Math.floor(a * (1 / 7) * Math.floor(levelDiff) + 1);

  return Math.max(1, Math.floor(base * trainerBonus * luckyEggBonus * expShareMod));
}

/**
 * Get the level a Pokemon should be at given its total XP and growth rate.
 */
export function getLevelForExperience(growthRateName: string, totalExp: number): number {
  const rate = getGrowthRate(growthRateName);
  if (!rate || rate.levels.length === 0) return 1;

  let level = 1;
  for (const entry of rate.levels) {
    if (totalExp >= entry.experience) {
      level = entry.level;
    } else {
      break;
    }
  }

  return level;
}

/**
 * Get XP needed to reach the next level from current XP.
 */
export function getExperienceToNextLevel(
  growthRateName: string,
  currentLevel: number,
  currentExp: number,
): number {
  if (currentLevel >= 100) return 0;
  const nextLevelExp = getExperienceForLevel(growthRateName, currentLevel + 1);
  return Math.max(0, nextLevelExp - currentExp);
}

/**
 * Check if a Pokemon should level up given its current XP.
 * Returns the new level (may be multiple levels).
 */
export function checkLevelUp(
  growthRateName: string,
  currentLevel: number,
  totalExp: number,
): { new_level: number; levels_gained: number } {
  const newLevel = Math.min(100, getLevelForExperience(growthRateName, totalExp));
  return {
    new_level: newLevel,
    levels_gained: Math.max(0, newLevel - currentLevel),
  };
}

/**
 * Calculate XP yield percentages for EV-trained vs non-EV-trained Pokemon.
 */
export function getExperienceProgress(
  growthRateName: string,
  currentLevel: number,
  currentExp: number,
): { current: number; needed: number; progress: number } {
  if (currentLevel >= 100) return { current: currentExp, needed: 0, progress: 1 };

  const currentLevelExp = getExperienceForLevel(growthRateName, currentLevel);
  const nextLevelExp = getExperienceForLevel(growthRateName, currentLevel + 1);
  const needed = nextLevelExp - currentLevelExp;
  const current = currentExp - currentLevelExp;

  return {
    current,
    needed,
    progress: needed > 0 ? Math.min(1, current / needed) : 1,
  };
}
