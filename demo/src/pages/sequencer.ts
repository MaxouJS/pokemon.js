import {
  createBattleState, createDefaultTeamMember,
  getAllPokemon, getAIAction,
  BattleDirector, BattleEventPlayer,
  TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type {
  BattleState, BattleAction,
  BattleFrame, BattleSnapshot, PokemonSnapshot, SideSnapshot,
  BattleEvent, BattleEventKind,
  PokemonTypeName, TeamMemberConfig,
} from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl, typeBadge, hpColor } from '../helpers';
import { renderTeamBuilder } from '../team-builder-ui';

// ─── Event kind styling ───

const EVENT_ICON: Partial<Record<BattleEventKind, { icon: string; color: string }>> = {
  move_announce:    { icon: '\u2694\uFE0F', color: '#61afef' },
  hit:              { icon: '\uD83D\uDCA5', color: '#e06c75' },
  critical_hit:     { icon: '\u203C\uFE0F', color: '#ffd93d' },
  effectiveness:    { icon: '\u26A1',       color: '#d19a66' },
  miss:             { icon: '\u274C',       color: '#888' },
  faint:            { icon: '\uD83D\uDC80', color: '#e06c75' },
  status_inflict:   { icon: '\uD83D\uDFE1', color: '#b06ab3' },
  status_cure:      { icon: '\u2728',       color: '#98c379' },
  status_block:     { icon: '\uD83D\uDEAB', color: '#888' },
  status_damage:    { icon: '\uD83E\uDE78', color: '#b06ab3' },
  stat_change:      { icon: '\uD83D\uDCC8', color: '#56b6c2' },
  switch_out:       { icon: '\u21A9\uFE0F', color: '#888' },
  switch_in:        { icon: '\u21AA\uFE0F', color: '#98c379' },
  weather_damage:   { icon: '\u26C5',       color: '#c8a96e' },
  weather_end:      { icon: '\u2600\uFE0F', color: '#888' },
  ability_activate: { icon: '\uD83C\uDF1F', color: '#c678dd' },
  item_activate:    { icon: '\uD83C\uDF92', color: '#d19a66' },
  hazard_set:       { icon: '\u26A0\uFE0F', color: '#c8a96e' },
  hazard_damage:    { icon: '\uD83E\uDEA8', color: '#c8a96e' },
  recoil:           { icon: '\uD83D\uDD04', color: '#e06c75' },
  drain:            { icon: '\uD83E\uDE78', color: '#98c379' },
  heal:             { icon: '\uD83D\uDC9A', color: '#6bcb77' },
  flinch:           { icon: '\uD83D\uDE35', color: '#ffd93d' },
  battle_end:       { icon: '\uD83C\uDFC6', color: '#ffd93d' },
  info:             { icon: '\u2139\uFE0F', color: '#888' },
};

const SPEEDS = [
  { label: 'Slow', value: 0.5 },
  { label: 'Normal', value: 1 },
  { label: 'Fast', value: 2.5 },
  { label: 'Instant', value: 0 },
];

// ─── DOM references for live updates ───

interface BattleDOM {
  // Sprites
  playerSprite: HTMLImageElement;
  opponentSprite: HTMLImageElement;
  // Names
  playerName: HTMLElement;
  opponentName: HTMLElement;
  // Type badges
  playerTypes: HTMLElement;
  opponentTypes: HTMLElement;
  // Ability/item line
  playerMeta: HTMLElement;
  opponentMeta: HTMLElement;
  // Status badges
  playerStatus: HTMLElement;
  opponentStatus: HTMLElement;
  // HP bars
  playerHpFill: HTMLElement;
  playerHpText: HTMLElement;
  opponentHpFill: HTMLElement;
  opponentHpText: HTMLElement;
  // Text box
  textIcon: HTMLElement;
  textContent: HTMLElement;
  textBox: HTMLElement;
  // Team overviews
  playerTeam: HTMLElement;
  opponentTeam: HTMLElement;
  // Event log
  eventLog: HTMLElement;
  // Field status
  fieldStatus: HTMLElement;
  // Action area
  actionArea: HTMLElement;
}

const STATUS_COLORS: Record<string, string> = {
  burn: '#e06c75', poison: '#b06ab3', 'bad-poison': '#9b59b6',
  paralysis: '#ffd93d', sleep: '#888', freeze: '#56b6c2',
};

export function renderSequencer(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Sequenced Battle'));
  header.appendChild(el('p', {}, 'Powered by the BattleDirector — every hit, status change, and switch animates progressively. The HP bars, sprites, and statuses update in real time as each event plays, not all at once.'));
  container.appendChild(header);

  const director = new BattleDirector();
  let state: BattleState | null = null;
  let speed = 1;
  let player: BattleEventPlayer | null = null;
  let isAnimating = false;
  let dom: BattleDOM | null = null;

  const battleContainer = el('div');
  container.appendChild(battleContainer);

  renderPickPhase();

  // ─── Pick phase ───

  function renderPickPhase() {
    battleContainer.innerHTML = '';
    renderTeamBuilder(battleContainer, {
      teamSize: { min: 1, max: 3 },
      onStart: startBattle,
    });
  }

  function startBattle(playerTeam: TeamMemberConfig[]) {
    const all = getAllPokemon();
    const playerIds = new Set(playerTeam.map(t => t.pokemon_id));
    const available = all.filter(p => !playerIds.has(p.id));
    const shuffled = available.sort(() => Math.random() - 0.5);
    const oppPokemon = shuffled.slice(0, 3);
    const opponentConfigs = oppPokemon.map(p => createDefaultTeamMember(p));

    state = createBattleState(playerTeam, opponentConfigs);
    buildBattleDOM();
  }

  // ─── Build the battle DOM once ───

  function buildBattleDOM() {
    battleContainer.innerHTML = '';
    if (!state) return;

    const arena = el('div', { class: 'battle-arena' });

    // Field status
    const fieldStatus = el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:12px;min-height:20px;' });
    arena.appendChild(fieldStatus);

    // Battle field
    const field = el('div', { class: 'battle-field' });

    // Player side
    const playerSide = el('div', { class: 'battle-pokemon' });
    const playerSprite = document.createElement('img');
    playerSprite.style.cssText = 'width:96px;height:96px;image-rendering:pixelated;transition:opacity 0.3s;';
    playerSide.appendChild(playerSprite);
    const playerName = el('div', { class: 'name' });
    playerSide.appendChild(playerName);
    const playerTypes = el('div', { style: 'display:flex;gap:3px;justify-content:center;margin:4px 0;' });
    playerSide.appendChild(playerTypes);
    const playerMeta = el('div', { style: 'font-size:9px;color:#888;margin-bottom:4px;' });
    playerSide.appendChild(playerMeta);
    const playerStatus = el('div', { style: 'min-height:18px;margin-bottom:4px;' });
    playerSide.appendChild(playerStatus);
    const playerHpContainer = el('div', { class: 'hp-bar-container' });
    const playerHpBg = el('div', { class: 'hp-bar-bg' });
    const playerHpFill = el('div', { class: 'hp-bar-fill' });
    playerHpFill.style.transition = 'width 0.6s ease, background 0.6s ease';
    playerHpBg.appendChild(playerHpFill);
    playerHpContainer.appendChild(playerHpBg);
    const playerHpText = el('div', { class: 'hp-text' });
    playerHpContainer.appendChild(playerHpText);
    playerSide.appendChild(playerHpContainer);
    field.appendChild(playerSide);

    field.appendChild(el('div', { class: 'battle-vs' }, 'VS'));

    // Opponent side
    const opponentSide = el('div', { class: 'battle-pokemon' });
    const opponentSprite = document.createElement('img');
    opponentSprite.style.cssText = 'width:96px;height:96px;image-rendering:pixelated;transition:opacity 0.3s;';
    opponentSide.appendChild(opponentSprite);
    const opponentName = el('div', { class: 'name' });
    opponentSide.appendChild(opponentName);
    const opponentTypes = el('div', { style: 'display:flex;gap:3px;justify-content:center;margin:4px 0;' });
    opponentSide.appendChild(opponentTypes);
    const opponentMeta = el('div', { style: 'font-size:9px;color:#888;margin-bottom:4px;' });
    opponentSide.appendChild(opponentMeta);
    const opponentStatus = el('div', { style: 'min-height:18px;margin-bottom:4px;' });
    opponentSide.appendChild(opponentStatus);
    const opponentHpContainer = el('div', { class: 'hp-bar-container' });
    const opponentHpBg = el('div', { class: 'hp-bar-bg' });
    const opponentHpFill = el('div', { class: 'hp-bar-fill' });
    opponentHpFill.style.transition = 'width 0.6s ease, background 0.6s ease';
    opponentHpBg.appendChild(opponentHpFill);
    opponentHpContainer.appendChild(opponentHpBg);
    const opponentHpText = el('div', { class: 'hp-text' });
    opponentHpContainer.appendChild(opponentHpText);
    opponentSide.appendChild(opponentHpContainer);
    field.appendChild(opponentSide);

    arena.appendChild(field);

    // Text box
    const textBox = el('div', {
      style: 'background:#0a0a12;border:2px solid #1e1e2e;border-radius:12px;padding:16px 20px;margin:16px 0;min-height:56px;display:flex;align-items:center;gap:12px;font-size:15px;color:#ddd;line-height:1.5;transition:border-color 0.3s;',
    });
    const textIcon = el('span', { style: 'font-size:20px;flex-shrink:0;' });
    const textContent = el('span', { style: 'flex:1;' });
    textBox.appendChild(textIcon);
    textBox.appendChild(textContent);
    arena.appendChild(textBox);

    // Speed controls
    const controlsRow = el('div', { style: 'display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px;' });
    controlsRow.appendChild(el('span', { style: 'font-size:11px;color:#666;font-weight:600;' }, 'Speed:'));
    for (const preset of SPEEDS) {
      const btn = document.createElement('button');
      btn.textContent = preset.label;
      btn.style.cssText = `font-size:10px;padding:3px 10px;${speed === preset.value ? 'background:#61afef;color:#111;' : ''}`;
      btn.onclick = () => {
        speed = preset.value;
        if (player) player.setSpeed(speed || 999);
        // Rebuild speed buttons
        controlsRow.querySelectorAll('button').forEach((b, i) => {
          (b as HTMLButtonElement).style.background = SPEEDS[i].value === speed ? '#61afef' : '';
          (b as HTMLButtonElement).style.color = SPEEDS[i].value === speed ? '#111' : '';
        });
      };
      controlsRow.appendChild(btn);
    }

    const skipBtn = document.createElement('button');
    skipBtn.textContent = 'Skip';
    skipBtn.style.cssText = 'font-size:10px;padding:3px 10px;margin-left:8px;background:#2a2a1a;color:#ffd93d;';
    skipBtn.onclick = () => { if (player) player.skip(); };
    controlsRow.appendChild(skipBtn);

    arena.appendChild(controlsRow);

    // Action area (moves, switches, game over)
    const actionArea = el('div');
    arena.appendChild(actionArea);

    // Team overview
    const teamRow = el('div', { style: 'display:flex;gap:24px;margin-top:16px;' });
    const playerTeam = el('div', { style: 'flex:1;' });
    const opponentTeamDiv = el('div', { style: 'flex:1;' });
    teamRow.appendChild(playerTeam);
    teamRow.appendChild(opponentTeamDiv);
    arena.appendChild(teamRow);

    // Event log
    const logLabel = el('div', { style: 'font-size:11px;font-weight:700;color:#555;text-transform:uppercase;margin-top:16px;margin-bottom:6px;' }, 'Event Log');
    arena.appendChild(logLabel);
    const eventLog = el('div', {
      style: 'background:#0a0a12;border:1px solid #1e1e2e;border-radius:8px;padding:8px 12px;max-height:220px;overflow-y:auto;font-family:"JetBrains Mono",monospace;font-size:11px;',
    });
    arena.appendChild(eventLog);

    battleContainer.appendChild(arena);

    dom = {
      playerSprite, opponentSprite,
      playerName, opponentName,
      playerTypes, opponentTypes,
      playerMeta, opponentMeta,
      playerStatus, opponentStatus,
      playerHpFill, playerHpText,
      opponentHpFill, opponentHpText,
      textIcon, textContent, textBox,
      playerTeam, opponentTeam: opponentTeamDiv,
      eventLog, fieldStatus, actionArea,
    };

    // Initial render from current state
    const snap = snapshotFromState(state!);
    applySnapshot(snap);
    showPrompt();
  }

  // ─── Apply a snapshot to the DOM ───

  function applySnapshot(snap: BattleSnapshot) {
    if (!dom) return;

    const pActive = snap.player.team[snap.player.active_index];
    const oActive = snap.opponent.team[snap.opponent.active_index];

    // Player sprite
    dom.playerSprite.src = spriteUrl(pActive.id, 'back');
    dom.playerSprite.alt = pActive.name;
    dom.playerSprite.style.opacity = pActive.is_fainted ? '0.2' : '1';

    // Opponent sprite
    dom.opponentSprite.src = spriteUrl(oActive.id);
    dom.opponentSprite.alt = oActive.name;
    dom.opponentSprite.style.opacity = oActive.is_fainted ? '0.2' : '1';

    // Names
    dom.playerName.textContent = fmtName(pActive.name);
    dom.opponentName.textContent = fmtName(oActive.name);

    // Types
    dom.playerTypes.innerHTML = '';
    for (const t of pActive.types) dom.playerTypes.appendChild(typeBadge(t as PokemonTypeName));
    dom.opponentTypes.innerHTML = '';
    for (const t of oActive.types) dom.opponentTypes.appendChild(typeBadge(t as PokemonTypeName));

    // Meta
    dom.playerMeta.textContent = `${fmtName(pActive.ability)}${pActive.held_item ? ' \u00B7 ' + fmtName(pActive.held_item) : ''}`;
    dom.opponentMeta.textContent = `${fmtName(oActive.ability)}${oActive.held_item ? ' \u00B7 ' + fmtName(oActive.held_item) : ''}`;

    // Status
    renderStatusBadge(dom.playerStatus, pActive.status);
    renderStatusBadge(dom.opponentStatus, oActive.status);

    // HP bars
    updateHpBar(dom.playerHpFill, dom.playerHpText, pActive);
    updateHpBar(dom.opponentHpFill, dom.opponentHpText, oActive);

    // Team overview
    renderTeamOverview(dom.playerTeam, 'Your Team', snap.player);
    renderTeamOverview(dom.opponentTeam, 'Opponent', snap.opponent);

    // Field status
    renderFieldStatus(snap);
  }

  function updateHpBar(fill: HTMLElement, text: HTMLElement, poke: PokemonSnapshot) {
    const pct = poke.max_hp > 0 ? poke.current_hp / poke.max_hp : 0;
    fill.style.width = `${Math.max(0, pct * 100)}%`;
    fill.style.background = hpColor(pct);
    text.textContent = `${poke.current_hp}/${poke.max_hp} HP`;
  }

  function renderStatusBadge(container: HTMLElement, status: string | null) {
    container.innerHTML = '';
    if (status) {
      const badge = el('span', {
        style: `font-size:9px;padding:1px 6px;border-radius:8px;background:${STATUS_COLORS[status] || '#555'};color:#fff;font-weight:700;`,
      }, status.toUpperCase());
      container.appendChild(badge);
    }
  }

  function renderTeamOverview(container: HTMLElement, label: string, side: SideSnapshot) {
    container.innerHTML = '';
    container.appendChild(el('div', { style: 'font-size:11px;font-weight:700;color:#666;text-transform:uppercase;margin-bottom:6px;' }, label));
    for (const pm of side.team) {
      const row = el('div', { style: 'display:flex;align-items:center;gap:6px;margin-bottom:4px;' });
      const mini = el('img', { src: spriteUrl(pm.id), style: 'width:24px;height:24px;image-rendering:pixelated;' });
      row.appendChild(mini);
      row.appendChild(el('span', { style: `font-size:11px;${pm.is_fainted ? 'opacity:0.3;text-decoration:line-through;' : ''}` }, fmtName(pm.name)));
      if (pm.held_item) row.appendChild(el('span', { style: 'font-size:9px;color:#666;' }, fmtName(pm.held_item)));
      const miniBar = el('div', { style: 'flex:1;height:4px;background:#1e1e2e;border-radius:2px;overflow:hidden;' });
      const miniPct = pm.max_hp > 0 ? Math.max(0, pm.current_hp / pm.max_hp) : 0;
      miniBar.appendChild(el('div', { style: `height:100%;width:${miniPct * 100}%;background:${hpColor(miniPct)};border-radius:2px;transition:width 0.4s;` }));
      row.appendChild(miniBar);
      container.appendChild(row);
    }
  }

  function renderFieldStatus(snap: BattleSnapshot) {
    if (!dom) return;
    dom.fieldStatus.innerHTML = '';
    if (snap.weather.type !== 'none') {
      const wc: Record<string, string> = { sun: '#ffd93d', rain: '#56b6c2', sandstorm: '#c8a96e', hail: '#a8d8ea' };
      dom.fieldStatus.appendChild(el('span', { style: `font-size:10px;padding:2px 8px;border-radius:10px;background:${wc[snap.weather.type] || '#555'};color:#111;font-weight:700;` }, `${fmtName(snap.weather.type)} (${snap.weather.turns_remaining}t)`));
    }
    for (const [sideKey, label] of [['player', 'Your'], ['opponent', 'Opp']] as const) {
      const s = snap[sideKey];
      if (s.reflect_turns > 0) dom.fieldStatus.appendChild(el('span', { style: 'font-size:10px;padding:2px 8px;border-radius:10px;background:#e8a87c;color:#111;font-weight:700;' }, `${label} Reflect`));
      if (s.light_screen_turns > 0) dom.fieldStatus.appendChild(el('span', { style: 'font-size:10px;padding:2px 8px;border-radius:10px;background:#95e1d3;color:#111;font-weight:700;' }, `${label} L.Screen`));
      for (const h of s.hazards) {
        dom.fieldStatus.appendChild(el('span', { style: 'font-size:10px;padding:2px 8px;border-radius:10px;background:#888;color:#111;font-weight:700;' }, `${label} ${fmtName(h.type)}${h.layers > 1 ? ` x${h.layers}` : ''}`));
      }
    }
  }

  // ─── Text box ───

  function updateTextBox(event: BattleEvent) {
    if (!dom) return;
    const style = EVENT_ICON[event.kind] || { icon: '\u2022', color: '#888' };
    dom.textIcon.textContent = style.icon;
    dom.textContent.textContent = event.text;
    dom.textBox.style.borderColor = style.color;
  }

  function setTextBoxPrompt(text: string) {
    if (!dom) return;
    dom.textIcon.textContent = '\u2694\uFE0F';
    dom.textContent.textContent = text;
    dom.textBox.style.borderColor = '#1e1e2e';
  }

  // ─── Event log ───

  function appendToLog(event: BattleEvent) {
    if (!dom) return;
    const style = EVENT_ICON[event.kind] || { icon: '\u2022', color: '#666' };
    const row = el('div', { style: `display:flex;align-items:flex-start;gap:8px;padding:3px 0;border-bottom:1px solid #111118;color:${style.color};` });
    row.appendChild(el('span', { style: 'flex-shrink:0;width:18px;text-align:center;' }, style.icon));
    row.appendChild(el('span', { style: 'flex-shrink:0;font-size:9px;color:#555;padding:1px 4px;border-radius:4px;background:#111118;min-width:85px;text-align:center;' }, event.kind.replace(/_/g, ' ')));
    row.appendChild(el('span', { style: 'color:#bbb;' }, event.text));
    dom.eventLog.appendChild(row);
    dom.eventLog.scrollTop = dom.eventLog.scrollHeight;
  }

  // ─── Show action prompt ───

  function showPrompt() {
    if (!dom || !state) return;
    dom.actionArea.innerHTML = '';
    isAnimating = false;

    const pMon = state.player.team[state.player.active_index];
    const oMon = state.opponent.team[state.opponent.active_index];

    if (state.winner) {
      const msg = state.winner === 'player' ? 'You win!' : 'You lose!';
      const color = state.winner === 'player' ? '#6bcb77' : '#e06c75';
      const result = el('div', { style: 'text-align:center;padding:16px;' });
      result.appendChild(el('div', { style: `font-size:28px;font-weight:900;color:${color};` }, msg));
      result.appendChild(el('div', { style: 'color:#888;margin-top:4px;' }, `Battle ended on turn ${state.turn}`));
      const playAgain = document.createElement('button');
      playAgain.className = 'primary';
      playAgain.textContent = 'Play Again';
      playAgain.style.marginTop = '12px';
      playAgain.onclick = () => { state = null; renderPickPhase(); };
      result.appendChild(playAgain);
      dom.actionArea.appendChild(result);
      setTextBoxPrompt(msg);
      return;
    }

    if (pMon.current_hp <= 0) {
      setTextBoxPrompt('Your Pokemon fainted! Choose a replacement.');
      const switchRow = el('div', { class: 'inline-row' });
      for (let i = 0; i < state.player.team.length; i++) {
        const pm = state.player.team[i];
        if (pm.current_hp <= 0 || i === state.player.active_index) continue;
        const btn = document.createElement('button');
        btn.textContent = `${fmtName(pm.pokemon.name)} (${pm.current_hp}/${pm.max_hp})`;
        btn.onclick = () => doForcedSwitch('player', i);
        switchRow.appendChild(btn);
      }
      dom.actionArea.appendChild(switchRow);
      return;
    }

    setTextBoxPrompt(`What will ${fmtName(pMon.pokemon.name)} do?`);

    // Moves
    const movesSection = el('div', { class: 'battle-moves' });
    for (let i = 0; i < pMon.moves.length; i++) {
      const move = pMon.moves[i];
      const pp = pMon.pp[move.name] ?? 0;
      const color = TYPE_COLORS[move.type as PokemonTypeName] || '#555';
      const btn = document.createElement('button');
      btn.className = 'battle-move-btn';
      btn.style.background = color;
      btn.disabled = pp <= 0;
      btn.innerHTML = `${fmtName(move.name)}<div class="move-info">${move.type} \u00B7 ${move.power || '\u2014'} pow \u00B7 ${pp} PP</div>`;
      btn.onclick = () => doAction({ type: 'move', move_index: i });
      movesSection.appendChild(btn);
    }
    dom.actionArea.appendChild(movesSection);

    // Switches
    const aliveBench = state.player.team
      .map((pm, i) => ({ pm, i }))
      .filter(({ pm, i }) => i !== state!.player.active_index && pm.current_hp > 0);
    if (aliveBench.length > 0) {
      const switchRow = el('div', { class: 'inline-row', style: 'margin-top:8px;' });
      switchRow.appendChild(el('span', { style: 'font-size:11px;color:#666;' }, 'Switch:'));
      for (const { pm, i } of aliveBench) {
        const btn = document.createElement('button');
        btn.style.cssText = 'font-size:11px;padding:6px 12px;';
        btn.textContent = `${fmtName(pm.pokemon.name)} (${pm.current_hp}/${pm.max_hp})`;
        btn.onclick = () => doAction({ type: 'switch', pokemon_index: i });
        switchRow.appendChild(btn);
      }
      dom.actionArea.appendChild(switchRow);
    }
  }

  // ─── Execute action with Director ───

  function doAction(playerAction: BattleAction) {
    if (!state || state.winner || isAnimating || !dom) return;

    isAnimating = true;
    dom.actionArea.innerHTML = '';

    const aiAction = getAIAction(state, 'greedy');
    const result = director.executeTurn(state, playerAction, aiAction);
    state = result.state;

    playFrames(result.frames, () => handlePostTurn());
  }

  /**
   * After frames finish playing, handle forced switches (faints).
   * Opponent auto-switches; player gets a switch prompt.
   */
  function handlePostTurn() {
    if (!state || state.winner) {
      showPrompt();
      return;
    }

    // Check if opponent needs a forced switch
    const oppActive = state.opponent.team[state.opponent.active_index];
    if ((oppActive.is_fainted || oppActive.current_hp <= 0) && !state.winner) {
      const aliveIdx = state.opponent.team.findIndex((p, i) =>
        i !== state!.opponent.active_index && p.current_hp > 0 && !p.is_fainted
      );
      if (aliveIdx >= 0) {
        const switchResult = director.forceSwitch(state, 'opponent', aliveIdx);
        state = switchResult.state;
        playFrames(switchResult.frames, () => handlePostTurn());
        return;
      }
    }

    // If player's Pokemon also fainted, showPrompt will display switch UI
    showPrompt();
  }

  /**
   * Forced switch (after faint) — no full turn, just the switch.
   */
  function doForcedSwitch(side: 'player' | 'opponent', pokemonIndex: number) {
    if (!state || isAnimating || !dom) return;

    isAnimating = true;
    dom.actionArea.innerHTML = '';

    const switchResult = director.forceSwitch(state, side, pokemonIndex);
    state = switchResult.state;

    playFrames(switchResult.frames, () => handlePostTurn());
  }

  /**
   * Play a sequence of frames through the BattleEventPlayer,
   * then call onComplete when done.
   */
  function playFrames(frames: BattleFrame[], onComplete: () => void) {
    if (frames.length === 0) {
      // Sync snapshot even if no frames
      if (state) {
        const snap = snapshotFromState(state);
        applySnapshot(snap);
      }
      onComplete();
      return;
    }

    player = new BattleEventPlayer({ speed: speed || 999 });

    player.onEvent((_event, index) => {
      const frame = frames[index];
      if (!frame) return;
      updateTextBox(frame.event);
      applySnapshot(frame.snapshot);
      appendToLog(frame.event);
    });

    player.onComplete(() => {
      player = null;
      // Ensure final engine state is reflected
      if (state) {
        const snap = snapshotFromState(state);
        applySnapshot(snap);
      }
      onComplete();
    });

    player.enqueue(frames.map(f => f.event));
    player.play();
  }

  // ─── Helpers ───

  function snapshotFromState(s: BattleState): BattleSnapshot {
    return {
      turn: s.turn,
      phase: s.phase,
      winner: s.winner,
      weather: { type: s.weather.type, turns_remaining: s.weather.turns_remaining },
      player: sideSnap(s.player),
      opponent: sideSnap(s.opponent),
    };
  }

  function sideSnap(side: any): SideSnapshot {
    return {
      active_index: side.active_index,
      active_indices: [...(side.active_indices || [side.active_index])],
      team: side.team.map((p: any) => ({
        name: p.pokemon.name,
        nickname: p.nickname,
        id: p.pokemon.id,
        types: [...p.pokemon.types],
        current_hp: p.current_hp,
        max_hp: p.max_hp,
        status: p.status,
        ability: p.ability,
        held_item: p.held_item,
        is_fainted: p.is_fainted,
      })),
      reflect_turns: side.reflect_turns,
      light_screen_turns: side.light_screen_turns,
      hazards: side.entry_hazards.map((h: any) => ({ type: h.type, layers: h.layers })),
    };
  }
}
