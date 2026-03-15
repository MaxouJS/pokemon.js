/** All Pokemon type names (18 standard + shadow/stellar/unknown) */
export type PokemonTypeName =
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
  | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'
  | 'shadow' | 'stellar' | 'unknown';

/** The six base stats */
export type BaseStatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

/** All stat names including accuracy/evasion (used by some moves) */
export type StatName = BaseStatName | 'accuracy' | 'evasion';

/** Damage class of a move */
export type DamageClass = 'physical' | 'special' | 'status';

/** All 25 natures */
export type NatureName =
  | 'hardy' | 'bold' | 'modest' | 'calm' | 'timid'
  | 'lonely' | 'docile' | 'mild' | 'gentle' | 'hasty'
  | 'adamant' | 'impish' | 'bashful' | 'careful' | 'rash'
  | 'jolly' | 'naughty' | 'lax' | 'quirky' | 'naive'
  | 'brave' | 'relaxed' | 'quiet' | 'sassy' | 'serious';

/** Non-volatile status conditions */
export type StatusCondition = 'burn' | 'freeze' | 'paralysis' | 'poison' | 'bad-poison' | 'sleep';

/** Volatile status conditions (cleared on switch) */
export type VolatileStatus =
  | 'confusion' | 'flinch' | 'infatuation' | 'leech-seed'
  | 'curse' | 'nightmare' | 'torment' | 'taunt' | 'encore'
  | 'disable' | 'yawn' | 'perish-song' | 'ingrain'
  | 'aqua-ring' | 'magnet-rise' | 'substitute' | 'protect';

/** Weather conditions */
export type Weather = 'sun' | 'rain' | 'sandstorm' | 'hail' | 'snow' | 'none';

/** Terrain conditions */
export type Terrain = 'electric' | 'grassy' | 'misty' | 'psychic' | 'none';

/** Pokemon generation */
export type Generation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Base stat spread (the 6 core stats) */
export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

/** EV yield for defeating a Pokemon */
export type EvYield = BaseStats;

/** Individual values (0-31) */
export type IVs = BaseStats;

/** Effort values (0-252 per stat, 510 total) */
export type EVs = BaseStats;

/** Nature with stat modifiers */
export interface Nature {
  name: NatureName;
  increased_stat: StatName | null;
  decreased_stat: StatName | null;
  likes_flavor: string | null;
  hates_flavor: string | null;
}

/** Stat stage modifiers (-6 to +6) */
export type StatStages = Record<BaseStatName, number>;

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

/** All 6 base stat names as a constant array */
export const ALL_STATS: BaseStatName[] = [
  'hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed',
];

/** Default IVs (all 31) */
export const PERFECT_IVS: IVs = {
  hp: 31, attack: 31, defense: 31,
  'special-attack': 31, 'special-defense': 31, speed: 31,
};

/** Zero EVs */
export const ZERO_EVS: EVs = {
  hp: 0, attack: 0, defense: 0,
  'special-attack': 0, 'special-defense': 0, speed: 0,
};

/** Zero stat stages */
export const ZERO_STAGES: StatStages = {
  hp: 0, attack: 0, defense: 0,
  'special-attack': 0, 'special-defense': 0, speed: 0,
};
