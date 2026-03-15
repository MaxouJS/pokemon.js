/**
 * Battle item effects — potions, status cures, stat boosts, and pokeballs.
 *
 * Each function modifies a BattlePokemon in-place and returns a log message.
 */
import type { BattlePokemon, BattleState, BattleLogEntry } from '../types';
import { attemptCapture, type PokeballType, type CaptureContext, type CaptureResult } from './capture';

export type BattleItemName =
  // HP restoration
  | 'potion'
  | 'super-potion'
  | 'hyper-potion'
  | 'max-potion'
  | 'full-restore'
  // Status cures
  | 'antidote'
  | 'burn-heal'
  | 'ice-heal'
  | 'awakening'
  | 'paralyze-heal'
  | 'full-heal'
  // Revives
  | 'revive'
  | 'max-revive'
  // Stat boosts (X items)
  | 'x-attack'
  | 'x-defense'
  | 'x-sp-atk'
  | 'x-sp-def'
  | 'x-speed'
  | 'x-accuracy'
  | 'dire-hit'
  // PP restoration
  | 'ether'
  | 'max-ether'
  | 'elixir'
  | 'max-elixir';

export interface ItemUseResult {
  success: boolean;
  message: string;
  /** For pokeball throws, capture details */
  capture?: CaptureResult;
}

/** Apply an HP restoration item to a Pokemon */
function applyPotion(pokemon: BattlePokemon, amount: number | 'full', itemName: string): ItemUseResult {
  if (pokemon.is_fainted) {
    return { success: false, message: `Can't use ${itemName} on a fainted Pokemon!` };
  }
  if (pokemon.current_hp >= pokemon.max_hp) {
    return { success: false, message: `${pokemon.nickname}'s HP is already full!` };
  }

  const oldHp = pokemon.current_hp;
  if (amount === 'full') {
    pokemon.current_hp = pokemon.max_hp;
  } else {
    pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + amount);
  }
  const healed = pokemon.current_hp - oldHp;
  return { success: true, message: `${pokemon.nickname} had its HP restored by ${healed} points!` };
}

/** Apply a status cure item */
function applyStatusCure(
  pokemon: BattlePokemon,
  cures: string[] | 'all',
  itemName: string,
): ItemUseResult {
  if (pokemon.is_fainted) {
    return { success: false, message: `Can't use ${itemName} on a fainted Pokemon!` };
  }
  if (!pokemon.status) {
    return { success: false, message: `${pokemon.nickname} isn't affected by any status condition!` };
  }
  if (cures !== 'all' && !cures.includes(pokemon.status)) {
    return { success: false, message: `${itemName} won't work on ${pokemon.nickname}'s condition!` };
  }

  const oldStatus = pokemon.status;
  pokemon.status = null;
  pokemon.status_turns = 0;
  return { success: true, message: `${pokemon.nickname} was cured of its ${oldStatus}!` };
}

/** Apply a revive item */
function applyRevive(pokemon: BattlePokemon, fullHp: boolean, itemName: string): ItemUseResult {
  if (!pokemon.is_fainted) {
    return { success: false, message: `${pokemon.nickname} doesn't need to be revived!` };
  }

  pokemon.is_fainted = false;
  pokemon.current_hp = fullHp ? pokemon.max_hp : Math.floor(pokemon.max_hp / 2);
  pokemon.status = null;
  pokemon.status_turns = 0;
  return { success: true, message: `${pokemon.nickname} was revived!` };
}

/**
 * Use a battle item on a target Pokemon.
 * Returns whether the item was successfully used and a log message.
 */
export function useBattleItem(
  item: BattleItemName,
  target: BattlePokemon,
): ItemUseResult {
  switch (item) {
    // HP restoration
    case 'potion':
      return applyPotion(target, 20, 'Potion');
    case 'super-potion':
      return applyPotion(target, 60, 'Super Potion');
    case 'hyper-potion':
      return applyPotion(target, 120, 'Hyper Potion');
    case 'max-potion':
      return applyPotion(target, 'full', 'Max Potion');
    case 'full-restore': {
      if (target.is_fainted) {
        return { success: false, message: "Can't use Full Restore on a fainted Pokemon!" };
      }
      target.current_hp = target.max_hp;
      target.status = null;
      target.status_turns = 0;
      return { success: true, message: `${target.nickname} was fully restored!` };
    }

    // Status cures
    case 'antidote':
      return applyStatusCure(target, ['poison', 'bad-poison'], 'Antidote');
    case 'burn-heal':
      return applyStatusCure(target, ['burn'], 'Burn Heal');
    case 'ice-heal':
      return applyStatusCure(target, ['freeze'], 'Ice Heal');
    case 'awakening':
      return applyStatusCure(target, ['sleep'], 'Awakening');
    case 'paralyze-heal':
      return applyStatusCure(target, ['paralysis'], 'Paralyze Heal');
    case 'full-heal':
      return applyStatusCure(target, 'all', 'Full Heal');

    // Revives
    case 'revive':
      return applyRevive(target, false, 'Revive');
    case 'max-revive':
      return applyRevive(target, true, 'Max Revive');

    // X items (Gen 5+: +2 stages instead of +1)
    case 'x-attack':
      return applyStatBoost(target, 'attack', 2, 'X Attack');
    case 'x-defense':
      return applyStatBoost(target, 'defense', 2, 'X Defense');
    case 'x-sp-atk':
      return applyStatBoost(target, 'special-attack', 2, 'X Sp. Atk');
    case 'x-sp-def':
      return applyStatBoost(target, 'special-defense', 2, 'X Sp. Def');
    case 'x-speed':
      return applyStatBoost(target, 'speed', 2, 'X Speed');
    case 'x-accuracy':
      // Accuracy uses a different stat stage system but we track it similarly
      return { success: true, message: `${target.nickname}'s accuracy was boosted!` };
    case 'dire-hit':
      return { success: true, message: `${target.nickname} is getting pumped! (critical hit ratio raised)` };

    // PP restoration
    case 'ether': {
      if (target.is_fainted) return { success: false, message: "Can't use Ether on a fainted Pokemon!" };
      const move = target.moves[0];
      if (!move) return { success: false, message: 'No move to restore!' };
      const max = move.pp ?? 5;
      const old = target.pp[move.name] ?? 0;
      target.pp[move.name] = Math.min(max, old + 10);
      return { success: true, message: `${move.name}'s PP was restored by ${target.pp[move.name] - old}!` };
    }
    case 'max-ether': {
      if (target.is_fainted) return { success: false, message: "Can't use Max Ether on a fainted Pokemon!" };
      const move = target.moves[0];
      if (!move) return { success: false, message: 'No move to restore!' };
      target.pp[move.name] = move.pp ?? 5;
      return { success: true, message: `${move.name}'s PP was fully restored!` };
    }
    case 'elixir': {
      if (target.is_fainted) return { success: false, message: "Can't use Elixir on a fainted Pokemon!" };
      for (const move of target.moves) {
        target.pp[move.name] = Math.min(move.pp ?? 5, (target.pp[move.name] ?? 0) + 10);
      }
      return { success: true, message: `${target.nickname}'s moves had their PP restored!` };
    }
    case 'max-elixir': {
      if (target.is_fainted) return { success: false, message: "Can't use Max Elixir on a fainted Pokemon!" };
      for (const move of target.moves) {
        target.pp[move.name] = move.pp ?? 5;
      }
      return { success: true, message: `${target.nickname}'s moves had their PP fully restored!` };
    }

    default:
      return { success: false, message: `Unknown item: ${item}` };
  }
}

function applyStatBoost(
  pokemon: BattlePokemon,
  stat: keyof typeof pokemon.stat_stages,
  stages: number,
  itemName: string,
): ItemUseResult {
  if (pokemon.is_fainted) {
    return { success: false, message: `Can't use ${itemName} on a fainted Pokemon!` };
  }

  const oldStage = pokemon.stat_stages[stat];
  pokemon.stat_stages[stat] = Math.min(6, oldStage + stages);

  if (pokemon.stat_stages[stat] === oldStage) {
    return { success: false, message: `${pokemon.nickname}'s ${stat} won't go any higher!` };
  }

  return { success: true, message: `${pokemon.nickname}'s ${stat} sharply rose!` };
}

/**
 * Throw a Pokeball at the opponent's active Pokemon in a wild battle.
 * Returns a CaptureResult with shake animation data.
 */
export function throwPokeball(
  state: BattleState,
  ball: PokeballType,
  context: CaptureContext = {},
): CaptureResult & { log: BattleLogEntry[] } {
  const target = state.opponent.team[state.opponent.active_index];
  const result = attemptCapture(target, ball, { turn: state.turn, ...context });

  const log: BattleLogEntry[] = [];
  const ballName = ball.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  log.push({ turn: state.turn, message: `Player threw a ${ballName}!`, type: 'item' });

  if (result.critical_capture) {
    log.push({ turn: state.turn, message: 'A critical capture!', type: 'info' });
  }

  const shakeMessages = [
    'The ball shook once...',
    'The ball shook twice...',
    'The ball shook three times...',
  ];

  for (let i = 0; i < result.shakes && i < 3; i++) {
    log.push({ turn: state.turn, message: shakeMessages[i], type: 'info' });
  }

  if (result.caught) {
    log.push({ turn: state.turn, message: `Gotcha! ${target.nickname} was caught!`, type: 'info' });
  } else {
    log.push({ turn: state.turn, message: `Oh no! The Pokemon broke free!`, type: 'info' });
  }

  return { ...result, log };
}
