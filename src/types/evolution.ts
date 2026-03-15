/** Details about how a Pokemon evolves */
export interface EvolutionDetail {
  trigger: string;
  min_level: number | null;
  item: string | null;
  held_item: string | null;
  known_move: string | null;
  known_move_type: string | null;
  location: string | null;
  min_happiness: number | null;
  min_beauty: number | null;
  min_affection: number | null;
  time_of_day: string;
  gender: number | null;
  needs_overworld_rain: boolean;
  party_species: string | null;
  party_type: string | null;
  relative_physical_stats: number | null;
  trade_species: string | null;
  turn_upside_down: boolean;
}

/** A node in an evolution chain */
export interface EvolutionNode {
  species: string;
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionNode[];
}

/** A complete evolution chain */
export interface EvolutionChain {
  id: number;
  baby_trigger_item: string | null;
  chain: EvolutionNode;
}
