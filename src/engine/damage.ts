import type { BattlePokemon, DamageResult, Move, Weather } from '../types';
import { calcAllStats, getEffectiveStat } from './stats';
import { getEffectiveness, getEffectivenessMessage, isSTAB } from './type-effectiveness';
import { getWeatherDamageModifier } from './weather';
import { CRITICAL_MULTIPLIER } from './critical';

/** Options for damage calculation */
export interface DamageCalcOptions {
  weather?: Weather;
  critical_override?: boolean;
  random_override?: number;
}

/**
 * Get the base attack and defense values for a damage calculation,
 * based on the move's damage class (physical or special).
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

  if (move.damage_class === 'physical') {
    const atkStage = isCritical
      ? Math.max(0, attacker.stat_stages.attack)
      : attacker.stat_stages.attack;
    const defStage = isCritical
      ? Math.min(0, defender.stat_stages.defense)
      : defender.stat_stages.defense;
    return {
      attack: getEffectiveStat(atkStats.attack, atkStage),
      defense: getEffectiveStat(defStats.defense, defStage),
    };
  }

  const atkStage = isCritical
    ? Math.max(0, attacker.stat_stages['special-attack'])
    : attacker.stat_stages['special-attack'];
  const defStage = isCritical
    ? Math.min(0, defender.stat_stages['special-defense'])
    : defender.stat_stages['special-defense'];
  return {
    attack: getEffectiveStat(atkStats['special-attack'], atkStage),
    defense: getEffectiveStat(defStats['special-defense'], defStage),
  };
}

/**
 * Calculate damage dealt by a move.
 * Gen V+ formula:
 *   damage = floor(((2*level/5 + 2) * power * A/D) / 50 + 2)
 *            * critical * random * STAB * typeEffectiveness * burn * other
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

  const hasSTAB = isSTAB(move.type, attacker.pokemon.types);
  let stabMod = hasSTAB ? 1.5 : 1;
  if (hasSTAB && attacker.ability.toLowerCase() === 'adaptability') {
    stabMod = 2.0;
  }

  const effectiveness = getEffectiveness(move.type, defender.pokemon.types);
  const typeMessage = getEffectivenessMessage(effectiveness);

  const weather = options.weather ?? 'none';
  const weatherMod = getWeatherDamageModifier(weather, move.type);

  let burnMod = 1;
  if (
    move.damage_class === 'physical' &&
    attacker.status === 'burn' &&
    attacker.ability.toLowerCase() !== 'guts'
  ) {
    burnMod = 0.5;
  }

  const abilityMod = 1;

  const calcWithRandom = (randomFactor: number): number => {
    let dmg = baseDamage;
    dmg = Math.floor(dmg * critMod);
    dmg = Math.floor(dmg * randomFactor);
    dmg = Math.floor(dmg * stabMod);
    dmg = Math.floor(dmg * effectiveness);
    dmg = Math.floor(dmg * weatherMod);
    dmg = Math.floor(dmg * burnMod);
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
    ability_modifier: abilityMod,
  };
}
