/** All Pokemon type names (18 standard + shadow/stellar/unknown) */
export type PokemonTypeName =
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
  | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'
  | 'shadow' | 'stellar' | 'unknown';

/** Damage class of a move */
export type DamageClass = 'physical' | 'special' | 'status';

/** Pokemon generation */
export type Generation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** A move a Pokemon can learn, with method and level */
export interface LearnsetEntry {
  move: string;
  level: number;
  method: 'level-up' | 'tm' | 'egg' | 'tutor';
}

/** All 18 standard Pokemon type names as a constant array */
export const ALL_TYPES: PokemonTypeName[] = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];
