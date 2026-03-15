import type { PokemonTypeName } from '../types';

/** Official Pokemon type colors */
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

/** Get the color for a Pokemon type */
export function getTypeColor(type: PokemonTypeName): string {
  return TYPE_COLORS[type];
}

/**
 * Get contrasting text color (white or black) for a type background.
 * Uses the W3C relative luminance formula to determine contrast.
 */
export function getTypeTextColor(type: PokemonTypeName): string {
  const hex = TYPE_COLORS[type];
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
