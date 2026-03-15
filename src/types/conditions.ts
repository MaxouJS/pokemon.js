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
