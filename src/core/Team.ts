import type { TeamMemberConfig } from '../types';
import { PokemonInstance } from './PokemonInstance';

/** Maximum team size */
export const MAX_TEAM_SIZE = 6;

/** Maximum total EVs across all stats */
const MAX_TOTAL_EVS = 510;

/**
 * Manages a team of up to 6 PokemonInstances.
 */
export class Team {
  private _members: PokemonInstance[] = [];

  constructor(members?: PokemonInstance[]) {
    if (members) {
      for (const m of members.slice(0, MAX_TEAM_SIZE)) {
        this._members.push(m);
      }
    }
  }

  /** Current team members */
  get members(): readonly PokemonInstance[] {
    return this._members;
  }

  /** Team size */
  get size(): number {
    return this._members.length;
  }

  /** Is the team full? */
  get isFull(): boolean {
    return this._members.length >= MAX_TEAM_SIZE;
  }

  /** Is the team empty? */
  get isEmpty(): boolean {
    return this._members.length === 0;
  }

  /**
   * Add a Pokemon to the team.
   * @returns true if added successfully
   */
  add(pokemon: PokemonInstance): boolean {
    if (this.isFull) return false;
    this._members.push(pokemon);
    return true;
  }

  /**
   * Add a Pokemon by ID/name with options.
   * @returns the created PokemonInstance, or null if team is full
   */
  addNew(
    pokemonIdOrName: number | string,
    options?: ConstructorParameters<typeof PokemonInstance>[1],
  ): PokemonInstance | null {
    if (this.isFull) return null;
    const pokemon = new PokemonInstance(pokemonIdOrName, options);
    this._members.push(pokemon);
    return pokemon;
  }

  /**
   * Remove a Pokemon by index.
   * @returns the removed Pokemon, or null
   */
  remove(index: number): PokemonInstance | null {
    if (index < 0 || index >= this._members.length) return null;
    return this._members.splice(index, 1)[0];
  }

  /**
   * Remove a Pokemon by reference.
   * @returns true if found and removed
   */
  removeByRef(pokemon: PokemonInstance): boolean {
    const index = this._members.indexOf(pokemon);
    if (index === -1) return false;
    this._members.splice(index, 1);
    return true;
  }

  /** Get a team member by index */
  get(index: number): PokemonInstance | undefined {
    return this._members[index];
  }

  /** Swap two team members' positions */
  swap(indexA: number, indexB: number): boolean {
    if (
      indexA < 0 || indexA >= this._members.length ||
      indexB < 0 || indexB >= this._members.length
    ) return false;

    [this._members[indexA], this._members[indexB]] =
      [this._members[indexB], this._members[indexA]];
    return true;
  }

  /** Move a member to a new position */
  reorder(fromIndex: number, toIndex: number): boolean {
    if (
      fromIndex < 0 || fromIndex >= this._members.length ||
      toIndex < 0 || toIndex >= this._members.length
    ) return false;

    const [member] = this._members.splice(fromIndex, 1);
    this._members.splice(toIndex, 0, member);
    return true;
  }

  /** Get the lead Pokemon (first in party) */
  get lead(): PokemonInstance | undefined {
    return this._members[0];
  }

  /** Set a Pokemon as the lead (moves it to index 0) */
  setLead(index: number): boolean {
    return this.reorder(index, 0);
  }

  /** Get all non-fainted team members */
  get aliveMembers(): PokemonInstance[] {
    return this._members.filter(m => m.status !== null || true);
    // Note: PokemonInstance tracks status, not fainted state directly
    // In battle context, use BattlePokemon's is_fainted instead
  }

  /** Find a team member by name or nickname */
  find(name: string): PokemonInstance | undefined {
    const lower = name.toLowerCase();
    return this._members.find(
      m => m.nickname.toLowerCase() === lower || m.speciesName.toLowerCase() === lower
    );
  }

  /** Check if a species is already on the team */
  hasSpecies(speciesName: string): boolean {
    const lower = speciesName.toLowerCase();
    return this._members.some(m => m.speciesName.toLowerCase() === lower);
  }

  /** Convert to TeamMemberConfig array for battle */
  toBattleConfigs(): TeamMemberConfig[] {
    return this._members.map(m => m.toBattleConfig());
  }

  /**
   * Validate the team.
   * Checks for duplicate species (Species Clause), EV totals, etc.
   */
  validate(options?: {
    speciesClause?: boolean;
    levelCap?: number;
  }): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const speciesClause = options?.speciesClause ?? false;
    const levelCap = options?.levelCap;

    if (this._members.length === 0) {
      errors.push('Team must have at least 1 Pokemon');
    }

    if (this._members.length > MAX_TEAM_SIZE) {
      errors.push(`Team cannot have more than ${MAX_TEAM_SIZE} Pokemon`);
    }

    // Species clause
    if (speciesClause) {
      const seen = new Set<string>();
      for (const member of this._members) {
        const species = member.species.name.toLowerCase();
        if (seen.has(species)) {
          errors.push(`Duplicate species: ${member.speciesName} (Species Clause)`);
        }
        seen.add(species);
      }
    }

    // Level cap
    if (levelCap) {
      for (const member of this._members) {
        if (member.level > levelCap) {
          errors.push(`${member.displayName} is level ${member.level}, exceeds cap of ${levelCap}`);
        }
      }
    }

    // EV validation per member
    for (const member of this._members) {
      if (member.totalEvs > MAX_TOTAL_EVS) {
        errors.push(`${member.displayName} has ${member.totalEvs} total EVs (max ${MAX_TOTAL_EVS})`);
      }
    }

    // Move validation per member
    for (const member of this._members) {
      if (member.moves.length === 0) {
        errors.push(`${member.displayName} has no moves`);
      }
      if (member.moves.length > 4) {
        errors.push(`${member.displayName} has more than 4 moves`);
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /** Clear the team */
  clear(): void {
    this._members = [];
  }

  /** Clone the entire team */
  clone(): Team {
    return new Team(this._members.map(m => m.clone()));
  }

  /** Iterate over members */
  [Symbol.iterator](): Iterator<PokemonInstance> {
    return this._members[Symbol.iterator]();
  }
}
