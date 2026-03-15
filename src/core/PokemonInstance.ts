import type {
  Pokemon,
  PokemonSpecies,
  Move,
  BaseStats,
  IVs,
  EVs,
  NatureName,
  StatusCondition,
  PokemonTypeName,
  TeamMemberConfig,
} from '../types';
import { PERFECT_IVS, ZERO_EVS } from '../types';
import { getPokemon, getSpecies, getMove, getExperienceForLevel } from '../data';
import { calcAllStats } from '../engine/stats';
import { getAvailableEvolutions, getEvolutionTargets, type EvolutionContext } from '../engine/evolution';
import { canLearnMove, suggestMoves, validateMoveset } from '../engine/moves';
import { calculateExperienceGain, checkLevelUp, getExperienceProgress } from '../engine/experience';
import { getSprite, getCryPath, type SpriteVariant } from '../assets';

/** Serializable snapshot of a PokemonInstance */
export interface PokemonInstanceData {
  pokemon_id: number;
  nickname: string;
  level: number;
  nature: NatureName;
  ability: string;
  ivs: IVs;
  evs: EVs;
  moves: string[];
  held_item: string | null;
  happiness: number;
  experience: number;
  current_hp: number;
  pp: Record<string, number>;
  status: StatusCondition | null;
  is_shiny: boolean;
  gender: 'male' | 'female' | 'genderless';
}

/**
 * A mutable Pokemon instance with level, stats, moves, HP, and progression.
 * This is the main class consumers work with.
 */
export class PokemonInstance {
  readonly pokemon: Pokemon;
  readonly species: PokemonSpecies;

  nickname: string;
  level: number;
  nature: NatureName;
  ability: string;
  ivs: IVs;
  evs: EVs;
  moves: Move[];
  heldItem: string | null;
  happiness: number;
  experience: number;
  status: StatusCondition | null;
  isShiny: boolean;
  gender: 'male' | 'female' | 'genderless';

  /** Current HP (mutable, for overworld/battle tracking) */
  currentHp: number;

  /** Current PP per move */
  pp: Record<string, number>;

  constructor(
    pokemonIdOrName: number | string,
    options: {
      nickname?: string;
      level?: number;
      nature?: NatureName;
      ability?: string;
      ivs?: Partial<IVs>;
      evs?: Partial<EVs>;
      moves?: string[];
      heldItem?: string | null;
      happiness?: number;
      experience?: number;
      currentHp?: number;
      pp?: Record<string, number>;
      isShiny?: boolean;
      gender?: 'male' | 'female' | 'genderless';
    } = {},
  ) {
    const pokemon = getPokemon(pokemonIdOrName);
    if (!pokemon) {
      throw new Error(`Pokemon "${pokemonIdOrName}" not found`);
    }
    this.pokemon = pokemon;

    const species = getSpecies(pokemon.species);
    if (!species) {
      throw new Error(`Species "${pokemon.species}" not found`);
    }
    this.species = species;

    this.nickname = options.nickname ?? pokemon.name;
    this.level = Math.max(1, Math.min(100, options.level ?? 1));
    this.nature = options.nature ?? 'hardy';
    this.ability = options.ability ?? (pokemon.abilities[0]?.name ?? 'unknown');
    this.ivs = { ...PERFECT_IVS, ...(options.ivs ?? {}) };
    this.evs = { ...ZERO_EVS, ...(options.evs ?? {}) };
    this.heldItem = options.heldItem ?? null;
    this.happiness = options.happiness ?? (species.base_happiness ?? 70);
    this.status = null;
    this.isShiny = options.isShiny ?? false;

    // Resolve gender from species gender_rate
    if (options.gender) {
      this.gender = options.gender;
    } else if (species.gender_rate === -1) {
      this.gender = 'genderless';
    } else if (species.gender_rate === 0) {
      this.gender = 'male';
    } else if (species.gender_rate === 8) {
      this.gender = 'female';
    } else {
      this.gender = Math.random() * 8 < species.gender_rate ? 'female' : 'male';
    }

    // Resolve experience
    if (options.experience !== undefined) {
      this.experience = options.experience;
    } else {
      this.experience = getExperienceForLevel(species.growth_rate, this.level);
    }

    // Resolve moves
    if (options.moves) {
      this.moves = [];
      for (const moveName of options.moves.slice(0, 4)) {
        const move = getMove(moveName);
        if (move) this.moves.push(move);
      }
    } else {
      this.moves = suggestMoves(pokemon, 4);
    }

    // Initialize PP
    if (options.pp) {
      this.pp = { ...options.pp };
    } else {
      this.pp = {};
      for (const move of this.moves) {
        this.pp[move.name] = move.pp ?? 5;
      }
    }

    // Initialize currentHp (default: full)
    this.currentHp = options.currentHp ?? this.maxHp;
  }

  // ─── Stats ──────────────────────────────────────────

  /** Get the calculated stats for this Pokemon at its current level */
  get calculatedStats(): BaseStats {
    return calcAllStats(this.pokemon.stats, this.ivs, this.evs, this.level, this.nature);
  }

  /** Get the max HP for this Pokemon */
  get maxHp(): number {
    return this.calculatedStats.hp;
  }

  /** Is this Pokemon fainted? */
  get isFainted(): boolean {
    return this.currentHp <= 0;
  }

  /** HP as a percentage (0–100) */
  get hpPercent(): number {
    return Math.round((this.currentHp / this.maxHp) * 100);
  }

  /** Get base stats */
  get baseStats(): BaseStats {
    return this.pokemon.stats;
  }

  /** Base stat total */
  get bst(): number {
    const s = this.pokemon.stats;
    return s.hp + s.attack + s.defense + s['special-attack'] + s['special-defense'] + s.speed;
  }

  // ─── HP Management ────────────────────────────────

  /** Take damage. Returns actual damage dealt. */
  takeDamage(amount: number): number {
    const actual = Math.min(this.currentHp, Math.max(0, amount));
    this.currentHp -= actual;
    if (this.currentHp <= 0) {
      this.currentHp = 0;
      this.status = null;
    }
    return actual;
  }

  /** Heal HP. Returns actual amount healed. */
  heal(amount: number): number {
    if (this.isFainted) return 0;
    const oldHp = this.currentHp;
    this.currentHp = Math.min(this.maxHp, this.currentHp + Math.max(0, amount));
    return this.currentHp - oldHp;
  }

  /** Fully restore HP and cure status */
  fullRestore(): void {
    this.currentHp = this.maxHp;
    this.status = null;
    for (const move of this.moves) {
      this.pp[move.name] = move.pp ?? 5;
    }
  }

  /** Revive with half or full HP */
  revive(fullHp: boolean = false): boolean {
    if (!this.isFainted) return false;
    this.currentHp = fullHp ? this.maxHp : Math.floor(this.maxHp / 2);
    this.status = null;
    return true;
  }

  // ─── Types ──────────────────────────────────────────

  /** Get the Pokemon's types */
  get types(): PokemonTypeName[] {
    return this.pokemon.types;
  }

  /** Check if this Pokemon has a specific type */
  hasType(type: PokemonTypeName): boolean {
    return this.pokemon.types.includes(type);
  }

  // ─── Moves ──────────────────────────────────────────

  /** Learn a new move, optionally replacing one at a specific slot */
  learnMove(moveName: string, replaceIndex?: number): boolean {
    const move = getMove(moveName);
    if (!move) return false;

    // Already knows this move
    if (this.moves.some(m => m.name === move.name)) return false;

    if (this.moves.length < 4) {
      this.moves.push(move);
      this.pp[move.name] = move.pp ?? 5;
      return true;
    }

    if (replaceIndex !== undefined && replaceIndex >= 0 && replaceIndex < 4) {
      const old = this.moves[replaceIndex];
      delete this.pp[old.name];
      this.moves[replaceIndex] = move;
      this.pp[move.name] = move.pp ?? 5;
      return true;
    }

    return false;
  }

  /** Forget a move by name */
  forgetMove(moveName: string): boolean {
    const index = this.moves.findIndex(m => m.name.toLowerCase() === moveName.toLowerCase());
    if (index === -1) return false;
    if (this.moves.length <= 1) return false;
    const removed = this.moves.splice(index, 1)[0];
    delete this.pp[removed.name];
    return true;
  }

  /** Check if this Pokemon can learn a specific move */
  canLearn(moveName: string): boolean {
    return canLearnMove(this.pokemon.id, moveName);
  }

  /** Get all learnable moves for this Pokemon */
  get learnableMoves(): Move[] {
    return suggestMoves(this.pokemon, Infinity);
  }

  /** Validate the current moveset */
  validateMoves(): { valid: boolean; errors: string[] } {
    return validateMoveset(this.pokemon.id, this.moves.map(m => m.name));
  }

  /** Use PP for a move. Returns false if no PP left. */
  usePP(moveName: string): boolean {
    const current = this.pp[moveName] ?? 0;
    if (current <= 0) return false;
    this.pp[moveName] = current - 1;
    return true;
  }

  /** Restore PP for a move */
  restorePP(moveName: string, amount: number | 'full' = 'full'): void {
    const move = this.moves.find(m => m.name === moveName);
    if (!move) return;
    const max = move.pp ?? 5;
    if (amount === 'full') {
      this.pp[moveName] = max;
    } else {
      this.pp[moveName] = Math.min(max, (this.pp[moveName] ?? 0) + amount);
    }
  }

  // ─── Experience & Leveling ──────────────────────────

  /** Gain experience points, returns levels gained */
  gainExperience(amount: number): number {
    if (this.level >= 100) return 0;

    this.experience += amount;
    const { new_level, levels_gained } = checkLevelUp(
      this.species.growth_rate,
      this.level,
      this.experience,
    );

    if (levels_gained > 0) {
      const oldMaxHp = this.maxHp;
      this.level = Math.min(100, new_level);
      // Scale currentHp proportionally on level up
      const newMaxHp = this.maxHp;
      this.currentHp = Math.min(newMaxHp, this.currentHp + (newMaxHp - oldMaxHp));
    }

    return levels_gained;
  }

  /** Gain XP from defeating another Pokemon */
  gainBattleExperience(
    defeatedPokemon: PokemonInstance,
    options: {
      isTrainerBattle?: boolean;
      hasLuckyEgg?: boolean;
      hasExpShare?: boolean;
      participated?: boolean;
    } = {},
  ): number {
    const xp = calculateExperienceGain(
      defeatedPokemon.pokemon.base_experience,
      defeatedPokemon.level,
      this.level,
      {
        is_trainer_battle: options.isTrainerBattle,
        has_lucky_egg: options.hasLuckyEgg,
        has_exp_share: options.hasExpShare,
        participated: options.participated ?? true,
      },
    );
    return this.gainExperience(xp);
  }

  /** Get current XP progress towards next level */
  get xpProgress(): { current: number; needed: number; progress: number } {
    return getExperienceProgress(this.species.growth_rate, this.level, this.experience);
  }

  /** Level up by 1 (force, ignoring XP) */
  levelUp(): boolean {
    if (this.level >= 100) return false;
    const oldMaxHp = this.maxHp;
    this.level += 1;
    this.experience = getExperienceForLevel(this.species.growth_rate, this.level);
    const newMaxHp = this.maxHp;
    this.currentHp = Math.min(newMaxHp, this.currentHp + (newMaxHp - oldMaxHp));
    return true;
  }

  /** Set level directly */
  setLevel(level: number): void {
    this.level = Math.max(1, Math.min(100, level));
    this.experience = getExperienceForLevel(this.species.growth_rate, this.level);
    this.currentHp = this.maxHp;
  }

  // ─── Evolution ──────────────────────────────────────

  /** Check if this Pokemon can evolve given current state */
  canEvolve(trigger: EvolutionContext['trigger'] = 'level-up'): boolean {
    return this.getAvailableEvolutions(trigger).length > 0;
  }

  /** Get available evolution targets */
  getAvailableEvolutions(trigger: EvolutionContext['trigger'] = 'level-up') {
    return getAvailableEvolutions(this.species.name, {
      level: this.level,
      happiness: this.happiness,
      held_item: this.heldItem,
      known_moves: this.moves.map(m => m.name),
      trigger,
      gender: this.gender === 'male' ? 1 : this.gender === 'female' ? 2 : null,
    });
  }

  /** Get all possible evolution targets (regardless of current state) */
  get evolutionTargets() {
    return getEvolutionTargets(this.species.name);
  }

  /**
   * Evolve this Pokemon into a target species.
   * Returns a new PokemonInstance of the evolved form, preserving
   * level, IVs, EVs, nature, happiness, experience, and compatible moves.
   */
  evolve(targetSpecies?: string): PokemonInstance | null {
    const evolutions = this.getAvailableEvolutions();
    if (evolutions.length === 0) return null;

    const target = targetSpecies
      ? evolutions.find(e => e.target_species === targetSpecies)
      : evolutions[0];

    if (!target || target.target_pokemon_id === null) return null;

    const evolved = new PokemonInstance(target.target_pokemon_id, {
      nickname: this.nickname === this.pokemon.name ? undefined : this.nickname,
      level: this.level,
      nature: this.nature,
      ivs: { ...this.ivs },
      evs: { ...this.evs },
      moves: this.moves.map(m => m.name),
      heldItem: this.heldItem,
      happiness: this.happiness,
      experience: this.experience,
      isShiny: this.isShiny,
      gender: this.gender,
    });

    return evolved;
  }

  // ─── EVs ────────────────────────────────────────────

  /** Total EVs spent */
  get totalEvs(): number {
    return this.evs.hp + this.evs.attack + this.evs.defense +
      this.evs['special-attack'] + this.evs['special-defense'] + this.evs.speed;
  }

  /** Add EVs from defeating a Pokemon */
  addEvs(yield_: BaseStats): void {
    const statKeys = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'] as const;
    for (const stat of statKeys) {
      const toAdd = yield_[stat];
      if (toAdd <= 0) continue;
      if (this.totalEvs >= 510) break;
      const remaining = 510 - this.totalEvs;
      const statRemaining = 252 - this.evs[stat];
      this.evs[stat] += Math.min(toAdd, remaining, statRemaining);
    }
  }

  // ─── Assets ─────────────────────────────────────────

  /** Get sprite path for this Pokemon */
  getSprite(variant?: SpriteVariant): string | null {
    return getSprite(this.pokemon.id, variant);
  }

  /** Get cry sound path */
  getCryPath(): string | null {
    return getCryPath(this.pokemon.id);
  }

  // ─── Info ───────────────────────────────────────────

  /** Display name (nickname or species name) */
  get displayName(): string {
    return this.nickname;
  }

  /** National dex ID */
  get id(): number {
    return this.pokemon.id;
  }

  /** Species name */
  get speciesName(): string {
    return this.pokemon.name;
  }

  /** Is this a legendary Pokemon? */
  get isLegendary(): boolean {
    return this.species.is_legendary;
  }

  /** Is this a mythical Pokemon? */
  get isMythical(): boolean {
    return this.species.is_mythical;
  }

  /** Pokedex genus (e.g. "Seed Pokemon") */
  get genus(): string {
    return this.species.genus;
  }

  /** Pokedex flavor text */
  get flavorText(): string {
    return this.species.flavor_text;
  }

  // ─── Serialization ─────────────────────────────────

  /** Serialize to a plain JSON-safe object */
  toJSON(): PokemonInstanceData {
    return {
      pokemon_id: this.pokemon.id,
      nickname: this.nickname,
      level: this.level,
      nature: this.nature,
      ability: this.ability,
      ivs: { ...this.ivs },
      evs: { ...this.evs },
      moves: this.moves.map(m => m.name),
      held_item: this.heldItem,
      happiness: this.happiness,
      experience: this.experience,
      current_hp: this.currentHp,
      pp: { ...this.pp },
      status: this.status,
      is_shiny: this.isShiny,
      gender: this.gender,
    };
  }

  /** Restore from a serialized snapshot */
  static fromJSON(data: PokemonInstanceData): PokemonInstance {
    const instance = new PokemonInstance(data.pokemon_id, {
      nickname: data.nickname,
      level: data.level,
      nature: data.nature,
      ability: data.ability,
      ivs: data.ivs,
      evs: data.evs,
      moves: data.moves,
      heldItem: data.held_item,
      happiness: data.happiness,
      experience: data.experience,
      currentHp: data.current_hp,
      pp: data.pp,
      isShiny: data.is_shiny,
      gender: data.gender,
    });
    instance.status = data.status;
    return instance;
  }

  /** Clone this Pokemon instance */
  clone(): PokemonInstance {
    return PokemonInstance.fromJSON(this.toJSON());
  }

  /** Convert to TeamMemberConfig for battle */
  toBattleConfig(): TeamMemberConfig {
    return {
      pokemon_id: this.pokemon.id,
      nickname: this.nickname,
      level: this.level,
      nature: this.nature,
      ability: this.ability,
      ivs: { ...this.ivs },
      evs: { ...this.evs },
      moves: this.moves.map(m => m.name),
      held_item: this.heldItem,
    };
  }
}
