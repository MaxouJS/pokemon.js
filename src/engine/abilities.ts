/**
 * Ability handler registry for battle effects.
 *
 * Each ability is registered by its kebab-case name with optional hooks
 * that the battle engine calls at the appropriate moments.
 */
import type {
  BattlePokemon,
  BattleSide,
  BattleState,
  BattleLogEntry,
  Move,
  StatusCondition,
  Weather,
} from '../types';
import { getEffectiveness } from './type-effectiveness';

// ---------------------------------------------------------------------------
// Hook interface
// ---------------------------------------------------------------------------

export interface AbilityHandlers {
  onSwitchIn?: (
    pokemon: BattlePokemon,
    side: BattleSide,
    opponentSide: BattleSide,
    state: BattleState,
    log: BattleLogEntry[],
  ) => void;
  onModifyAtk?: (attack: number, attacker: BattlePokemon, move: Move) => number;
  onModifyDef?: (defense: number, defender: BattlePokemon, move: Move) => number;
  onModifyDamage?: (
    damage: number,
    attacker: BattlePokemon,
    defender: BattlePokemon,
    move: Move,
  ) => number;
  onModifySpeed?: (speed: number, pokemon: BattlePokemon, weather: Weather) => number;
  onModifyCritStage?: (stage: number, attacker: BattlePokemon) => number;
  onPreventCrit?: (defender: BattlePokemon) => boolean;
  onStatusAttempt?: (status: StatusCondition, target: BattlePokemon) => boolean; // false = blocked
  onWeatherDamage?: (damage: number, pokemon: BattlePokemon, weather: Weather) => number; // 0 = immune
  onEndOfTurn?: (
    pokemon: BattlePokemon,
    side: BattleSide,
    state: BattleState,
    log: BattleLogEntry[],
  ) => void;
  onBurnModify?: (mod: number, attacker: BattlePokemon) => number; // 1 = no burn penalty
  onTypeImmunity?: (moveType: string, defender: BattlePokemon) => boolean; // true = immune
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** True when the attacker's HP is at or below 1/3 of its max. */
function isInPinch(pokemon: BattlePokemon): boolean {
  return pokemon.current_hp <= Math.floor(pokemon.max_hp / 3);
}

/** Clamp a stat stage to the [-6, +6] range. */
function clampStage(stage: number): number {
  return Math.max(-6, Math.min(6, stage));
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const ABILITY_REGISTRY = new Map<string, AbilityHandlers>();

function register(name: string, handlers: AbilityHandlers): void {
  ABILITY_REGISTRY.set(name, handlers);
}

// ========================== Weather setters ================================

register('drizzle', {
  onSwitchIn(_pokemon, _side, _opponentSide, state, log) {
    state.weather = { type: 'rain', turns_remaining: 5 };
    log.push({ turn: state.turn, message: 'It started to rain!', type: 'weather' });
  },
});

register('drought', {
  onSwitchIn(_pokemon, _side, _opponentSide, state, log) {
    state.weather = { type: 'sun', turns_remaining: 5 };
    log.push({ turn: state.turn, message: 'The sunlight turned harsh!', type: 'weather' });
  },
});

register('sand-stream', {
  onSwitchIn(_pokemon, _side, _opponentSide, state, log) {
    state.weather = { type: 'sandstorm', turns_remaining: 5 };
    log.push({ turn: state.turn, message: 'A sandstorm kicked up!', type: 'weather' });
  },
});

register('snow-warning', {
  onSwitchIn(_pokemon, _side, _opponentSide, state, log) {
    state.weather = { type: 'hail', turns_remaining: 5 };
    log.push({ turn: state.turn, message: 'It started to hail!', type: 'weather' });
  },
});

// ========================== Intimidate =====================================

register('intimidate', {
  onSwitchIn(pokemon, _side, opponentSide, state, log) {
    const target = opponentSide.team[opponentSide.active_index];
    if (target && !target.is_fainted) {
      target.stat_stages.attack = clampStage(target.stat_stages.attack - 1);
      log.push({
        turn: state.turn,
        message: `${pokemon.nickname}'s Intimidate cut ${target.nickname}'s Attack!`,
        type: 'ability',
      });
    }
  },
});

// ========================== Pinch abilities =================================

function makePinchAbility(moveType: string): AbilityHandlers {
  return {
    onModifyDamage(damage, attacker, _defender, move) {
      if (move.type === moveType && isInPinch(attacker)) {
        return Math.floor(damage * 1.5);
      }
      return damage;
    },
  };
}

register('overgrow', makePinchAbility('grass'));
register('blaze', makePinchAbility('fire'));
register('torrent', makePinchAbility('water'));
register('swarm', makePinchAbility('bug'));

// ========================== Stat doublers (attack) =========================

function makeAttackDoubler(): AbilityHandlers {
  return {
    onModifyAtk(attack, _attacker, move) {
      if (move.damage_class === 'physical') {
        return attack * 2;
      }
      return attack;
    },
  };
}

register('huge-power', makeAttackDoubler());
register('pure-power', makeAttackDoubler());

// ========================== Speed abilities =================================

register('swift-swim', {
  onModifySpeed(speed, _pokemon, weather) {
    return weather === 'rain' ? speed * 2 : speed;
  },
});

register('chlorophyll', {
  onModifySpeed(speed, _pokemon, weather) {
    return weather === 'sun' ? speed * 2 : speed;
  },
});

register('sand-rush', {
  onModifySpeed(speed, _pokemon, weather) {
    return weather === 'sandstorm' ? speed * 2 : speed;
  },
});

register('speed-boost', {
  onEndOfTurn(pokemon, _side, state, log) {
    pokemon.stat_stages.speed = clampStage(pokemon.stat_stages.speed + 1);
    log.push({
      turn: state.turn,
      message: `${pokemon.nickname}'s Speed Boost raised its Speed!`,
      type: 'ability',
    });
  },
});

// ========================== Crit modifiers ==================================

register('super-luck', {
  onModifyCritStage(stage) {
    return stage + 1;
  },
});

register('battle-armor', {
  onPreventCrit() {
    return true;
  },
});

register('shell-armor', {
  onPreventCrit() {
    return true;
  },
});

// ========================== Status immunity =================================

function makeStatusBlocker(...blocked: StatusCondition[]): AbilityHandlers {
  return {
    onStatusAttempt(status) {
      return !blocked.includes(status); // false = blocked
    },
  };
}

register('immunity', makeStatusBlocker('poison', 'bad-poison'));
register('limber', makeStatusBlocker('paralysis'));
register('insomnia', makeStatusBlocker('sleep'));
register('vital-spirit', makeStatusBlocker('sleep'));
register('water-veil', makeStatusBlocker('burn'));
register('magma-armor', makeStatusBlocker('freeze'));

// ========================== Weather immunity ================================

register('magic-guard', {
  onWeatherDamage() {
    return 0;
  },
});

register('overcoat', {
  onWeatherDamage() {
    return 0;
  },
});

register('ice-body', {
  onWeatherDamage(_damage, _pokemon, weather) {
    if (weather === 'hail') return 0;
    return _damage;
  },
  onEndOfTurn(pokemon, _side, state, log) {
    if (state.weather.type === 'hail' && !pokemon.is_fainted) {
      const heal = Math.max(1, Math.floor(pokemon.max_hp / 16));
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
      log.push({
        turn: state.turn,
        message: `${pokemon.nickname}'s Ice Body restored a little HP!`,
        type: 'ability',
      });
    }
  },
});

register('rain-dish', {
  onWeatherDamage(_damage, _pokemon, weather) {
    if (weather === 'rain') return 0;
    return _damage;
  },
  onEndOfTurn(pokemon, _side, state, log) {
    if (state.weather.type === 'rain' && !pokemon.is_fainted) {
      const heal = Math.max(1, Math.floor(pokemon.max_hp / 16));
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
      log.push({
        turn: state.turn,
        message: `${pokemon.nickname}'s Rain Dish restored a little HP!`,
        type: 'ability',
      });
    }
  },
});

// ========================== Burn modifier ===================================

register('guts', {
  onBurnModify() {
    return 1; // no burn penalty
  },
  onModifyAtk(attack, attacker, move) {
    if (attacker.status === 'burn' && move.damage_class === 'physical') {
      return Math.floor(attack * 1.5);
    }
    return attack;
  },
});

// ========================== STAB / damage mods ==============================

register('adaptability', {
  onModifyDamage(damage, attacker, _defender, move) {
    // The base STAB is 1.5x. Adaptability upgrades it to 2.0x.
    // Multiply by 2/1.5 ≈ 1.333x to convert the already-applied 1.5x into 2.0x.
    if (attacker.pokemon.types.includes(move.type)) {
      return Math.floor(damage * (4 / 3));
    }
    return damage;
  },
});

register('technician', {
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.power !== null && move.power <= 60) {
      return Math.floor(damage * 1.5);
    }
    return damage;
  },
});

register('sheer-force', {
  onModifyDamage(damage, _attacker, _defender, move) {
    const hasSecondary =
      move.meta.ailment_chance > 0 ||
      move.meta.stat_chance > 0 ||
      move.meta.flinch_chance > 0;
    if (hasSecondary) {
      return Math.floor(damage * 1.3);
    }
    return damage;
  },
});

// ========================== Type immunity ===================================

register('levitate', {
  onTypeImmunity(moveType) {
    return moveType === 'ground';
  },
});

register('wonder-guard', {
  onTypeImmunity(moveType, defender) {
    const effectiveness = getEffectiveness(
      moveType as import('../types').PokemonTypeName,
      defender.pokemon.types,
    );
    // Immune to everything that is not super-effective
    return effectiveness <= 1;
  },
});

register('volt-absorb', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'electric') {
      const heal = Math.max(1, Math.floor(defender.max_hp / 4));
      defender.current_hp = Math.min(defender.max_hp, defender.current_hp + heal);
      return true;
    }
    return false;
  },
});

register('water-absorb', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'water') {
      const heal = Math.max(1, Math.floor(defender.max_hp / 4));
      defender.current_hp = Math.min(defender.max_hp, defender.current_hp + heal);
      return true;
    }
    return false;
  },
});

register('flash-fire', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'fire') {
      // Set a flag on the side's volatile_data so fire moves deal 1.5x later.
      // We store it directly on the pokemon's holder side via volatile_data keyed to the pokemon.
      // Since we only have the defender here, we use a convention:
      // volatile_data['flash-fire'] = 1 means activated.
      // The battle engine must read this when the pokemon attacks with fire.
      // For now we cannot access the side, so we mark it on the pokemon object as a best-effort.
      // A numeric flag stored as a property that the engine can check.
      (defender as BattlePokemon & { _flash_fire_activated?: boolean })._flash_fire_activated = true;
      return true;
    }
    return false;
  },
});

register('lightning-rod', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'electric') {
      defender.stat_stages['special-attack'] = clampStage(
        defender.stat_stages['special-attack'] + 1,
      );
      return true;
    }
    return false;
  },
});

register('motor-drive', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'electric') {
      defender.stat_stages.speed = clampStage(defender.stat_stages.speed + 1);
      return true;
    }
    return false;
  },
});

register('sap-sipper', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'grass') {
      defender.stat_stages.attack = clampStage(defender.stat_stages.attack + 1);
      return true;
    }
    return false;
  },
});

register('dry-skin', {
  onTypeImmunity(moveType, defender) {
    if (moveType === 'water') {
      const heal = Math.max(1, Math.floor(defender.max_hp / 4));
      defender.current_hp = Math.min(defender.max_hp, defender.current_hp + heal);
      return true;
    }
    // Fire weakness handled via onModifyDamage
    return false;
  },
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.type === 'fire') {
      return Math.floor(damage * 1.25);
    }
    return damage;
  },
});

// ========================== Defensive modifiers =============================

register('multiscale', {
  onModifyDamage(damage, _attacker, defender) {
    if (defender.current_hp >= defender.max_hp) {
      return Math.floor(damage * 0.5);
    }
    return damage;
  },
});

register('solid-rock', {
  onModifyDamage(damage, _attacker, defender, move) {
    const effectiveness = getEffectiveness(
      move.type as import('../types').PokemonTypeName,
      defender.pokemon.types,
    );
    if (effectiveness > 1) {
      return Math.floor(damage * 0.75);
    }
    return damage;
  },
});

register('filter', {
  onModifyDamage(damage, _attacker, defender, move) {
    const effectiveness = getEffectiveness(
      move.type as import('../types').PokemonTypeName,
      defender.pokemon.types,
    );
    if (effectiveness > 1) {
      return Math.floor(damage * 0.75);
    }
    return damage;
  },
});

// ========================== Poison Heal =====================================

register('poison-heal', {
  onEndOfTurn(pokemon, _side, state, log) {
    if (
      !pokemon.is_fainted &&
      (pokemon.status === 'poison' || pokemon.status === 'bad-poison')
    ) {
      const heal = Math.max(1, Math.floor(pokemon.max_hp / 8));
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
      log.push({
        turn: state.turn,
        message: `${pokemon.nickname}'s Poison Heal restored HP!`,
        type: 'ability',
      });
    }
  },
});

// ---------------------------------------------------------------------------
// Sturdy (special — standalone function)
// ---------------------------------------------------------------------------

/**
 * If the Pokemon has the Sturdy ability, is at full HP, and the incoming
 * damage would KO it, cap the damage so it survives with 1 HP.
 */
export function checkSturdy(pokemon: BattlePokemon, damage: number): number {
  if (
    pokemon.ability.toLowerCase() === 'sturdy' &&
    pokemon.current_hp >= pokemon.max_hp &&
    damage >= pokemon.current_hp
  ) {
    return pokemon.current_hp - 1;
  }
  return damage;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Look up the ability handler set for the given ability name.
 * Names are matched in lowercase/kebab-case form.
 */
export function getAbilityHandlers(abilityName: string): AbilityHandlers | undefined {
  return ABILITY_REGISTRY.get(abilityName.toLowerCase());
}
