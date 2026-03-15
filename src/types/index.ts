// Stats, natures, IVs/EVs
export type {
  BaseStatName,
  StatName,
  BaseStats,
  EvYield,
  IVs,
  EVs,
  StatStages,
  NatureName,
  Nature,
} from './stats';

export {
  ALL_STATS,
  PERFECT_IVS,
  ZERO_EVS,
  ZERO_STAGES,
} from './stats';

// Conditions & environment
export type {
  StatusCondition,
  VolatileStatus,
  Weather,
  Terrain,
} from './conditions';

// Core primitives
export type {
  PokemonTypeName,
  DamageClass,
  Generation,
  LearnsetEntry,
} from './core';

export { ALL_TYPES } from './core';

// Pokemon & species
export type {
  Pokemon,
  PokemonSpecies,
  PokemonAbility,
  PokemonTypeSlot,
} from './pokemon';

// Moves
export type {
  Move,
  MoveMeta,
  MoveStatChange,
} from './moves';

// Abilities
export type { Ability } from './abilities';

// Items & berries
export type {
  Item,
  Berry,
  BerryFlavor,
} from './items';

// Type chart
export type {
  PokemonType,
  DamageRelations,
  TypeEffectiveness,
} from './types';

// Evolution
export type {
  EvolutionChain,
  EvolutionNode,
  EvolutionDetail,
} from './evolution';

// Battle
export type {
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
  BattleFormat,
} from './battle';
