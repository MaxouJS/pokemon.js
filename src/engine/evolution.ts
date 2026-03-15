import type { EvolutionChain, EvolutionDetail, EvolutionNode } from '../types';
import { getEvolutionChainForSpecies, getPokemon, getSpecies, getMove } from '../data';

/** Context needed to check evolution conditions */
export interface EvolutionContext {
  level: number;
  happiness?: number;
  held_item?: string | null;
  known_moves?: string[];
  location?: string | null;
  time_of_day?: 'day' | 'night' | '';
  trigger?: 'level-up' | 'trade' | 'use-item';
  used_item?: string | null;
  gender?: number | null;
  party_species?: string[];
  beauty?: number;
  affection?: number;
}

/**
 * Check if a single evolution detail's conditions are satisfied.
 */
function checkEvolutionDetail(detail: EvolutionDetail, ctx: EvolutionContext): boolean {
  // Check trigger type
  if (ctx.trigger && detail.trigger !== ctx.trigger) return false;

  // Level requirement
  if (detail.min_level !== null && ctx.level < detail.min_level) return false;

  // Happiness requirement
  if (detail.min_happiness !== null) {
    if (ctx.happiness === undefined || ctx.happiness < detail.min_happiness) return false;
  }

  // Item for use-item trigger
  if (detail.item !== null) {
    if (ctx.used_item !== detail.item) return false;
  }

  // Held item
  if (detail.held_item !== null) {
    if (ctx.held_item !== detail.held_item) return false;
  }

  // Known move
  if (detail.known_move !== null) {
    if (!ctx.known_moves?.includes(detail.known_move)) return false;
  }

  // Known move type
  if (detail.known_move_type !== null) {
    if (ctx.known_moves) {
      const hasTypeMove = ctx.known_moves.some(moveName => {
        const move = getMove(moveName);
        return move?.type === detail.known_move_type;
      });
      if (!hasTypeMove) return false;
    } else {
      return false;
    }
  }

  // Location
  if (detail.location !== null) {
    if (ctx.location !== detail.location) return false;
  }

  // Time of day
  if (detail.time_of_day && detail.time_of_day !== '') {
    if (ctx.time_of_day !== detail.time_of_day) return false;
  }

  // Gender
  if (detail.gender !== null) {
    if (ctx.gender !== detail.gender) return false;
  }

  // Party species
  if (detail.party_species !== null) {
    if (!ctx.party_species?.includes(detail.party_species)) return false;
  }

  // Beauty
  if (detail.min_beauty !== null) {
    if (ctx.beauty === undefined || ctx.beauty < detail.min_beauty) return false;
  }

  // Affection
  if (detail.min_affection !== null) {
    if (ctx.affection === undefined || ctx.affection < detail.min_affection) return false;
  }

  return true;
}

/** Result of an evolution check */
export interface EvolutionResult {
  can_evolve: boolean;
  target_species: string;
  target_pokemon_id: number | null;
  detail: EvolutionDetail;
}

/**
 * Get possible evolutions for a species given the current context.
 * Returns all valid evolution targets.
 */
export function getAvailableEvolutions(
  speciesName: string,
  ctx: EvolutionContext,
): EvolutionResult[] {
  const chain = getEvolutionChainForSpecies(speciesName);
  if (!chain) return [];

  // Find our node in the chain
  const node = findNode(chain.chain, speciesName.toLowerCase());
  if (!node) return [];

  const results: EvolutionResult[] = [];

  for (const child of node.evolves_to) {
    for (const detail of child.evolution_details) {
      if (checkEvolutionDetail(detail, ctx)) {
        const targetPokemon = getPokemon(child.species);
        results.push({
          can_evolve: true,
          target_species: child.species,
          target_pokemon_id: targetPokemon?.id ?? null,
          detail,
        });
      }
    }
  }

  return results;
}

/**
 * Check if a Pokemon can evolve at all (regardless of context).
 * Returns the list of possible evolution targets with their conditions.
 */
export function getEvolutionTargets(speciesName: string): {
  species: string;
  details: EvolutionDetail[];
}[] {
  const chain = getEvolutionChainForSpecies(speciesName);
  if (!chain) return [];

  const node = findNode(chain.chain, speciesName.toLowerCase());
  if (!node) return [];

  return node.evolves_to.map(child => ({
    species: child.species,
    details: child.evolution_details,
  }));
}

/**
 * Get the full evolution line for a species.
 * Returns an ordered list from base form to final evolution.
 */
export function getEvolutionLine(speciesName: string): string[] {
  const chain = getEvolutionChainForSpecies(speciesName);
  if (!chain) return [speciesName];

  const line: string[] = [];
  collectLine(chain.chain, speciesName.toLowerCase(), line);
  return line.length > 0 ? line : [speciesName];
}

/**
 * Get the pre-evolution of a species, if any.
 */
export function getPreEvolution(speciesName: string): string | null {
  const species = getSpecies(speciesName);
  return species?.evolves_from ?? null;
}

/**
 * Check if a species is a final evolution (no further evolutions possible).
 */
export function isFinalEvolution(speciesName: string): boolean {
  const targets = getEvolutionTargets(speciesName);
  return targets.length === 0;
}

/**
 * Check if a species is a baby Pokemon.
 */
export function isBabyPokemon(speciesName: string): boolean {
  const species = getSpecies(speciesName);
  return species?.is_baby ?? false;
}

// ─── Helpers ──────────────────────────────────────────

function findNode(node: EvolutionNode, speciesName: string): EvolutionNode | null {
  if (node.species.toLowerCase() === speciesName) return node;
  for (const child of node.evolves_to) {
    const found = findNode(child, speciesName);
    if (found) return found;
  }
  return null;
}

function collectLine(node: EvolutionNode, targetSpecies: string, result: string[]): boolean {
  result.push(node.species);

  if (node.species.toLowerCase() === targetSpecies) return true;

  for (const child of node.evolves_to) {
    if (collectLine(child, targetSpecies, result)) return true;
  }

  result.pop();
  return false;
}
