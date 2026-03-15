import type { BattlePokemon, BattleSide, BattleLogEntry, EntryHazard } from '../types';
import { getEffectiveness } from './type-effectiveness';

/**
 * Attempt to place an entry hazard on the given side.
 * Returns true if the hazard was successfully placed, false if already at max layers.
 */
export function placeHazard(
  side: BattleSide,
  hazardType: EntryHazard['type'],
  log: BattleLogEntry[],
  turn: number,
): boolean {
  const existing = side.entry_hazards.find((h) => h.type === hazardType);

  switch (hazardType) {
    case 'stealth-rock': {
      if (existing) {
        log.push({ turn, message: 'Pointed stones are already on the field!', type: 'info' });
        return false;
      }
      side.entry_hazards.push({ type: 'stealth-rock', layers: 1 });
      log.push({ turn, message: 'Pointed stones float in the air around the opposing team!', type: 'info' });
      return true;
    }

    case 'spikes': {
      if (existing) {
        if (existing.layers >= 3) {
          log.push({ turn, message: 'Spikes are already at maximum layers!', type: 'info' });
          return false;
        }
        existing.layers++;
      } else {
        side.entry_hazards.push({ type: 'spikes', layers: 1 });
      }
      log.push({ turn, message: 'Spikes were scattered on the ground around the opposing team!', type: 'info' });
      return true;
    }

    case 'toxic-spikes': {
      if (existing) {
        if (existing.layers >= 2) {
          log.push({ turn, message: 'Poison spikes are already at maximum layers!', type: 'info' });
          return false;
        }
        existing.layers++;
      } else {
        side.entry_hazards.push({ type: 'toxic-spikes', layers: 1 });
      }
      log.push({ turn, message: 'Poison spikes were scattered on the ground around the opposing team!', type: 'info' });
      return true;
    }

    case 'sticky-web': {
      if (existing) {
        log.push({ turn, message: 'A sticky web is already on the field!', type: 'info' });
        return false;
      }
      side.entry_hazards.push({ type: 'sticky-web', layers: 1 });
      log.push({ turn, message: 'A sticky web has been laid out on the ground around the opposing team!', type: 'info' });
      return true;
    }
  }
}

/**
 * Apply all entry hazard effects when a Pokemon switches into the given side.
 * Handles stealth rock damage, spikes damage, toxic spikes poison, and sticky web speed drop.
 */
export function applyEntryHazards(
  side: BattleSide,
  pokemon: BattlePokemon,
  log: BattleLogEntry[],
  turn: number,
): void {
  if (side.entry_hazards.length === 0) return;

  const types = pokemon.pokemon.types;
  const isFlying = types.includes('flying');
  const hasLevitate = pokemon.ability.toLowerCase() === 'levitate';
  const isGroundImmune = isFlying || hasLevitate;
  const isPoison = types.includes('poison');
  const isSteel = types.includes('steel');

  for (let i = side.entry_hazards.length - 1; i >= 0; i--) {
    const hazard = side.entry_hazards[i];

    switch (hazard.type) {
      case 'stealth-rock': {
        const effectiveness = getEffectiveness('rock', types);
        if (effectiveness === 0) break;
        const damage = Math.max(1, Math.floor(pokemon.max_hp * effectiveness / 8));
        pokemon.current_hp = Math.max(0, pokemon.current_hp - damage);
        log.push({ turn, message: `Pointed stones dug into ${pokemon.nickname}! (${damage} damage)`, type: 'damage' });
        break;
      }

      case 'spikes': {
        if (isGroundImmune) break;
        const fractions: Record<number, number> = { 1: 1 / 8, 2: 1 / 6, 3: 1 / 4 };
        const fraction = fractions[hazard.layers] ?? 1 / 8;
        const damage = Math.max(1, Math.floor(pokemon.max_hp * fraction));
        pokemon.current_hp = Math.max(0, pokemon.current_hp - damage);
        log.push({ turn, message: `${pokemon.nickname} was hurt by the spikes! (${damage} damage)`, type: 'damage' });
        break;
      }

      case 'toxic-spikes': {
        if (isGroundImmune) break;

        // Poison types absorb toxic spikes
        if (isPoison) {
          side.entry_hazards.splice(i, 1);
          log.push({ turn, message: `${pokemon.nickname} absorbed the Toxic Spikes!`, type: 'info' });
          break;
        }

        // Steel types are immune to poisoning
        if (isSteel) break;

        // Only apply if the Pokemon has no existing status
        if (pokemon.status !== null) break;

        if (hazard.layers >= 2) {
          pokemon.status = 'bad-poison';
          log.push({ turn, message: `${pokemon.nickname} was badly poisoned by the Toxic Spikes!`, type: 'status' });
        } else {
          pokemon.status = 'poison';
          log.push({ turn, message: `${pokemon.nickname} was poisoned by the Toxic Spikes!`, type: 'status' });
        }
        break;
      }

      case 'sticky-web': {
        if (isGroundImmune) break;
        pokemon.stat_stages.speed = Math.max(-6, pokemon.stat_stages.speed - 1);
        log.push({ turn, message: `${pokemon.nickname}'s Speed fell due to the Sticky Web!`, type: 'info' });
        break;
      }
    }
  }

  // Check for faint after all hazard damage is applied
  if (pokemon.current_hp <= 0) {
    pokemon.current_hp = 0;
    pokemon.is_fainted = true;
    pokemon.status = null;
  }
}

/**
 * Remove all entry hazards from a side (e.g. via Rapid Spin or Defog).
 * Logs each hazard type that was removed.
 */
export function removeHazards(
  side: BattleSide,
  log: BattleLogEntry[],
  turn: number,
): void {
  for (const hazard of side.entry_hazards) {
    switch (hazard.type) {
      case 'stealth-rock':
        log.push({ turn, message: 'The pointed stones disappeared from around the team!', type: 'info' });
        break;
      case 'spikes':
        log.push({ turn, message: 'The spikes disappeared from around the team!', type: 'info' });
        break;
      case 'toxic-spikes':
        log.push({ turn, message: 'The poison spikes disappeared from around the team!', type: 'info' });
        break;
      case 'sticky-web':
        log.push({ turn, message: 'The sticky web disappeared from around the team!', type: 'info' });
        break;
    }
  }

  side.entry_hazards = [];
}
