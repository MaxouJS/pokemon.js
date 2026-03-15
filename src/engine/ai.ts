import type { BattleAction, BattlePokemon, BattleState } from '../types';
import { calculateDamage } from './damage';
import { getEffectiveness } from './type-effectiveness';

/** AI difficulty levels */
export type AIDifficulty = 'random' | 'greedy' | 'smart';

/**
 * Get a list of valid move indices for a Pokemon.
 */
function getValidMoveIndices(pokemon: BattlePokemon): number[] {
  const indices: number[] = [];
  for (let i = 0; i < pokemon.moves.length; i++) {
    const move = pokemon.moves[i];
    if ((pokemon.pp[move.name] ?? 0) > 0) {
      indices.push(i);
    }
  }
  return indices;
}

/**
 * Get indices of non-fainted Pokemon that can be switched in (excluding active).
 */
function getValidSwitchIndices(side: BattleState['opponent']): number[] {
  const indices: number[] = [];
  for (let i = 0; i < side.team.length; i++) {
    if (i !== side.active_index && !side.team[i].is_fainted) {
      indices.push(i);
    }
  }
  return indices;
}

function getRandomAction(state: BattleState): BattleAction {
  const side = state.opponent;
  const pokemon = side.team[side.active_index];
  const validMoves = getValidMoveIndices(pokemon);

  if (validMoves.length === 0) {
    return { type: 'move', move_index: 0 };
  }

  const idx = validMoves[Math.floor(Math.random() * validMoves.length)];
  return { type: 'move', move_index: idx };
}

function getGreedyAction(state: BattleState): BattleAction {
  const side = state.opponent;
  const pokemon = side.team[side.active_index];
  const target = state.player.team[state.player.active_index];
  const validMoves = getValidMoveIndices(pokemon);

  if (validMoves.length === 0) {
    return { type: 'move', move_index: 0 };
  }

  let bestIndex = validMoves[0];
  let bestDamage = -1;

  for (const idx of validMoves) {
    const move = pokemon.moves[idx];
    if (move.damage_class === 'status') {
      if (bestDamage < 0) {
        bestIndex = idx;
        bestDamage = 0;
      }
      continue;
    }

    const result = calculateDamage(pokemon, target, move, {
      weather: state.weather.type,
      critical_override: false,
      random_override: 0.925,
    });

    if (result.damage > bestDamage) {
      bestDamage = result.damage;
      bestIndex = idx;
    }
  }

  return { type: 'move', move_index: bestIndex };
}

function getSmartAction(state: BattleState): BattleAction {
  const side = state.opponent;
  const pokemon = side.team[side.active_index];
  const target = state.player.team[state.player.active_index];

  const validMoves = getValidMoveIndices(pokemon);
  const validSwitches = getValidSwitchIndices(side);

  if (validMoves.length === 0 && validSwitches.length === 0) {
    return { type: 'move', move_index: 0 };
  }

  interface MoveScore { index: number; score: number }
  const moveScores: MoveScore[] = [];

  for (const idx of validMoves) {
    const move = pokemon.moves[idx];
    let score = 0;

    if (move.damage_class !== 'status' && move.power !== null && move.power > 0) {
      const result = calculateDamage(pokemon, target, move, {
        weather: state.weather.type,
        critical_override: false,
        random_override: 0.925,
      });
      score = result.damage;

      if (result.effectiveness > 1) score *= 1.2;
      if (result.effectiveness < 1 && result.effectiveness > 0) score *= 0.8;
      if (result.effectiveness === 0) score = -1;
      if (result.damage >= target.current_hp) score *= 1.5;
    } else {
      if (move.meta.ailment !== 'none' && move.meta.ailment !== '' && target.status === null) {
        score = pokemon.max_hp * 0.3;
      } else if (move.stat_changes.length > 0) {
        score = pokemon.max_hp * 0.2;
      } else if (move.meta.healing > 0 && pokemon.current_hp < pokemon.max_hp * 0.5) {
        score = pokemon.max_hp * 0.4;
      } else {
        score = pokemon.max_hp * 0.1;
      }
    }

    moveScores.push({ index: idx, score });
  }

  let bestSwitchScore = -Infinity;
  let bestSwitchIndex = -1;

  const currentMatchupBad = target.pokemon.types.some(targetType => {
    return getEffectiveness(targetType, pokemon.pokemon.types) > 1;
  });

  if (currentMatchupBad && validSwitches.length > 0) {
    for (const switchIdx of validSwitches) {
      const candidate = side.team[switchIdx];
      let switchScore = 0;

      for (const candMove of candidate.moves) {
        if (candMove.damage_class !== 'status' && candMove.power !== null) {
          const eff = getEffectiveness(candMove.type, target.pokemon.types);
          if (eff > 1) switchScore += 50;
        }
      }

      const incomingResistance = target.pokemon.types.every(targetType => {
        return getEffectiveness(targetType, candidate.pokemon.types) <= 1;
      });
      if (incomingResistance) switchScore += 30;

      if (candidate.current_hp < candidate.max_hp * 0.3) {
        switchScore -= 40;
      }

      if (switchScore > bestSwitchScore) {
        bestSwitchScore = switchScore;
        bestSwitchIndex = switchIdx;
      }
    }
  }

  const bestMove = moveScores.reduce((a, b) => a.score > b.score ? a : b, { index: 0, score: -Infinity });

  if (bestSwitchIndex >= 0 && bestSwitchScore > bestMove.score * 0.5 && currentMatchupBad) {
    return { type: 'switch', pokemon_index: bestSwitchIndex };
  }

  if (bestMove.score >= 0) {
    return { type: 'move', move_index: bestMove.index };
  }

  return getRandomAction(state);
}

/**
 * Get an AI action based on the current battle state and difficulty level.
 */
export function getAIAction(state: BattleState, difficulty: AIDifficulty = 'random'): BattleAction {
  const side = state.opponent;
  const activePokemon = side.team[side.active_index];

  if (activePokemon.is_fainted) {
    const validSwitches = getValidSwitchIndices(side);
    if (validSwitches.length > 0) {
      if (difficulty === 'smart') {
        const target = state.player.team[state.player.active_index];
        let bestIdx = validSwitches[0];
        let bestScore = -Infinity;

        for (const idx of validSwitches) {
          const candidate = side.team[idx];
          let score = candidate.current_hp / candidate.max_hp * 100;

          for (const candMove of candidate.moves) {
            if (candMove.damage_class !== 'status' && candMove.power !== null) {
              const eff = getEffectiveness(candMove.type, target.pokemon.types);
              if (eff > 1) score += 30;
            }
          }

          if (score > bestScore) {
            bestScore = score;
            bestIdx = idx;
          }
        }

        return { type: 'switch', pokemon_index: bestIdx };
      }

      const idx = validSwitches[Math.floor(Math.random() * validSwitches.length)];
      return { type: 'switch', pokemon_index: idx };
    }

    return { type: 'move', move_index: 0 };
  }

  switch (difficulty) {
    case 'random':
      return getRandomAction(state);
    case 'greedy':
      return getGreedyAction(state);
    case 'smart':
      return getSmartAction(state);
    default:
      return getRandomAction(state);
  }
}

/**
 * Get AI actions for all active opponent slots in a doubles battle.
 * Returns one BattleAction per active slot with the slot field set.
 */
export function getDoublesAIActions(
  state: BattleState,
  difficulty: AIDifficulty = 'greedy',
): BattleAction[] {
  const side = state.opponent;
  const actions: BattleAction[] = [];

  for (let s = 0; s < side.active_indices.length; s++) {
    const idx = side.active_indices[s];
    const mon = side.team[idx];

    if (mon.current_hp <= 0) {
      // Fainted — try to switch in a bench Pokemon
      const benchIdx = side.team.findIndex(
        (p, i) => p.current_hp > 0 && !side.active_indices.includes(i),
      );
      if (benchIdx >= 0) {
        actions.push({ type: 'switch', pokemon_index: benchIdx, slot: s });
      } else {
        actions.push({ type: 'move', move_index: 0, slot: s });
      }
      continue;
    }

    const validMoves = getValidMoveIndices(mon);

    if (difficulty === 'random' || validMoves.length === 0) {
      const moveIdx = validMoves.length > 0
        ? validMoves[Math.floor(Math.random() * validMoves.length)]
        : 0;
      actions.push({ type: 'move', move_index: moveIdx, slot: s });
      continue;
    }

    // Greedy / smart: pick the move with highest estimated damage against any opponent
    const targets = state.player.active_indices
      .map(i => state.player.team[i])
      .filter(p => p.current_hp > 0);

    let bestIdx = validMoves[0];
    let bestDamage = -1;

    for (const mi of validMoves) {
      const move = mon.moves[mi];
      if (move.damage_class === 'status') {
        if (bestDamage < 0) { bestIdx = mi; bestDamage = 0; }
        continue;
      }
      for (const target of targets) {
        const result = calculateDamage(mon, target, move, {
          weather: state.weather.type,
          critical_override: false,
          random_override: 0.925,
        });
        if (result.damage > bestDamage) {
          bestDamage = result.damage;
          bestIdx = mi;
        }
      }
    }

    actions.push({ type: 'move', move_index: bestIdx, slot: s });
  }

  return actions;
}
