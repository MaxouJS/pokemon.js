import { Team } from './Team';
import { PokemonInstance } from './PokemonInstance';
import { Battle } from './Battle';
import type { BattleOptions } from '../types';

/** Bag item slot */
export interface BagSlot {
  name: string;
  quantity: number;
}

/**
 * Represents a Trainer with a name, team, bag, and progression.
 */
export class Trainer {
  name: string;
  team: Team;
  badges: string[] = [];
  money: number = 0;
  bag: Map<string, number> = new Map();

  constructor(name: string, team?: Team) {
    this.name = name;
    this.team = team ?? new Team();
  }

  // ─── Team management ──────────────────────────────

  /** Add a Pokemon to the trainer's team (directly, no capture roll) */
  addPokemon(
    pokemonIdOrName: number | string,
    options?: ConstructorParameters<typeof PokemonInstance>[1],
  ): PokemonInstance | null {
    return this.team.addNew(pokemonIdOrName, options);
  }

  /** Release a Pokemon from the team */
  release(index: number): PokemonInstance | null {
    return this.team.remove(index);
  }

  /** Get the lead Pokemon */
  get lead(): PokemonInstance | undefined {
    return this.team.lead;
  }

  // ─── Bag ──────────────────────────────────────────

  /** Add an item to the bag */
  addItem(name: string, quantity: number = 1): void {
    this.bag.set(name, (this.bag.get(name) ?? 0) + quantity);
  }

  /** Remove an item from the bag. Returns false if not enough. */
  removeItem(name: string, quantity: number = 1): boolean {
    const current = this.bag.get(name) ?? 0;
    if (current < quantity) return false;
    const remaining = current - quantity;
    if (remaining === 0) {
      this.bag.delete(name);
    } else {
      this.bag.set(name, remaining);
    }
    return true;
  }

  /** Check if the trainer has an item */
  hasItem(name: string, quantity: number = 1): boolean {
    return (this.bag.get(name) ?? 0) >= quantity;
  }

  /** Get quantity of an item */
  getItemCount(name: string): number {
    return this.bag.get(name) ?? 0;
  }

  /** Get all bag contents as an array */
  get bagContents(): BagSlot[] {
    return Array.from(this.bag.entries()).map(([name, quantity]) => ({ name, quantity }));
  }

  // ─── Battles ──────────────────────────────────────

  /** Start a battle against another trainer */
  battle(opponent: Trainer, options?: BattleOptions): Battle {
    return new Battle(this.team, opponent.team, {
      ...options,
      ai_difficulty: options?.ai_difficulty ?? 'smart',
    });
  }

  /** Start a wild battle against a single Pokemon */
  wildBattle(wildPokemon: PokemonInstance, options?: BattleOptions): Battle {
    const wildTeam = new Team([wildPokemon]);
    return new Battle(this.team, wildTeam, {
      ...options,
      allow_flee: options?.allow_flee ?? true,
      ai_difficulty: options?.ai_difficulty ?? 'random',
    });
  }

  // ─── Progression ──────────────────────────────────

  /** Earn a gym badge */
  earnBadge(badge: string): void {
    if (!this.badges.includes(badge)) {
      this.badges.push(badge);
    }
  }

  /** Earn money */
  earn(amount: number): void {
    this.money += amount;
  }

  /** Spend money. Returns false if not enough. */
  spend(amount: number): boolean {
    if (this.money < amount) return false;
    this.money -= amount;
    return true;
  }

  // ─── Serialization ────────────────────────────────

  /** Clone this trainer */
  clone(): Trainer {
    const t = new Trainer(this.name, this.team.clone());
    t.badges = [...this.badges];
    t.money = this.money;
    t.bag = new Map(this.bag);
    return t;
  }
}
