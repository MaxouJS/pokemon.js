// ─── Sequencer: optional battle event system ───
//
// The sequencer transforms raw BattleLogEntry[] into typed BattleEvent[]
// with structured data, timing information, and a playback controller.
//
// Usage:
//   import { parseBattleLog, BattleEventPlayer, sequenceTurn } from '@objectifthunes/pokemon/sequencer';
//
// Or via the main entry point:
//   import { parseBattleLog, BattleEventPlayer, sequenceTurn } from '@objectifthunes/pokemon';

// Types
export type {
  BattleEventKind,
  BattleEvent,
  BattleEventData,
  MoveAnnounceData,
  HitData,
  EffectivenessData,
  StatusInflictData,
  StatusCureData,
  StatChangeData,
  SwitchData,
  FaintData,
  BallShakeData,
  BallCaptureData,
  WeatherData,
  HazardData,
  ItemData,
  SequencerSpeed,
} from './types';

export { DEFAULT_DURATIONS, SPEED_MULTIPLIERS } from './types';

// Parser
export { parseBattleLog } from './parser';

// Player
export { BattleEventPlayer } from './player';
export type { BattleEventPlayerOptions } from './player';

// Convenience helpers
export { sequenceTurn, sequenceDoublesTurn, sequenceCapture } from './helpers';
export type { SequencedTurnResult, SequencedCaptureResult } from './helpers';

// Snapshots
export { createSnapshot, cloneSnapshot } from './snapshot';
export type { BattleSnapshot, SideSnapshot, PokemonSnapshot } from './snapshot';

// Director
export { BattleDirector } from './director';
export type { BattleFrame, DirectedTurnResult } from './director';
