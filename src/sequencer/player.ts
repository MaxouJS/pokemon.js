/**
 * BattleEventPlayer — plays through a queue of BattleEvents with timing.
 *
 * Framework-agnostic: works in Node, browsers, or any JS runtime.
 * Simply register callbacks and control playback.
 *
 * @example
 * ```ts
 * const player = new BattleEventPlayer();
 * player.onEvent((event) => {
 *   console.log(event.text);
 *   updateUI(event);
 * });
 * player.onComplete(() => console.log('Turn done!'));
 * player.enqueue(events);
 * player.play();
 * ```
 */

import type { BattleEvent, SequencerSpeed } from './types';
import { SPEED_MULTIPLIERS } from './types';

export interface BattleEventPlayerOptions {
  /** Speed multiplier. 1 = normal, 2 = double speed, 0.5 = half speed, 0 = instant. */
  speed?: number;
  /** Start playing immediately when events are enqueued. Default: false. */
  autoPlay?: boolean;
}

export class BattleEventPlayer {
  private queue: BattleEvent[] = [];
  private cursor = 0;
  private _isPlaying = false;
  private _isPaused = false;
  private _speed: number;
  private _autoPlay: boolean;
  private _timer: ReturnType<typeof setTimeout> | null = null;
  private _eventCallbacks: Array<(event: BattleEvent, index: number) => void> = [];
  private _completeCallbacks: Array<() => void> = [];

  constructor(options: BattleEventPlayerOptions = {}) {
    this._speed = options.speed ?? 1;
    this._autoPlay = options.autoPlay ?? false;
  }

  // ─── Queue management ───

  /** Add events to the end of the playback queue. */
  enqueue(events: BattleEvent[]): void {
    this.queue.push(...events);
    if (this._autoPlay && !this._isPlaying) {
      this.play();
    }
  }

  /** Replace the entire queue and reset. */
  load(events: BattleEvent[]): void {
    this.stop();
    this.queue = [...events];
    this.cursor = 0;
  }

  /** Clear the queue and stop playback. */
  clear(): void {
    this.stop();
    this.queue = [];
    this.cursor = 0;
  }

  // ─── Playback control ───

  /** Start or resume automatic playback. */
  play(): void {
    if (this._isPlaying && !this._isPaused) return;
    this._isPlaying = true;
    this._isPaused = false;
    this.scheduleNext();
  }

  /** Pause automatic playback. Use play() to resume. */
  pause(): void {
    if (!this._isPlaying) return;
    this._isPaused = true;
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /** Stop playback and reset to the beginning. */
  stop(): void {
    this._isPlaying = false;
    this._isPaused = false;
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * Skip remaining events — fires all callbacks instantly, then completes.
   * Useful for impatient players or accessibility.
   */
  skip(): void {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
    while (this.cursor < this.queue.length) {
      this.emitEvent(this.queue[this.cursor], this.cursor);
      this.cursor++;
    }
    this._isPlaying = false;
    this._isPaused = false;
    this.emitComplete();
  }

  /**
   * Advance to the next event manually (step mode).
   * Returns the event, or null if the queue is exhausted.
   */
  next(): BattleEvent | null {
    if (this.cursor >= this.queue.length) return null;
    const event = this.queue[this.cursor];
    this.emitEvent(event, this.cursor);
    this.cursor++;
    if (this.cursor >= this.queue.length) {
      this.emitComplete();
    }
    return event;
  }

  // ─── Speed ───

  /** Set speed as a multiplier: 1 = normal, 2 = fast, 0.5 = slow, 0 = instant. */
  setSpeed(multiplier: number): void {
    this._speed = Math.max(0, multiplier);
  }

  /** Set speed using a named preset. */
  setSpeedPreset(preset: SequencerSpeed): void {
    this._speed = 1 / SPEED_MULTIPLIERS[preset];
  }

  // ─── Callbacks ───

  /** Register a callback fired for each event during playback. */
  onEvent(callback: (event: BattleEvent, index: number) => void): void {
    this._eventCallbacks.push(callback);
  }

  /** Register a callback fired when all events have been played. */
  onComplete(callback: () => void): void {
    this._completeCallbacks.push(callback);
  }

  /** Remove all registered callbacks. */
  removeAllListeners(): void {
    this._eventCallbacks = [];
    this._completeCallbacks = [];
  }

  // ─── State getters ───

  get isPlaying(): boolean { return this._isPlaying && !this._isPaused; }
  get isPaused(): boolean { return this._isPaused; }
  get remaining(): number { return Math.max(0, this.queue.length - this.cursor); }
  get total(): number { return this.queue.length; }
  get current(): number { return this.cursor; }

  // ─── Internals ───

  private scheduleNext(): void {
    if (this._isPaused || !this._isPlaying) return;
    if (this.cursor >= this.queue.length) {
      this._isPlaying = false;
      this.emitComplete();
      return;
    }

    const event = this.queue[this.cursor];
    this.emitEvent(event, this.cursor);
    this.cursor++;

    if (this.cursor >= this.queue.length) {
      this._isPlaying = false;
      this.emitComplete();
      return;
    }

    // Schedule the next event after the current event's duration
    const delay = this._speed === 0 ? 0 : Math.round(event.duration / Math.max(0.01, this._speed));

    if (delay === 0) {
      // Instant mode: process all remaining synchronously
      this.scheduleNext();
    } else {
      this._timer = setTimeout(() => {
        this._timer = null;
        this.scheduleNext();
      }, delay);
    }
  }

  private emitEvent(event: BattleEvent, index: number): void {
    for (const cb of this._eventCallbacks) {
      cb(event, index);
    }
  }

  private emitComplete(): void {
    for (const cb of this._completeCallbacks) {
      cb();
    }
  }
}
