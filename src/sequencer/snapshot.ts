/**
 * BattleSnapshot — a lightweight, serializable view of battle state
 * at a single point in time. Used by the Director to track progressive
 * visual changes between events.
 *
 * Unlike BattleState (which contains full engine data), a snapshot
 * only holds what a UI needs to render: HP, status, active Pokemon, etc.
 */

import type { BattleState } from '../types';

export interface PokemonSnapshot {
  name: string;
  nickname: string;
  id: number;
  types: string[];
  current_hp: number;
  max_hp: number;
  status: string | null;
  ability: string;
  held_item: string | null;
  is_fainted: boolean;
}

export interface SideSnapshot {
  active_index: number;
  active_indices: number[];
  team: PokemonSnapshot[];
  reflect_turns: number;
  light_screen_turns: number;
  hazards: { type: string; layers: number }[];
}

export interface BattleSnapshot {
  turn: number;
  phase: string;
  winner: string | null;
  weather: { type: string; turns_remaining: number };
  player: SideSnapshot;
  opponent: SideSnapshot;
}

/** Create a deep snapshot from full engine state. */
export function createSnapshot(state: BattleState): BattleSnapshot {
  return {
    turn: state.turn,
    phase: state.phase,
    winner: state.winner,
    weather: { type: state.weather.type, turns_remaining: state.weather.turns_remaining },
    player: snapshotSide(state.player),
    opponent: snapshotSide(state.opponent),
  };
}

function snapshotSide(side: { active_index: number; active_indices: number[]; team: any[]; reflect_turns: number; light_screen_turns: number; entry_hazards: any[] }): SideSnapshot {
  return {
    active_index: side.active_index,
    active_indices: [...side.active_indices],
    team: side.team.map(p => ({
      name: p.pokemon.name,
      nickname: p.nickname,
      id: p.pokemon.id,
      types: [...p.pokemon.types],
      current_hp: p.current_hp,
      max_hp: p.max_hp,
      status: p.status,
      ability: p.ability,
      held_item: p.held_item,
      is_fainted: p.is_fainted,
    })),
    reflect_turns: side.reflect_turns,
    light_screen_turns: side.light_screen_turns,
    hazards: side.entry_hazards.map((h: any) => ({ type: h.type, layers: h.layers })),
  };
}

/** Deep-clone a snapshot. */
export function cloneSnapshot(snap: BattleSnapshot): BattleSnapshot {
  return JSON.parse(JSON.stringify(snap));
}
