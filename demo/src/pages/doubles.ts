import {
  getPokemon, createBattleState,
  executeDoublesTurn, suggestMoves,
  TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type { BattleState, BattleAction, BattleLogEntry, PokemonTypeName, TeamMemberConfig } from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl, typeBadge, hpColor } from '../helpers';

const POOL = [
  'charizard', 'blastoise', 'venusaur', 'pikachu', 'gengar', 'alakazam',
  'dragonite', 'snorlax', 'scizor', 'tyranitar', 'garchomp', 'lucario',
];

const LEVEL = 50;

const ITEMS: Record<string, string> = {
  charizard: 'life-orb', blastoise: 'leftovers', venusaur: 'black-sludge',
  pikachu: 'focus-sash', gengar: 'choice-specs', alakazam: 'focus-sash',
  dragonite: 'lum-berry', snorlax: 'leftovers', scizor: 'choice-band',
  tyranitar: 'choice-scarf', garchomp: 'life-orb', lucario: 'focus-sash',
};

function buildConfig(name: string): TeamMemberConfig {
  const p = getPokemon(name)!;
  const moves = suggestMoves(p, 4).map(m => m.name);
  return {
    pokemon_id: p.id, level: LEVEL, moves,
    ability: p.abilities[0]?.name ?? 'unknown',
    held_item: ITEMS[name] ?? null,
  };
}

export function renderDoubles(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Doubles Battle'));
  header.appendChild(el('p', {}, 'Double battle format — two Pokemon per side. Spread moves hit both opponents at 0.75x damage. Pick 4 Pokemon for your team.'));
  container.appendChild(header);

  let selected: string[] = [];
  let state: BattleState | null = null;
  let logEntries: BattleLogEntry[] = [];
  let pendingSlot0Action: BattleAction | null = null;
  const battleContainer = el('div');
  container.appendChild(battleContainer);

  renderPickPhase();

  function renderPickPhase() {
    battleContainer.innerHTML = '';
    const section = el('div');
    section.appendChild(el('h3', { style: 'margin-bottom:4px;' }, 'Your Team (pick 4)'));
    section.appendChild(el('p', { class: 'desc' }, 'Select 4 Pokemon for doubles. Two will be active at a time.'));

    const picker = el('div', { class: 'team-picker' });
    for (const name of POOL) {
      const p = getPokemon(name)!;
      const btn = document.createElement('button');
      btn.className = `team-pick-btn ${selected.includes(name) ? 'selected' : ''}`;
      const img = el('img', { src: spriteUrl(p.id), alt: name, style: 'width:40px;height:40px;' });
      btn.appendChild(img);
      const info = el('div', { style: 'display:flex;flex-direction:column;align-items:start;' });
      info.appendChild(el('span', {}, fmtName(name)));
      info.appendChild(el('span', { style: 'font-size:9px;color:#888;' }, `${fmtName(p.abilities[0]?.name ?? '')} \u00B7 ${fmtName(ITEMS[name] ?? '')}`));
      btn.appendChild(info);
      btn.onclick = () => {
        const idx = selected.indexOf(name);
        if (idx >= 0) selected.splice(idx, 1);
        else if (selected.length < 4) selected.push(name);
        renderPickPhase();
      };
      picker.appendChild(btn);
    }
    section.appendChild(picker);

    const startBtn = document.createElement('button');
    startBtn.className = 'primary';
    startBtn.textContent = `Start Doubles (${selected.length}/4 selected)`;
    startBtn.disabled = selected.length < 4;
    startBtn.style.marginTop = '8px';
    startBtn.onclick = startBattle;
    section.appendChild(startBtn);
    battleContainer.appendChild(section);
  }

  function startBattle() {
    const available = POOL.filter(n => !selected.includes(n));
    const shuffled = available.sort(() => Math.random() - 0.5);
    const opponentNames = shuffled.slice(0, 4);

    const playerConfigs = selected.map(n => buildConfig(n));
    const opponentConfigs = opponentNames.map(n => buildConfig(n));

    state = createBattleState(playerConfigs, opponentConfigs, { format: 'doubles' });
    logEntries = [];
    pendingSlot0Action = null;
    renderBattlePhase();
  }

  function renderPokemonSlot(mon: { pokemon: any; nickname: string; ability: string; held_item: string | null; current_hp: number; max_hp: number; status: string | null; moves: any[]; pp: Record<string, number> }, spriteType: 'front' | 'back') {
    const div = el('div', { style: 'text-align:center;flex:1;' });
    if (mon.current_hp <= 0) {
      div.appendChild(el('div', { style: 'font-size:12px;color:#555;padding:20px;' }, `${fmtName(mon.pokemon.name)} fainted`));
      return div;
    }
    const img = el('img', {
      src: spriteUrl(mon.pokemon.id, spriteType === 'back' ? 'back' : undefined),
      alt: mon.pokemon.name,
      style: 'width:64px;height:64px;image-rendering:pixelated;',
    });
    div.appendChild(img);
    div.appendChild(el('div', { style: 'font-size:11px;font-weight:600;' }, fmtName(mon.pokemon.name)));

    const types = el('div', { style: 'display:flex;gap:2px;justify-content:center;margin:2px 0;' });
    for (const t of mon.pokemon.types) types.appendChild(typeBadge(t));
    div.appendChild(types);

    div.appendChild(el('div', { style: 'font-size:8px;color:#666;' }, `${fmtName(mon.ability)}${mon.held_item ? ' \u00B7 ' + fmtName(mon.held_item) : ''}`));

    if (mon.status) {
      const sc: Record<string, string> = { burn: '#e06c75', poison: '#b06ab3', 'bad-poison': '#9b59b6', paralysis: '#ffd93d', sleep: '#888', freeze: '#56b6c2' };
      div.appendChild(el('span', { style: `font-size:8px;padding:1px 4px;border-radius:6px;background:${sc[mon.status] || '#555'};color:#fff;font-weight:700;` }, mon.status.toUpperCase()));
    }

    const hpBg = el('div', { style: 'height:4px;background:#1e1e2e;border-radius:2px;overflow:hidden;margin:4px 8px;' });
    const pct = Math.max(0, mon.current_hp / mon.max_hp);
    hpBg.appendChild(el('div', { style: `height:100%;width:${pct * 100}%;background:${hpColor(pct)};border-radius:2px;` }));
    div.appendChild(hpBg);
    div.appendChild(el('div', { style: 'font-size:9px;color:#888;' }, `${mon.current_hp}/${mon.max_hp}`));

    return div;
  }

  function renderBattlePhase() {
    battleContainer.innerHTML = '';
    if (!state) return;

    const arena = el('div', { class: 'battle-arena' });

    // Field status
    const fieldStatus = el('div', { style: 'display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:8px;' });
    if (state.weather.type !== 'none') {
      const wc: Record<string, string> = { sun: '#ffd93d', rain: '#56b6c2', sandstorm: '#c8a96e', hail: '#a8d8ea' };
      fieldStatus.appendChild(el('span', { style: `font-size:9px;padding:2px 6px;border-radius:8px;background:${wc[state.weather.type] || '#555'};color:#111;font-weight:700;` }, `${fmtName(state.weather.type)} (${state.weather.turns_remaining}t)`));
    }
    for (const [side, label] of [['player', 'You'], ['opponent', 'Opp']] as const) {
      const s = state[side];
      if (s.reflect_turns > 0) fieldStatus.appendChild(el('span', { style: 'font-size:9px;padding:2px 6px;border-radius:8px;background:#e8a87c;color:#111;font-weight:700;' }, `${label} Reflect`));
      if (s.light_screen_turns > 0) fieldStatus.appendChild(el('span', { style: 'font-size:9px;padding:2px 6px;border-radius:8px;background:#95e1d3;color:#111;font-weight:700;' }, `${label} L.Screen`));
      for (const h of s.entry_hazards) {
        fieldStatus.appendChild(el('span', { style: 'font-size:9px;padding:2px 6px;border-radius:8px;background:#888;color:#111;font-weight:700;' }, `${label} ${fmtName(h.type)}${h.layers > 1 ? ` x${h.layers}` : ''}`));
      }
    }
    if (fieldStatus.childNodes.length > 0) arena.appendChild(fieldStatus);

    // ─── Doubles field: 2v2 ───
    const field = el('div', { style: 'display:flex;gap:12px;align-items:center;justify-content:center;margin-bottom:16px;' });

    // Player's two active
    const playerSlots = el('div', { style: 'display:flex;gap:8px;' });
    for (const idx of state.player.active_indices) {
      playerSlots.appendChild(renderPokemonSlot(state.player.team[idx] as any, 'back'));
    }
    field.appendChild(playerSlots);

    field.appendChild(el('div', { style: 'font-size:20px;font-weight:900;color:#333;padding:0 12px;' }, 'VS'));

    // Opponent's two active
    const oppSlots = el('div', { style: 'display:flex;gap:8px;' });
    for (const idx of state.opponent.active_indices) {
      oppSlots.appendChild(renderPokemonSlot(state.opponent.team[idx] as any, 'front'));
    }
    field.appendChild(oppSlots);

    arena.appendChild(field);

    // ─── Game over ───
    if (state.winner) {
      const result = el('div', { style: 'text-align:center;padding:24px;' });
      const msg = state.winner === 'player' ? 'You win!' : 'You lose!';
      const color = state.winner === 'player' ? '#6bcb77' : '#e06c75';
      result.appendChild(el('div', { style: `font-size:32px;font-weight:900;color:${color};` }, msg));
      result.appendChild(el('div', { style: 'color:#888;margin-top:8px;' }, `Turn ${state.turn}`));
      const again = document.createElement('button');
      again.className = 'primary';
      again.textContent = 'Play Again';
      again.style.marginTop = '16px';
      again.onclick = () => { selected = []; state = null; logEntries = []; pendingSlot0Action = null; renderPickPhase(); };
      result.appendChild(again);
      arena.appendChild(result);
    } else {
      // ─── Action selection for each active slot ───
      const activeSlots = state.player.active_indices
        .map((idx, slot) => ({ mon: state!.player.team[idx], slot, idx }))
        .filter(s => s.mon.current_hp > 0);

      if (activeSlots.length === 0) {
        // Need to switch in — auto for now
        arena.appendChild(el('div', { style: 'text-align:center;color:#888;padding:16px;' }, 'No active Pokemon...'));
      } else if (pendingSlot0Action === null && activeSlots.length >= 2) {
        // Need action for slot 0
        const slot0 = activeSlots[0];
        arena.appendChild(el('div', { style: 'text-align:center;font-size:12px;color:#888;margin-bottom:8px;' }, `Choose action for ${fmtName(slot0.mon.pokemon.name)} (Slot 1):`));
        arena.appendChild(renderMoveButtons(slot0.mon, slot0.slot));
      } else if (pendingSlot0Action !== null && activeSlots.length >= 2) {
        // Need action for slot 1
        const slot1 = activeSlots[1];
        arena.appendChild(el('div', { style: 'text-align:center;font-size:12px;color:#888;margin-bottom:8px;' }, `Choose action for ${fmtName(slot1.mon.pokemon.name)} (Slot 2):`));
        arena.appendChild(renderMoveButtons(slot1.mon, slot1.slot));
      } else {
        // Only 1 active — just need one action
        const slot = activeSlots[0];
        arena.appendChild(el('div', { style: 'text-align:center;font-size:12px;color:#888;margin-bottom:8px;' }, `Choose action for ${fmtName(slot.mon.pokemon.name)}:`));
        arena.appendChild(renderMoveButtons(slot.mon, slot.slot));
      }
    }

    // Team overview
    const teamRow = el('div', { style: 'display:flex;gap:24px;margin-top:16px;' });
    for (const side of ['player', 'opponent'] as const) {
      const sideData = state[side];
      const teamDiv = el('div', { style: 'flex:1;' });
      teamDiv.appendChild(el('div', { style: 'font-size:10px;font-weight:700;color:#666;text-transform:uppercase;margin-bottom:4px;' }, side === 'player' ? 'Your Team' : 'Opponent'));
      for (let i = 0; i < sideData.team.length; i++) {
        const pm = sideData.team[i];
        const isActive = sideData.active_indices.includes(i);
        const row = el('div', { style: 'display:flex;align-items:center;gap:4px;margin-bottom:2px;' });
        if (isActive) row.appendChild(el('span', { style: 'font-size:8px;color:#6bcb77;' }, '\u25CF'));
        row.appendChild(el('span', { style: `font-size:10px;${pm.current_hp <= 0 ? 'opacity:0.3;text-decoration:line-through;' : ''}` }, fmtName(pm.pokemon.name)));
        const bar = el('div', { style: 'flex:1;height:3px;background:#1e1e2e;border-radius:2px;overflow:hidden;' });
        const pct = Math.max(0, pm.current_hp / pm.max_hp);
        bar.appendChild(el('div', { style: `height:100%;width:${pct * 100}%;background:${hpColor(pct)};` }));
        row.appendChild(bar);
        teamDiv.appendChild(row);
      }
      teamRow.appendChild(teamDiv);
    }
    arena.appendChild(teamRow);

    // Battle log
    if (logEntries.length > 0) {
      const logDiv = el('div', { class: 'battle-log' });
      for (const entry of logEntries) {
        logDiv.appendChild(el('div', { class: `log-${entry.type}` }, entry.message));
      }
      arena.appendChild(logDiv);
      setTimeout(() => { logDiv.scrollTop = logDiv.scrollHeight; }, 0);
    }

    battleContainer.appendChild(arena);
  }

  function renderMoveButtons(mon: any, slot: number) {
    const section = el('div', { class: 'battle-moves' });
    for (let i = 0; i < mon.moves.length; i++) {
      const move = mon.moves[i];
      const pp = mon.pp[move.name] ?? 0;
      const color = TYPE_COLORS[move.type as PokemonTypeName] || '#555';
      const btn = document.createElement('button');
      btn.className = 'battle-move-btn';
      btn.style.background = color;
      btn.disabled = pp <= 0;
      btn.innerHTML = `${fmtName(move.name)}<div class="move-info">${move.type} \u00B7 ${move.power || '\u2014'} pow \u00B7 ${pp} PP</div>`;
      btn.onclick = () => submitAction({ type: 'move', move_index: i, slot }, slot);
      section.appendChild(btn);
    }
    return section;
  }

  function submitAction(action: BattleAction, slot: number) {
    if (!state || state.winner) return;

    const activeSlots = state.player.active_indices
      .map((idx, s) => ({ mon: state!.player.team[idx], s }))
      .filter(s => s.mon.current_hp > 0);

    if (activeSlots.length >= 2 && pendingSlot0Action === null && slot === activeSlots[0].s) {
      // First action submitted — wait for second
      pendingSlot0Action = action;
      renderBattlePhase();
      return;
    }

    // Build player actions array
    const playerActions: BattleAction[] = [];
    if (pendingSlot0Action) {
      playerActions.push(pendingSlot0Action);
      playerActions.push(action);
    } else {
      playerActions.push(action);
    }

    // AI actions: simple greedy for each opponent slot
    const opponentActions: BattleAction[] = [];
    for (let s = 0; s < state.opponent.active_indices.length; s++) {
      const mon = state.opponent.team[state.opponent.active_indices[s]];
      if (mon.current_hp <= 0) {
        // Need to switch
        const benchIdx = state.opponent.team.findIndex((p, i) => p.current_hp > 0 && !state!.opponent.active_indices.includes(i));
        if (benchIdx >= 0) {
          opponentActions.push({ type: 'switch', pokemon_index: benchIdx, slot: s });
        } else {
          opponentActions.push({ type: 'move', move_index: 0, slot: s });
        }
      } else {
        // Pick best damaging move
        let bestIdx = 0;
        let bestPow = 0;
        for (let i = 0; i < mon.moves.length; i++) {
          const pow = mon.moves[i].power ?? 0;
          if (pow > bestPow && (mon.pp[mon.moves[i].name] ?? 0) > 0) {
            bestPow = pow;
            bestIdx = i;
          }
        }
        opponentActions.push({ type: 'move', move_index: bestIdx, slot: s });
      }
    }

    const result = executeDoublesTurn(state, playerActions, opponentActions);
    state = result.state;
    logEntries = [...logEntries, ...result.log];
    pendingSlot0Action = null;

    renderBattlePhase();
  }
}
