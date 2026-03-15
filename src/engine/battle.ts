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

function createBattleSide(team: BattlePokemon[]): BattleSide {
  return {
    active_index: 0,
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
  if (playerTeam.length === 0 || opponentTeam.length === 0) {
    throw new Error('Both teams must have at least one Pokemon');
  }

  const playerPokemon = playerTeam.map(createBattlePokemon);
  const opponentPokemon = opponentTeam.map(createBattlePokemon);

  return {
    turn: 0,
    player: createBattleSide(playerPokemon),
    opponent: createBattleSide(opponentPokemon),
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

// ─── Action execution ────────────────────────────────────────

function executeSwitch(
  state: BattleState,
  side: BattleSide,
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

  if (move.damage_class !== 'status' && move.power !== null && move.power > 0) {
    const isCritical = checkCritical(move, attacker);
    const result = calculateDamage(attacker, defender, move, {
      weather: state.weather.type,
      critical_override: isCritical,
    });

    applyDamage(defender, result.damage);

    if (result.critical) {
      log.push(logEntry(state.turn, 'A critical hit!', 'damage'));
    }
    if (result.type_message) {
      log.push(logEntry(state.turn, `It's ${result.type_message}!`, 'damage'));
    }
    log.push(logEntry(
      state.turn,
      `${defender.nickname} took ${result.damage} damage! (${defender.current_hp}/${defender.max_hp} HP)`,
      'damage',
    ));

    if (defender.is_fainted) {
      log.push(logEntry(state.turn, `${defender.nickname} fainted!`, 'faint'));
    }

    if (move.meta.drain > 0 && result.damage > 0) {
      const healAmount = Math.max(1, Math.floor(result.damage * move.meta.drain / 100));
      applyHealing(attacker, healAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} drained ${healAmount} HP!`, 'info'));
    }
    if (move.meta.drain < 0 && result.damage > 0) {
      const recoilAmount = Math.max(1, Math.floor(result.damage * Math.abs(move.meta.drain) / 100));
      applyDamage(attacker, recoilAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} was hurt by recoil! (${recoilAmount} damage)`, 'damage'));
      if (attacker.is_fainted) {
        log.push(logEntry(state.turn, `${attacker.nickname} fainted from recoil!`, 'faint'));
      }
    }

    if (move.meta.flinch_chance > 0 && !defender.is_fainted) {
      if (Math.random() * 100 < move.meta.flinch_chance) {
        defenderSide.volatile.add('flinch');
      }
    }
  }

  if (move.meta.healing > 0 && !attacker.is_fainted) {
    const healAmount = Math.max(1, Math.floor(attacker.max_hp * move.meta.healing / 100));
    applyHealing(attacker, healAmount);
    log.push(logEntry(state.turn, `${attacker.nickname} restored ${healAmount} HP!`, 'info'));
  }

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
        defender.status = ailment as StatusCondition;
        defender.status_turns = 0;
        const statusNames: Record<string, string> = {
          'burn': 'burned',
          'freeze': 'frozen',
          'paralysis': 'paralyzed',
          'poison': 'poisoned',
          'bad-poison': 'badly poisoned',
          'sleep': 'put to sleep',
        };
        log.push(logEntry(
          state.turn,
          `${defender.nickname} was ${statusNames[ailment] ?? ailment}!`,
          'status',
        ));
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
      executeSwitch(state, attackerSide, attackerLabel, action.pokemon_index, log);
      break;
    case 'item': {
      // Item actions carry the item name and optionally a target team index
      const itemAction = action as BattleAction & { item: string; target_index: number };
      const itemName = itemAction.item;

      // Check if it's a pokeball throw (wild battle capture)
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
        // Regular battle item (potion, status cure, etc.)
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
  if (state.weather.type !== 'none') {
    for (const side of [state.player, state.opponent]) {
      const pokemon = getActivePokemon(side);
      if (!pokemon.is_fainted) {
        const weatherDmg = applyEndOfTurnWeather(state.weather.type, pokemon);
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

  for (const side of [state.player, state.opponent]) {
    const pokemon = getActivePokemon(side);
    if (!pokemon.is_fainted && pokemon.status) {
      pokemon.status_turns += 1;

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
  const order = resolveTurnOrder(playerAction, opponentAction, playerPokemon, opponentPokemon);

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
