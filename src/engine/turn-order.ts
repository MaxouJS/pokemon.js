import type { BattleAction, BattlePokemon } from '../types';
import { calcAllStats, getEffectiveStat } from './stats';
import { getStatusSpeedModifier } from './status';

/** The two sides that can act in a turn */
export type Side = 'player' | 'opponent';

/** Result of turn order resolution */
export interface TurnOrderResult {
  first: Side;
  second: Side;
}

/**
 * Get the priority of a battle action.
 * Move actions use the move's priority.
 * Switch actions have priority +7 (always go first).
 * Item actions have priority +6.
 * Flee has priority +7.
 */
function getActionPriority(action: BattleAction, pokemon: BattlePokemon): number {
  switch (action.type) {
    case 'move': {
      const move = pokemon.moves[action.move_index];
      return move ? move.priority : 0;
    }
    case 'switch':
      return 7;
    case 'item':
      return 6;
    case 'flee':
      return 7;
  }
}

/**
 * Calculate the effective speed of a Pokemon.
 */
function getEffectiveSpeed(pokemon: BattlePokemon): number {
  const stats = calcAllStats(
    pokemon.pokemon.stats,
    pokemon.ivs,
    pokemon.evs,
    pokemon.level,
    pokemon.nature,
  );
  const baseSpeed = getEffectiveStat(stats.speed, pokemon.stat_stages.speed);
  const statusMod = getStatusSpeedModifier(pokemon.status);
  return Math.floor(baseSpeed * statusMod);
}

/**
 * Resolve the turn order for a battle turn.
 * Priority moves go first. Same priority: faster Pokemon goes first.
 * Speed tie: random.
 */
export function resolveTurnOrder(
  playerAction: BattleAction,
  opponentAction: BattleAction,
  playerPokemon: BattlePokemon,
  opponentPokemon: BattlePokemon,
): TurnOrderResult {
  const playerPriority = getActionPriority(playerAction, playerPokemon);
  const opponentPriority = getActionPriority(opponentAction, opponentPokemon);

  if (playerPriority > opponentPriority) {
    return { first: 'player', second: 'opponent' };
  }
  if (opponentPriority > playerPriority) {
    return { first: 'opponent', second: 'player' };
  }

  const playerSpeed = getEffectiveSpeed(playerPokemon);
  const opponentSpeed = getEffectiveSpeed(opponentPokemon);

  if (playerSpeed > opponentSpeed) {
    return { first: 'player', second: 'opponent' };
  }
  if (opponentSpeed > playerSpeed) {
    return { first: 'opponent', second: 'player' };
  }

  if (Math.random() < 0.5) {
    return { first: 'player', second: 'opponent' };
  }
  return { first: 'opponent', second: 'player' };
}
