import type { PokemonTypeName } from './common';

/** Type effectiveness damage relations */
export interface DamageRelations {
  double_damage_from: PokemonTypeName[];
  double_damage_to: PokemonTypeName[];
  half_damage_from: PokemonTypeName[];
  half_damage_to: PokemonTypeName[];
  no_damage_from: PokemonTypeName[];
  no_damage_to: PokemonTypeName[];
}

/** A Pokemon type with its damage relations */
export interface PokemonType {
  id: number;
  name: PokemonTypeName;
  damage_relations: DamageRelations;
  generation: string;
}

/** Type effectiveness multiplier */
export type TypeEffectiveness = 0 | 0.25 | 0.5 | 1 | 2 | 4;
