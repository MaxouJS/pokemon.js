import type {
  BattleOptions,
  BattlePokemon,
  BattleSide,
  BattleState,
  Move,
  TeamMemberConfig,
} from '../../types';
import type { Pokemon } from '../../types';
import { PERFECT_IVS, ZERO_EVS, ZERO_STAGES } from '../../types';
import { getPokemon, getSpecies, getMove } from '../../data';
import { suggestMoves } from '../moves';
import { calcAllStats } from '../stats';

/**
 * Create a BattlePokemon from a TeamMemberConfig.
 */
export function createBattlePokemon(config: TeamMemberConfig): BattlePokemon {
  const pokemon = getPokemon(config.pokemon_id);
  if (!pokemon) {
    throw new Error(`Pokemon with id ${config.pokemon_id} not found`);
  }

  const species = getSpecies(pokemon.species);
  if (!species) {
    throw new Error(`Species "${pokemon.species}" not found`);
  }

  const level = config.level ?? 50;
  const nature = config.nature ?? 'hardy';
  const ivs = { ...PERFECT_IVS, ...(config.ivs ?? {}) };
  const evs = { ...ZERO_EVS, ...(config.evs ?? {}) };

  const ability = config.ability ?? (pokemon.abilities[0]?.name ?? 'unknown');

  const moveNames = config.moves ?? pokemon.moves.slice(0, 4);
  const moves: Move[] = [];
  for (const moveName of moveNames) {
    const move = getMove(moveName);
    if (move) {
      moves.push(move);
    }
  }

  const stats = calcAllStats(pokemon.stats, ivs, evs, level, nature);

  const pp: Record<string, number> = {};
  for (const move of moves) {
    pp[move.name] = move.pp ?? 5;
  }

  return {
    pokemon,
    species,
    nickname: config.nickname ?? pokemon.name,
    level,
    nature,
    ability,
    ivs,
    evs,
    moves,
    held_item: config.held_item ?? null,
    current_hp: stats.hp,
    max_hp: stats.hp,
    status: null,
    status_turns: 0,
    stat_stages: { ...ZERO_STAGES },
    pp,
    is_fainted: false,
  };
}

function createBattleSide(team: BattlePokemon[], format: 'singles' | 'doubles' = 'singles'): BattleSide {
  const activeIndices = format === 'doubles' && team.length >= 2 ? [0, 1] : [0];
  return {
    active_index: activeIndices[0],
    active_indices: activeIndices,
    team,
    volatile: new Set(),
    volatile_data: {},
    entry_hazards: [],
    light_screen_turns: 0,
    reflect_turns: 0,
    tailwind_turns: 0,
  };
}

/**
 * Create an initial BattleState from two team configurations.
 */
export function createBattleState(
  playerTeam: TeamMemberConfig[],
  opponentTeam: TeamMemberConfig[],
  options?: BattleOptions,
): BattleState {
  const format = options?.format ?? 'singles';
  if (playerTeam.length === 0 || opponentTeam.length === 0) {
    throw new Error('Both teams must have at least one Pokemon');
  }
  if (format === 'doubles' && (playerTeam.length < 2 || opponentTeam.length < 2)) {
    throw new Error('Both teams must have at least two Pokemon for doubles');
  }

  const playerPokemon = playerTeam.map(createBattlePokemon);
  const opponentPokemon = opponentTeam.map(createBattlePokemon);

  return {
    turn: 0,
    format,
    player: createBattleSide(playerPokemon, format),
    opponent: createBattleSide(opponentPokemon, format),
    weather: {
      type: options?.weather ?? 'none',
      turns_remaining: options?.weather && options.weather !== 'none' ? 5 : 0,
    },
    terrain: {
      type: options?.terrain ?? 'none',
      turns_remaining: options?.terrain && options.terrain !== 'none' ? 5 : 0,
    },
    log: [],
    phase: 'select-action',
    winner: null,
  };
}

/**
 * Create a TeamMemberConfig with sensible defaults from a Pokemon.
 * Picks the first ability, suggests 4 moves, and uses level 50.
 */
export function createDefaultTeamMember(
  pokemon: Pokemon,
  options?: {
    level?: number;
    ability?: string;
    nature?: string;
    held_item?: string | null;
    moves?: string[];
  },
): TeamMemberConfig {
  const moves = options?.moves ?? suggestMoves(pokemon, 4).map(m => m.name);
  const ability = options?.ability ?? pokemon.abilities[0]?.name ?? 'unknown';
  return {
    pokemon_id: pokemon.id,
    level: options?.level ?? 50,
    moves,
    ability,
    nature: (options?.nature ?? 'hardy') as any,
    held_item: options?.held_item ?? null,
  };
}
