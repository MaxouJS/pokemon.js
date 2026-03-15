import type { PokemonTypeName } from '../types';
import { SPRITE_MANIFEST } from './sprite-manifest';

const front = SPRITE_MANIFEST.front as Record<string, string>;
const back = SPRITE_MANIFEST.back as Record<string, string>;
const shiny = SPRITE_MANIFEST.front_shiny as Record<string, string>;
const backShiny = SPRITE_MANIFEST.back_shiny as Record<string, string>;
const items = SPRITE_MANIFEST.items as Record<string, string>;
const cries = SPRITE_MANIFEST.cries as Record<string, string>;

let _basePath = '';

/**
 * Set the base path for resolving assets.
 * Call this once in your app setup.
 *
 * @example
 * setAssetBasePath('/node_modules/pokemon.js/dist/assets/');
 */
export function setAssetBasePath(path: string): void {
  _basePath = path.endsWith('/') ? path : path + '/';
}

/** Get the configured base path */
export function getAssetBasePath(): string {
  return _basePath;
}

function resolve(relativePath: string): string {
  return _basePath + relativePath;
}

/** Sprite variant for getSprite() */
export type SpriteVariant = 'front' | 'back' | 'front-shiny' | 'back-shiny';

/**
 * Get the animated sprite path for a Pokemon.
 *
 * @param id - Pokemon national dex ID (1–649)
 * @param variant - Sprite variant (default: 'front')
 * @returns Sprite path or null if not found
 */
export function getSprite(id: number, variant: SpriteVariant = 'front'): string | null {
  const sid = String(id);
  switch (variant) {
    case 'front':
      return front[sid] ? resolve(front[sid]) : null;
    case 'back':
      return back[sid] ? resolve(back[sid]) : null;
    case 'front-shiny':
      return shiny[sid] ? resolve(shiny[sid]) : null;
    case 'back-shiny':
      return backShiny[sid] ? resolve(backShiny[sid]) : null;
    default:
      return front[sid] ? resolve(front[sid]) : null;
  }
}

/**
 * Get an item sprite path by item name (slug).
 * @param name - Item name in kebab-case (e.g. "master-ball")
 * @returns Sprite path or null
 */
export function getItemSprite(name: string): string | null {
  const path = items[name];
  return path ? resolve(path) : null;
}

/**
 * Get the cry sound path for a Pokemon (vintage cries).
 * @param id - Pokemon national dex ID (1–649)
 * @returns Sound file path or null
 */
export function getCryPath(id: number): string | null {
  const path = cries[String(id)];
  return path ? resolve(path) : null;
}

/** Type color constants for styling */
export const TYPE_COLORS: Record<PokemonTypeName, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
  shadow: '#604E82',
  stellar: '#40B5A5',
  unknown: '#68A090',
};

export { SPRITE_MANIFEST };
