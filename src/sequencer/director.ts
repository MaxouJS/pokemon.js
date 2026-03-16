/**
 * BattleDirector — orchestrates a battle turn into a sequence of
 * BattleFrames, each pairing an event with a progressive visual snapshot.
 *
 * The Director solves the core sequencing problem: the engine returns
 * the final state, but a UI needs to show changes step by step.
 * It reconstructs intermediate visual states by walking through events
 * and applying their implied changes to a running snapshot.
 *
 * @example
 * ```ts
 * import { BattleDirector, BattleEventPlayer } from '@objectifthunes/pokemon';
 *
 * const director = new BattleDirector();
 * const result = director.executeTurn(state, playerAction, aiAction);
 *
 * // result.frames is an array of { event, snapshot }
 * // Each snapshot shows the visual state AFTER that event
 *
 * const player = new BattleEventPlayer({ speed: 1 });
 * player.onEvent((event, index) => {
 *   const frame = result.frames[index];
 *   renderBattleField(frame.snapshot);  // progressive HP, status, sprites
 *   showTextBox(frame.event.text);       // narration
 * });
 * player.enqueue(result.frames.map(f => f.event));
 * player.play();
 * ```
 */

import type { BattleState, BattleAction, BattleLogEntry } from '../types';
import type { BattleEvent } from './types';
import type { BattleSnapshot, PokemonSnapshot, SideSnapshot } from './snapshot';
import { createSnapshot, cloneSnapshot } from './snapshot';
import { parseBattleLog } from './parser';
import { executeTurn } from '../engine/battle';
import { executeDoublesTurn } from '../engine/doubles';
import { cloneState } from '../engine/battle/clone';
import { executeSwitch } from '../engine/battle/execute-action';

export interface BattleFrame {
  /** The event that occurred. */
  event: BattleEvent;
  /** Visual state snapshot AFTER this event has been applied. */
  snapshot: BattleSnapshot;
}

export interface DirectedTurnResult {
  /** Final engine state (same as executeTurn). */
  state: BattleState;
  /** Raw log entries. */
  log: BattleLogEntry[];
  /** Parsed events. */
  events: BattleEvent[];
  /** Frames: events paired with progressive snapshots. */
  frames: BattleFrame[];
  /** Snapshot of state BEFORE the turn (for initial render). */
  before: BattleSnapshot;
}

export class BattleDirector {
  /**
   * Execute a singles turn and produce frames with progressive snapshots.
   */
  executeTurn(
    state: BattleState,
    playerAction: BattleAction,
    opponentAction: BattleAction,
  ): DirectedTurnResult {
    const before = createSnapshot(state);
    const result = executeTurn(state, playerAction, opponentAction);
    const events = parseBattleLog(result.log);
    const after = createSnapshot(result.state);
    const frames = buildFrames(events, before, after);

    return {
      state: result.state,
      log: result.log,
      events,
      frames,
      before,
    };
  }

  /**
   * Perform a forced switch (e.g. after a faint) without consuming a turn.
   * Unlike executeTurn, this only switches the specified side's active Pokemon
   * and does not allow the other side to act.
   */
  forceSwitch(
    state: BattleState,
    side: 'player' | 'opponent',
    pokemonIndex: number,
  ): DirectedTurnResult {
    const before = createSnapshot(state);
    const newState = cloneState(state);
    const log: BattleLogEntry[] = [];

    const switchSide = side === 'player' ? newState.player : newState.opponent;
    const otherSide = side === 'player' ? newState.opponent : newState.player;
    const label = side === 'player' ? 'Player' : 'Opponent';

    executeSwitch(newState, switchSide, otherSide, label, pokemonIndex, log);

    // Determine new phase after the switch
    const playerAlive = newState.player.team.some(p => p.current_hp > 0 && !p.is_fainted);
    const opponentAlive = newState.opponent.team.some(p => p.current_hp > 0 && !p.is_fainted);

    if (!playerAlive || !opponentAlive) {
      newState.phase = 'finished';
      newState.winner = !playerAlive && !opponentAlive ? null
        : !playerAlive ? 'opponent' : 'player';
    } else {
      const pActive = newState.player.team[newState.player.active_index];
      const oActive = newState.opponent.team[newState.opponent.active_index];
      newState.phase = (pActive.is_fainted || oActive.is_fainted) ? 'awaiting-switch' : 'select-action';
    }

    newState.log = [...newState.log, ...log];

    const events = parseBattleLog(log);
    const after = createSnapshot(newState);
    const frames = buildFrames(events, before, after);

    return { state: newState, log, events, frames, before };
  }

  /**
   * Execute a doubles turn and produce frames with progressive snapshots.
   */
  executeDoublesTurn(
    state: BattleState,
    playerActions: BattleAction[],
    opponentActions: BattleAction[],
  ): DirectedTurnResult {
    const before = createSnapshot(state);
    const result = executeDoublesTurn(state, playerActions, opponentActions);
    const events = parseBattleLog(result.log);
    const after = createSnapshot(result.state);
    const frames = buildFrames(events, before, after);

    return {
      state: result.state,
      log: result.log,
      events,
      frames,
      before,
    };
  }
}

// ─── Frame builder ───
// Walks through events, applying each one's visual changes to a running
// snapshot. This produces the intermediate states the engine doesn't expose.

function buildFrames(
  events: BattleEvent[],
  before: BattleSnapshot,
  after: BattleSnapshot,
): BattleFrame[] {
  const frames: BattleFrame[] = [];
  let current = cloneSnapshot(before);

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    applyEventToSnapshot(current, event, after);
    frames.push({
      event,
      snapshot: cloneSnapshot(current),
    });
  }

  return frames;
}

// ─── Event application ───
// Each event kind mutates the running snapshot to reflect the visual change.

function applyEventToSnapshot(
  snap: BattleSnapshot,
  event: BattleEvent,
  finalSnap: BattleSnapshot,
): void {
  switch (event.kind) {
    case 'hit':
    case 'hazard_damage':
    case 'weather_damage':
    case 'status_damage':
    case 'recoil': {
      // Find the Pokemon by nickname and update HP
      const pokemon = event.pokemon;
      if (pokemon) {
        const target = findPokemon(snap, pokemon);
        if (target && 'damage' in event.data) {
          const data = event.data as { damage: number; current_hp: number; max_hp: number };
          if (data.current_hp > 0 || data.max_hp > 0) {
            target.current_hp = data.current_hp;
          } else {
            // For events without explicit HP (recoil, weather, status damage),
            // estimate by applying damage
            target.current_hp = Math.max(0, target.current_hp - data.damage);
          }
          if (target.current_hp <= 0) {
            target.current_hp = 0;
            target.is_fainted = true;
          }
        }
      }
      break;
    }

    case 'drain':
    case 'heal': {
      // Find Pokemon and increase HP
      if (event.pokemon) {
        const target = findPokemon(snap, event.pokemon);
        if (target) {
          // Use the final snapshot to find the correct HP value
          const finalTarget = findPokemon(finalSnap, event.pokemon);
          if (finalTarget) {
            target.current_hp = Math.min(target.max_hp, finalTarget.current_hp);
          }
        }
      }
      break;
    }

    case 'faint': {
      if (event.pokemon) {
        const target = findPokemon(snap, event.pokemon);
        if (target) {
          target.current_hp = 0;
          target.is_fainted = true;
          target.status = null;
        }
      }
      break;
    }

    case 'status_inflict': {
      if (event.pokemon && 'status' in event.data) {
        const target = findPokemon(snap, event.pokemon);
        if (target) {
          const statusMap: Record<string, string> = {
            'burned': 'burn',
            'frozen': 'freeze',
            'paralyzed': 'paralysis',
            'poisoned': 'poison',
            'badly poisoned': 'bad-poison',
            'put to sleep': 'sleep',
          };
          target.status = statusMap[(event.data as any).status] ?? (event.data as any).status;
        }
      }
      break;
    }

    case 'status_cure': {
      if (event.pokemon) {
        const target = findPokemon(snap, event.pokemon);
        if (target) {
          target.status = null;
        }
      }
      break;
    }

    case 'switch_out': {
      // No visual change yet — wait for switch_in
      break;
    }

    case 'switch_in': {
      // Update active Pokemon from the final snapshot
      const side = event.side;
      if (side) {
        const sideSnap = snap[side];
        const finalSide = finalSnap[side];
        // Find the new active index by matching the nickname
        const newIdx = sideSnap.team.findIndex(p => p.nickname === event.pokemon);
        if (newIdx >= 0) {
          sideSnap.active_index = newIdx;
          // Update the switched-in Pokemon's HP/status from final state
          const finalPoke = finalSide.team[newIdx];
          if (finalPoke) {
            sideSnap.team[newIdx].current_hp = finalPoke.current_hp;
            sideSnap.team[newIdx].status = finalPoke.status;
            sideSnap.team[newIdx].is_fainted = finalPoke.is_fainted;
          }
        }
      }
      break;
    }

    case 'weather_end': {
      snap.weather.type = 'none';
      snap.weather.turns_remaining = 0;
      break;
    }

    case 'hazard_set': {
      // We don't know which side — use final snapshot
      snap.player.hazards = [...finalSnap.player.hazards];
      snap.opponent.hazards = [...finalSnap.opponent.hazards];
      break;
    }

    case 'hazard_clear': {
      snap.player.hazards = [...finalSnap.player.hazards];
      snap.opponent.hazards = [...finalSnap.opponent.hazards];
      break;
    }

    case 'screen_set':
    case 'screen_end': {
      snap.player.reflect_turns = finalSnap.player.reflect_turns;
      snap.player.light_screen_turns = finalSnap.player.light_screen_turns;
      snap.opponent.reflect_turns = finalSnap.opponent.reflect_turns;
      snap.opponent.light_screen_turns = finalSnap.opponent.light_screen_turns;
      break;
    }

    case 'battle_end': {
      snap.winner = finalSnap.winner;
      snap.phase = finalSnap.phase;
      break;
    }

    case 'item_activate': {
      // Item effects (Leftovers heal, Life Orb damage, Focus Sash, etc.)
      // Sync HP from final state for the affected Pokemon
      if (event.pokemon) {
        const target = findPokemon(snap, event.pokemon);
        const finalTarget = findPokemon(finalSnap, event.pokemon);
        if (target && finalTarget) {
          target.current_hp = finalTarget.current_hp;
          target.is_fainted = finalTarget.is_fainted;
          target.held_item = finalTarget.held_item;
        }
      }
      break;
    }

    // Events that don't change visual state:
    case 'move_announce':
    case 'miss':
    case 'critical_hit':
    case 'effectiveness':
    case 'stat_change':
    case 'stat_limit':
    case 'status_block':
    case 'flinch':
    case 'ability_activate':
    case 'ball_throw':
    case 'ball_shake':
    case 'critical_capture':
    case 'item_use':
    case 'flee':
    case 'info':
    case 'no_pp':
      break;

    case 'ball_capture': {
      snap.winner = 'player';
      snap.phase = 'finished';
      break;
    }

    case 'ball_break_free':
      break;
  }
}

// ─── Helpers ───

function findPokemon(snap: BattleSnapshot, nickname: string): PokemonSnapshot | null {
  for (const p of snap.player.team) {
    if (p.nickname === nickname) return p;
  }
  for (const p of snap.opponent.team) {
    if (p.nickname === nickname) return p;
  }
  return null;
}
