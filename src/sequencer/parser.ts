/**
 * Parses raw BattleLogEntry[] into structured BattleEvent[].
 *
 * The parser uses pattern matching on log messages to extract
 * structured data (damage numbers, Pokemon names, move names, etc.)
 * and assign the correct BattleEventKind.
 */

import type { BattleLogEntry } from '../types';
import type {
  BattleEvent,
  BattleEventKind,
  BattleEventData,
  EmptyData,
} from './types';
import { DEFAULT_DURATIONS } from './types';

// ─── Pattern matchers ───
// Each matcher returns a partial BattleEvent if it matches, or null.

interface ParseResult {
  kind: BattleEventKind;
  data: BattleEventData;
  pokemon?: string;
  side?: 'player' | 'opponent';
}

type Matcher = (message: string, type: BattleLogEntry['type']) => ParseResult | null;

const EMPTY: EmptyData = {} as EmptyData;

// ─── Move flow ───

const matchMoveAnnounce: Matcher = (msg, type) => {
  if (type !== 'move') return null;
  const m = msg.match(/^(.+?) used (.+?)!$/);
  if (!m) return null;
  return { kind: 'move_announce', data: { move_name: m[2] }, pokemon: m[1] };
};

const matchMiss: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?)'s attack missed!$/);
  if (!m) return null;
  return { kind: 'miss', data: EMPTY, pokemon: m[1] };
};

const matchCritical: Matcher = (msg, type) => {
  if (type !== 'damage') return null;
  if (msg === 'A critical hit!') return { kind: 'critical_hit', data: EMPTY };
  return null;
};

const matchEffectiveness: Matcher = (msg, type) => {
  if (type !== 'damage') return null;
  const m = msg.match(/^It's (.+?)!$/);
  if (!m) return null;
  return { kind: 'effectiveness', data: { message: m[1] } };
};

const matchDamage: Matcher = (msg, type) => {
  if (type !== 'damage') return null;
  const m = msg.match(/^(.+?) took (\d+) damage! \((\d+)\/(\d+) HP\)$/);
  if (!m) return null;
  return {
    kind: 'hit',
    data: { damage: parseInt(m[2]), current_hp: parseInt(m[3]), max_hp: parseInt(m[4]) },
    pokemon: m[1],
  };
};

const matchRecoil: Matcher = (msg, type) => {
  if (type !== 'damage') return null;
  const m = msg.match(/^(.+?) was hurt by recoil! \((\d+) damage\)$/);
  if (!m) return null;
  return { kind: 'recoil', data: { damage: parseInt(m[2]), current_hp: 0, max_hp: 0 }, pokemon: m[1] };
};

const matchDrain: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?) drained (\d+) HP!$/);
  if (!m) return null;
  return { kind: 'drain', data: { damage: parseInt(m[2]), current_hp: 0, max_hp: 0 }, pokemon: m[1] };
};

const matchHeal: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?) restored (\d+) HP!$/);
  if (!m) return null;
  return { kind: 'heal', data: EMPTY, pokemon: m[1] };
};

// ─── Faint ───

const matchFaint: Matcher = (msg, type) => {
  if (type !== 'faint') return null;
  const m = msg.match(/^(.+?) fainted(?:!| from recoil!)$/);
  if (!m) return null;
  return { kind: 'faint', data: { pokemon_name: m[1] }, pokemon: m[1] };
};

// ─── Status ───

const matchStatusInflict: Matcher = (msg, type) => {
  if (type !== 'status') return null;
  const m = msg.match(/^(.+?) was (burned|frozen|paralyzed|poisoned|badly poisoned|put to sleep)!$/);
  if (!m) return null;
  return { kind: 'status_inflict', data: { status: m[2] }, pokemon: m[1] };
};

const matchStatusBlock: Matcher = (msg, type) => {
  if (type !== 'status') return null;
  if (msg.match(/is fully paralyzed|is frozen solid|is fast asleep/)) {
    const m = msg.match(/^(.+?) is /);
    return { kind: 'status_block', data: EMPTY, pokemon: m?.[1] };
  }
  return null;
};

const matchStatusCure: Matcher = (msg, type) => {
  if (type !== 'status') return null;
  const thaw = msg.match(/^(.+?) thawed out!$/);
  if (thaw) return { kind: 'status_cure', data: { status: 'freeze' }, pokemon: thaw[1] };
  const wake = msg.match(/^(.+?) woke up!$/);
  if (wake) return { kind: 'status_cure', data: { status: 'sleep' }, pokemon: wake[1] };
  return null;
};

const matchStatusDamage: Matcher = (msg, type) => {
  if (type !== 'status') return null;
  const m = msg.match(/^(.+?) was (hurt by its burn|hurt by poison)! \((\d+) damage\)$/);
  if (!m) return null;
  return { kind: 'status_damage', data: EMPTY, pokemon: m[1] };
};

const matchToxicSpikesStatus: Matcher = (msg, type) => {
  if (type !== 'status') return null;
  const m = msg.match(/^(.+?) was (badly poisoned|poisoned) by the Toxic Spikes!$/);
  if (!m) return null;
  return { kind: 'status_inflict', data: { status: m[2] }, pokemon: m[1] };
};

// ─── Stat changes ───

const matchStatChange: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?)'s (.+?) (drastically |sharply )?(rose|fell)!$/);
  if (!m) return null;
  return {
    kind: 'stat_change',
    data: { stat: m[2], direction: m[4] as 'rose' | 'fell', intensity: (m[3] || '').trim() },
    pokemon: m[1],
  };
};

const matchStatLimit: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?)'s (.+?) won't go any (higher|lower)!$/);
  if (!m) return null;
  return { kind: 'stat_limit', data: { stat: m[2], direction: m[3] === 'higher' ? 'rose' : 'fell', intensity: '' }, pokemon: m[1] };
};

// ─── Switch ───

const matchSwitchOut: Matcher = (msg, type) => {
  if (type !== 'switch') return null;
  const m = msg.match(/^(Player|Opponent) withdrew (.+?)!$/);
  if (!m) return null;
  return { kind: 'switch_out', data: { pokemon_name: m[2] }, side: m[1].toLowerCase() as 'player' | 'opponent', pokemon: m[2] };
};

const matchSwitchIn: Matcher = (msg, type) => {
  if (type !== 'switch') return null;
  const m = msg.match(/^(Player|Opponent) sent out (.+?)!$/);
  if (!m) return null;
  return { kind: 'switch_in', data: { pokemon_name: m[2] }, side: m[1].toLowerCase() as 'player' | 'opponent', pokemon: m[2] };
};

// ─── Weather ───

const matchWeatherDamage: Matcher = (msg, type) => {
  if (type !== 'weather') return null;
  const m = msg.match(/^(.+?) was buffeted by (.+?)! \((\d+) damage\)$/);
  if (!m) return null;
  return { kind: 'weather_damage', data: { weather: m[2] }, pokemon: m[1] };
};

const matchWeatherEnd: Matcher = (msg, type) => {
  if (type !== 'weather') return null;
  const m = msg.match(/^The (.+?) subsided\.$/);
  if (!m) return null;
  return { kind: 'weather_end', data: { weather: m[1] } };
};

// ─── Hazards ───

const matchHazardSet: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.includes('float in the air') || msg.includes('were scattered') || msg.includes('sticky web has been laid')) {
    let hazard = 'unknown';
    if (msg.includes('stones')) hazard = 'stealth-rock';
    else if (msg.includes('Poison spikes') || msg.includes('poison spikes')) hazard = 'toxic-spikes';
    else if (msg.includes('Spikes') || msg.includes('spikes')) hazard = 'spikes';
    else if (msg.includes('sticky web')) hazard = 'sticky-web';
    return { kind: 'hazard_set', data: { hazard } };
  }
  return null;
};

const matchHazardDamage: Matcher = (msg, type) => {
  if (type !== 'damage') return null;
  if (msg.includes('Pointed stones dug into') || msg.includes('hurt by the spikes')) {
    const m = msg.match(/^(?:Pointed stones dug into )?(.+?)(?:'s| was hurt).*\((\d+) damage\)$/);
    let hazard = msg.includes('stones') ? 'stealth-rock' : 'spikes';
    return { kind: 'hazard_damage', data: { hazard }, pokemon: m?.[1] };
  }
  return null;
};

const matchHazardClear: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.match(/disappeared from around/)) {
    let hazard = 'unknown';
    if (msg.includes('stones')) hazard = 'stealth-rock';
    else if (msg.includes('poison spikes')) hazard = 'toxic-spikes';
    else if (msg.includes('spikes')) hazard = 'spikes';
    else if (msg.includes('sticky web')) hazard = 'sticky-web';
    return { kind: 'hazard_clear', data: { hazard } };
  }
  return null;
};

// ─── Screens ───

const matchScreenSet: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.match(/Reflect raised/)) return { kind: 'screen_set', data: { hazard: 'reflect' } };
  if (msg.match(/Light Screen raised/)) return { kind: 'screen_set', data: { hazard: 'light-screen' } };
  return null;
};

const matchScreenEnd: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.match(/Reflect wore off/)) return { kind: 'screen_end', data: { hazard: 'reflect' } };
  if (msg.match(/Light Screen wore off/)) return { kind: 'screen_end', data: { hazard: 'light-screen' } };
  return null;
};

// ─── Flinch ───

const matchFlinch: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?) flinched and couldn't move!$/);
  if (!m) return null;
  return { kind: 'flinch', data: EMPTY, pokemon: m[1] };
};

// ─── Abilities ───

const matchAbility: Matcher = (msg, type) => {
  if (type !== 'ability') return null;
  // "It doesn't affect X... (AbilityName)" or "X's Ability prevents Y!"
  const m1 = msg.match(/\((.+?)\)$/);
  const m2 = msg.match(/^(.+?)'s (.+?) prevents/);
  const pokemon = m2?.[1] || msg.match(/affect (.+?)\.\.\./)?.[1];
  return { kind: 'ability_activate', data: { item_name: m1?.[1] || m2?.[2] || '' }, pokemon };
};

// ─── Items ───

const matchItemActivate: Matcher = (msg, type) => {
  if (type !== 'item') return null;
  // "X hung on using its Focus Sash!" or "X's Leftovers restored 10 HP!"
  // But NOT "Player threw a ..." (that's ball_throw)
  if (msg.match(/threw a/)) return null;
  const m = msg.match(/^(.+?)'s (.+?) /);
  if (m) return { kind: 'item_activate', data: { item_name: m[2] }, pokemon: m[1] };
  const m2 = msg.match(/^(.+?) hung on using its (.+?)!$/);
  if (m2) return { kind: 'item_activate', data: { item_name: m2[2] }, pokemon: m2[1] };
  const m3 = msg.match(/^(.+?) was cured/);
  if (m3) return { kind: 'item_activate', data: { item_name: '' }, pokemon: m3[1] };
  return null;
};

const matchItemCure: Matcher = (msg, type) => {
  if (type !== 'item') return null;
  const m = msg.match(/^(.+?)'s (.+?) cured its (.+?)!$/);
  if (!m) return null;
  return { kind: 'item_activate', data: { item_name: m[2] }, pokemon: m[1] };
};

// ─── Capture ───

const matchBallThrow: Matcher = (msg, type) => {
  if (type !== 'item') return null;
  const m = msg.match(/^Player threw a (.+?)!$/);
  if (!m) return null;
  return { kind: 'ball_throw', data: { item_name: m[1] }, side: 'player' };
};

const matchBallShake: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const shakes: Record<string, number> = {
    'The ball shook once...': 1,
    'The ball shook twice...': 2,
    'The ball shook three times...': 3,
  };
  if (msg in shakes) return { kind: 'ball_shake', data: { shake_number: shakes[msg] } };
  return null;
};

const matchBallCapture: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^Gotcha! (.+?) was caught!$/);
  if (m) return { kind: 'ball_capture', data: { pokemon_name: m[1], caught: true }, pokemon: m[1] };
  if (msg === 'Oh no! The Pokemon broke free!') return { kind: 'ball_break_free', data: { pokemon_name: '', caught: false } };
  return null;
};

const matchCriticalCapture: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg === 'A critical capture!') return { kind: 'critical_capture', data: EMPTY };
  return null;
};

// ─── Battle item use ───

const matchItemUse: Matcher = (msg, type) => {
  if (type !== 'item') return null;
  // Generic item use messages from useBattleItem
  const m = msg.match(/^(.+?) had its HP restored|was fully restored|was revived|was cured/);
  if (m) return { kind: 'item_use', data: { item_name: '' }, pokemon: m[1] };
  return null;
};

// ─── Battle end ───

const matchBattleEnd: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.match(/has no Pokemon left|It's a draw/)) return { kind: 'battle_end', data: EMPTY };
  return null;
};

// ─── Flee ───

const matchFlee: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  if (msg.match(/fled from the battle/)) return { kind: 'flee', data: EMPTY };
  return null;
};

// ─── No PP ───

const matchNoPP: Matcher = (msg, type) => {
  if (type !== 'info') return null;
  const m = msg.match(/^(.+?) has no PP left for/);
  if (!m) return null;
  return { kind: 'no_pp', data: EMPTY, pokemon: m[1] };
};

// ─── Matcher pipeline (ordered by specificity) ───

const MATCHERS: Matcher[] = [
  // Capture (must be before generic item)
  matchBallThrow,
  matchCriticalCapture,
  matchBallShake,
  matchBallCapture,
  // Move flow
  matchMoveAnnounce,
  matchCritical,
  matchEffectiveness,
  matchHazardDamage,
  matchRecoil,
  matchDamage,
  matchMiss,
  matchDrain,
  matchHeal,
  // Faint
  matchFaint,
  // Status
  matchToxicSpikesStatus,
  matchStatusInflict,
  matchStatusBlock,
  matchStatusCure,
  matchStatusDamage,
  // Stats
  matchStatChange,
  matchStatLimit,
  // Switch
  matchSwitchOut,
  matchSwitchIn,
  // Weather
  matchWeatherDamage,
  matchWeatherEnd,
  // Field
  matchHazardSet,
  matchHazardClear,
  matchScreenSet,
  matchScreenEnd,
  matchFlinch,
  // Ability / Items
  matchAbility,
  matchItemCure,
  matchItemActivate,
  matchItemUse,
  // Game flow
  matchBattleEnd,
  matchFlee,
  matchNoPP,
];

// ─── Public API ───

/**
 * Parse an array of raw BattleLogEntry into structured BattleEvents.
 * Unknown log entries are converted to 'info' events with the original message.
 */
export function parseBattleLog(log: BattleLogEntry[]): BattleEvent[] {
  return log.map(entry => parseLogEntry(entry));
}

function parseLogEntry(entry: BattleLogEntry): BattleEvent {
  for (const matcher of MATCHERS) {
    const result = matcher(entry.message, entry.type);
    if (result) {
      return {
        kind: result.kind,
        text: entry.message,
        side: result.side,
        pokemon: result.pokemon,
        duration: DEFAULT_DURATIONS[result.kind] ?? 600,
        data: result.data,
      };
    }
  }

  // Fallback: generic info event
  return {
    kind: 'info',
    text: entry.message,
    duration: DEFAULT_DURATIONS.info ?? 600,
    data: EMPTY,
  };
}
