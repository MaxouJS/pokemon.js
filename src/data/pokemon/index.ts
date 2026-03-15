// All Gen 1–5 Pokemon, merged from per-generation files
import type { Pokemon } from '../../types';
import { POKEMON_GEN1 } from './gen1';
import { POKEMON_GEN2 } from './gen2';
import { POKEMON_GEN3 } from './gen3';
import { POKEMON_GEN4 } from './gen4';
import { POKEMON_GEN5 } from './gen5';

export const POKEMON: Pokemon[] = [
  ...POKEMON_GEN1,
  ...POKEMON_GEN2,
  ...POKEMON_GEN3,
  ...POKEMON_GEN4,
  ...POKEMON_GEN5,
];

export { POKEMON_GEN1, POKEMON_GEN2, POKEMON_GEN3, POKEMON_GEN4, POKEMON_GEN5 };
