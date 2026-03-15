import type { Generation } from '../types';

/** Roman numeral lookup for generation display */
const ROMAN_NUMERALS: Record<Generation, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
};

/** Roman numeral to generation number mapping */
const ROMAN_TO_NUMBER: Record<string, Generation> = {
  i: 1,
  ii: 2,
  iii: 3,
  iv: 4,
  v: 5,
  vi: 6,
  vii: 7,
  viii: 8,
  ix: 9,
};

/** Pokedex ID ranges per generation */
const GENERATION_RANGES: Record<Generation, { start: number; end: number }> = {
  1: { start: 1, end: 151 },
  2: { start: 152, end: 251 },
  3: { start: 252, end: 386 },
  4: { start: 387, end: 493 },
  5: { start: 494, end: 649 },
  6: { start: 650, end: 721 },
  7: { start: 722, end: 809 },
  8: { start: 810, end: 905 },
  9: { start: 906, end: 1025 },
};

/** Get generation number from generation string: "generation-i" -> 1 */
export function parseGeneration(gen: string): Generation {
  const roman = gen.replace('generation-', '').toLowerCase();
  const result = ROMAN_TO_NUMBER[roman];
  if (result === undefined) {
    throw new Error(`Invalid generation string: "${gen}"`);
  }
  return result;
}

/** Get generation name: 1 -> "Generation I" */
export function formatGeneration(gen: Generation): string {
  return `Generation ${ROMAN_NUMERALS[gen]}`;
}

/** Get the Pokedex ID range for a generation */
export function getGenerationRange(gen: Generation): { start: number; end: number } {
  return GENERATION_RANGES[gen];
}
