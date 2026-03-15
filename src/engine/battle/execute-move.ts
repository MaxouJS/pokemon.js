import type {
  BattleLogEntry,
  BattleSide,
  BattleState,
  StatusCondition,
} from '../../types';
import { calculateDamage } from '../damage';
import { checkAccuracy } from '../accuracy';
import { checkCritical } from '../critical';
import {
  checkParalysisSkip,
  checkFreezeThaw,
  checkSleepWake,
} from '../status';
import { getAbilityHandlers, checkSturdy } from '../abilities';
import { getHeldItemHandlers } from '../held-items';
import { placeHazard, removeHazards } from '../hazards';
import {
  getActivePokemon,
  logEntry,
  applyDamage,
  applyHealing,
  tryApplyStatus,
  checkHpItems,
  HAZARD_MOVES,
  SCREEN_MOVES,
  HAZARD_CLEAR_MOVES,
} from './helpers';

export function executeMove(
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

    if (attacker.held_item && finalDamage > 0) {
      const atkItem = getHeldItemHandlers(attacker.held_item);
      atkItem?.onAfterDamageDealt?.(attacker, finalDamage, log, state.turn);
    }

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
      if (attackerSide.entry_hazards.length > 0) {
        removeHazards(attackerSide, log, state.turn);
      }
      attacker.stat_stages.speed = Math.min(6, attacker.stat_stages.speed + 1);
      log.push(logEntry(state.turn, `${attacker.nickname}'s Speed rose!`, 'info'));
    } else if (move.name === 'defog') {
      if (defenderSide.entry_hazards.length > 0) {
        removeHazards(defenderSide, log, state.turn);
      }
      if (attackerSide.entry_hazards.length > 0) {
        removeHazards(attackerSide, log, state.turn);
      }
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
