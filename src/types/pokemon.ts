import type { BaseStats, PokemonTypeName } from './common';

/** A Pokemon's ability slot */
export interface PokemonAbility {
  name: string;
  is_hidden: boolean;
  slot: number;
}

/** A Pokemon's type slot */
export interface PokemonTypeSlot {
  slot: number;
  type: PokemonTypeName;
}

/** Core Pokemon data (Gen 1–5, sprites/cries resolved via asset manifest) */
export interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypeName[];
  stats: BaseStats;
  ev_yield: BaseStats;
  abilities: PokemonAbility[];
  height: number;
  weight: number;
  base_experience: number;
  moves: string[];
  is_default: boolean;
  order: number;
  species: string;
}

/** Pokemon species data (Pokedex-level info) */
export interface PokemonSpecies {
  id: number;
  name: string;
  genus: string;
  flavor_text: string;
  generation: string;
  color: string;
  shape: string | null;
  habitat: string | null;
  growth_rate: string;
  capture_rate: number;
  base_happiness: number;
  hatch_counter: number;
  gender_rate: number;
  egg_groups: string[];
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain_id: number;
  evolves_from: string | null;
  varieties: string[];
}
