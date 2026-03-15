/**
 * Capture mechanics — Gen V formula.
 *
 * Based on Bulbapedia's capture mechanics:
 * https://bulbapedia.bulbagarden.net/wiki/Catch_rate
 */
import type { BattlePokemon, StatusCondition } from '../types';

/** Pokeball types and their catch rate multipliers */
export type PokeballType =
  | 'poke-ball'
  | 'great-ball'
  | 'ultra-ball'
  | 'master-ball'
  | 'safari-ball'
  | 'net-ball'
  | 'dive-ball'
  | 'nest-ball'
  | 'repeat-ball'
  | 'timer-ball'
  | 'luxury-ball'
  | 'premier-ball'
  | 'dusk-ball'
  | 'heal-ball'
  | 'quick-ball'
  | 'fast-ball'
  | 'level-ball'
  | 'lure-ball'
  | 'heavy-ball'
  | 'love-ball'
  | 'friend-ball'
  | 'moon-ball'
  | 'sport-ball'
  | 'dream-ball';

export interface CaptureContext {
  /** Turn number of the battle (for Timer Ball) */
  turn?: number;
  /** Is it night or in a cave? (for Dusk Ball) */
  is_dark?: boolean;
  /** Was the wild Pokemon encountered by fishing/surfing? (for Dive/Lure Ball) */
  is_water_encounter?: boolean;
  /** Has the species been caught before? (for Repeat Ball) */
  already_caught?: boolean;
  /** Attacker's level (for Level Ball) */
  attacker_level?: number;
}

export interface CaptureResult {
  /** Did the capture succeed? */
  caught: boolean;
  /** Number of shakes before breaking free (0–3, 3 = caught) */
  shakes: number;
  /** Was it a critical capture? (instant catch on 1 shake) */
  critical_capture: boolean;
  /** The raw catch rate value (a) */
  catch_rate: number;
  /** The ball rate multiplier used */
  ball_modifier: number;
  /** The status modifier used */
  status_modifier: number;
}

/** Status condition multipliers for capture formula */
function getStatusModifier(status: StatusCondition | null): number {
  switch (status) {
    case 'sleep':
    case 'freeze':
      return 2.5;
    case 'paralysis':
    case 'burn':
    case 'poison':
    case 'bad-poison':
      return 1.5;
    default:
      return 1;
  }
}

/** Get the ball rate modifier based on ball type and context */
export function getBallModifier(
  ball: PokeballType,
  target: BattlePokemon,
  context: CaptureContext = {},
): number {
  switch (ball) {
    case 'master-ball':
      return 255; // Guaranteed catch
    case 'ultra-ball':
      return 2;
    case 'great-ball':
    case 'safari-ball':
    case 'sport-ball':
      return 1.5;
    case 'net-ball': {
      const types = target.pokemon.types;
      return (types.includes('bug') || types.includes('water')) ? 3.5 : 1;
    }
    case 'dive-ball':
      return context.is_water_encounter ? 3.5 : 1;
    case 'nest-ball':
      return target.level <= 29 ? Math.max(1, (41 - target.level) / 10) : 1;
    case 'repeat-ball':
      return context.already_caught ? 3.5 : 1;
    case 'timer-ball':
      return Math.min(4, 1 + (context.turn ?? 0) * 0.3);
    case 'dusk-ball':
      return context.is_dark ? 3 : 1;
    case 'quick-ball':
      return (context.turn ?? 1) <= 1 ? 5 : 1;
    case 'fast-ball':
      return target.pokemon.stats.speed >= 100 ? 4 : 1;
    case 'level-ball': {
      const ratio = (context.attacker_level ?? 50) / target.level;
      if (ratio >= 4) return 8;
      if (ratio >= 2) return 4;
      if (ratio >= 1) return 2;
      return 1;
    }
    case 'lure-ball':
      return context.is_water_encounter ? 5 : 1;
    case 'heavy-ball': {
      const weight = target.pokemon.weight;
      if (weight >= 3000) return 30;  // 300+ kg
      if (weight >= 2000) return 20;
      if (weight >= 1000) return 0;   // -20 penalty doesn't apply as modifier
      return -20; // Penalty for light Pokemon
    }
    case 'love-ball':
      return 8; // Assuming opposite gender (caller should check)
    case 'moon-ball':
      return 4; // For Pokemon that evolve with Moon Stone
    case 'dream-ball':
      return target.status === 'sleep' ? 4 : 1;
    case 'luxury-ball':
    case 'premier-ball':
    case 'heal-ball':
    case 'friend-ball':
    case 'poke-ball':
    default:
      return 1;
  }
}

/**
 * Calculate capture probability and simulate a catch attempt.
 *
 * Uses the Gen V+ formula:
 *   a = ((3 * maxHP - 2 * currentHP) / (3 * maxHP)) * captureRate * ballModifier * statusModifier
 *   shake probability per check = floor(65536 / (255 / a)^(3/16))
 */
export function attemptCapture(
  target: BattlePokemon,
  ball: PokeballType,
  context: CaptureContext = {},
): CaptureResult {
  const captureRate = target.species.capture_rate;
  const ballModifier = getBallModifier(ball, target, context);
  const statusModifier = getStatusModifier(target.status);

  // Master Ball always catches
  if (ball === 'master-ball') {
    return {
      caught: true,
      shakes: 3,
      critical_capture: false,
      catch_rate: 255,
      ball_modifier: 255,
      status_modifier: 1,
    };
  }

  // Gen V+ formula
  const hpFactor = (3 * target.max_hp - 2 * target.current_hp) / (3 * target.max_hp);
  let a = hpFactor * captureRate * ballModifier * statusModifier;

  // Heavy Ball penalty
  if (ballModifier === -20) {
    a = Math.max(1, a - 20);
  }

  // Clamp to valid range
  a = Math.min(255, Math.max(1, a));

  // If a >= 255, guaranteed catch
  if (a >= 255) {
    return {
      caught: true,
      shakes: 3,
      critical_capture: false,
      catch_rate: a,
      ball_modifier: ballModifier,
      status_modifier: statusModifier,
    };
  }

  // Shake check probability
  const b = Math.floor(65536 / Math.pow(255 / a, 3 / 16));

  // Critical capture check (Gen V+)
  // Probability based on Pokedex completion — simplified: use catch_rate / 6
  const criticalChance = a / 6;
  const isCritical = Math.random() * 256 < criticalChance;

  if (isCritical) {
    // Critical capture: only 1 shake check
    const shake = Math.random() * 65536 < b;
    return {
      caught: shake,
      shakes: shake ? 3 : 0,
      critical_capture: true,
      catch_rate: a,
      ball_modifier: ballModifier,
      status_modifier: statusModifier,
    };
  }

  // Normal capture: 3 shake checks
  let shakes = 0;
  for (let i = 0; i < 3; i++) {
    if (Math.random() * 65536 >= b) break;
    shakes++;
  }

  return {
    caught: shakes === 3,
    shakes,
    critical_capture: false,
    catch_rate: a,
    ball_modifier: ballModifier,
    status_modifier: statusModifier,
  };
}

/**
 * Get the approximate catch probability as a percentage (0–100).
 * Useful for UI display.
 */
export function getCatchProbability(
  target: BattlePokemon,
  ball: PokeballType,
  context: CaptureContext = {},
): number {
  const captureRate = target.species.capture_rate;
  const ballModifier = getBallModifier(ball, target, context);
  const statusModifier = getStatusModifier(target.status);

  if (ball === 'master-ball') return 100;

  const hpFactor = (3 * target.max_hp - 2 * target.current_hp) / (3 * target.max_hp);
  let a = hpFactor * captureRate * ballModifier * statusModifier;
  if (ballModifier === -20) a = Math.max(1, a - 20);
  a = Math.min(255, Math.max(1, a));

  if (a >= 255) return 100;

  const b = Math.floor(65536 / Math.pow(255 / a, 3 / 16));
  const shakeProb = b / 65536;
  return Math.round(Math.pow(shakeProb, 3) * 10000) / 100;
}
