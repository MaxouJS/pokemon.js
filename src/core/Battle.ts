import type {
  BattleAction,
  BattleLogEntry,
  BattleOptions,
  BattlePhase,
  BattlePokemon,
  BattleState,
} from '../types';
import { createBattleState, executeTurn } from '../engine/battle';
import { getAIAction, type AIDifficulty } from '../engine/ai';
import { Team } from './Team';

/**
 * Battle orchestrator class.
 * Wraps the functional engine in an OOP interface.
 */
export class Battle {
  private _state: BattleState;
  private _aiDifficulty: AIDifficulty;
  private _turnHistory: BattleLogEntry[][] = [];

  constructor(
    playerTeam: Team,
    opponentTeam: Team,
    options?: BattleOptions,
  ) {
    if (playerTeam.isEmpty) throw new Error('Player team cannot be empty');
    if (opponentTeam.isEmpty) throw new Error('Opponent team cannot be empty');

    this._aiDifficulty = options?.ai_difficulty ?? 'smart';
    this._state = createBattleState(
      playerTeam.toBattleConfigs(),
      opponentTeam.toBattleConfigs(),
      options,
    );
  }

  // ─── State access ───────────────────────────────────

  /** Current battle state (read-only snapshot) */
  get state(): BattleState {
    return this._state;
  }

  /** Current turn number */
  get turn(): number {
    return this._state.turn;
  }

  /** Current battle phase */
  get phase(): BattlePhase {
    return this._state.phase;
  }

  /** Is the battle finished? */
  get isFinished(): boolean {
    return this._state.phase === 'finished';
  }

  /** The winner, or null if not finished / draw */
  get winner(): 'player' | 'opponent' | null {
    return this._state.winner;
  }

  /** Full battle log */
  get log(): readonly BattleLogEntry[] {
    return this._state.log;
  }

  /** Log entries grouped by turn */
  get turnHistory(): readonly BattleLogEntry[][] {
    return this._turnHistory;
  }

  // ─── Active Pokemon ─────────────────────────────────

  /** Get the player's active Pokemon */
  get playerActive(): BattlePokemon {
    return this._state.player.team[this._state.player.active_index];
  }

  /** Get the opponent's active Pokemon */
  get opponentActive(): BattlePokemon {
    return this._state.opponent.team[this._state.opponent.active_index];
  }

  /** Get the player's full team */
  get playerTeam(): readonly BattlePokemon[] {
    return this._state.player.team;
  }

  /** Get the opponent's full team */
  get opponentTeam(): readonly BattlePokemon[] {
    return this._state.opponent.team;
  }

  // ─── Actions ────────────────────────────────────────

  /**
   * Execute a turn with the player's action.
   * The AI automatically chooses the opponent's action.
   * Returns the turn's log entries.
   */
  selectAction(playerAction: BattleAction): BattleLogEntry[] {
    if (this.isFinished) {
      throw new Error('Battle is already finished');
    }

    const opponentAction = getAIAction(this._state, this._aiDifficulty);
    const result = executeTurn(this._state, playerAction, opponentAction);

    this._state = result.state;
    this._turnHistory.push(result.log);

    return result.log;
  }

  /**
   * Execute a turn with both actions specified (for PvP or testing).
   */
  executeTurn(playerAction: BattleAction, opponentAction: BattleAction): BattleLogEntry[] {
    if (this.isFinished) {
      throw new Error('Battle is already finished');
    }

    const result = executeTurn(this._state, playerAction, opponentAction);

    this._state = result.state;
    this._turnHistory.push(result.log);

    return result.log;
  }

  /**
   * Use a specific move by index (0-3).
   * Shortcut for selectAction({ type: 'move', move_index }).
   */
  useMove(moveIndex: number): BattleLogEntry[] {
    return this.selectAction({ type: 'move', move_index: moveIndex });
  }

  /**
   * Switch to a different Pokemon by team index.
   */
  switchPokemon(teamIndex: number): BattleLogEntry[] {
    return this.selectAction({ type: 'switch', pokemon_index: teamIndex });
  }

  /**
   * Use an item on a team member.
   * @param item - Item name (e.g. 'potion', 'full-restore')
   * @param targetIndex - Team index of the target Pokemon (default: active)
   */
  useItem(item: string, targetIndex?: number): BattleLogEntry[] {
    return this.selectAction({
      type: 'item',
      item,
      target_index: targetIndex ?? this._state.player.active_index,
    });
  }

  /**
   * Throw a Pokeball at the opponent's active Pokemon (wild battles only).
   * @param ball - Pokeball type (e.g. 'ultra-ball')
   */
  throwBall(ball: string): BattleLogEntry[] {
    return this.selectAction({
      type: 'item',
      item: ball,
      target_index: 0,
    });
  }

  /**
   * Flee from the battle.
   */
  flee(): BattleLogEntry[] {
    return this.selectAction({ type: 'flee' });
  }

  /**
   * Force a switch when the active Pokemon has fainted.
   * Required when phase is 'awaiting-switch'.
   */
  forceSwitch(teamIndex: number): void {
    if (this._state.phase !== 'awaiting-switch') {
      throw new Error('No switch required');
    }

    // Find which side needs to switch
    const playerActive = this._state.player.team[this._state.player.active_index];
    const opponentActive = this._state.opponent.team[this._state.opponent.active_index];

    if (playerActive.is_fainted) {
      this._state.player.active_index = teamIndex;
    }
    if (opponentActive.is_fainted) {
      // AI picks its own switch
      const aiSwitch = getAIAction(this._state, this._aiDifficulty);
      if (aiSwitch.type === 'switch') {
        this._state.opponent.active_index = aiSwitch.pokemon_index;
      }
    }

    this._state.phase = 'select-action';
  }

  // ─── Queries ────────────────────────────────────────

  /** Get valid move indices for the player's active Pokemon */
  getValidMoves(): number[] {
    const pokemon = this.playerActive;
    const indices: number[] = [];
    for (let i = 0; i < pokemon.moves.length; i++) {
      if ((pokemon.pp[pokemon.moves[i].name] ?? 0) > 0) {
        indices.push(i);
      }
    }
    return indices;
  }

  /** Get valid switch indices for the player */
  getValidSwitches(): number[] {
    const indices: number[] = [];
    for (let i = 0; i < this._state.player.team.length; i++) {
      if (i !== this._state.player.active_index && !this._state.player.team[i].is_fainted) {
        indices.push(i);
      }
    }
    return indices;
  }

  /** Get all valid actions the player can take */
  getValidActions(): BattleAction[] {
    const actions: BattleAction[] = [];

    for (const moveIdx of this.getValidMoves()) {
      actions.push({ type: 'move', move_index: moveIdx });
    }

    for (const switchIdx of this.getValidSwitches()) {
      actions.push({ type: 'switch', pokemon_index: switchIdx });
    }

    actions.push({ type: 'flee' });

    return actions;
  }

  /** Set AI difficulty */
  set aiDifficulty(difficulty: AIDifficulty) {
    this._aiDifficulty = difficulty;
  }

  get aiDifficulty(): AIDifficulty {
    return this._aiDifficulty;
  }
}
