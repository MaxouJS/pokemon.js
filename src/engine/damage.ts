import type { BattlePokemon, BattleSide, DamageResult, Move, Weather } from '../types';
import { calcAllStats, getEffectiveStat } from './stats';
import { getEffectiveness, getEffectivenessMessage, isSTAB } from './type-effectiveness';
import { getWeatherDamageModifier } from './weather';
import { CRITICAL_MULTIPLIER } from './critical';
import { getAbilityHandlers } from './abilities';
import { getHeldItemHandlers } from './held-items';

/** Options for damage calculation */
export interface DamageCalcOptions {
  weather?: Weather;
  critical_override?: boolean;
  random_override?: number;
  /** Pass the attacker's side for screen checks (Reflect/Light Screen) */
  attacker_side?: BattleSide;
  /** Pass the defender's side for screen checks (Reflect/Light Screen) */
  defender_side?: BattleSide;
}

/**
 * Get the base attack and defense values for a damage calculation,
 * based on the move's damage class (physical or special).
 * Applies ability onModifyAtk/onModifyDef hooks.
 */
function getAtkDef(
  attacker: BattlePokemon,
  defender: BattlePokemon,
  move: Move,
  isCritical: boolean,
): { attack: number; defense: number } {
  const atkStats = calcAllStats(
    attacker.pokemon.stats,
    attacker.ivs,
    attacker.evs,
    attacker.level,
    attacker.nature,
  );
  const defStats = calcAllStats(
    defender.pokemon.stats,
    defender.ivs,
    defender.evs,
    defender.level,
    defender.nature,
  );

  let attack: number;
  let defense: number;

  if (move.damage_class === 'physical') {
    const atkStage = isCritical
      ? Math.max(0, attacker.stat_stages.attack)
      : attacker.stat_stages.attack;
    const defStage = isCritical
      ? Math.min(0, defender.stat_stages.defense)
      : defender.stat_stages.defense;
    attack = getEffectiveStat(atkStats.attack, atkStage);
    defense = getEffectiveStat(defStats.defense, defStage);
  } else {
    const atkStage = isCritical
      ? Math.max(0, attacker.stat_stages['special-attack'])
      : attacker.stat_stages['special-attack'];
    const defStage = isCritical
      ? Math.min(0, defender.stat_stages['special-defense'])
      : defender.stat_stages['special-defense'];
    attack = getEffectiveStat(atkStats['special-attack'], atkStage);
    defense = getEffectiveStat(defStats['special-defense'], defStage);
  }

  // Ability attack modifier (Huge Power, Pure Power, Guts)
  const atkAbility = getAbilityHandlers(attacker.ability);
  if (atkAbility?.onModifyAtk) {
    attack = atkAbility.onModifyAtk(attack, attacker, move);
  }

  // Ability defense modifier (if any future abilities need it)
  const defAbility = getAbilityHandlers(defender.ability);
  if (defAbility?.onModifyDef) {
    defense = defAbility.onModifyDef(defense, defender, move);
  }

  return { attack, defense };
}

/**
 * Calculate damage dealt by a move.
 * Gen V+ formula:
 *   damage = floor(((2*level/5 + 2) * power * A/D) / 50 + 2)
 *            * critical * random * STAB * typeEffectiveness * weather * burn * screen * abilities * items
 */
export function calculateDamage(
  attacker: BattlePokemon,
  defender: BattlePokemon,
  move: Move,
  options: DamageCalcOptions = {},
): DamageResult {
  if (move.damage_class === 'status' || move.power === null || move.power === 0) {
    return {
      damage: 0,
      min_damage: 0,
      max_damage: 0,
      effectiveness: 1,
      critical: false,
      stab: false,
      type_message: '',
      weather_modifier: 1,
      ability_modifier: 1,
    };
  }

  const level = attacker.level;
  const power = move.power;
  const isCritical = options.critical_override ?? false;
  const { attack, defense } = getAtkDef(attacker, defender, move, isCritical);

  const baseDamage = Math.floor(
    ((2 * level / 5 + 2) * power * attack / defense) / 50 + 2
  );

  const critMod = isCritical ? CRITICAL_MULTIPLIER : 1;

  // STAB — ability handlers (Adaptability) adjust after base STAB
  const hasSTAB = isSTAB(move.type, attacker.pokemon.types);
  const stabMod = hasSTAB ? 1.5 : 1;

  const effectiveness = getEffectiveness(move.type, defender.pokemon.types);
  const typeMessage = getEffectivenessMessage(effectiveness);

  const weather = options.weather ?? 'none';
  const weatherMod = getWeatherDamageModifier(weather, move.type);

  // Burn modifier — ability onBurnModify can override (Guts)
  let burnMod = 1;
  if (move.damage_class === 'physical' && attacker.status === 'burn') {
    burnMod = 0.5;
    const atkAbility = getAbilityHandlers(attacker.ability);
    if (atkAbility?.onBurnModify) {
      burnMod = atkAbility.onBurnModify(burnMod, attacker);
    }
  }

  // Screen modifier — Reflect halves physical, Light Screen halves special
  // Crits bypass screens
  let screenMod = 1;
  if (!isCritical && options.defender_side) {
    if (move.damage_class === 'physical' && options.defender_side.reflect_turns > 0) {
      screenMod = 0.5;
    } else if (move.damage_class === 'special' && options.defender_side.light_screen_turns > 0) {
      screenMod = 0.5;
    }
  }

  const calcWithRandom = (randomFactor: number): number => {
    let dmg = baseDamage;
    dmg = Math.floor(dmg * critMod);
    dmg = Math.floor(dmg * randomFactor);
    dmg = Math.floor(dmg * stabMod);
    dmg = Math.floor(dmg * effectiveness);
    dmg = Math.floor(dmg * weatherMod);
    dmg = Math.floor(dmg * burnMod);
    dmg = Math.floor(dmg * screenMod);

    // Attacker ability damage modifier (Adaptability, Technician, Sheer Force, pinch abilities, etc.)
    const atkAbility = getAbilityHandlers(attacker.ability);
    if (atkAbility?.onModifyDamage) {
      dmg = atkAbility.onModifyDamage(dmg, attacker, defender, move);
    }

    // Defender ability damage modifier (Multiscale, Solid Rock, Filter, etc.)
    const defAbility = getAbilityHandlers(defender.ability);
    if (defAbility?.onModifyDamage) {
      dmg = defAbility.onModifyDamage(dmg, attacker, defender, move);
    }

    // Attacker held item damage modifier (Life Orb, Choice Band/Specs, Expert Belt, etc.)
    if (attacker.held_item) {
      const atkItem = getHeldItemHandlers(attacker.held_item);
      if (atkItem?.onModifyDamage) {
        dmg = atkItem.onModifyDamage(dmg, attacker, defender, move);
      }
    }

    // Defender held item incoming damage modifier (Eviolite, Assault Vest)
    if (defender.held_item) {
      const defItem = getHeldItemHandlers(defender.held_item);
      if (defItem?.onModifyIncomingDamage) {
        dmg = defItem.onModifyIncomingDamage(dmg, attacker, defender, move);
      }
    }

    return Math.max(effectiveness > 0 ? 1 : 0, dmg);
  };

  const minDamage = calcWithRandom(0.85);
  const maxDamage = calcWithRandom(1.0);

  let randomFactor: number;
  if (options.random_override !== undefined) {
    randomFactor = options.random_override;
  } else {
    const roll = Math.floor(Math.random() * 16) + 85;
    randomFactor = roll / 100;
  }
  const damage = calcWithRandom(randomFactor);

  return {
    damage,
    min_damage: minDamage,
    max_damage: maxDamage,
    effectiveness,
    critical: isCritical,
    stab: hasSTAB,
    type_message: typeMessage,
    weather_modifier: weatherMod,
    ability_modifier: 1,
  };
}
