// ─── Types ───────────────────────────────────────────────────
export type {
  PokemonTypeName,
  BaseStatName,
  StatName,
  DamageClass,
  NatureName,
  StatusCondition,
  VolatileStatus,
  Weather,
  Terrain,
  Generation,
  BaseStats,
  EvYield,
  IVs,
  EVs,
  Nature,
  StatStages,
  Pokemon,
  PokemonSpecies,
  PokemonAbility,
  PokemonTypeSlot,
  Move,
  MoveMeta,
  MoveStatChange,
  Ability,
  Item,
  Berry,
  BerryFlavor,
  PokemonType,
  DamageRelations,
  TypeEffectiveness,
  EvolutionChain,
  EvolutionNode,
  EvolutionDetail,
  BattlePokemon,
  BattleSide,
  BattleState,
  BattlePhase,
  BattleAction,
  BattleLogEntry,
  BattleOptions,
  DamageResult,
  EntryHazard,
  TeamMemberConfig,
} from './types';

export { ALL_TYPES, ALL_STATS, PERFECT_IVS, ZERO_EVS, ZERO_STAGES } from './types';

// ─── Data ────────────────────────────────────────────────────
export {
  getPokemon,
  getAllPokemon,
  getPokemonByType,
  getPokemonByGeneration,
  searchPokemon,
  POKEMON_GEN1,
  POKEMON_GEN2,
  POKEMON_GEN3,
  POKEMON_GEN4,
  POKEMON_GEN5,
  getSpecies,
  getAllSpecies,
  getMove,
  getAllMoves,
  getMovesByType,
  getMovesForPokemon,
  getAbility,
  getAllAbilities,
  getItem,
  getAllItems,
  getBerry,
  getAllBerries,
  getType,
  getAllTypes,
  getTypeEffectiveness,
  getTypeChart,
  getNature,
  getAllNatures,
  getEvolutionChain,
  getEvolutionChainForSpecies,
  getAllEvolutionChains,
  getGrowthRates,
  getGrowthRate,
  getExperienceForLevel,
  getEggGroups,
  POKEMON_COUNT,
  SPECIES_COUNT,
  MOVES_COUNT,
  ABILITIES_COUNT,
  ITEMS_COUNT,
  TYPES_COUNT,
} from './data';

// ─── Assets ──────────────────────────────────────────────────
export {
  getSprite,
  getItemSprite,
  getCryPath,
  setAssetBasePath,
  getAssetBasePath,
  TYPE_COLORS,
} from './assets';
export type { SpriteVariant } from './assets';

// ─── Engine ──────────────────────────────────────────────────
export {
  calcHP,
  calcStat,
  calcAllStats,
  getNatureModifier,
  getStatStageMultiplier,
  getEffectiveStat,
} from './engine/stats';

export { calculateDamage } from './engine/damage';
export type { DamageCalcOptions } from './engine/damage';
export { getEffectiveness, getEffectivenessMessage, isSTAB } from './engine/type-effectiveness';
export { checkAccuracy } from './engine/accuracy';
export { checkCritical, CRITICAL_MULTIPLIER } from './engine/critical';
export { getWeatherDamageModifier, applyEndOfTurnWeather } from './engine/weather';
export {
  applyStatusDamage,
  checkParalysisSkip,
  checkFreezeThaw,
  checkSleepWake,
  getStatusSpeedModifier,
  getBurnAttackModifier,
} from './engine/status';
export { resolveTurnOrder } from './engine/turn-order';
export type { TurnOrderResult, Side } from './engine/turn-order';
export { createBattleState, createBattlePokemon, executeTurn } from './engine/battle';
export { getAIAction } from './engine/ai';
export type { AIDifficulty } from './engine/ai';

// Experience & Leveling
export {
  calculateExperienceGain,
  getLevelForExperience,
  getExperienceToNextLevel,
  checkLevelUp,
  getExperienceProgress,
} from './engine/experience';

// Evolution
export {
  getAvailableEvolutions,
  getEvolutionTargets,
  getEvolutionLine,
  getPreEvolution,
  isFinalEvolution,
  isBabyPokemon,
} from './engine/evolution';
export type { EvolutionContext, EvolutionResult } from './engine/evolution';

// Moves
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
} from './engine/moves';

// Capture
export {
  attemptCapture,
  getCatchProbability,
  getBallModifier,
} from './engine/capture';
export type { PokeballType, CaptureContext, CaptureResult } from './engine/capture';

// Battle Items
export { useBattleItem, throwPokeball } from './engine/battle-items';
export type { BattleItemName, ItemUseResult } from './engine/battle-items';

// Abilities
export { getAbilityHandlers, checkSturdy } from './engine/abilities';
export type { AbilityHandlers } from './engine/abilities';

// Held Items (battle effects)
export { getHeldItemHandlers } from './engine/held-items';
export type { HeldItemHandlers } from './engine/held-items';

// Entry Hazards
export { placeHazard, applyEntryHazards, removeHazards } from './engine/hazards';

// Double Battles
export { executeDoublesTurn } from './engine/doubles';

// ─── Core Classes ────────────────────────────────────────────
export { PokemonInstance } from './core/PokemonInstance';
export type { PokemonInstanceData } from './core/PokemonInstance';
export { Team, MAX_TEAM_SIZE } from './core/Team';
export { Battle } from './core/Battle';
export { Trainer } from './core/Trainer';
export type { BagSlot } from './core/Trainer';

// ─── Utils ───────────────────────────────────────────────────
export {
  formatName,
  toSlug,
  formatStatName,
  formatHeight,
  formatWeight,
  formatPokedexNumber,
} from './utils/format';
export { getTypeColor, getTypeTextColor } from './utils/color';
export { fuzzyMatch, fuzzyScore } from './utils/search';
export { parseGeneration, formatGeneration, getGenerationRange } from './utils/generation';
