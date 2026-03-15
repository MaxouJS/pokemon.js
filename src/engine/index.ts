// Stats
export {
  calcHP,
  calcStat,
  calcAllStats,
  getNatureModifier,
  getStatStageMultiplier,
  getEffectiveStat,
} from './stats';

// Type effectiveness
export {
  getEffectiveness,
  getEffectivenessMessage,
  isSTAB,
} from './type-effectiveness';

// Damage
export {
  calculateDamage,
  type DamageCalcOptions,
} from './damage';

// Accuracy
export { checkAccuracy } from './accuracy';

// Critical hits
export { checkCritical, CRITICAL_MULTIPLIER } from './critical';

// Weather
export {
  getWeatherDamageModifier,
  applyEndOfTurnWeather,
} from './weather';

// Status
export {
  applyStatusDamage,
  checkParalysisSkip,
  checkFreezeThaw,
  checkSleepWake,
  getStatusSpeedModifier,
  getBurnAttackModifier,
} from './status';

// Turn order
export {
  resolveTurnOrder,
  type TurnOrderResult,
  type Side,
} from './turn-order';

// Battle engine
export {
  createBattlePokemon,
  createBattleState,
  executeTurn,
} from './battle';

// AI
export {
  getAIAction,
  type AIDifficulty,
} from './ai';

// Experience & Leveling
export {
  calculateExperienceGain,
  getLevelForExperience,
  getExperienceToNextLevel,
  checkLevelUp,
  getExperienceProgress,
} from './experience';

// Evolution logic
export {
  getAvailableEvolutions,
  getEvolutionTargets,
  getEvolutionLine,
  getPreEvolution,
  isFinalEvolution,
  isBabyPokemon,
  type EvolutionContext,
  type EvolutionResult,
} from './evolution';

// Move logic
export {
  getLearnableMoves,
  canLearnMove,
  suggestMoves,
  validateMoveset,
  getLearnset,
  getLevelUpMoves,
  getMovesAtLevel,
  getMovesLearnedAtLevel,
  getDefaultMoveset,
  checkLevelUpMoves,
  applyLevelUpMove,
  replaceMove,
} from './moves';

// Capture mechanics
export {
  attemptCapture,
  getCatchProbability,
  getBallModifier,
  type PokeballType,
  type CaptureContext,
  type CaptureResult,
} from './capture';

// Battle items
export {
  useBattleItem,
  throwPokeball,
  type BattleItemName,
  type ItemUseResult,
} from './battle-items';

// Abilities
export {
  getAbilityHandlers,
  checkSturdy,
  type AbilityHandlers,
} from './abilities';

// Held items
export {
  getHeldItemHandlers,
  type HeldItemHandlers,
} from './held-items';

// Entry hazards
export {
  placeHazard,
  applyEntryHazards,
  removeHazards,
} from './hazards';

// Double battles
export {
  executeDoublesTurn,
} from './doubles';
