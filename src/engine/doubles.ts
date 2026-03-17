/**
 * Double battle execution engine.
 *
 * In doubles, each side has two active Pokemon. Each turn, each side submits
 * two actions (one per active slot). Actions are sorted by priority and speed,
 * then executed one by one. Spread moves (targeting all opponents) deal 0.75x
 * damage to each target.
 */
import type {
  BattleAction,
  BattleLogEntry,
  BattlePokemon,
  BattleSide,
  BattleState,
  StatusCondition,
} from '../types';
import { ZERO_STAGES } from '../types';
import { calculateDamage } from './damage';
import { checkAccuracy } from './accuracy';
import { checkCritical } from './critical';
import { applyEndOfTurnWeather } from './weather';
import { applyStatusDamage } from './status';
import { calcAllStats, getEffectiveStat } from './stats';
import { getStatusSpeedModifier } from './status';
import { getAbilityHandlers, checkSturdy } from './abilities';
import { getHeldItemHandlers } from './held-items';
import { placeHazard, applyEntryHazards, removeHazards } from './hazards';
import {
  checkParalysisSkip,
  checkFreezeThaw,
  checkSleepWake,
} from './status';
import {
  logEntry,
  hasAlivePokemon,
  applyDamage,
  applyHealing,
  checkHpItems,
  tryApplyStatus,
  HAZARD_MOVES,
  SCREEN_MOVES,
  HAZARD_CLEAR_MOVES,
} from './battle/helpers';

type Side = 'player' | 'opponent';

// ─── Doubles-specific helpers ────────────────────────────────

/** Get the active Pokemon for a given slot index (0 or 1). */
function getActiveAtSlot(side: BattleSide, slot: number): BattlePokemon | null {
  const idx = side.active_indices[slot];
  if (idx === undefined) return null;
  const p = side.team[idx];
  return p && !p.is_fainted ? p : null;
}

/** Get all active Pokemon on a side. */
function getActivePokemonList(side: BattleSide): BattlePokemon[] {
  return side.active_indices
    .map(i => side.team[i])
    .filter(p => p && !p.is_fainted);
}

/** Determine if a move targets all opponents (spread move). */
function isSpreadMove(moveTarget: string): boolean {
  return moveTarget === 'all-opponents' || moveTarget === 'all-other-pokemon';
}

// ─── Turn resolution ─────────────────────────────────────────

interface ActionEntry {
  action: BattleAction;
  side: Side;
  slot: number;
  priority: number;
  speed: number;
}

function getEffectiveSpeed(pokemon: BattlePokemon, weather: string): number {
  const stats = calcAllStats(pokemon.pokemon.stats, pokemon.ivs, pokemon.evs, pokemon.level, pokemon.nature);
  let speed = getEffectiveStat(stats.speed, pokemon.stat_stages.speed);
  speed = Math.floor(speed * getStatusSpeedModifier(pokemon.status));
  const abilityHandlers = getAbilityHandlers(pokemon.ability);
  if (abilityHandlers?.onModifySpeed) {
    speed = abilityHandlers.onModifySpeed(speed, pokemon, weather as any);
  }
  if (pokemon.held_item) {
    const itemHandlers = getHeldItemHandlers(pokemon.held_item);
    if (itemHandlers?.onModifySpeed) {
      speed = itemHandlers.onModifySpeed(speed, pokemon);
    }
  }
  return speed;
}

function buildActionEntries(
  actions: BattleAction[],
  side: Side,
  sideState: BattleSide,
  weather: string,
): ActionEntry[] {
  return actions.map((action, i) => {
    const slot = action.type === 'move' || action.type === 'switch' ? (action.slot ?? i) : i;
    const pokemon = sideState.team[sideState.active_indices[slot]];
    let priority = 0;
    if (action.type === 'move') {
      const move = pokemon?.moves[action.move_index];
      priority = move ? move.priority : 0;
    } else if (action.type === 'switch') {
      priority = 7;
    } else if (action.type === 'item') {
      priority = 6;
    } else {
      priority = 7;
    }
    const speed = pokemon ? getEffectiveSpeed(pokemon, weather) : 0;
    return { action, side, slot, priority, speed };
  });
}

function sortActions(entries: ActionEntry[]): ActionEntry[] {
  return [...entries].sort((a, b) => {
    if (a.priority !== b.priority) return b.priority - a.priority;
    if (a.speed !== b.speed) return b.speed - a.speed;
    return Math.random() - 0.5;
  });
}

// ─── Core execution ──────────────────────────────────────────

function executeDoublesSwitch(
  state: BattleState,
  side: BattleSide,
  opponentSide: BattleSide,
  sideLabel: string,
  slot: number,
  pokemonIndex: number,
  log: BattleLogEntry[],
): void {
  const oldPokemon = side.team[side.active_indices[slot]];
  side.active_indices[slot] = pokemonIndex;
  if (slot === 0) side.active_index = pokemonIndex;
  const newPokemon = side.team[pokemonIndex];

  if (oldPokemon) {
    oldPokemon.stat_stages = { ...ZERO_STAGES };
    log.push(logEntry(state.turn, `${sideLabel} withdrew ${oldPokemon.nickname}!`, 'switch'));
  }
  log.push(logEntry(state.turn, `${sideLabel} sent out ${newPokemon.nickname}!`, 'switch'));

  applyEntryHazards(side, newPokemon, log, state.turn);
  if (newPokemon.is_fainted) return;

  const abilityHandlers = getAbilityHandlers(newPokemon.ability);
  abilityHandlers?.onSwitchIn?.(newPokemon, side, opponentSide, state, log);
}

function executeDoublesMove(
  state: BattleState,
  attackerSide: BattleSide,
  defenderSide: BattleSide,
  attackerLabel: string,
  slot: number,
  moveIndex: number,
  target: string | undefined,
  log: BattleLogEntry[],
): void {
  const attacker = attackerSide.team[attackerSide.active_indices[slot]];
  if (!attacker || attacker.is_fainted) return;

  const move = attacker.moves[moveIndex];
  if (!move) return;

  if ((attacker.pp[move.name] ?? 0) <= 0) {
    log.push(logEntry(state.turn, `${attacker.nickname} has no PP left for ${move.name}!`, 'info'));
    return;
  }

  // Status checks
  if (attacker.status === 'paralysis' && checkParalysisSkip()) {
    log.push(logEntry(state.turn, `${attacker.nickname} is fully paralyzed!`, 'status'));
    return;
  }
  if (attacker.status === 'freeze') {
    if (checkFreezeThaw()) {
      attacker.status = null; attacker.status_turns = 0;
      log.push(logEntry(state.turn, `${attacker.nickname} thawed out!`, 'status'));
    } else {
      log.push(logEntry(state.turn, `${attacker.nickname} is frozen solid!`, 'status'));
      return;
    }
  }
  if (attacker.status === 'sleep') {
    if (checkSleepWake(attacker)) {
      attacker.status = null; attacker.status_turns = 0;
      log.push(logEntry(state.turn, `${attacker.nickname} woke up!`, 'status'));
    } else {
      log.push(logEntry(state.turn, `${attacker.nickname} is fast asleep!`, 'status'));
      return;
    }
  }

  attacker.pp[move.name] = Math.max(0, (attacker.pp[move.name] ?? 0) - 1);
  log.push(logEntry(state.turn, `${attacker.nickname} used ${move.name}!`, 'move'));

  // ─── OHKO moves (Guillotine, Horn Drill, Fissure, Sheer Cold) ───
  if (move.meta.category === 'ohko') {
    const ohkoTarget = getActivePokemonList(defenderSide)[0];
    if (ohkoTarget && !ohkoTarget.is_fainted) {
      const defAbility = getAbilityHandlers(ohkoTarget.ability);
      if (defAbility?.onTypeImmunity?.(move.type, ohkoTarget)) {
        log.push(logEntry(state.turn, `It doesn't affect ${ohkoTarget.nickname}... (${ohkoTarget.ability})`, 'ability'));
      } else if (checkAccuracy(move, attacker, ohkoTarget)) {
        const damage = ohkoTarget.current_hp;
        applyDamage(ohkoTarget, damage);
        log.push(logEntry(state.turn, `It's a one-hit KO!`, 'damage'));
        log.push(logEntry(state.turn, `${ohkoTarget.nickname} took ${damage} damage! (0/${ohkoTarget.max_hp} HP)`, 'damage'));
        log.push(logEntry(state.turn, `${ohkoTarget.nickname} fainted!`, 'faint'));
      } else {
        log.push(logEntry(state.turn, `${attacker.nickname}'s attack missed!`, 'info'));
      }
    }
    return;
  }

  // ─── Final Gambit ───
  if (move.name === 'final-gambit') {
    const gambitTarget = getActivePokemonList(defenderSide)[0];
    if (gambitTarget && !gambitTarget.is_fainted) {
      const damage = attacker.current_hp;
      applyDamage(gambitTarget, damage);
      log.push(logEntry(state.turn, `${gambitTarget.nickname} took ${damage} damage! (${gambitTarget.current_hp}/${gambitTarget.max_hp} HP)`, 'damage'));
      if (gambitTarget.is_fainted) {
        log.push(logEntry(state.turn, `${gambitTarget.nickname} fainted!`, 'faint'));
      }
    }
    applyDamage(attacker, attacker.current_hp);
    log.push(logEntry(state.turn, `${attacker.nickname} fainted!`, 'faint'));
    return;
  }

  if (move.damage_class !== 'status' && move.power !== null && move.power > 0) {
    // Determine targets
    const targets: BattlePokemon[] = [];
    const isSpread = isSpreadMove(move.target);

    if (isSpread) {
      targets.push(...getActivePokemonList(defenderSide));
    } else {
      let defender: BattlePokemon | null = null;
      if (target === 'opponent-1') {
        defender = getActiveAtSlot(defenderSide, 1);
      } else if (target === 'ally') {
        const partnerSlot = slot === 0 ? 1 : 0;
        defender = getActiveAtSlot(attackerSide, partnerSlot);
      }
      if (!defender) {
        defender = getActiveAtSlot(defenderSide, 0) ?? getActiveAtSlot(defenderSide, 1);
      }
      if (defender) targets.push(defender);
    }

    const spreadMod = isSpread && targets.length > 1 ? 0.75 : 1;

    // Multi-hit moves
    const hitCount = (move.meta.min_hits !== null && move.meta.max_hits !== null)
      ? Math.floor(Math.random() * (move.meta.max_hits - move.meta.min_hits + 1)) + move.meta.min_hits
      : 1;

    let totalDamage = 0;
    let actualHits = 0;

    for (const defender of targets) {
      if (defender.is_fainted) continue;

      const defAbility = getAbilityHandlers(defender.ability);
      if (defAbility?.onTypeImmunity?.(move.type, defender)) {
        log.push(logEntry(state.turn, `It doesn't affect ${defender.nickname}... (${defender.ability})`, 'ability'));
        continue;
      }

      if (!checkAccuracy(move, attacker, defender)) {
        log.push(logEntry(state.turn, `${attacker.nickname}'s attack missed ${defender.nickname}!`, 'info'));
        continue;
      }

      let effectivenessShown = false;

      for (let hitNum = 0; hitNum < hitCount; hitNum++) {
        if (defender.is_fainted) break;
        actualHits++;

        const isCritical = checkCritical(move, attacker, defender);
        const result = calculateDamage(attacker, defender, move, {
          weather: state.weather.type,
          critical_override: isCritical,
          attacker_side: attackerSide,
          defender_side: defenderSide,
        });

        let finalDamage = Math.floor(result.damage * spreadMod);
        finalDamage = checkSturdy(defender, finalDamage);

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
        totalDamage += finalDamage;

        if (result.critical) log.push(logEntry(state.turn, 'A critical hit!', 'damage'));
        if (result.type_message && !effectivenessShown) {
          log.push(logEntry(state.turn, `It's ${result.type_message}!`, 'damage'));
          effectivenessShown = true;
        }
        log.push(logEntry(state.turn, `${defender.nickname} took ${finalDamage} damage! (${defender.current_hp}/${defender.max_hp} HP)`, 'damage'));

        checkHpItems(defender, log, state.turn);

        if (defender.is_fainted) {
          log.push(logEntry(state.turn, `${defender.nickname} fainted!`, 'faint'));
        }
      }

      // Flinch
      if (move.meta.flinch_chance > 0 && !defender.is_fainted) {
        if (Math.random() * 100 < move.meta.flinch_chance) {
          defenderSide.volatile.add('flinch');
        }
      }
    }

    if (hitCount > 1 && actualHits > 0) {
      log.push(logEntry(state.turn, `Hit ${actualHits} time(s)!`, 'info'));
    }

    // Item effects once per move (Life Orb, Shell Bell)
    if (attacker.held_item && totalDamage > 0) {
      const atkItem = getHeldItemHandlers(attacker.held_item);
      atkItem?.onAfterDamageDealt?.(attacker, totalDamage, log, state.turn);
    }

    // Drain (based on total damage)
    if (move.meta.drain > 0 && totalDamage > 0) {
      const healAmount = Math.max(1, Math.floor(totalDamage * move.meta.drain / 100));
      applyHealing(attacker, healAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} drained ${healAmount} HP!`, 'info'));
    }
    // Recoil (based on total damage)
    if (move.meta.drain < 0 && totalDamage > 0) {
      const recoilAmount = Math.max(1, Math.floor(totalDamage * Math.abs(move.meta.drain) / 100));
      applyDamage(attacker, recoilAmount);
      log.push(logEntry(state.turn, `${attacker.nickname} was hurt by recoil! (${recoilAmount} damage)`, 'damage'));
      if (attacker.is_fainted) {
        log.push(logEntry(state.turn, `${attacker.nickname} fainted from recoil!`, 'faint'));
      }
    }
  }

  // Screens
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

  // Hazards
  if (HAZARD_MOVES[move.name]) {
    placeHazard(defenderSide, HAZARD_MOVES[move.name], log, state.turn);
  }

  // Hazard removal
  if (HAZARD_CLEAR_MOVES.has(move.name)) {
    if (move.name === 'rapid-spin') {
      if (attackerSide.entry_hazards.length > 0) removeHazards(attackerSide, log, state.turn);
      attacker.stat_stages.speed = Math.min(6, attacker.stat_stages.speed + 1);
    } else if (move.name === 'defog') {
      if (defenderSide.entry_hazards.length > 0) removeHazards(defenderSide, log, state.turn);
      if (attackerSide.entry_hazards.length > 0) removeHazards(attackerSide, log, state.turn);
      if (defenderSide.reflect_turns > 0) { defenderSide.reflect_turns = 0; }
      if (defenderSide.light_screen_turns > 0) { defenderSide.light_screen_turns = 0; }
    }
  }

  // Self-healing
  if (move.meta.healing > 0 && !attacker.is_fainted) {
    const healAmount = Math.max(1, Math.floor(attacker.max_hp * move.meta.healing / 100));
    applyHealing(attacker, healAmount);
    log.push(logEntry(state.turn, `${attacker.nickname} restored ${healAmount} HP!`, 'info'));
  }

  // ─── Stat changes ───
  if (move.stat_changes.length > 0 && !attacker.is_fainted) {
    const chance = move.meta.stat_chance > 0 ? move.meta.stat_chance : 100;
    if (Math.random() * 100 < chance) {
      const isDamaging = move.damage_class !== 'status' && move.power !== null && move.power > 0;
      const isSelfTargeted = move.target === 'user' || move.target === 'user-and-allies'
        || move.target === 'user-or-ally' || move.target === 'users-field';

      for (const change of move.stat_changes) {
        // Determine target using same logic as singles
        const primaryDefender = getActivePokemonList(defenderSide)[0];
        let statTarget: BattlePokemon;
        let statTargetName: string;

        if (isDamaging && move.meta.stat_chance === 0) {
          statTarget = attacker;
          statTargetName = attacker.nickname;
        } else if (isDamaging) {
          statTarget = change.change > 0 ? attacker : (primaryDefender ?? attacker);
          statTargetName = statTarget.nickname;
        } else if (isSelfTargeted) {
          statTarget = attacker;
          statTargetName = attacker.nickname;
        } else {
          statTarget = primaryDefender ?? attacker;
          statTargetName = statTarget.nickname;
        }

        if (statTarget.is_fainted) continue;

        const statKey = change.stat as keyof typeof statTarget.stat_stages;
        if (!(statKey in statTarget.stat_stages)) continue;
        const oldStage = statTarget.stat_stages[statKey];
        const newStage = Math.max(-6, Math.min(6, oldStage + change.change));
        statTarget.stat_stages[statKey] = newStage;

        if (newStage !== oldStage) {
          const diff = newStage - oldStage;
          const direction = diff > 0 ? 'rose' : 'fell';
          const intensity = Math.abs(diff) >= 3 ? 'drastically' : Math.abs(diff) === 2 ? 'sharply' : '';
          log.push(logEntry(
            state.turn,
            `${statTargetName}'s ${change.stat} ${intensity} ${direction}!`.replace('  ', ' '),
            'info',
          ));
        } else {
          const msg = newStage >= 6
            ? `${statTargetName}'s ${change.stat} won't go any higher!`
            : `${statTargetName}'s ${change.stat} won't go any lower!`;
          log.push(logEntry(state.turn, msg, 'info'));
        }
      }
    }
  }

  // Status ailment (applied to primary target only)
  if (move.meta.ailment !== 'none' && move.meta.ailment !== '') {
    const targets = getActivePokemonList(defenderSide);
    const primaryTarget = targets[0];
    if (primaryTarget && !primaryTarget.is_fainted && primaryTarget.status === null) {
      const ailmentChance = move.meta.ailment_chance > 0 ? move.meta.ailment_chance : 100;
      if (Math.random() * 100 < ailmentChance) {
        const ailment = move.meta.ailment as string;
        const validStatuses = ['burn', 'freeze', 'paralysis', 'poison', 'bad-poison', 'sleep'];
        if (validStatuses.includes(ailment)) {
          tryApplyStatus(primaryTarget, ailment as StatusCondition, log, state.turn);
        }
      }
    }
  }

  // ─── Self-KO moves (Explosion, Self-Destruct, Memento, Healing Wish) ───
  if (move.effect.toLowerCase().includes('user faints') && !attacker.is_fainted) {
    applyDamage(attacker, attacker.current_hp);
    log.push(logEntry(state.turn, `${attacker.nickname} fainted!`, 'faint'));
  }
}

function executeDoublesAction(
  state: BattleState,
  entry: ActionEntry,
  log: BattleLogEntry[],
): void {
  const attackerSide = entry.side === 'player' ? state.player : state.opponent;
  const defenderSide = entry.side === 'player' ? state.opponent : state.player;
  const attackerLabel = entry.side === 'player' ? 'Player' : 'Opponent';

  switch (entry.action.type) {
    case 'move':
      executeDoublesMove(
        state, attackerSide, defenderSide, attackerLabel,
        entry.slot, entry.action.move_index, entry.action.target, log,
      );
      break;
    case 'switch':
      executeDoublesSwitch(
        state, attackerSide, defenderSide, attackerLabel,
        entry.slot, entry.action.pokemon_index, log,
      );
      break;
    case 'flee':
      log.push(logEntry(state.turn, `${attackerLabel} fled from the battle!`, 'info'));
      state.phase = 'finished';
      state.winner = entry.side === 'player' ? 'opponent' : 'player';
      break;
  }
}

function applyDoublesEndOfTurn(state: BattleState, log: BattleLogEntry[]): void {
  // Weather chip damage
  if (state.weather.type !== 'none') {
    for (const side of [state.player, state.opponent]) {
      for (const pokemon of getActivePokemonList(side)) {
        let weatherDmg = applyEndOfTurnWeather(state.weather.type, pokemon);
        if (weatherDmg > 0) {
          const abilityHandlers = getAbilityHandlers(pokemon.ability);
          if (abilityHandlers?.onWeatherDamage) {
            weatherDmg = abilityHandlers.onWeatherDamage(weatherDmg, pokemon, state.weather.type);
          }
        }
        if (weatherDmg > 0) {
          applyDamage(pokemon, weatherDmg);
          const weatherName = state.weather.type === 'sandstorm' ? 'the sandstorm' : 'the hail';
          log.push(logEntry(state.turn, `${pokemon.nickname} was buffeted by ${weatherName}! (${weatherDmg} damage)`, 'weather'));
          if (pokemon.is_fainted) log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
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

  // Status damage
  for (const side of [state.player, state.opponent]) {
    for (const pokemon of getActivePokemonList(side)) {
      if (pokemon.status) {
        pokemon.status_turns += 1;
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
              : pokemon.status === 'bad-poison' ? 'hurt by poison' : '';
            if (statusMsg) log.push(logEntry(state.turn, `${pokemon.nickname} was ${statusMsg}! (${statusDmg} damage)`, 'status'));
            if (pokemon.is_fainted) log.push(logEntry(state.turn, `${pokemon.nickname} fainted!`, 'faint'));
          }
        }
      }
    }
  }

  // Ability end-of-turn
  for (const side of [state.player, state.opponent]) {
    for (const pokemon of getActivePokemonList(side)) {
      const abilityHandlers = getAbilityHandlers(pokemon.ability);
      abilityHandlers?.onEndOfTurn?.(pokemon, side, state, log);
    }
  }

  // Item end-of-turn
  for (const side of [state.player, state.opponent]) {
    for (const pokemon of getActivePokemonList(side)) {
      if (pokemon.held_item) {
        const itemHandlers = getHeldItemHandlers(pokemon.held_item);
        itemHandlers?.onEndOfTurn?.(pokemon, log, state.turn);
      }
    }
  }

  // Decrement screen/tailwind timers
  for (const side of [state.player, state.opponent]) {
    if (side.light_screen_turns > 0) side.light_screen_turns -= 1;
    if (side.reflect_turns > 0) side.reflect_turns -= 1;
    if (side.tailwind_turns > 0) side.tailwind_turns -= 1;
    side.volatile.delete('flinch');
  }
}

function checkDoublesWin(state: BattleState, log: BattleLogEntry[]): void {
  const playerAlive = hasAlivePokemon(state.player);
  const opponentAlive = hasAlivePokemon(state.opponent);

  if (!playerAlive && !opponentAlive) {
    state.phase = 'finished';
    state.winner = null;
    log.push(logEntry(state.turn, "Both sides have no Pokemon left! It's a draw!", 'info'));
  } else if (!playerAlive) {
    state.phase = 'finished';
    state.winner = 'opponent';
    log.push(logEntry(state.turn, 'Player has no Pokemon left! Opponent wins!', 'info'));
  } else if (!opponentAlive) {
    state.phase = 'finished';
    state.winner = 'player';
    log.push(logEntry(state.turn, 'Opponent has no Pokemon left! Player wins!', 'info'));
  } else {
    let needSwitch = false;
    for (const side of [state.player, state.opponent]) {
      for (let s = 0; s < side.active_indices.length; s++) {
        const p = side.team[side.active_indices[s]];
        if (p.is_fainted) {
          const benchIdx = side.team.findIndex((bp, i) => !bp.is_fainted && !side.active_indices.includes(i));
          if (benchIdx >= 0) {
            needSwitch = true;
          }
        }
      }
    }
    state.phase = needSwitch ? 'awaiting-switch' : 'select-action';
  }
}

// ─── Public API ──────────────────────────────────────────────

/**
 * Execute a full doubles turn.
 * Each side provides an array of actions (one per active slot).
 * PURE function — does not mutate input state.
 */
export function executeDoublesTurn(
  state: BattleState,
  playerActions: BattleAction[],
  opponentActions: BattleAction[],
): { state: BattleState; log: BattleLogEntry[] } {
  const newState: BattleState = JSON.parse(JSON.stringify(state, (_key, val) =>
    val instanceof Set ? [...val] : val,
  ));
  newState.player.volatile = new Set(newState.player.volatile as any);
  newState.opponent.volatile = new Set(newState.opponent.volatile as any);

  newState.turn += 1;
  newState.phase = 'executing';

  const turnLog: BattleLogEntry[] = [];

  const allEntries = [
    ...buildActionEntries(playerActions, 'player', newState.player, newState.weather.type),
    ...buildActionEntries(opponentActions, 'opponent', newState.opponent, newState.weather.type),
  ];

  const sorted = sortActions(allEntries);

  for (const entry of sorted) {
    if ((newState.phase as string) === 'finished') break;
    const side = entry.side === 'player' ? newState.player : newState.opponent;
    const actor = side.team[side.active_indices[entry.slot]];
    if (!actor || actor.is_fainted) continue;
    executeDoublesAction(newState, entry, turnLog);
  }

  if ((newState.phase as string) !== 'finished') {
    applyDoublesEndOfTurn(newState, turnLog);
    checkDoublesWin(newState, turnLog);
  }

  newState.log = [...newState.log, ...turnLog];
  return { state: newState, log: turnLog };
}
