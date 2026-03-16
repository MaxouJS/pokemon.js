/**
 * Battle event types for the sequencer.
 *
 * Each BattleEvent represents a single visual step that a UI can render
 * with text, animations, and effects. The sequencer parses raw BattleLogEntry[]
 * into a richer, typed event stream.
 */

export type BattleEventKind =
  // ─── Move flow ───
  | 'move_announce'     // "X used Y!"
  | 'miss'              // Attack missed
  | 'hit'               // Damage dealt
  | 'critical_hit'      // Critical hit
  | 'effectiveness'     // Super effective / not very effective / immune
  | 'recoil'            // Recoil damage
  | 'drain'             // HP drain (Giga Drain, etc.)
  | 'heal'              // Self-healing move
  // ─── HP ───
  | 'faint'             // Pokemon faints
  // ─── Status ───
  | 'status_inflict'    // Status condition applied
  | 'status_cure'       // Status cured (thawed, woke up)
  | 'status_block'      // Can't move (paralyzed, frozen, asleep)
  | 'status_damage'     // Poison/burn tick
  // ─── Stat changes ───
  | 'stat_change'       // Stat rose/fell
  | 'stat_limit'        // Won't go higher/lower
  // ─── Weather ───
  | 'weather_damage'    // Sandstorm/hail chip
  | 'weather_end'       // Weather subsided
  // ─── Field ───
  | 'hazard_set'        // Entry hazard placed
  | 'hazard_damage'     // Entry hazard damage on switch-in
  | 'hazard_clear'      // Hazards removed
  | 'screen_set'        // Reflect / Light Screen
  | 'screen_end'        // Screen wore off
  | 'flinch'            // Flinched
  // ─── Switching ───
  | 'switch_out'        // Withdrew Pokemon
  | 'switch_in'         // Sent out Pokemon
  // ─── Abilities & items ───
  | 'ability_activate'  // Ability triggered
  | 'item_activate'     // Held item triggered
  // ─── Capture ───
  | 'ball_throw'        // Ball thrown
  | 'ball_shake'        // Ball shakes
  | 'ball_capture'      // Caught!
  | 'ball_break_free'   // Broke free
  | 'critical_capture'  // Critical capture!
  // ─── Battle items ───
  | 'item_use'          // Potion, X item, etc.
  // ─── Game flow ───
  | 'battle_end'        // Winner declared / draw
  | 'flee'              // Fled from battle
  | 'info'              // Generic text (fallback)
  | 'no_pp'             // No PP left
  ;

export interface BattleEvent {
  /** The event category — determines how a UI should render it. */
  kind: BattleEventKind;

  /** Human-readable text to display. */
  text: string;

  /** Which side this event is about (if applicable). */
  side?: 'player' | 'opponent';

  /** Pokemon nickname involved (if applicable). */
  pokemon?: string;

  /** Suggested display duration in milliseconds. */
  duration: number;

  /** Event-specific structured data for custom rendering. */
  data: BattleEventData;
}

// ─── Event-specific data ───

export type BattleEventData =
  | MoveAnnounceData
  | HitData
  | EffectivenessData
  | StatusInflictData
  | StatusCureData
  | StatChangeData
  | SwitchData
  | FaintData
  | BallShakeData
  | BallCaptureData
  | WeatherData
  | HazardData
  | ItemData
  | EmptyData;

export interface MoveAnnounceData { move_name: string }
export interface HitData { damage: number; current_hp: number; max_hp: number }
export interface EffectivenessData { message: string }
export interface StatusInflictData { status: string }
export interface StatusCureData { status: string }
export interface StatChangeData { stat: string; direction: 'rose' | 'fell'; intensity: string }
export interface SwitchData { pokemon_name: string }
export interface FaintData { pokemon_name: string }
export interface BallShakeData { shake_number: number }
export interface BallCaptureData { pokemon_name: string; caught: boolean }
export interface WeatherData { weather: string }
export interface HazardData { hazard: string }
export interface ItemData { item_name: string }
export interface EmptyData { [key: string]: never }

// ─── Speed presets ───

export type SequencerSpeed = 'slow' | 'normal' | 'fast' | 'instant';

export const SPEED_MULTIPLIERS: Record<SequencerSpeed, number> = {
  slow: 2.0,
  normal: 1.0,
  fast: 0.5,
  instant: 0,
};

// ─── Default durations ───

export const DEFAULT_DURATIONS: Partial<Record<BattleEventKind, number>> = {
  move_announce: 1200,
  miss: 800,
  hit: 600,
  critical_hit: 800,
  effectiveness: 800,
  recoil: 500,
  drain: 500,
  heal: 600,
  faint: 1200,
  status_inflict: 900,
  status_cure: 800,
  status_block: 900,
  status_damage: 600,
  stat_change: 700,
  stat_limit: 500,
  weather_damage: 600,
  weather_end: 800,
  hazard_set: 800,
  hazard_damage: 600,
  hazard_clear: 700,
  screen_set: 800,
  screen_end: 700,
  flinch: 800,
  switch_out: 800,
  switch_in: 1000,
  ability_activate: 900,
  item_activate: 800,
  ball_throw: 1200,
  ball_shake: 1000,
  ball_capture: 1500,
  ball_break_free: 1000,
  critical_capture: 800,
  item_use: 800,
  battle_end: 2000,
  flee: 800,
  info: 600,
  no_pp: 600,
};
