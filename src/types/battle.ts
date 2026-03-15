import type { EVs, IVs, NatureName, StatStages } from './stats';
import type { StatusCondition, Terrain, VolatileStatus, Weather } from './conditions';
import type { Move } from './moves';
import type { Pokemon, PokemonSpecies } from './pokemon';

/** Battle format */
export type BattleFormat = 'singles' | 'doubles';

/** A Pokemon instance configured for battle */
export interface BattlePokemon {
  pokemon: Pokemon;
  species: PokemonSpecies;
  nickname: string;
  level: number;
  nature: NatureName;
  ability: string;
  ivs: IVs;
  evs: EVs;
  moves: Move[];
  held_item: string | null;
  current_hp: number;
  max_hp: number;
  status: StatusCondition | null;
  status_turns: number;
  stat_stages: StatStages;
  pp: Record<string, number>;
  is_fainted: boolean;
}

/** One side of a battle */
export interface BattleSide {
  /** Primary active Pokemon index (slot 0 in doubles). */
  active_index: number;
  /** Active Pokemon indices. Length 1 in singles, up to 2 in doubles. */
  active_indices: number[];
  team: BattlePokemon[];
  volatile: Set<VolatileStatus>;
  volatile_data: Record<string, number>;
  entry_hazards: EntryHazard[];
  light_screen_turns: number;
  reflect_turns: number;
  tailwind_turns: number;
}

/** Entry hazards on a side */
export interface EntryHazard {
  type: 'stealth-rock' | 'spikes' | 'toxic-spikes' | 'sticky-web';
  layers: number;
}

/** The complete state of a battle */
export interface BattleState {
  turn: number;
  format: BattleFormat;
  player: BattleSide;
  opponent: BattleSide;
  weather: { type: Weather; turns_remaining: number };
  terrain: { type: Terrain; turns_remaining: number };
  log: BattleLogEntry[];
  phase: BattlePhase;
  winner: 'player' | 'opponent' | null;
}

/** Phases of a battle */
export type BattlePhase =
  | 'idle'
  | 'select-action'
  | 'executing'
  | 'awaiting-switch'
  | 'finished';

/** A player's chosen action for the turn */
export type BattleAction =
  | { type: 'move'; move_index: number; /** Slot index of the acting Pokemon in doubles (0 or 1). */ slot?: number; /** Target: 'opponent-0', 'opponent-1', 'ally', 'self', 'all-opponents', 'all-adjacent' */ target?: string }
  | { type: 'switch'; pokemon_index: number; /** Slot being replaced in doubles. */ slot?: number }
  | { type: 'item'; item: string; target_index: number }
  | { type: 'flee' };

/** Result of a damage calculation */
export interface DamageResult {
  damage: number;
  min_damage: number;
  max_damage: number;
  effectiveness: number;
  critical: boolean;
  stab: boolean;
  type_message: string;
  weather_modifier: number;
  ability_modifier: number;
}

/** An entry in the battle log */
export interface BattleLogEntry {
  turn: number;
  message: string;
  type: 'move' | 'damage' | 'status' | 'switch' | 'faint' | 'weather' | 'terrain' | 'ability' | 'item' | 'info';
}

/** Options for starting a battle */
export interface BattleOptions {
  format?: BattleFormat;
  weather?: Weather;
  terrain?: Terrain;
  ai_difficulty?: 'random' | 'greedy' | 'smart';
  allow_flee?: boolean;
  level_cap?: number;
}

/** Configuration for building a team member */
export interface TeamMemberConfig {
  pokemon_id: number;
  nickname?: string;
  level?: number;
  nature?: NatureName;
  ability?: string;
  ivs?: Partial<IVs>;
  evs?: Partial<EVs>;
  moves?: string[];
  held_item?: string | null;
}
