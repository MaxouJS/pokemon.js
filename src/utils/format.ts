import type { StatName } from '../types';

/** Stat display name mapping */
const STAT_DISPLAY_NAMES: Record<string, string> = {
  hp: 'HP',
  attack: 'Atk',
  defense: 'Def',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Spd',
  accuracy: 'Acc',
  evasion: 'Eva',
};

/** Convert kebab-case to Title Case: "fire-blast" -> "Fire Blast" */
export function formatName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Convert to kebab-case: "Fire Blast" -> "fire-blast" */
export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/** Format stat name for display: "special-attack" -> "Sp. Atk" */
export function formatStatName(stat: StatName): string {
  return STAT_DISPLAY_NAMES[stat] ?? stat;
}

/** Format height from decimeters: 7 -> "0.7 m" */
export function formatHeight(decimeters: number): string {
  return `${(decimeters / 10).toFixed(1)} m`;
}

/** Format weight from hectograms: 69 -> "6.9 kg" */
export function formatWeight(hectograms: number): string {
  return `${(hectograms / 10).toFixed(1)} kg`;
}

/** Format Pokemon ID with # prefix: 1 -> "#001", 25 -> "#025" */
export function formatPokedexNumber(id: number): string {
  return `#${String(id).padStart(3, '0')}`;
}
