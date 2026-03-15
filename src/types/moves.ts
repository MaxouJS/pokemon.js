import type { PokemonTypeName, DamageClass } from './core';
import type { StatName } from './stats';

/** Metadata about a move's secondary effects */
export interface MoveMeta {
  ailment: string;
  ailment_chance: number;
  category: string;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  min_hits: number | null;
  max_turns: number | null;
  min_turns: number | null;
  stat_chance: number;
}

/** Stat change caused by a move */
export interface MoveStatChange {
  stat: StatName;
  change: number;
}

/** A Pokemon move */
export interface Move {
  id: number;
  name: string;
  type: PokemonTypeName;
  damage_class: DamageClass;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  priority: number;
  target: string;
  effect: string;
  effect_chance: number | null;
  meta: MoveMeta;
  stat_changes: MoveStatChange[];
  generation: string;
}
