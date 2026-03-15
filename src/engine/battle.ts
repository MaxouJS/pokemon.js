import type {
  BattleAction,
  BattleLogEntry,
  BattleOptions,
  BattlePokemon,
  BattleSide,
  BattleState,
  Move,
  StatusCondition,
  TeamMemberConfig,
} from '../types';
import { PERFECT_IVS, ZERO_EVS, ZERO_STAGES } from '../types';
import { getPokemon, getSpecies, getMove } from '../data';
import { suggestMoves } from './moves';
import type { Pokemon } from '../types';
import { calcAllStats } from './stats';
import { calculateDamage } from './damage';
import { checkAccuracy } from './accuracy';
import { checkCritical } from './critical';
import { applyEndOfTurnWeather } from './weather';
import {
  applyStatusDamage,
  checkParalysisSkip,
  checkFreezeThaw,
  checkSleepWake,
} from './status';
import { resolveTurnOrder, type Side } from './turn-order';
import { useBattleItem, throwPokeball, type BattleItemName } from './battle-items';
import type { PokeballType, CaptureContext } from './capture';
import { getAbilityHandlers, checkSturdy } from './abilities';
import { getHeldItemHandlers } from './held-items';
import { placeHazard, applyEntryHazards, removeHazards } from './hazards';

/**
 * Create a BattlePokemon from a TeamMemberConfig.
 */
export function createBattlePokemon(config: TeamMemberConfig): BattlePokemon {
  const pokemon = getPokemon(config.pokemon_id);
  if (!pokemon) {
    throw new Error(`Pokemon with id ${config.pokemon_id} not found`);
  }

  const species = getSpecies(pokemon.species);
  if (!species) {
    throw new Error(`Species "${pokemon.species}" not found`);
  }

  const level = config.level ?? 50;
  const nature = config.nature ?? 'hardy';
  const ivs = { ...PERFECT_IVS, ...(config.ivs ?? {}) };
  const evs = { ...ZERO_EVS, ...(config.evs ?? {}) };

  const ability = config.ability ?? (pokemon.abilities[0]?.name ?? 'unknown');

  const moveNames = config.moves ?? pokemon.moves.slice(0, 4);
  const moves: Move[] = [];
  for (const moveName of moveNames) {
    const move = getMove(moveName);
    if (move) {
      moves.push(move);
    }
  }

  const stats = calcAllStats(pokemon.stats, ivs, evs, level, nature);

  const pp: Record<string, number> = {};
  for (const move of moves) {
    pp[move.name] = move.pp ?? 5;
  }

  return {
    pokemon,
    species,
    nickname: config.nickname ?? pokemon.name,
    level,
    nature,
    ability,
    ivs,
    evs,
    moves,
    held_item: config.held_item ?? null,
    current_hp: stats.hp,
    max_hp: stats.hp,
    status: null,
    status_turns: 0,
    stat_stages: { ...ZERO_STAGES },
    pp,
    is_fainted: false,
  };
}

function createBattleSide(team: BattlePokemon[], format: 'singles' | 'doubles' = 'singles'): BattleSide {
  const activeIndices = format === 'doubles' && team.length >= 2 ? [0, 1] : [0];
  return {
    active_index: activeIndices[0],
    active_indices: activeIndices,
    team,
    volatile: new Set(),
    volatile_data: {},
    entry_hazards: [],
    light_screen_turns: 0,
    reflect_turns: 0,
    tailwind_turns: 0,
  };
}

/**
 * Create an initial BattleState from two team configurations.
 */
export function createBattleState(
  playerTeam: TeamMemberConfig[],
  opponentTeam: TeamMemberConfig[],
  options?: BattleOptions,
): BattleState {
  const format = options?.format ?? 'singles';
  if (playerTeam.length === 0 || opponentTeam.length === 0) {
    throw new Error('Both teams must have at least one Pokemon');
  }
  if (format === 'doubles' && (playerTeam.length < 2 || opponentTeam.length < 2)) {
    throw new Error('Both teams must have at least two Pokemon for doubles');
  }

  const playerPokemon = playerTeam.map(createBattlePokemon);
  const opponentPokemon = opponentTeam.map(createBattlePokemon);

  return {
    turn: 0,
    format,
    player: createBattleSide(playerPokemon, format),
    opponent: createBattleSide(opponentPokemon, format),
    weather: {
      type: options?.weather ?? 'none',
      turns_remaining: options?.weather && options.weather !== 'none' ? 5 : 0,
    },
    terrain: {
      type: options?.terrain ?? 'none',
      turns_remaining: options?.terrain && options.terrain !== 'none' ? 5 : 0,
    },
    log: [],
    phase: 'select-action',
    winner: null,
  };
}

/**
 * Create a TeamMemberConfig with sensible defaults from a Pokemon.
 * Picks the first ability, suggests 4 moves, and uses level 50.
 */
export function createDefaultTeamMember(
  pokemon: Pokemon,
  options?: {
    level?: number;
    ability?: string;
    nature?: string;
    held_item?: string | null;
    moves?: string[];
  },
): TeamMemberConfig {
  const moves = options?.moves ?? suggestMoves(pokemon, 4).map(m => m.name);
  const ability = options?.ability ?? pokemon.abilities[0]?.name ?? 'unknown';
  return {
    pokemon_id: pokemon.id,
    level: options?.level ?? 50,
    moves,
    ability,
    nature: (options?.nature ?? 'hardy') as any,
    held_item: options?.held_item ?? null,
  };
}

// ─── Internal helpers ─────────────────────────────────────────

function getActivePokemon(side: BattleSide): BattlePokemon {
  return side.team[side.active_index];
}

function cloneState(state: BattleState): BattleState {
  return {
    ...state,
    player: cloneSide(state.player),
    opponent: cloneSide(state.opponent),
    weather: { ...state.weather },
    terrain: { ...state.terrain },
    log: [...state.log],
  };
}

function cloneSide(side: BattleSide): BattleSide {
  return {
    ...side,
    active_indices: [...side.active_indices],
    team: side.team.map(clonePokemon),
    volatile: new Set(side.volatile),
    volatile_data: { ...side.volatile_data },
    entry_hazards: side.entry_hazards.map(h => ({ ...h })),
  };
}

function clonePokemon(p: BattlePokemon): BattlePokemon {
  return {
    ...p,
    ivs: { ...p.ivs },
    evs: { ...p.evs },
    stat_stages: { ...p.stat_stages },
    pp: { ...p.pp },
    moves: [...p.moves],
  };
}

function logEntry(turn: number, message: string, type: BattleLogEntry['type']): BattleLogEntry {
  return { turn, message, type };
}

function hasAlivePokemon(side: BattleSide): boolean {
  return side.team.some(p => !p.is_fainted);
}

function applyDamage(pokemon: BattlePokemon, damage: number): void {
  pokemon.current_hp = Math.max(0, pokemon.current_hp - damage);
  if (pokemon.current_hp === 0) {
    pokemon.is_fainted = true;
    pokemon.status = null;
  }
}

function applyHealing(pokemon: BattlePokemon, amount: number): void {
  if (pokemon.is_fainted) return;
  pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + amount);
}

/**
 * Try to apply a status condition, checking ability immunities and berry cures.
 */
function tryApplyStatus(
  target: BattlePokemon,
  status: StatusCondition,
  log: BattleLogEntry[],
  turn: number,
): boolean {
  if (target.status !== null) return false;

  // Ability status immunity (Immunity, Limber, Insomnia, etc.)
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

  // Check status-cure berry
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
function checkHpItems(pokemon: BattlePokemon, log: BattleLogEntry[], turn: number): void {
  if (!pokemon.held_item || pokemon.is_fainted) return;
  const itemHandlers = getHeldItemHandlers(pokemon.held_item);
  itemHandlers?.onHpChanged?.(pokemon, log, turn);
}

// ─── Hazard & screen move names ──────────────────────────────

const HAZARD_MOVES: Record<string, 'stealth-rock' | 'spikes' | 'toxic-spikes' | 'sticky-web'> = {
  'stealth-rock': 'stealth-rock',
  'spikes': 'spikes',
  'toxic-spikes': 'toxic-spikes',
  'sticky-web': 'sticky-web',
};

const SCREEN_MOVES: Record<string, 'reflect' | 'light-screen'> = {
  'reflect': 'reflect',
  'light-screen': 'light-screen',
};

const HAZARD_CLEAR_MOVES = new Set(['rapid-spin', 'defog']);

// ─── Action execution ────────────────────────────────────────

function executeSwitch(
  state: BattleState,
  side: BattleSide,
  opponentSide: BattleSide,
  sideLabel: string,
  pokemonIndex: number,
  log: BattleLogEntry[],
): void {
  const oldPokemon = getActivePokemon(side);
  side.active_index = pokemonIndex;
  const newPokemon = getActivePokemon(side);

  side.volatile.clear();
  side.volatile_data = {};

  oldPokemon.stat_stages = { ...ZERO_STAGES };

  log.push(logEntry(state.turn, `${sideLabel} withdrew ${oldPokemon.nickname}!`, 'switch'));
  log.push(logEntry(state.turn, `${sideLabel} sent out ${newPokemon.nickname}!`, 'switch'));

  // Apply entry hazards on switch-in
  applyEntryHazards(side, newPokemon, log, state.turn);

  if (newPokemon.is_fainted) return;

  // Ability switch-in effects (weather setters, Intimidate, etc.)
  const abilityHandlers = getAbilityHandlers(newPokemon.ability);
  if (abilityHandlers?.onSwitchIn) {
    abilityHandlers.onSwitchIn(newPokemon, side, opponentSide, state, log);
  }
}

function executeMove(
  state: BattleState,
  attackerSide: BattleSide,
  defenderSide: BattleSide,
  attackerLabel: string,
  _defenderLabel: string,
  moveIndex: number,
  log: BattleLogEntry[],
): void {
  const attacker = getActivePokemon(attackerSide);
  const defender = getActivePokemon(defenderSide);

  if (attacker.is_fainted) return;
  if (defender.is_fainted) return;

  const move = attacker.moves[moveIndex];
  if (!move) return;

  if ((attacker.pp[move.name] ?? 0) <= 0) {
    log.push(logEntry(state.turn, `${attacker.nickname} has no PP left for ${move.name}!`, 'info'));
    return;
  }

  if (attacker.status === 'paralysis' && checkParalysisSkip()) {
    log.push(logEntry(state.turn, `${attacker.nickname} is fully paralyzed! It can't move!`, 'status'));
    return;
  }

  if (attacker.status === 'freeze') {
    if (checkFreezeThaw()) {
      attacker.status = null;
      attacker.status_turns = 0;
      log.push(logEntry(state.turn, `${attacker.nickname} thawed out!`, 'status'));
    } else {
      log.push(logEntry(state.turn, `${attacker.nickname} is frozen solid!`, 'status'));
      return;
    }
  }

  if (attacker.status === 'sleep') {
    if (checkSleepWake(attacker)) {
      attacker.status = null;
      attacker.status_turns = 0;
      log.push(logEntry(state.turn, `${attacker.nickname} woke up!`, 'status'));
    } else {
      log.push(logEntry(state.turn, `${attacker.nickname} is fast asleep!`, 'status'));
      return;
    }
  }

  attacker.pp[move.name] = Math.max(0, (attacker.pp[move.name] ?? 0) - 1);

  log.push(logEntry(state.turn, `${attacker.nickname} used ${move.name}!`, 'move'));

  if (attackerSide.volatile.has('flinch')) {
    attackerSide.volatile.delete('flinch');
    log.push(logEntry(state.turn, `${attacker.nickname} flinched and couldn't move!`, 'info'));
    return;
  }

  if (!checkAccuracy(move, attacker, defender)) {
    log.push(logEntry(state.turn, `${attacker.nickname}'s attack missed!`, 'info'));
    return;
  }

  // ─── Handle damaging moves ───
  if (move.damage_class !== 'status' && move.power !== null && move.power > 0) {
    // Check type immunity via defender's ability
    const defAbility = getAbilityHandlers(defender.ability);
    if (defAbility?.onTypeImmunity?.(move.type, defender)) {
      log.push(logEntry(state.turn, `It doesn't affect ${defender.nickname}... (${defender.ability})`, 'ability'));
      return;
    }

    const isCritical = checkCritical(move, attacker, defender);
    const result = calculateDamage(attacker, defender, move, {
      weather: state.weather.type,
      critical_override: isCritical,
      attacker_side: attackerSide,
      defender_side: defenderSide,
    });

    let finalDamage = result.damage;

    // Sturdy: survive at 1 HP from full
    finalDamage = checkSturdy(defender, finalDamage);

    // Defender held item onTakeDamage (Focus Sash, Focus Band)
    if (defender.held_item) {
      const defItem = getHeldItemHandlers(defender.held_item);
      if (defItem?.onTakeDamage) {
        const takeResult = defItem.onTakeDamage(finalDamage, defender);
        finalDamage = takeResult.damage;
        if (takeResult.consumed) {
          log.push(logEntry(state.turn, `${defender.nickname} hung on using its ${defender.held_item}!`, 'item'));
        }
      }
    }

    applyDamage(defender, finalDamage);

    if (result.critical) {
      log.push(logEntry(state.turn, 'A critical hit!', 'damage'));
    }
    if (result.type_message) {
      log.push(logEntry(state.turn, `It's ${result.type_message}!`, 'damage'));
    }
    log.push(logEntry(
      state.turn,
      `${defender.nickname} took ${finalDamage} damage! (${defender.current_hp}/${defender.max_hp} HP)`,
      'damage',
    ));

    // Attacker held item after damage dealt (Life Orb recoil, Shell Bell heal)
    if (attacker.held_item && finalDamage > 0) {
      const atkItem = getHeldItemHandlers(attacker.held_item);
      atkItem?.onAfterDamageDealt?.(attacker, finalDamage, log, state.turn);
    }

    // Check HP-threshold items for defender (Sitrus Berry, Oran Berry)
    checkHpItems(defender, log, state.turn);

    if (defender.is_fainted) {
      log.push(logEntry(state.turn, `${defender.nickname} fainted!`, 'faint'));
    }

    // Drain moves
    if (move.meta.drain > 0 && result.damage > 0) {
      const healAmount = Math.max(1, Math.floor(result.damage * move.meta.drain / 100));
      applyHealing(attacker, healAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} drained ${healAmount} HP!`, 'info'));
    }
    // Recoil moves
    if (move.meta.drain < 0 && result.damage > 0) {
      const recoilAmount = Math.max(1, Math.floor(result.damage * Math.abs(move.meta.drain) / 100));
      applyDamage(attacker, recoilAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} was hurt by recoil! (${recoilAmount} damage)`, 'damage'));
      if (attacker.is_fainted) {
        log.push(logEntry(state.turn, `${attacker.nickname} fainted from recoil!`, 'faint'));
      }
    }

    // Flinch chance
    if (move.meta.flinch_chance > 0 && !defender.is_fainted) {
      if (Math.random() * 100 < move.meta.flinch_chance) {
        defenderSide.volatile.add('flinch');
      }
    }
  }

  // ─── Handle screen-setting moves ───
  if (SCREEN_MOVES[move.name]) {
    const screen = SCREEN_MOVES[move.name];
    if (screen === 'reflect') {
      if (attackerSide.reflect_turns > 0) {
        log.push(logEntry(state.turn, 'But it failed! Reflect is already active!', 'info'));
      } else {
        attackerSide.reflect_turns = 5;
        log.push(logEntry(state.turn, `Reflect raised ${attackerLabel}'s team's Defense!`, 'info'));
      }
    } else if (screen === 'light-screen') {
      if (attackerSide.light_screen_turns > 0) {
        log.push(logEntry(state.turn, 'But it failed! Light Screen is already active!', 'info'));
      } else {
        attackerSide.light_screen_turns = 5;
        log.push(logEntry(state.turn, `Light Screen raised ${attackerLabel}'s team's Sp. Def!`, 'info'));
      }
    }
  }

  // ─── Handle hazard-placing moves ───
  if (HAZARD_MOVES[move.name]) {
    placeHazard(defenderSide, HAZARD_MOVES[move.name], log, state.turn);
  }

  // ─── Handle hazard removal moves ───
  if (HAZARD_CLEAR_MOVES.has(move.name)) {
    if (move.name === 'rapid-spin') {
      // Rapid Spin: clears own side's hazards
      if (attackerSide.entry_hazards.length > 0) {
        removeHazards(attackerSide, log, state.turn);
      }
      // Also raises user's Speed by 1 (Gen VIII+)
      attacker.stat_stages.speed = Math.min(6, attacker.stat_stages.speed + 1);
      log.push(logEntry(state.turn, `${attacker.nickname}'s Speed rose!`, 'info'));
    } else if (move.name === 'defog') {
      // Defog: clears both sides' hazards + screens on opponent side
      if (defenderSide.entry_hazards.length > 0) {
        removeHazards(defenderSide, log, state.turn);
      }
      if (attackerSide.entry_hazards.length > 0) {
        removeHazards(attackerSide, log, state.turn);
      }
      // Remove screens on opponent side
      if (defenderSide.reflect_turns > 0) {
        defenderSide.reflect_turns = 0;
        log.push(logEntry(state.turn, "The opposing team's Reflect wore off!", 'info'));
      }
      if (defenderSide.light_screen_turns > 0) {
        defenderSide.light_screen_turns = 0;
        log.push(logEntry(state.turn, "The opposing team's Light Screen wore off!", 'info'));
      }
    }
  }

  // ─── Self-healing moves ───
  if (move.meta.healing > 0 && !attacker.is_fainted) {
    const healAmount = Math.max(1, Math.floor(attacker.max_hp * move.meta.healing / 100));
    applyHealing(attacker, healAmount);
    log.push(logEntry(state.turn, `${attacker.nickname} restored ${healAmount} HP!`, 'info'));
  }

  // ─── Stat changes ───
  if (move.stat_changes.length > 0 && !attacker.is_fainted) {
    const chance = move.meta.stat_chance > 0 ? move.meta.stat_chance : 100;
    if (Math.random() * 100 < chance) {
      for (const change of move.stat_changes) {
        const target = change.change > 0 ? attacker : defender;
        const targetName = change.change > 0 ? attacker.nickname : defender.nickname;

        if (target.is_fainted) continue;

        const statKey = change.stat as keyof typeof target.stat_stages;
        if (!(statKey in target.stat_stages)) continue;
        const oldStage = target.stat_stages[statKey];
        const newStage = Math.max(-6, Math.min(6, oldStage + change.change));
        target.stat_stages[statKey] = newStage;

        if (newStage !== oldStage) {
          const diff = newStage - oldStage;
          const direction = diff > 0 ? 'rose' : 'fell';
          const intensity = Math.abs(diff) >= 3 ? 'drastically' : Math.abs(diff) === 2 ? 'sharply' : '';
          log.push(logEntry(
            state.turn,
            `${targetName}'s ${change.stat} ${intensity} ${direction}!`.replace('  ', ' '),
            'info',
          ));
        } else {
          const msg = newStage >= 6
            ? `${targetName}'s ${change.stat} won't go any higher!`
            : `${targetName}'s ${change.stat} won't go any lower!`;
          log.push(logEntry(state.turn, msg, 'info'));
        }
      }
    }
  }

  // ─── Status ailment ───
  if (
    move.meta.ailment !== 'none' &&
    move.meta.ailment !== '' &&
    !defender.is_fainted &&
    defender.status === null
  ) {
    const ailmentChance = move.meta.ailment_chance > 0 ? move.meta.ailment_chance : 100;
    if (Math.random() * 100 < ailmentChance) {
      const ailment = move.meta.ailment as string;
      const validStatuses = ['burn', 'freeze', 'paralysis', 'poison', 'bad-poison', 'sleep'];
      if (validStatuses.includes(ailment)) {
        tryApplyStatus(defender, ailment as StatusCondition, log, state.turn);
      }
    }
  }
}

function executeAction(
  state: BattleState,
  action: BattleAction,
  side: Side,
  log: BattleLogEntry[],
): void {
  const attackerSide = side === 'player' ? state.player : state.opponent;
  const defenderSide = side === 'player' ? state.opponent : state.player;
  const attackerLabel = side === 'player' ? 'Player' : 'Opponent';
  const defenderLabel = side === 'player' ? 'Opponent' : 'Player';

  switch (action.type) {
    case 'move':
      executeMove(state, attackerSide, defenderSide, attackerLabel, defenderLabel, action.move_index, log);
      break;
    case 'switch':
      executeSwitch(state, attackerSide, defenderSide, attackerLabel, action.pokemon_index, log);
      break;
    case 'item': {
      const itemAction = action as BattleAction & { item: string; target_index: number };
      const itemName = itemAction.item;

      const pokeballTypes = [
        'poke-ball', 'great-ball', 'ultra-ball', 'master-ball', 'safari-ball',
        'net-ball', 'dive-ball', 'nest-ball', 'repeat-ball', 'timer-ball',
        'luxury-ball', 'premier-ball', 'dusk-ball', 'heal-ball', 'quick-ball',
        'fast-ball', 'level-ball', 'lure-ball', 'heavy-ball', 'love-ball',
        'friend-ball', 'moon-ball', 'sport-ball', 'dream-ball',
      ];

      if (pokeballTypes.includes(itemName)) {
        const captureResult = throwPokeball(state, itemName as PokeballType, {
          turn: state.turn,
        } as CaptureContext);
        log.push(...captureResult.log);
        if (captureResult.caught) {
          state.phase = 'finished';
          state.winner = 'player';
        }
      } else {
        const targetIndex = itemAction.target_index ?? attackerSide.active_index;
        const targetPokemon = attackerSide.team[targetIndex];
        if (targetPokemon) {
          const result = useBattleItem(itemName as BattleItemName, targetPokemon);
          log.push(logEntry(state.turn, result.message, 'item'));
        }
      }
      break;
    }
    case 'flee':
      log.push(logEntry(state.turn, `${attackerLabel} fled from the battle!`, 'info'));
      state.phase = 'finished';
      state.winner = side === 'player' ? 'opponent' : 'player';
      break;
  }
}

function applyEndOfTurnEffects(state: BattleState, log: BattleLogEntry[]): void {
  // Weather chip damage
  if (state.weather.type !== 'none') {
    for (const side of [state.player, state.opponent]) {
      const pokemon = getActivePokemon(side);
      if (!pokemon.is_fainted) {
        let weatherDmg = applyEndOfTurnWeather(state.weather.type, pokemon);

        // Ability weather damage immunity (Magic Guard, Overcoat, Ice Body, Rain Dish)
        if (weatherDmg > 0) {
          const abilityHandlers = getAbilityHandlers(pokemon.ability);
          if (abilityHandlers?.onWeatherDamage) {
            weatherDmg = abilityHandlers.onWeatherDamage(weatherDmg, pokemon, state.weather.type);
          }
        }

        if (weatherDmg > 0) {
          applyDamage(pokemon, weatherDmg);
          const weatherName = state.weather.type === 'sandstorm' ? 'the sandstorm' : 'the hail';
          log.push(logEntry(
            state.turn,
            `${pokemon.nickname} was buffeted by ${weatherName}! (${weatherDmg} damage)`,
            'weather',
          ));
          if (pokemon.is_fainted) {
            log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
          }
        }
      }
    }

    if (state.weather.turns_remaining > 0) {
      state.weather.turns_remaining -= 1;
      if (state.weather.turns_remaining === 0) {
        log.push(logEntry(state.turn, `The ${state.weather.type} subsided.`, 'weather'));
        state.weather.type = 'none';
      }
    }
  }

  // Status damage (burn, poison, bad-poison)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted && pokemon.status) {
      pokemon.status_turns += 1;

      // Poison Heal: heal instead of taking poison damage
      const abilityHandlers = getAbilityHandlers(pokemon.ability);
      const isPoisonHeal =
        abilityHandlers?.onEndOfTurn &&
        pokemon.ability.toLowerCase() === 'poison-heal' &&
        (pokemon.status === 'poison' || pokemon.status === 'bad-poison');

      if (!isPoisonHeal) {
        const statusDmg = applyStatusDamage(pokemon);
        if (statusDmg > 0) {
          applyDamage(pokemon, statusDmg);
          const statusMsg = pokemon.status === 'burn' ? 'hurt by its burn'
            : pokemon.status === 'poison' ? 'hurt by poison'
            : pokemon.status === 'bad-poison' ? 'hurt by poison'
            : '';
          if (statusMsg) {
            log.push(logEntry(
              state.turn,
              `${pokemon.nickname} was ${statusMsg}! (${statusDmg} damage)`,
              'status',
            ));
          }
          if (pokemon.is_fainted) {
            log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
          }
        }
      }
    }
  }

  // Ability end-of-turn effects (Speed Boost, Poison Heal, Ice Body, Rain Dish)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted) {
      const abilityHandlers = getAbilityHandlers(pokemon.ability);
      abilityHandlers?.onEndOfTurn?.(pokemon, side, state, log);
    }
  }

  // Held item end-of-turn effects (Leftovers, Black Sludge)
  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted && pokemon.held_item) {
      const itemHandlers = getHeldItemHandlers(pokemon.held_item);
      itemHandlers?.onEndOfTurn?.(pokemon, log, state.turn);
    }
  }

  // Decrement screen / tailwind timers
  for (const side of [state.player, state.opponent]) {
    if (side.light_screen_turns > 0) side.light_screen_turns -= 1;
    if (side.reflect_turns > 0) side.reflect_turns -= 1;
    if (side.tailwind_turns > 0) side.tailwind_turns -= 1;
    side.volatile.delete('flinch');
  }
}

function checkWinCondition(state: BattleState, log: BattleLogEntry[]): void {
  const playerAlive = hasAlivePokemon(state.player);
  const opponentAlive = hasAlivePokemon(state.opponent);

  if (!playerAlive && !opponentAlive) {
    state.phase = 'finished';
    state.winner = null;
    log.push(logEntry(state.turn, 'Both sides have no Pokemon left! It\'s a draw!', 'info'));
  } else if (!playerAlive) {
    state.phase = 'finished';
    state.winner = 'opponent';
    log.push(logEntry(state.turn, 'Player has no Pokemon left! Opponent wins!', 'info'));
  } else if (!opponentAlive) {
    state.phase = 'finished';
    state.winner = 'player';
    log.push(logEntry(state.turn, 'Opponent has no Pokemon left! Player wins!', 'info'));
  } else {
    const playerActive = getActivePokemon(state.player);
    const opponentActive = getActivePokemon(state.opponent);

    if (playerActive.is_fainted || opponentActive.is_fainted) {
      state.phase = 'awaiting-switch';
    } else {
      state.phase = 'select-action';
    }
  }
}

/**
 * Execute a full turn of battle.
 * PURE function: takes state and returns new state + log.
 * Does NOT mutate the input state.
 */
export function executeTurn(
  state: BattleState,
  playerAction: BattleAction,
  opponentAction: BattleAction,
): { state: BattleState; log: BattleLogEntry[] } {
  const newState = cloneState(state);
  newState.turn += 1;
  newState.phase = 'executing';

  const turnLog: BattleLogEntry[] = [];

  const playerPokemon = getActivePokemon(newState.player);
  const opponentPokemon = getActivePokemon(newState.opponent);
  const order = resolveTurnOrder(
    playerAction,
    opponentAction,
    playerPokemon,
    opponentPokemon,
    newState.weather.type,
  );

  const firstAction = order.first === 'player' ? playerAction : opponentAction;
  const secondAction = order.first === 'player' ? opponentAction : playerAction;

  executeAction(newState, firstAction, order.first, turnLog);

  if ((newState.phase as string) === 'finished') {
    checkWinCondition(newState, turnLog);
    newState.log = [...newState.log, ...turnLog];
    return { state: newState, log: turnLog };
  }

  const secondPokemon = order.second === 'player'
    ? getActivePokemon(newState.player)
    : getActivePokemon(newState.opponent);

  if (!secondPokemon.is_fainted) {
    executeAction(newState, secondAction, order.second, turnLog);
  }

  if ((newState.phase as string) === 'finished') {
    newState.log = [...newState.log, ...turnLog];
    return { state: newState, log: turnLog };
  }

  applyEndOfTurnEffects(newState, turnLog);
  checkWinCondition(newState, turnLog);

  newState.log = [...newState.log, ...turnLog];
  return { state: newState, log: turnLog };
}
