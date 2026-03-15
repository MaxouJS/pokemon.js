/**
 * Held-item handler registry for battle effects.
 *
 * Each item is registered by its kebab-case name with optional hooks that the
 * battle engine calls at the appropriate moments.  Consumable items set
 * `pokemon.held_item = null` when they activate.
 */
import type {
  BattlePokemon,
  BattleLogEntry,
  Move,
  StatusCondition,
} from '../types';
import { getEffectiveness } from './type-effectiveness';

// ---------------------------------------------------------------------------
// Hook interface
// ---------------------------------------------------------------------------

export interface HeldItemHandlers {
  /** Modify outgoing damage (attacker's item). */
  onModifyDamage?: (
    damage: number,
    attacker: BattlePokemon,
    defender: BattlePokemon,
    move: Move,
  ) => number;
  /** Modify incoming damage (defender's item). */
  onModifyIncomingDamage?: (
    damage: number,
    attacker: BattlePokemon,
    defender: BattlePokemon,
    move: Move,
  ) => number;
  /** Modify the holder's effective speed. */
  onModifySpeed?: (speed: number, pokemon: BattlePokemon) => number;
  /** Modify the attacker's crit stage. */
  onModifyCritStage?: (stage: number, attacker: BattlePokemon) => number;
  /** Called after the holder deals damage with an attack. */
  onAfterDamageDealt?: (
    attacker: BattlePokemon,
    damage: number,
    log: BattleLogEntry[],
    turn: number,
  ) => void;
  /** Called when the holder takes damage.  Can reduce/redirect and consume. */
  onTakeDamage?: (
    damage: number,
    pokemon: BattlePokemon,
  ) => { damage: number; consumed: boolean };
  /** Called at the end of every turn the holder is on the field. */
  onEndOfTurn?: (
    pokemon: BattlePokemon,
    log: BattleLogEntry[],
    turn: number,
  ) => void;
  /** Called when the holder receives a status.  Return true to cure + consume. */
  onStatusReceived?: (
    pokemon: BattlePokemon,
    status: StatusCondition,
  ) => boolean;
  /** Called when the holder's HP changes.  Return true if the item is consumed. */
  onHpChanged?: (
    pokemon: BattlePokemon,
    log: BattleLogEntry[],
    turn: number,
  ) => boolean;
  /** If true the item locks the holder into one move (Choice items). */
  onRestrictMove?: boolean;
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const ITEM_REGISTRY = new Map<string, HeldItemHandlers>();

function register(name: string, handlers: HeldItemHandlers): void {
  ITEM_REGISTRY.set(name, handlers);
}

// ========================== Damage modifiers (attacker) =====================

register('life-orb', {
  onModifyDamage(damage) {
    return Math.floor(damage * 1.3);
  },
  onAfterDamageDealt(attacker, damage, log, turn) {
    if (damage > 0) {
      const recoil = Math.max(1, Math.floor(attacker.max_hp / 10));
      attacker.current_hp = Math.max(0, attacker.current_hp - recoil);
      log.push({
        turn,
        message: `${attacker.nickname} lost some of its HP due to Life Orb!`,
        type: 'item',
      });
      if (attacker.current_hp === 0) {
        attacker.is_fainted = true;
      }
    }
  },
});

register('choice-band', {
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.damage_class === 'physical') {
      return Math.floor(damage * 1.5);
    }
    return damage;
  },
  onRestrictMove: true,
});

register('choice-specs', {
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.damage_class === 'special') {
      return Math.floor(damage * 1.5);
    }
    return damage;
  },
  onRestrictMove: true,
});

register('muscle-band', {
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.damage_class === 'physical') {
      return Math.floor(damage * 1.1);
    }
    return damage;
  },
});

register('wise-glasses', {
  onModifyDamage(damage, _attacker, _defender, move) {
    if (move.damage_class === 'special') {
      return Math.floor(damage * 1.1);
    }
    return damage;
  },
});

register('expert-belt', {
  onModifyDamage(damage, _attacker, defender, move) {
    const effectiveness = getEffectiveness(move.type, defender.pokemon.types);
    if (effectiveness > 1) {
      return Math.floor(damage * 1.2);
    }
    return damage;
  },
});

// ========================== Speed modifiers =================================

register('choice-scarf', {
  onModifySpeed(speed) {
    return Math.floor(speed * 1.5);
  },
  onRestrictMove: true,
});

register('iron-ball', {
  onModifySpeed(speed) {
    return Math.floor(speed * 0.5);
  },
});

register('macho-brace', {
  onModifySpeed(speed) {
    return Math.floor(speed * 0.5);
  },
});

// ========================== Crit stage ======================================

register('scope-lens', {
  onModifyCritStage(stage) {
    return stage + 1;
  },
});

register('razor-claw', {
  onModifyCritStage(stage) {
    return stage + 1;
  },
});

// ========================== After damage dealt ==============================

register('shell-bell', {
  onAfterDamageDealt(attacker, damage, log, turn) {
    if (damage > 0) {
      const heal = Math.max(1, Math.floor(damage / 8));
      attacker.current_hp = Math.min(attacker.max_hp, attacker.current_hp + heal);
      log.push({
        turn,
        message: `${attacker.nickname} restored a little HP using its Shell Bell!`,
        type: 'item',
      });
    }
  },
});

// ========================== On take damage ==================================

register('focus-sash', {
  onTakeDamage(damage, pokemon) {
    if (
      pokemon.current_hp >= pokemon.max_hp &&
      damage >= pokemon.current_hp
    ) {
      pokemon.held_item = null;
      return { damage: pokemon.current_hp - 1, consumed: true };
    }
    return { damage, consumed: false };
  },
});

register('focus-band', {
  onTakeDamage(damage, pokemon) {
    if (damage >= pokemon.current_hp && Math.random() < 0.1) {
      pokemon.held_item = null;
      return { damage: pokemon.current_hp - 1, consumed: true };
    }
    return { damage, consumed: false };
  },
});

// ========================== End of turn =====================================

register('leftovers', {
  onEndOfTurn(pokemon, log, turn) {
    if (!pokemon.is_fainted && pokemon.current_hp < pokemon.max_hp) {
      const heal = Math.max(1, Math.floor(pokemon.max_hp / 16));
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
      log.push({
        turn,
        message: `${pokemon.nickname} restored a little HP with its Leftovers!`,
        type: 'item',
      });
    }
  },
});

register('black-sludge', {
  onEndOfTurn(pokemon, log, turn) {
    if (pokemon.is_fainted) return;
    const isPoison = pokemon.pokemon.types.includes('poison');
    if (isPoison) {
      if (pokemon.current_hp < pokemon.max_hp) {
        const heal = Math.max(1, Math.floor(pokemon.max_hp / 16));
        pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
        log.push({
          turn,
          message: `${pokemon.nickname} restored a little HP with its Black Sludge!`,
          type: 'item',
        });
      }
    } else {
      const dmg = Math.max(1, Math.floor(pokemon.max_hp / 8));
      pokemon.current_hp = Math.max(0, pokemon.current_hp - dmg);
      log.push({
        turn,
        message: `${pokemon.nickname} was hurt by its Black Sludge!`,
        type: 'item',
      });
      if (pokemon.current_hp === 0) {
        pokemon.is_fainted = true;
      }
    }
  },
});

// ========================== Status cure berries =============================

function makeStatusBerry(
  berryName: string,
  cures: StatusCondition[] | 'all',
): HeldItemHandlers {
  return {
    onStatusReceived(pokemon, status) {
      if (cures === 'all' || cures.includes(status)) {
        pokemon.status = null;
        pokemon.status_turns = 0;
        pokemon.held_item = null;
        return true;
      }
      return false;
    },
  };
}

register('lum-berry', makeStatusBerry('Lum Berry', 'all'));
register('cheri-berry', makeStatusBerry('Cheri Berry', ['paralysis']));
register('chesto-berry', makeStatusBerry('Chesto Berry', ['sleep']));
register('pecha-berry', makeStatusBerry('Pecha Berry', ['poison', 'bad-poison']));
register('rawst-berry', makeStatusBerry('Rawst Berry', ['burn']));
register('aspear-berry', makeStatusBerry('Aspear Berry', ['freeze']));

// ========================== HP threshold berries ============================

register('sitrus-berry', {
  onHpChanged(pokemon, log, turn) {
    if (
      !pokemon.is_fainted &&
      pokemon.current_hp <= Math.floor(pokemon.max_hp / 2)
    ) {
      const heal = Math.max(1, Math.floor(pokemon.max_hp / 4));
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + heal);
      pokemon.held_item = null;
      log.push({
        turn,
        message: `${pokemon.nickname} restored HP using its Sitrus Berry!`,
        type: 'item',
      });
      return true;
    }
    return false;
  },
});

register('oran-berry', {
  onHpChanged(pokemon, log, turn) {
    if (
      !pokemon.is_fainted &&
      pokemon.current_hp <= Math.floor(pokemon.max_hp / 2)
    ) {
      pokemon.current_hp = Math.min(pokemon.max_hp, pokemon.current_hp + 10);
      pokemon.held_item = null;
      log.push({
        turn,
        message: `${pokemon.nickname} restored HP using its Oran Berry!`,
        type: 'item',
      });
      return true;
    }
    return false;
  },
});

// ========================== Defensive items (incoming damage) ================

register('eviolite', {
  // NOTE: Should only apply to Pokemon that are not fully evolved.
  // Evolution checks are not available here; refine later.
  onModifyIncomingDamage(damage) {
    return Math.floor(damage * 0.67);
  },
});

register('assault-vest', {
  onModifyIncomingDamage(damage, _attacker, _defender, move) {
    if (move.damage_class === 'special') {
      return Math.floor(damage * 0.67);
    }
    return damage;
  },
});

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Look up the held-item handler set for the given item name.
 * Names are matched in lowercase/kebab-case form.
 */
export function getHeldItemHandlers(itemName: string): HeldItemHandlers | undefined {
  return ITEM_REGISTRY.get(itemName.toLowerCase());
}
