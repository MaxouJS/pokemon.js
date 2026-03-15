import {
  getPokemon, createBattleState, createDefaultTeamMember,
  executeTurn, getAIAction,
  TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type { BattleState, BattleAction, BattleLogEntry, PokemonTypeName, TeamMemberConfig } from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl, typeBadge, hpColor } from '../helpers';

const POOL = [
  'charizard', 'blastoise', 'venusaur', 'pikachu', 'gengar', 'alakazam',
  'dragonite', 'snorlax', 'scizor', 'tyranitar', 'garchomp', 'lucario',
];

const DEMO_ITEMS: Record<string, string> = {
  charizard: 'life-orb', blastoise: 'leftovers', venusaur: 'black-sludge',
  pikachu: 'choice-specs', gengar: 'choice-specs', alakazam: 'life-orb',
  dragonite: 'lum-berry', snorlax: 'leftovers', scizor: 'choice-band',
  tyranitar: 'choice-scarf', garchomp: 'life-orb', lucario: 'focus-sash',
};

function buildConfig(name: string): TeamMemberConfig {
  const p = getPokemon(name)!;
  return createDefaultTeamMember(p, { held_item: DEMO_ITEMS[name] ?? null });
}

export function renderBattle(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Battle Demo'));
  header.appendChild(el('p', {}, "Pick your team and fight the AI. Abilities, held items, entry hazards, and screens are all active."));
  container.appendChild(header);

  let selected: string[] = [];
  let state: BattleState | null = null;
  let logEntries: BattleLogEntry[] = [];
  const battleContainer = el('div');
  container.appendChild(battleContainer);

  renderPickPhase();

  function renderPickPhase() {
    battleContainer.innerHTML = '';

    const section = el('div');
    section.appendChild(el('h3', { style: 'margin-bottom:4px;' }, 'Your Team (pick 1-3)'));
    section.appendChild(el('p', { class: 'desc' }, "Click to select your team members. Each Pokemon has its ability and a held item. The opponent's team will be randomly chosen."));

    const picker = el('div', { class: 'team-picker' });
    for (const name of POOL) {
      const p = getPokemon(name)!;
      const ability = p.abilities[0]?.name ?? '';
      const item = DEMO_ITEMS[name];
      const btn = document.createElement('button');
      btn.className = `team-pick-btn ${selected.includes(name) ? 'selected' : ''}`;
      const img = el('img', { src: spriteUrl(p.id), alt: name, style: 'width:40px;height:40px;' });
      btn.appendChild(img);
      const info = el('div', { style: 'display:flex;flex-direction:column;align-items:start;' });
      info.appendChild(el('span', {}, fmtName(name)));
      info.appendChild(el('span', { style: 'font-size:9px;color:#888;' }, `${fmtName(ability)} \u00B7 ${fmtName(item)}`));
      btn.appendChild(info);
      btn.onclick = () => {
        const idx = selected.indexOf(name);
        if (idx >= 0) selected.splice(idx, 1);
        else if (selected.length < 3) selected.push(name);
        renderPickPhase();
      };
      picker.appendChild(btn);
    }
    section.appendChild(picker);

    const startBtn = document.createElement('button');
    startBtn.className = 'primary';
    startBtn.textContent = `Start Battle (${selected.length}/3 selected)`;
    startBtn.disabled = selected.length === 0;
    startBtn.style.marginTop = '8px';
    startBtn.onclick = startBattle;
    section.appendChild(startBtn);

    battleContainer.appendChild(section);
  }

  function startBattle() {
    const available = POOL.filter(n => !selected.includes(n));
    const shuffled = available.sort(() => Math.random() - 0.5);
    const opponentNames = shuffled.slice(0, 3);

    const playerConfigs = selected.map(n => buildConfig(n));
    const opponentConfigs = opponentNames.map(n => buildConfig(n));

    state = createBattleState(playerConfigs, opponentConfigs);
    logEntries = [];
    renderBattlePhase();
  }

  function renderBattlePhase() {
    battleContainer.innerHTML = '';
    if (!state) return;

    const arena = el('div', { class: 'battle-arena' });

    const playerMon = state.player.team[state.player.active_index];
    const opponentMon = state.opponent.team[state.opponent.active_index];

    // ─── Field status bar (weather, screens, hazards) ───
    const fieldStatus = el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:12px;' });
    if (state.weather.type !== 'none') {
      const weatherColors: Record<string, string> = { sun: '#ffd93d', rain: '#56b6c2', sandstorm: '#c8a96e', hail: '#a8d8ea' };
      fieldStatus.appendChild(el('span', { style: `font-size:10px;padding:2px 8px;border-radius:10px;background:${weatherColors[state.weather.type] || '#555'};color:#111;font-weight:700;` }, `${fmtName(state.weather.type)} (${state.weather.turns_remaining}t)`));
    }
    for (const [side, label] of [['player', 'Your'], ['opponent', 'Opp']] as const) {
      const s = state[side];
      if (s.reflect_turns > 0) fieldStatus.appendChild(el('span', { style: 'font-size:10px;padding:2px 8px;border-radius:10px;background:#e8a87c;color:#111;font-weight:700;' }, `${label} Reflect (${s.reflect_turns}t)`));
      if (s.light_screen_turns > 0) fieldStatus.appendChild(el('span', { style: 'font-size:10px;padding:2px 8px;border-radius:10px;background:#95e1d3;color:#111;font-weight:700;' }, `${label} L.Screen (${s.light_screen_turns}t)`));
      for (const h of s.entry_hazards) {
        const hazardColors: Record<string, string> = { 'stealth-rock': '#c8a96e', 'spikes': '#888', 'toxic-spikes': '#b06ab3', 'sticky-web': '#a0a0a0' };
        fieldStatus.appendChild(el('span', { style: `font-size:10px;padding:2px 8px;border-radius:10px;background:${hazardColors[h.type] || '#555'};color:#111;font-weight:700;` }, `${label} ${fmtName(h.type)}${h.layers > 1 ? ` x${h.layers}` : ''}`));
      }
    }
    if (fieldStatus.childNodes.length > 0) arena.appendChild(fieldStatus);

    // ─── Battle Field ───
    const field = el('div', { class: 'battle-field' });

    // Player side (back sprite)
    const playerSide = el('div', { class: 'battle-pokemon' });
    const pImg = el('img', { src: spriteUrl(playerMon.pokemon.id, 'back'), alt: playerMon.pokemon.name });
    playerSide.appendChild(pImg);
    playerSide.appendChild(el('div', { class: 'name' }, fmtName(playerMon.pokemon.name)));
    const pTypes = el('div', { style: 'display:flex;gap:3px;justify-content:center;margin:4px 0;' });
    for (const t of playerMon.pokemon.types) pTypes.appendChild(typeBadge(t));
    playerSide.appendChild(pTypes);

    // Ability + item info
    playerSide.appendChild(el('div', { style: 'font-size:9px;color:#888;margin-bottom:4px;' }, `${fmtName(playerMon.ability)}${playerMon.held_item ? ' \u00B7 ' + fmtName(playerMon.held_item) : ''}`));
    if (playerMon.status) {
      const statusColors: Record<string, string> = { burn: '#e06c75', poison: '#b06ab3', 'bad-poison': '#9b59b6', paralysis: '#ffd93d', sleep: '#888', freeze: '#56b6c2' };
      playerSide.appendChild(el('span', { style: `font-size:9px;padding:1px 6px;border-radius:8px;background:${statusColors[playerMon.status] || '#555'};color:#fff;font-weight:700;` }, playerMon.status.toUpperCase()));
    }

    const pHpContainer = el('div', { class: 'hp-bar-container' });
    const pHpBg = el('div', { class: 'hp-bar-bg' });
    const pPct = playerMon.current_hp / playerMon.max_hp;
    const pHpFill = el('div', { class: 'hp-bar-fill' });
    pHpFill.style.width = `${Math.max(0, pPct * 100)}%`;
    pHpFill.style.background = hpColor(pPct);
    pHpBg.appendChild(pHpFill);
    pHpContainer.appendChild(pHpBg);
    pHpContainer.appendChild(el('div', { class: 'hp-text' }, `${playerMon.current_hp}/${playerMon.max_hp} HP`));
    playerSide.appendChild(pHpContainer);
    field.appendChild(playerSide);

    field.appendChild(el('div', { class: 'battle-vs' }, 'VS'));

    // Opponent side (front sprite)
    const oppSide = el('div', { class: 'battle-pokemon' });
    const oImg = el('img', { src: spriteUrl(opponentMon.pokemon.id), alt: opponentMon.pokemon.name });
    oppSide.appendChild(oImg);
    oppSide.appendChild(el('div', { class: 'name' }, fmtName(opponentMon.pokemon.name)));
    const oTypes = el('div', { style: 'display:flex;gap:3px;justify-content:center;margin:4px 0;' });
    for (const t of opponentMon.pokemon.types) oTypes.appendChild(typeBadge(t));
    oppSide.appendChild(oTypes);

    oppSide.appendChild(el('div', { style: 'font-size:9px;color:#888;margin-bottom:4px;' }, `${fmtName(opponentMon.ability)}${opponentMon.held_item ? ' \u00B7 ' + fmtName(opponentMon.held_item) : ''}`));
    if (opponentMon.status) {
      const statusColors: Record<string, string> = { burn: '#e06c75', poison: '#b06ab3', 'bad-poison': '#9b59b6', paralysis: '#ffd93d', sleep: '#888', freeze: '#56b6c2' };
      oppSide.appendChild(el('span', { style: `font-size:9px;padding:1px 6px;border-radius:8px;background:${statusColors[opponentMon.status] || '#555'};color:#fff;font-weight:700;` }, opponentMon.status.toUpperCase()));
    }

    const oHpContainer = el('div', { class: 'hp-bar-container' });
    const oHpBg = el('div', { class: 'hp-bar-bg' });
    const oPct = opponentMon.current_hp / opponentMon.max_hp;
    const oHpFill = el('div', { class: 'hp-bar-fill' });
    oHpFill.style.width = `${Math.max(0, oPct * 100)}%`;
    oHpFill.style.background = hpColor(oPct);
    oHpBg.appendChild(oHpFill);
    oHpContainer.appendChild(oHpBg);
    oHpContainer.appendChild(el('div', { class: 'hp-text' }, `${opponentMon.current_hp}/${opponentMon.max_hp} HP`));
    oppSide.appendChild(oHpContainer);
    field.appendChild(oppSide);

    arena.appendChild(field);

    // ─── Check if game over ───
    if (state.winner) {
      const result = el('div', { style: 'text-align:center;padding:24px;' });
      const msg = state.winner === 'player' ? 'You win!' : 'You lose!';
      const color = state.winner === 'player' ? '#6bcb77' : '#e06c75';
      result.appendChild(el('div', { style: `font-size:32px;font-weight:900;color:${color};` }, msg));
      result.appendChild(el('div', { style: 'color:#888;margin-top:8px;' }, `Battle ended on turn ${state.turn}`));
      const playAgain = document.createElement('button');
      playAgain.className = 'primary';
      playAgain.textContent = 'Play Again';
      playAgain.style.marginTop = '16px';
      playAgain.onclick = () => { selected = []; state = null; logEntries = []; renderPickPhase(); };
      result.appendChild(playAgain);
      arena.appendChild(result);
    } else if (playerMon.current_hp <= 0) {
      // ─── Player needs to switch (fainted) ───
      const switchSection = el('div', { style: 'margin-top:16px;' });
      switchSection.appendChild(el('h3', { style: 'font-size:14px;margin-bottom:8px;' }, 'Your Pokemon fainted! Choose a replacement:'));
      const switchRow = el('div', { class: 'inline-row' });
      for (let i = 0; i < state.player.team.length; i++) {
        const pm = state.player.team[i];
        if (pm.current_hp <= 0 || i === state.player.active_index) continue;
        const btn = document.createElement('button');
        btn.textContent = `${fmtName(pm.pokemon.name)} (${pm.current_hp}/${pm.max_hp})`;
        btn.onclick = () => doSwitch(i);
        switchRow.appendChild(btn);
      }
      switchSection.appendChild(switchRow);
      arena.appendChild(switchSection);
    } else {
      // ─── Move Buttons ───
      const movesSection = el('div', { class: 'battle-moves' });
      for (let i = 0; i < playerMon.moves.length; i++) {
        const move = playerMon.moves[i];
        const pp = playerMon.pp[move.name] ?? 0;
        const color = TYPE_COLORS[move.type as PokemonTypeName] || '#555';
        const btn = document.createElement('button');
        btn.className = 'battle-move-btn';
        btn.style.background = color;
        btn.disabled = pp <= 0;
        btn.innerHTML = `${fmtName(move.name)}<div class="move-info">${move.type} \u00B7 ${move.power || '\u2014'} pow \u00B7 ${pp} PP</div>`;
        btn.onclick = () => doMove(i);
        movesSection.appendChild(btn);
      }
      arena.appendChild(movesSection);

      // ─── Switch Buttons ───
      const aliveBench = state.player.team
        .map((pm, i) => ({ pm, i }))
        .filter(({ pm, i }) => i !== state!.player.active_index && pm.current_hp > 0);

      if (aliveBench.length > 0) {
        const switchRow = el('div', { class: 'inline-row', style: 'margin-top:12px;' });
        switchRow.appendChild(el('span', { style: 'font-size:11px;color:#666;' }, 'Switch:'));
        for (const { pm, i } of aliveBench) {
          const btn = document.createElement('button');
          btn.style.cssText = 'font-size:11px;padding:6px 12px;';
          btn.textContent = `${fmtName(pm.pokemon.name)} (${pm.current_hp}/${pm.max_hp})`;
          btn.onclick = () => doSwitch(i);
          switchRow.appendChild(btn);
        }
        arena.appendChild(switchRow);
      }
    }

    // ─── Team Overview ───
    const teamRow = el('div', { style: 'display:flex;gap:24px;margin-top:16px;' });
    for (const side of ['player', 'opponent'] as const) {
      const sideData = state[side];
      const teamDiv = el('div', { style: 'flex:1;' });
      teamDiv.appendChild(el('div', { style: 'font-size:11px;font-weight:700;color:#666;text-transform:uppercase;margin-bottom:6px;' }, side === 'player' ? 'Your Team' : 'Opponent'));
      for (const pm of sideData.team) {
        const row = el('div', { style: 'display:flex;align-items:center;gap:6px;margin-bottom:4px;' });
        const mini = el('img', { src: spriteUrl(pm.pokemon.id), style: 'width:24px;height:24px;image-rendering:pixelated;' });
        row.appendChild(mini);
        const nameSpan = el('span', { style: `font-size:11px;${pm.current_hp <= 0 ? 'opacity:0.3;text-decoration:line-through;' : ''}` }, fmtName(pm.pokemon.name));
        row.appendChild(nameSpan);
        if (pm.held_item) {
          row.appendChild(el('span', { style: 'font-size:9px;color:#666;' }, fmtName(pm.held_item)));
        }
        const miniBar = el('div', { style: 'flex:1;height:4px;background:#1e1e2e;border-radius:2px;overflow:hidden;' });
        const miniPct = Math.max(0, pm.current_hp / pm.max_hp);
        const miniFill = el('div', { style: `height:100%;width:${miniPct * 100}%;background:${hpColor(miniPct)};border-radius:2px;` });
        miniBar.appendChild(miniFill);
        row.appendChild(miniBar);
        teamDiv.appendChild(row);
      }
      teamRow.appendChild(teamDiv);
    }
    arena.appendChild(teamRow);

    // ─── Battle Log ───
    if (logEntries.length > 0) {
      const logDiv = el('div', { class: 'battle-log' });
      for (const entry of logEntries) {
        const cls = `log-${entry.type}`;
        logDiv.appendChild(el('div', { class: cls }, entry.message));
      }
      arena.appendChild(logDiv);
      setTimeout(() => { logDiv.scrollTop = logDiv.scrollHeight; }, 0);
    }

    battleContainer.appendChild(arena);
  }

  function doMove(moveIndex: number) {
    if (!state || state.winner) return;
    const playerAction: BattleAction = { type: 'move', move_index: moveIndex };
    const aiAction = getAIAction(state, 'greedy');
    const result = executeTurn(state, playerAction, aiAction);
    state = result.state;
    logEntries = [...logEntries, ...result.log];

    // Auto-switch opponent if fainted
    const oppActive = state.opponent.team[state.opponent.active_index];
    if (oppActive.current_hp <= 0 && !state.winner) {
      const aliveIdx = state.opponent.team.findIndex((p, i) => i !== state!.opponent.active_index && p.current_hp > 0);
      if (aliveIdx >= 0) {
        const switchResult = executeTurn(state, { type: 'move', move_index: 0 }, { type: 'switch', pokemon_index: aliveIdx });
        state = switchResult.state;
        logEntries = [...logEntries, ...switchResult.log];
      }
    }

    renderBattlePhase();
  }

  function doSwitch(pokemonIndex: number) {
    if (!state || state.winner) return;
    const playerAction: BattleAction = { type: 'switch', pokemon_index: pokemonIndex };
    const aiAction = getAIAction(state, 'greedy');
    const result = executeTurn(state, playerAction, aiAction);
    state = result.state;
    logEntries = [...logEntries, ...result.log];
    renderBattlePhase();
  }
}
