import type { BattlePokemon, BattleSide, BattleState } from '../../types';

export function cloneState(state: BattleState): BattleState {
  return {
    ...state,
    player: cloneSide(state.player),
    opponent: cloneSide(state.opponent),
    weather: { ...state.weather },
    terrain: { ...state.terrain },
    log: [...state.log],
  };
}

export function cloneSide(side: BattleSide): BattleSide {
  return {
    ...side,
    active_indices: [...side.active_indices],
    team: side.team.map(clonePokemon),
    volatile: new Set(side.volatile),
    volatile_data: { ...side.volatile_data },
    entry_hazards: side.entry_hazards.map(h => ({ ...h })),
  };
}

export function clonePokemon(p: BattlePokemon): BattlePokemon {
  return {
    ...p,
    ivs: { ...p.ivs },
    evs: { ...p.evs },
    stat_stages: { ...p.stat_stages },
    pp: { ...p.pp },
    moves: [...p.moves],
  };
}
