import type { PokemonTypeName, Weather, BattlePokemon } from '../types';

/**
 * Get the weather damage modifier for a given move type.
 * Sun: fire = 1.5, water = 0.5
 * Rain: water = 1.5, fire = 0.5
 */
export function getWeatherDamageModifier(weather: Weather, moveType: PokemonTypeName): number {
  if (weather === 'sun') {
    if (moveType === 'fire') return 1.5;
    if (moveType === 'water') return 0.5;
  }
  if (weather === 'rain') {
    if (moveType === 'water') return 1.5;
    if (moveType === 'fire') return 0.5;
  }
  return 1;
}

/**
 * Check if a Pokemon is immune to weather chip damage based on its types.
 */
function isWeatherImmune(weather: Weather, types: PokemonTypeName[]): boolean {
  if (weather === 'sandstorm') {
    return types.some(t => t === 'rock' || t === 'ground' || t === 'steel');
  }
  if (weather === 'hail') {
    return types.some(t => t === 'ice');
  }
  return true;
}

/**
 * Apply end-of-turn weather damage to a Pokemon.
 * Sandstorm: 1/16 max HP to non-Rock/Ground/Steel.
 * Hail: 1/16 max HP to non-Ice.
 */
export function applyEndOfTurnWeather(weather: Weather, pokemon: BattlePokemon): number {
  if (weather !== 'sandstorm' && weather !== 'hail') return 0;
  if (pokemon.is_fainted) return 0;
  if (isWeatherImmune(weather, pokemon.pokemon.types)) return 0;
  return Math.max(1, Math.floor(pokemon.max_hp / 16));
}
