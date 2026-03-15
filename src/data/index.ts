import type { Pokemon, PokemonSpecies, Move, Ability, Item, Berry, PokemonType, Nature, EvolutionChain, PokemonTypeName } from '../types';
import { POKEMON, POKEMON_GEN1, POKEMON_GEN2, POKEMON_GEN3, POKEMON_GEN4, POKEMON_GEN5 } from './pokemon';
import { SPECIES } from './species';
import { MOVES } from './moves';
import { ABILITIES } from './abilities';
import { ITEMS } from './items';
import { BERRIES } from './berries';
import { TYPES, TYPE_NAMES, EFFECTIVENESS_MATRIX } from './types';
import { NATURES } from './natures';
import { EVOLUTION_CHAINS } from './evolution';
import { GROWTH_RATES } from './growth-rates';
import { EGG_GROUPS } from './egg-groups';

// ─── Indexes (built lazily on first access) ─────────────────

let _pokemonById: Map<number, Pokemon> | null = null;
let _pokemonByName: Map<string, Pokemon> | null = null;
let _moveByName: Map<string, Move> | null = null;
let _moveById: Map<number, Move> | null = null;
let _abilityByName: Map<string, Ability> | null = null;
let _itemByName: Map<string, Item> | null = null;
let _typeByName: Map<string, PokemonType> | null = null;
let _natureByName: Map<string, Nature> | null = null;
let _speciesById: Map<number, PokemonSpecies> | null = null;
let _speciesByName: Map<string, PokemonSpecies> | null = null;
let _chainById: Map<number, EvolutionChain> | null = null;
let _chainBySpecies: Map<string, EvolutionChain> | null = null;

function pokemonById(): Map<number, Pokemon> {
  if (!_pokemonById) {
    _pokemonById = new Map(POKEMON.map(p => [p.id, p]));
  }
  return _pokemonById;
}

function pokemonByName(): Map<string, Pokemon> {
  if (!_pokemonByName) {
    _pokemonByName = new Map(POKEMON.map(p => [p.name.toLowerCase(), p]));
  }
  return _pokemonByName;
}

function moveByName(): Map<string, Move> {
  if (!_moveByName) {
    _moveByName = new Map(MOVES.map(m => [m.name.toLowerCase(), m]));
  }
  return _moveByName;
}

function moveById(): Map<number, Move> {
  if (!_moveById) {
    _moveById = new Map(MOVES.map(m => [m.id, m]));
  }
  return _moveById;
}

function abilityByName(): Map<string, Ability> {
  if (!_abilityByName) {
    _abilityByName = new Map(ABILITIES.map(a => [a.name.toLowerCase(), a]));
  }
  return _abilityByName;
}

function itemByName(): Map<string, Item> {
  if (!_itemByName) {
    _itemByName = new Map(ITEMS.map(i => [i.name.toLowerCase(), i]));
  }
  return _itemByName;
}

function typeByName(): Map<string, PokemonType> {
  if (!_typeByName) {
    _typeByName = new Map(TYPES.map(t => [t.name.toLowerCase(), t]));
  }
  return _typeByName;
}

function natureByName(): Map<string, Nature> {
  if (!_natureByName) {
    _natureByName = new Map(NATURES.map(n => [n.name.toLowerCase(), n]));
  }
  return _natureByName;
}

function speciesById(): Map<number, PokemonSpecies> {
  if (!_speciesById) {
    _speciesById = new Map(SPECIES.map(s => [s.id, s]));
  }
  return _speciesById;
}

function speciesByName(): Map<string, PokemonSpecies> {
  if (!_speciesByName) {
    _speciesByName = new Map(SPECIES.map(s => [s.name.toLowerCase(), s]));
  }
  return _speciesByName;
}

function chainById(): Map<number, EvolutionChain> {
  if (!_chainById) {
    _chainById = new Map(EVOLUTION_CHAINS.map(c => [c.id, c]));
  }
  return _chainById;
}

function buildChainBySpecies(): Map<string, EvolutionChain> {
  if (!_chainBySpecies) {
    _chainBySpecies = new Map();
    for (const chain of EVOLUTION_CHAINS) {
      const walk = (node: EvolutionChain['chain']) => {
        _chainBySpecies!.set(node.species.toLowerCase(), chain);
        for (const child of node.evolves_to) walk(child);
      };
      walk(chain.chain);
    }
  }
  return _chainBySpecies;
}

// ─── Public API ─────────────────────────────────────────────

// Pokemon
export function getPokemon(idOrName: number | string): Pokemon | undefined {
  if (typeof idOrName === 'number') return pokemonById().get(idOrName);
  return pokemonByName().get(idOrName.toLowerCase());
}

export function getAllPokemon(): Pokemon[] {
  return POKEMON;
}

export function getPokemonByType(type: PokemonTypeName): Pokemon[] {
  return POKEMON.filter(p => p.types.includes(type));
}

export function searchPokemon(query: string): Pokemon[] {
  const q = query.toLowerCase();
  return POKEMON.filter(p => p.name.toLowerCase().includes(q));
}

/** Get all Pokemon from a specific generation */
export function getPokemonByGeneration(gen: 1 | 2 | 3 | 4 | 5): Pokemon[] {
  switch (gen) {
    case 1: return POKEMON_GEN1;
    case 2: return POKEMON_GEN2;
    case 3: return POKEMON_GEN3;
    case 4: return POKEMON_GEN4;
    case 5: return POKEMON_GEN5;
  }
}

// Species
export function getSpecies(idOrName: number | string): PokemonSpecies | undefined {
  if (typeof idOrName === 'number') return speciesById().get(idOrName);
  return speciesByName().get(idOrName.toLowerCase());
}

export function getAllSpecies(): PokemonSpecies[] {
  return SPECIES;
}

// Moves
export function getMove(idOrName: number | string): Move | undefined {
  if (typeof idOrName === 'number') return moveById().get(idOrName);
  return moveByName().get(idOrName.toLowerCase());
}

export function getAllMoves(): Move[] {
  return MOVES;
}

export function getMovesByType(type: PokemonTypeName): Move[] {
  return MOVES.filter(m => m.type === type);
}

export function getMovesForPokemon(pokemonIdOrName: number | string): Move[] {
  const p = getPokemon(pokemonIdOrName);
  if (!p) return [];
  return p.moves.map(name => getMove(name)).filter((m): m is Move => m !== undefined);
}

// Abilities
export function getAbility(name: string): Ability | undefined {
  return abilityByName().get(name.toLowerCase());
}

export function getAllAbilities(): Ability[] {
  return ABILITIES;
}

// Items
export function getItem(name: string): Item | undefined {
  return itemByName().get(name.toLowerCase());
}

export function getAllItems(): Item[] {
  return ITEMS;
}

/** Competitive battle-holdable items (excludes balls, potions, key items, etc.) */
const BATTLE_HOLD_CATEGORIES = new Set([
  'held-items', 'choice', 'type-enhancement', 'type-protection',
  'in-a-pinch', 'bad-held-items', 'species-specific', 'plates',
  'scarves', 'jewels',
]);

let _holdableItemsCache: Item[] | null = null;

/**
 * Get all items that can be held by a Pokemon in battle.
 * Filters by the "holdable" attribute and competitive categories,
 * excluding balls, potions, TMs, and key items.
 */
export function getHoldableItems(): Item[] {
  if (_holdableItemsCache) return _holdableItemsCache;
  _holdableItemsCache = ITEMS
    .filter(i =>
      i.attributes.includes('holdable') &&
      BATTLE_HOLD_CATEGORIES.has(i.category),
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  return _holdableItemsCache;
}

// Berries
export function getBerry(name: string): Berry | undefined {
  return BERRIES.find(b => b.name.toLowerCase() === name.toLowerCase());
}

export function getAllBerries(): Berry[] {
  return BERRIES;
}

// Types
export function getType(name: string): PokemonType | undefined {
  return typeByName().get(name.toLowerCase());
}

export function getAllTypes(): PokemonType[] {
  return TYPES;
}

/**
 * Get the type effectiveness multiplier for an attack type against one or more defending types.
 * Returns 0, 0.25, 0.5, 1, 2, or 4.
 */
export function getTypeEffectiveness(attackType: PokemonTypeName, defendingTypes: PokemonTypeName[]): number {
  const ai = TYPE_NAMES.indexOf(attackType);
  if (ai === -1) return 1;

  let multiplier = 1;
  for (const defType of defendingTypes) {
    const di = TYPE_NAMES.indexOf(defType);
    if (di === -1) continue;
    multiplier *= EFFECTIVENESS_MATRIX[ai][di];
  }
  return multiplier;
}

/**
 * Get the full type effectiveness matrix.
 * matrix[attackTypeIndex][defenseTypeIndex] = multiplier
 */
export function getTypeChart(): { matrix: number[][]; labels: string[] } {
  const size = EFFECTIVENESS_MATRIX.length;
  return { matrix: EFFECTIVENESS_MATRIX, labels: TYPE_NAMES.slice(0, size) };
}

// Natures
export function getNature(name: string): Nature | undefined {
  return natureByName().get(name.toLowerCase());
}

export function getAllNatures(): Nature[] {
  return NATURES;
}

// Evolution
export function getEvolutionChain(id: number): EvolutionChain | undefined {
  return chainById().get(id);
}

export function getEvolutionChainForSpecies(speciesName: string): EvolutionChain | undefined {
  return buildChainBySpecies().get(speciesName.toLowerCase());
}

export function getAllEvolutionChains(): EvolutionChain[] {
  return EVOLUTION_CHAINS;
}

// Growth rates
export interface GrowthRate {
  id: number;
  name: string;
  formula: string;
  levels: { level: number; experience: number }[];
}

export function getGrowthRates(): GrowthRate[] {
  return GROWTH_RATES as GrowthRate[];
}

export function getGrowthRate(name: string): GrowthRate | undefined {
  return (GROWTH_RATES as GrowthRate[]).find(g => g.name.toLowerCase() === name.toLowerCase());
}

/**
 * Get the total XP required to reach a given level for a growth rate.
 */
export function getExperienceForLevel(growthRateName: string, level: number): number {
  const rate = getGrowthRate(growthRateName);
  if (!rate) return 0;
  const entry = rate.levels.find(l => l.level === level);
  return entry?.experience ?? 0;
}

// Egg groups
export interface EggGroup {
  id: number;
  name: string;
}

export function getEggGroups(): EggGroup[] {
  return EGG_GROUPS as EggGroup[];
}

// Counts
export const POKEMON_COUNT = POKEMON.length;
export const SPECIES_COUNT = SPECIES.length;
export const MOVES_COUNT = MOVES.length;
export const ABILITIES_COUNT = ABILITIES.length;
export const ITEMS_COUNT = ITEMS.length;
export const TYPES_COUNT = TYPES.length;

// Re-export per-gen arrays for direct access
export { POKEMON_GEN1, POKEMON_GEN2, POKEMON_GEN3, POKEMON_GEN4, POKEMON_GEN5 };
