import {
  searchPokemon, getPokemon, getAllPokemon,
  getHoldableItems, getLearnableMoves, suggestMoves,
  createDefaultTeamMember, TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type { Pokemon, TeamMemberConfig, Move, PokemonTypeName } from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl, typeBadge, itemSpriteUrl } from './helpers';

// ─── Types ───

export interface TeamSlot {
  pokemon: Pokemon;
  moves: string[];
  held_item: string | null;
  level: number;
  ability: string;
}

export interface TeamBuilderOptions {
  teamSize: { min: number; max: number };
  onStart: (team: TeamMemberConfig[]) => void;
}

// ─── Cached data ───

let cachedHoldableItems: { name: string; category: string }[] | null = null;
function holdableItems() {
  if (!cachedHoldableItems) {
    cachedHoldableItems = getHoldableItems().map(i => ({ name: i.name, category: i.category }));
  }
  return cachedHoldableItems;
}

// ─── Random helpers ───

function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomTeamSlot(): TeamSlot {
  const all = getAllPokemon();
  const pokemon = randomFromArray(all);
  const suggested = suggestMoves(pokemon, 4);
  const items = holdableItems();
  return {
    pokemon,
    moves: suggested.map(m => m.name),
    held_item: items.length > 0 ? randomFromArray(items).name : null,
    level: 50,
    ability: pokemon.abilities[0]?.name ?? '',
  };
}

function slotToConfig(slot: TeamSlot): TeamMemberConfig {
  return {
    pokemon_id: slot.pokemon.id,
    level: slot.level,
    ability: slot.ability,
    moves: slot.moves,
    held_item: slot.held_item,
  };
}

// ─── Main export ───

export function renderTeamBuilder(container: HTMLElement, options: TeamBuilderOptions) {
  const { teamSize, onStart } = options;
  const slots: TeamSlot[] = [];

  const wrapper = el('div');
  container.appendChild(wrapper);

  render();

  function render() {
    wrapper.innerHTML = '';

    // ─── Header row ───
    const headerRow = el('div', { style: 'display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px;' });
    headerRow.appendChild(el('h3', { style: 'margin:0;' }, `Build Your Team (${slots.length}/${teamSize.max})`));

    const btnRow = el('div', { style: 'display:flex;gap:8px;' });
    const randomBtn = document.createElement('button');
    randomBtn.textContent = 'Random Team';
    randomBtn.onclick = () => {
      slots.length = 0;
      for (let i = 0; i < teamSize.max; i++) slots.push(randomTeamSlot());
      render();
    };
    btnRow.appendChild(randomBtn);

    if (slots.length > 0) {
      const clearBtn = document.createElement('button');
      clearBtn.textContent = 'Clear';
      clearBtn.style.cssText = 'background:#2a1a1a;color:#e06c75;';
      clearBtn.onclick = () => { slots.length = 0; render(); };
      btnRow.appendChild(clearBtn);
    }
    headerRow.appendChild(btnRow);
    wrapper.appendChild(headerRow);

    // ─── Team slots ───
    for (let i = 0; i < slots.length; i++) {
      wrapper.appendChild(renderSlotCard(i));
    }

    // ─── Add Pokemon ───
    if (slots.length < teamSize.max) {
      wrapper.appendChild(renderAddPokemon());
    }

    // ─── Start button ───
    const startBtn = document.createElement('button');
    startBtn.className = 'primary';
    startBtn.textContent = `Start Battle (${slots.length}/${teamSize.min} min)`;
    startBtn.disabled = slots.length < teamSize.min;
    startBtn.style.marginTop = '16px';
    startBtn.onclick = () => onStart(slots.map(slotToConfig));
    wrapper.appendChild(startBtn);
  }

  // ─── Add Pokemon section ───

  function renderAddPokemon(): HTMLElement {
    const box = el('div', { style: 'background:#111118;border:1px dashed #2a2a3a;border-radius:12px;padding:16px;margin-bottom:12px;' });

    const row = el('div', { style: 'display:flex;gap:12px;align-items:center;flex-wrap:wrap;' });
    const searchInput = el('input', {
      type: 'text',
      placeholder: 'Search Pokemon to add...',
      style: 'width:260px;',
    }) as HTMLInputElement;
    row.appendChild(searchInput);

    const randomOneBtn = document.createElement('button');
    randomOneBtn.textContent = 'Random';
    randomOneBtn.style.cssText = 'font-size:12px;padding:6px 14px;';
    randomOneBtn.onclick = () => {
      slots.push(randomTeamSlot());
      render();
    };
    row.appendChild(randomOneBtn);
    box.appendChild(row);

    const resultsDiv = el('div', { style: 'margin-top:8px;' });
    box.appendChild(resultsDiv);

    searchInput.oninput = () => {
      resultsDiv.innerHTML = '';
      const q = searchInput.value.trim();
      if (q.length < 2) return;

      const results = searchPokemon(q).slice(0, 12);
      if (results.length === 0) {
        resultsDiv.appendChild(el('div', { style: 'font-size:12px;color:#555;padding:4px;' }, 'No Pokemon found.'));
        return;
      }

      const grid = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;' });
      for (const p of results) {
        // Skip if already in team
        if (slots.some(s => s.pokemon.id === p.id)) continue;

        const btn = document.createElement('button');
        btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-size:12px;';
        const img = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:32px;height:32px;image-rendering:pixelated;' });
        btn.appendChild(img);
        const info = el('span', { style: 'display:inline-flex;flex-direction:column;align-items:start;' });
        info.appendChild(el('span', { style: 'font-weight:600;' }, fmtName(p.name)));
        const types = el('span', { style: 'display:inline-flex;gap:2px;' });
        for (const t of p.types) {
          const badge = el('span', { style: `font-size:8px;padding:0 4px;border-radius:3px;color:#fff;background:${TYPE_COLORS[t as PokemonTypeName] || '#555'};` }, t);
          types.appendChild(badge);
        }
        info.appendChild(types);
        btn.appendChild(info);

        btn.onclick = () => {
          addPokemonToTeam(p);
        };
        grid.appendChild(btn);
      }
      resultsDiv.appendChild(grid);
    };

    // Focus the search input after render
    setTimeout(() => searchInput.focus(), 0);

    return box;
  }

  function addPokemonToTeam(pokemon: Pokemon) {
    const suggested = suggestMoves(pokemon, 4);
    const items = holdableItems();
    // Pick a reasonable default item
    const defaultItems: Record<string, string> = {
      charizard: 'life-orb', blastoise: 'leftovers', venusaur: 'black-sludge',
      gengar: 'choice-specs', alakazam: 'life-orb', dragonite: 'lum-berry',
      snorlax: 'leftovers', scizor: 'choice-band', tyranitar: 'choice-scarf',
    };
    const item = defaultItems[pokemon.name] ?? (items.length > 0 ? 'leftovers' : null);

    slots.push({
      pokemon,
      moves: suggested.map(m => m.name),
      held_item: item,
      level: 50,
      ability: pokemon.abilities[0]?.name ?? '',
    });
    render();
  }

  // ─── Slot card ───

  function renderSlotCard(index: number): HTMLElement {
    const slot = slots[index];
    const pokemon = slot.pokemon;
    const learnableMoves = getLearnableMoves(pokemon.id);

    const card = el('div', { style: 'background:#111118;border:1px solid #1e1e2e;border-radius:12px;padding:16px;margin-bottom:12px;' });

    // ─── Top row: sprite + info + remove ───
    const topRow = el('div', { style: 'display:flex;gap:16px;align-items:flex-start;' });

    // Sprite
    const spriteCol = el('div', { style: 'text-align:center;flex-shrink:0;' });
    const img = el('img', { src: spriteUrl(pokemon.id), alt: pokemon.name, style: 'width:64px;height:64px;image-rendering:pixelated;' });
    spriteCol.appendChild(img);
    spriteCol.appendChild(el('div', { style: 'font-size:10px;color:#666;font-family:"JetBrains Mono",monospace;' }, `#${String(pokemon.id).padStart(3, '0')}`));
    topRow.appendChild(spriteCol);

    // Info
    const infoCol = el('div', { style: 'flex:1;min-width:0;' });
    const nameRow = el('div', { style: 'display:flex;align-items:center;gap:8px;margin-bottom:4px;' });
    nameRow.appendChild(el('span', { style: 'font-size:16px;font-weight:700;' }, fmtName(pokemon.name)));
    for (const t of pokemon.types) nameRow.appendChild(typeBadge(t as PokemonTypeName));
    infoCol.appendChild(nameRow);

    // Ability selector
    const abilityRow = el('div', { style: 'display:flex;align-items:center;gap:8px;margin-bottom:8px;' });
    abilityRow.appendChild(el('span', { style: 'font-size:11px;color:#666;font-weight:600;' }, 'Ability:'));
    if (pokemon.abilities.length > 1) {
      const abilitySelect = document.createElement('select');
      abilitySelect.style.cssText = 'font-size:11px;padding:2px 6px;';
      for (const a of pokemon.abilities) {
        const opt = document.createElement('option');
        opt.value = a.name;
        opt.textContent = fmtName(a.name) + (a.is_hidden ? ' (Hidden)' : '');
        if (a.name === slot.ability) opt.selected = true;
        abilitySelect.appendChild(opt);
      }
      abilitySelect.onchange = () => { slot.ability = abilitySelect.value; };
      abilityRow.appendChild(abilitySelect);
    } else {
      abilityRow.appendChild(el('span', { style: 'font-size:11px;color:#aaa;' }, fmtName(slot.ability)));
    }
    infoCol.appendChild(abilityRow);

    // Level + Item row
    const configRow = el('div', { style: 'display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:8px;' });

    // Level
    const levelWrap = el('div', { style: 'display:flex;align-items:center;gap:6px;' });
    levelWrap.appendChild(el('span', { style: 'font-size:11px;color:#666;font-weight:600;' }, 'Lv.'));
    const levelInput = el('input', { type: 'number', value: String(slot.level), min: '1', max: '100', style: 'width:60px;font-size:12px;padding:3px 6px;' }) as HTMLInputElement;
    levelInput.onchange = () => { slot.level = Math.max(1, Math.min(100, parseInt(levelInput.value) || 50)); };
    levelWrap.appendChild(levelInput);
    configRow.appendChild(levelWrap);

    // Item
    const itemWrap = el('div', { style: 'display:flex;align-items:center;gap:6px;flex:1;min-width:200px;' });
    itemWrap.appendChild(el('span', { style: 'font-size:11px;color:#666;font-weight:600;' }, 'Item:'));
    const itemSelect = document.createElement('select');
    itemSelect.style.cssText = 'font-size:11px;padding:2px 6px;flex:1;max-width:220px;';
    const noneOpt = document.createElement('option');
    noneOpt.value = '';
    noneOpt.textContent = '(None)';
    if (!slot.held_item) noneOpt.selected = true;
    itemSelect.appendChild(noneOpt);
    for (const item of holdableItems()) {
      const opt = document.createElement('option');
      opt.value = item.name;
      opt.textContent = fmtName(item.name);
      if (item.name === slot.held_item) opt.selected = true;
      itemSelect.appendChild(opt);
    }
    itemSelect.onchange = () => { slot.held_item = itemSelect.value || null; };
    itemWrap.appendChild(itemSelect);
    configRow.appendChild(itemWrap);

    infoCol.appendChild(configRow);
    topRow.appendChild(infoCol);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '\u00D7';
    removeBtn.style.cssText = 'background:#2a1a1a;color:#e06c75;font-size:18px;font-weight:700;padding:2px 8px;border-radius:6px;flex-shrink:0;';
    removeBtn.onclick = () => { slots.splice(index, 1); render(); };
    topRow.appendChild(removeBtn);

    card.appendChild(topRow);

    // ─── Moves ───
    const movesLabel = el('div', { style: 'display:flex;align-items:center;gap:8px;margin-bottom:6px;' });
    movesLabel.appendChild(el('span', { style: 'font-size:11px;color:#666;font-weight:600;' }, 'Moves:'));
    const suggestBtn = document.createElement('button');
    suggestBtn.textContent = 'Auto-suggest';
    suggestBtn.style.cssText = 'font-size:10px;padding:2px 8px;';
    suggestBtn.onclick = () => {
      const suggested = suggestMoves(pokemon, 4);
      slot.moves = suggested.map(m => m.name);
      render();
    };
    movesLabel.appendChild(suggestBtn);
    card.appendChild(movesLabel);

    const movesGrid = el('div', { style: 'display:grid;grid-template-columns:1fr 1fr;gap:6px;' });

    // Sort learnable moves by type then name
    const sortedMoves = [...learnableMoves].sort((a, b) => {
      if (a.type !== b.type) return a.type.localeCompare(b.type);
      return a.name.localeCompare(b.name);
    });

    for (let mi = 0; mi < 4; mi++) {
      const moveSelect = document.createElement('select');
      moveSelect.style.cssText = 'font-size:11px;padding:4px 6px;';
      if (slot.moves[mi]) {
        const color = TYPE_COLORS[getMoveType(slot.moves[mi], sortedMoves) as PokemonTypeName] || '#555';
        moveSelect.style.borderLeft = `3px solid ${color}`;
      }

      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = `Move ${mi + 1}...`;
      if (!slot.moves[mi]) emptyOpt.selected = true;
      moveSelect.appendChild(emptyOpt);

      let lastType = '';
      for (const m of sortedMoves) {
        // Skip moves already selected in other slots
        if (slot.moves.includes(m.name) && slot.moves[mi] !== m.name) continue;

        if (m.type !== lastType) {
          const group = document.createElement('optgroup');
          group.label = fmtName(m.type);
          lastType = m.type;
          // Add all moves of this type
          const typeMoves = sortedMoves.filter(tm => tm.type === m.type && (!slot.moves.includes(tm.name) || slot.moves[mi] === tm.name));
          for (const tm of typeMoves) {
            const opt = document.createElement('option');
            opt.value = tm.name;
            opt.textContent = `${fmtName(tm.name)} (${tm.power || '—'} / ${tm.damage_class})`;
            if (tm.name === slot.moves[mi]) opt.selected = true;
            group.appendChild(opt);
          }
          moveSelect.appendChild(group);
        }
      }

      // Deduplicate: we already handled grouping above, so reset approach
      // Actually the loop above adds duplicate optgroups. Let me use a cleaner approach.
      // Clear and redo
      moveSelect.innerHTML = '';
      moveSelect.appendChild(emptyOpt);

      const typeGroups = new Map<string, Move[]>();
      for (const m of sortedMoves) {
        if (slot.moves.includes(m.name) && slot.moves[mi] !== m.name) continue;
        if (!typeGroups.has(m.type)) typeGroups.set(m.type, []);
        typeGroups.get(m.type)!.push(m);
      }
      for (const [type, moves] of typeGroups) {
        const group = document.createElement('optgroup');
        group.label = fmtName(type);
        for (const m of moves) {
          const opt = document.createElement('option');
          opt.value = m.name;
          opt.textContent = `${fmtName(m.name)} (${m.power || '—'} / ${m.damage_class})`;
          if (m.name === slot.moves[mi]) opt.selected = true;
          group.appendChild(opt);
        }
        moveSelect.appendChild(group);
      }

      const moveIdx = mi;
      moveSelect.onchange = () => {
        slot.moves[moveIdx] = moveSelect.value;
      };
      movesGrid.appendChild(moveSelect);
    }
    card.appendChild(movesGrid);

    return card;
  }
}

function getMoveType(moveName: string, moves: Move[]): string {
  const m = moves.find(m => m.name === moveName);
  return m?.type ?? 'normal';
}
