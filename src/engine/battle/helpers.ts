import type {
  BattleLogEntry,
  BattlePokemon,
  BattleSide,
  StatusCondition,
} from '../../types';
import { getAbilityHandlers } from '../abilities';
import { getHeldItemHandlers } from '../held-items';

// ─── Shared helpers used by both singles and doubles engines ──

export function getActivePokemon(side: BattleSide): BattlePokemon {
  return side.team[side.active_index];
}

export function logEntry(turn: number, message: string, type: BattleLogEntry['type']): BattleLogEntry {
  return { turn, message, type };
}

export function hasAlivePokemon(side: BattleSide): boolean {
  return side.team.some(p => !p.is_fainted);
}

export function applyDamage(pokemon: BattlePokemon, damage: number): void {
  pokemon.current_hp = Math.max(0, pokemon.current_hp - damage);
  if (pokemon.current_hp === 0) {
    pokemon.is_fainted = true;
    pokemon.status = null;
  }
}

export function applyHealing(pokemon: BattlePokemon, amount: number): void {
  if (pokemon.is_fainted) return;
  pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + amount);
}

/**
 * Try to apply a status condition, checking ability immunities and berry cures.
 */
export function tryApplyStatus(
  target: BattlePokemon,
  status: StatusCondition,
  log: BattleLogEntry[],
  turn: number,
): boolean {
  if (target.status !== null) return false;

  const abilityHandlers = getAbilityHandlers(target.ability);
  if (abilityHandlers?.onStatusAttempt) {
    if (!abilityHandlers.onStatusAttempt(status, target)) {
      log.push(logEntry(turn, `${target.nickname}'s ${target.ability} prevents ${status}!`, 'ability'));
      return false;
    }
  }

  target.status = status;
  target.status_turns = 0;

  const statusNames: Record<string, string> = {
    'burn': 'burned',
    'freeze': 'frozen',
    'paralysis': 'paralyzed',
    'poison': 'poisoned',
    'bad-poison': 'badly poisoned',
    'sleep': 'put to sleep',
  };
  log.push(logEntry(turn, `${target.nickname} was ${statusNames[status] ?? status}!`, 'status'));

  if (target.held_item) {
    const itemHandlers = getHeldItemHandlers(target.held_item);
    if (itemHandlers?.onStatusReceived?.(target, status)) {
      log.push(logEntry(turn, `${target.nickname}'s ${target.held_item} cured its ${status}!`, 'item'));
    }
  }

  return true;
}

/**
 * Trigger HP-threshold item checks (Sitrus Berry, Oran Berry).
 */
export function checkHpItems(pokemon: BattlePokemon, log: BattleLogEntry[], turn: number): void {
  if (!pokemon.held_item || pokemon.is_fainted) return;
  const itemHandlers = getHeldItemHandlers(pokemon.held_item);
  itemHandlers?.onHpChanged?.(pokemon, log, turn);
}

// ─── Hazard & screen move name constants ─────────────────────

export const HAZARD_MOVES: Record<string, 'stealth-rock' | 'spikes' | 'toxic-spikes' | 'sticky-web'> = {
  'stealth-rock': 'stealth-rock',
  'spikes': 'spikes',
  'toxic-spikes': 'toxic-spikes',
  'sticky-web': 'sticky-web',
};

export const SCREEN_MOVES: Record<string, 'reflect' | 'light-screen'> = {
  'reflect': 'reflect',
  'light-screen': 'light-screen',
};

export const HAZARD_CLEAR_MOVES = new Set(['rapid-spin', 'defog']);
