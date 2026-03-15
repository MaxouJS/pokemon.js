import {
  searchPokemon, getMovesForPokemon,
  getHoldableItems, getAllNatures,
  createDefaultTeamMember,
  TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type { Pokemon, PokemonTypeName, TeamMemberConfig } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl, renderStatBars } from '../helpers';

const MAX_TEAM = 6;
const MAX_MOVES = 4;

interface TeamMember {
  pokemon: Pokemon;
  config: TeamMemberConfig;
  nickname: string;
  ability: string;
  nature: string;
  held_item: string | null;
  moves: string[];
  level: number;
}

function createMember(pokemon: Pokemon): TeamMember {
  const config = createDefaultTeamMember(pokemon);
  return {
    pokemon,
    config,
    nickname: pokemon.name,
    ability: config.ability ?? pokemon.abilities[0]?.name ?? '',
    nature: config.nature ?? 'hardy',
    held_item: config.held_item ?? null,
    moves: config.moves ?? [],
    level: config.level ?? 50,
  };
}

export function renderTeamBuilder(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Team Builder'));
  header.appendChild(el('p', {}, 'Build a competitive Pokemon team. Customize abilities, natures, held items, and movesets for each member.'));
  container.appendChild(header);

  let team: TeamMember[] = [];
  let editingIndex: number | null = null;

  const allNatures = getAllNatures();
  const holdableItems = getHoldableItems();

  // ─── Team Overview ───
  const teamSection = el('div', { class: 'demo-section' });
  const teamHeader = el('h3', {}, 'Your Team (0/6)');
  teamSection.appendChild(teamHeader);
  const teamGrid = el('div', { class: 'team-grid' });
  teamSection.appendChild(teamGrid);

  const btnRow = el('div', { style: 'display:flex;gap:8px;margin-top:8px;' });
  const clearBtn = document.createElement('button');
  clearBtn.className = 'danger';
  clearBtn.textContent = 'Clear Team';
  clearBtn.onclick = () => { team = []; editingIndex = null; renderAll(); };
  btnRow.appendChild(clearBtn);
  teamSection.appendChild(btnRow);
  container.appendChild(teamSection);

  // ─── Search Section ───
  const addSection = el('div', { class: 'demo-section' });
  addSection.appendChild(el('h3', {}, 'Add Pokemon'));
  addSection.appendChild(el('p', { class: 'desc' }, 'Search by name. Click to add, then customize below.'));

  const searchInput = el('input', { type: 'text', placeholder: 'Search Pokemon by name...', style: 'width: 400px; margin-bottom: 16px;' }) as HTMLInputElement;
  addSection.appendChild(searchInput);
  const resultsGrid = el('div', { class: 'card-grid' });
  addSection.appendChild(resultsGrid);
  container.appendChild(addSection);

  // ─── Editor Section ───
  const editorSection = el('div', { class: 'demo-section' });
  editorSection.style.display = 'none';
  container.appendChild(editorSection);

  // ─── Export Section ───
  const exportSection = el('div', { class: 'demo-section' });
  exportSection.style.display = 'none';
  const exportHeader = el('h3', {}, 'Export');
  exportSection.appendChild(exportHeader);
  const exportCode = el('div', { class: 'code-block', style: 'white-space:pre;font-size:11px;max-height:300px;overflow-y:auto;' });
  exportSection.appendChild(exportCode);
  container.appendChild(exportSection);

  function renderAll() {
    renderTeamGrid();
    renderEditor();
    renderExport();
  }

  function renderTeamGrid() {
    teamHeader.textContent = `Your Team (${team.length}/${MAX_TEAM})`;
    teamGrid.innerHTML = '';

    for (let i = 0; i < MAX_TEAM; i++) {
      const slot = el('div', { class: `team-slot ${i >= team.length ? 'empty' : ''} ${i === editingIndex ? 'editing' : ''}` });
      slot.style.cursor = i < team.length ? 'pointer' : 'default';
      if (i === editingIndex) {
        slot.style.borderColor = '#61afef';
        slot.style.boxShadow = '0 0 0 1px #61afef';
      }

      if (i < team.length) {
        const m = team[i];
        const img = el('img', { src: spriteUrl(m.pokemon.id), alt: m.pokemon.name });
        img.onerror = () => { img.style.display = 'none'; };
        slot.appendChild(img);
        slot.appendChild(el('div', { style: 'font-size:11px;font-weight:600;' }, fmtName(m.nickname)));

        const types = el('div', { style: 'display:flex;gap:2px;margin-top:2px;justify-content:center;' });
        for (const t of m.pokemon.types) types.appendChild(typeBadge(t));
        slot.appendChild(types);

        slot.appendChild(el('div', { style: 'font-size:8px;color:#888;margin-top:2px;' }, fmtName(m.ability)));
        if (m.held_item) {
          slot.appendChild(el('div', { style: 'font-size:8px;color:#666;' }, fmtName(m.held_item)));
        }

        slot.onclick = () => { editingIndex = i; renderAll(); };

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '\u00D7';
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          team.splice(i, 1);
          if (editingIndex !== null) {
            if (editingIndex === i) editingIndex = null;
            else if (editingIndex > i) editingIndex--;
          }
          renderAll();
        };
        slot.appendChild(removeBtn);
      } else {
        slot.appendChild(el('span', {}, 'Empty'));
      }
      teamGrid.appendChild(slot);
    }

    clearBtn.style.display = team.length > 0 ? 'inline-block' : 'none';
  }

  function renderEditor() {
    editorSection.innerHTML = '';
    if (editingIndex === null || editingIndex >= team.length) {
      editorSection.style.display = 'none';
      return;
    }
    editorSection.style.display = '';
    const m = team[editingIndex];
    const idx = editingIndex;

    // Header row with sprite + name + stats
    const headerRow = el('div', { style: 'display:flex;gap:24px;align-items:flex-start;' });

    // Left: sprite + basic info
    const leftCol = el('div', { style: 'text-align:center;min-width:120px;' });
    leftCol.appendChild(el('img', { src: spriteUrl(m.pokemon.id), style: 'width:80px;height:80px;image-rendering:pixelated;' }));
    leftCol.appendChild(el('div', { style: 'font-size:14px;font-weight:700;margin-top:4px;' }, fmtName(m.pokemon.name)));
    const typesRow = el('div', { style: 'display:flex;gap:3px;justify-content:center;margin-top:4px;' });
    for (const t of m.pokemon.types) typesRow.appendChild(typeBadge(t));
    leftCol.appendChild(typesRow);
    leftCol.appendChild(el('div', { style: 'font-size:10px;color:#666;margin-top:4px;' }, `#${String(m.pokemon.id).padStart(3, '0')}`));
    headerRow.appendChild(leftCol);

    // Middle: editable fields
    const midCol = el('div', { style: 'flex:1;display:flex;flex-direction:column;gap:10px;' });

    // Nickname
    const nickRow = makeFieldRow('Nickname');
    const nickInput = document.createElement('input');
    nickInput.type = 'text';
    nickInput.value = m.nickname;
    nickInput.style.cssText = 'width:180px;';
    nickInput.oninput = () => { m.nickname = nickInput.value || m.pokemon.name; renderTeamGrid(); };
    nickRow.appendChild(nickInput);
    midCol.appendChild(nickRow);

    // Level
    const lvlRow = makeFieldRow('Level');
    const lvlInput = document.createElement('input');
    lvlInput.type = 'number';
    lvlInput.min = '1';
    lvlInput.max = '100';
    lvlInput.value = String(m.level);
    lvlInput.style.cssText = 'width:70px;';
    lvlInput.oninput = () => { m.level = Math.max(1, Math.min(100, parseInt(lvlInput.value) || 50)); };
    lvlRow.appendChild(lvlInput);
    midCol.appendChild(lvlRow);

    // Ability
    const abilRow = makeFieldRow('Ability');
    const abilSelect = document.createElement('select');
    abilSelect.style.cssText = 'width:200px;';
    for (const ab of m.pokemon.abilities) {
      const opt = document.createElement('option');
      opt.value = ab.name;
      opt.textContent = `${fmtName(ab.name)}${ab.is_hidden ? ' (Hidden)' : ''}`;
      if (ab.name === m.ability) opt.selected = true;
      abilSelect.appendChild(opt);
    }
    abilSelect.onchange = () => { m.ability = abilSelect.value; renderTeamGrid(); };
    abilRow.appendChild(abilSelect);
    midCol.appendChild(abilRow);

    // Nature
    const natRow = makeFieldRow('Nature');
    const natSelect = document.createElement('select');
    natSelect.style.cssText = 'width:200px;';
    for (const n of allNatures) {
      const opt = document.createElement('option');
      opt.value = n.name;
      let label = fmtName(n.name);
      if (n.increased_stat && n.decreased_stat) {
        label += ` (+${fmtName(n.increased_stat)} / -${fmtName(n.decreased_stat)})`;
      }
      opt.textContent = label;
      if (n.name === m.nature) opt.selected = true;
      natSelect.appendChild(opt);
    }
    natSelect.onchange = () => { m.nature = natSelect.value; };
    natRow.appendChild(natSelect);
    midCol.appendChild(natRow);

    // Held Item
    const itemRow = makeFieldRow('Held Item');
    const itemSelect = document.createElement('select');
    itemSelect.style.cssText = 'width:200px;';
    const noneOpt = document.createElement('option');
    noneOpt.value = '';
    noneOpt.textContent = '(None)';
    if (!m.held_item) noneOpt.selected = true;
    itemSelect.appendChild(noneOpt);
    for (const it of holdableItems) {
      const opt = document.createElement('option');
      opt.value = it.name;
      opt.textContent = fmtName(it.name);
      if (it.name === m.held_item) opt.selected = true;
      itemSelect.appendChild(opt);
    }
    itemSelect.onchange = () => { m.held_item = itemSelect.value || null; renderTeamGrid(); };
    itemRow.appendChild(itemSelect);
    midCol.appendChild(itemRow);

    headerRow.appendChild(midCol);

    // Right: base stats
    const rightCol = el('div', { style: 'min-width:200px;' });
    rightCol.appendChild(el('div', { style: 'font-size:10px;font-weight:700;color:#666;text-transform:uppercase;margin-bottom:4px;' }, 'Base Stats'));
    rightCol.appendChild(renderStatBars(m.pokemon.stats));
    headerRow.appendChild(rightCol);

    editorSection.appendChild(headerRow);

    // ─── Moves Section ───
    const movesDiv = el('div', { style: 'margin-top:20px;' });
    movesDiv.appendChild(el('div', { style: 'font-size:12px;font-weight:700;color:#aaa;margin-bottom:8px;' }, 'Moves'));

    const movesGrid = el('div', { style: 'display:grid;grid-template-columns:1fr 1fr;gap:8px;' });

    const pokemonMoves = getMovesForPokemon(m.pokemon.id);
    const damaging = pokemonMoves.filter(mv => mv.power !== null && mv.power > 0).sort((a, b) => (b.power ?? 0) - (a.power ?? 0));
    const status = pokemonMoves.filter(mv => mv.damage_class === 'status').sort((a, b) => a.name.localeCompare(b.name));
    const sortedMoves = [...damaging, ...status];

    for (let mi = 0; mi < MAX_MOVES; mi++) {
      const moveSlot = el('div', { style: 'background:#111118;border:1px solid #1e1e2e;border-radius:8px;padding:8px;' });

      const currentMove = m.moves[mi];
      const moveData = pokemonMoves.find(mv => mv.name === currentMove);

      // Color bar based on move type
      if (moveData) {
        const color = TYPE_COLORS[moveData.type as PokemonTypeName] || '#555';
        moveSlot.style.borderLeftWidth = '3px';
        moveSlot.style.borderLeftColor = color;
      }

      moveSlot.appendChild(el('div', { style: 'font-size:9px;color:#555;margin-bottom:4px;' }, `Move ${mi + 1}`));

      const moveSelect = document.createElement('select');
      moveSelect.style.cssText = 'width:100%;margin-bottom:4px;';

      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = '(Empty)';
      if (!currentMove) emptyOpt.selected = true;
      moveSelect.appendChild(emptyOpt);

      for (const mv of sortedMoves) {
        const opt = document.createElement('option');
        opt.value = mv.name;
        const pow = mv.power ? ` ${mv.power}pw` : '';
        const cls = mv.damage_class === 'status' ? ' [S]' : mv.damage_class === 'physical' ? ' [P]' : ' [Sp]';
        opt.textContent = `${fmtName(mv.name)} (${mv.type}${pow}${cls})`;
        if (mv.name === currentMove) opt.selected = true;
        moveSelect.appendChild(opt);
      }

      moveSelect.onchange = () => {
        m.moves[mi] = moveSelect.value;
        renderAll();
      };
      moveSlot.appendChild(moveSelect);

      // Move info
      if (moveData) {
        const info = el('div', { style: 'font-size:9px;color:#666;display:flex;gap:8px;' });
        info.appendChild(el('span', {}, moveData.type));
        info.appendChild(el('span', {}, moveData.damage_class));
        if (moveData.power) info.appendChild(el('span', {}, `${moveData.power} pow`));
        if (moveData.accuracy) info.appendChild(el('span', {}, `${moveData.accuracy}% acc`));
        info.appendChild(el('span', {}, `${moveData.pp} PP`));
        moveSlot.appendChild(info);
      }

      movesGrid.appendChild(moveSlot);
    }
    movesDiv.appendChild(movesGrid);
    editorSection.appendChild(movesDiv);
  }

  function renderExport() {
    if (team.length === 0) {
      exportSection.style.display = 'none';
      return;
    }
    exportSection.style.display = '';

    // Generate TeamMemberConfig[] code
    const lines: string[] = [];
    lines.push('const team: TeamMemberConfig[] = [');
    for (const m of team) {
      lines.push('  {');
      lines.push(`    pokemon_id: ${m.pokemon.id},`);
      if (m.nickname !== m.pokemon.name) lines.push(`    nickname: '${m.nickname}',`);
      lines.push(`    level: ${m.level},`);
      lines.push(`    nature: '${m.nature}',`);
      lines.push(`    ability: '${m.ability}',`);
      if (m.held_item) lines.push(`    held_item: '${m.held_item}',`);
      const validMoves = m.moves.filter(Boolean);
      if (validMoves.length > 0) {
        lines.push(`    moves: [${validMoves.map(n => `'${n}'`).join(', ')}],`);
      }
      lines.push('  },');
    }
    lines.push('];');

    exportCode.textContent = lines.join('\n');
  }

  function renderResults(query: string) {
    resultsGrid.innerHTML = '';
    if (query.length < 2) return;

    const results = searchPokemon(query).slice(0, 12);
    for (const p of results) {
      const alreadyIn = team.some(t => t.pokemon.id === p.id);
      const card = el('div', {
        class: 'pokemon-card',
        style: `cursor:${alreadyIn || team.length >= MAX_TEAM ? 'not-allowed' : 'pointer'};opacity:${alreadyIn ? '0.4' : '1'};`,
      });

      const img = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:56px;height:56px;' });
      img.onerror = () => { img.style.display = 'none'; };
      card.appendChild(img);
      card.appendChild(el('div', { class: 'name', style: 'font-size:12px;' }, fmtName(p.name)));

      const types = el('div', { class: 'types' });
      for (const t of p.types) types.appendChild(typeBadge(t));
      card.appendChild(types);

      // Show abilities
      card.appendChild(el('div', { style: 'font-size:9px;color:#666;margin-top:2px;' },
        p.abilities.map(a => fmtName(a.name)).join(' / ')));

      if (alreadyIn) {
        card.appendChild(el('div', { style: 'font-size:10px;color:#6bcb77;margin-top:4px;' }, 'In team'));
      }

      if (!alreadyIn && team.length < MAX_TEAM) {
        card.onclick = () => {
          const member = createMember(p);
          team.push(member);
          editingIndex = team.length - 1;
          renderAll();
          renderResults(query);
        };
      }

      resultsGrid.appendChild(card);
    }
  }

  searchInput.oninput = () => {
    renderResults(searchInput.value.trim());
  };

  renderAll();
}

function makeFieldRow(label: string): HTMLElement {
  const row = el('div', { style: 'display:flex;align-items:center;gap:8px;' });
  row.appendChild(el('span', { style: 'font-size:11px;font-weight:600;color:#888;min-width:70px;' }, label));
  return row;
}
