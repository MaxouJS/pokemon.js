import {
  getCatchProbability, getBallModifier, getPokemon, searchPokemon,
  getSpecies, createBattlePokemon,
} from '@objectifthunes/pokemon';
import type { Pokemon, BattlePokemon, StatusCondition } from '@objectifthunes/pokemon';
import type { PokeballType, CaptureContext } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl } from '../helpers';

const BALL_TYPES: { value: PokeballType; label: string }[] = [
  { value: 'poke-ball',    label: 'Poke Ball' },
  { value: 'great-ball',   label: 'Great Ball' },
  { value: 'ultra-ball',   label: 'Ultra Ball' },
  { value: 'master-ball',  label: 'Master Ball' },
  { value: 'net-ball',     label: 'Net Ball' },
  { value: 'dusk-ball',    label: 'Dusk Ball' },
  { value: 'quick-ball',   label: 'Quick Ball' },
  { value: 'timer-ball',   label: 'Timer Ball' },
  { value: 'nest-ball',    label: 'Nest Ball' },
  { value: 'repeat-ball',  label: 'Repeat Ball' },
  { value: 'dive-ball',    label: 'Dive Ball' },
  { value: 'luxury-ball',  label: 'Luxury Ball' },
  { value: 'premier-ball', label: 'Premier Ball' },
  { value: 'heal-ball',    label: 'Heal Ball' },
  { value: 'safari-ball',  label: 'Safari Ball' },
  { value: 'sport-ball',   label: 'Sport Ball' },
  { value: 'fast-ball',    label: 'Fast Ball' },
  { value: 'level-ball',   label: 'Level Ball' },
  { value: 'lure-ball',    label: 'Lure Ball' },
  { value: 'heavy-ball',   label: 'Heavy Ball' },
  { value: 'love-ball',    label: 'Love Ball' },
  { value: 'friend-ball',  label: 'Friend Ball' },
  { value: 'moon-ball',    label: 'Moon Ball' },
  { value: 'dream-ball',   label: 'Dream Ball' },
];

const STATUS_OPTIONS: { value: StatusCondition | 'none'; label: string; bonus: number }[] = [
  { value: 'none',      label: 'None',      bonus: 1 },
  { value: 'sleep',     label: 'Sleep',     bonus: 2.5 },
  { value: 'freeze',    label: 'Freeze',    bonus: 2.5 },
  { value: 'paralysis', label: 'Paralysis', bonus: 1.5 },
  { value: 'poison',    label: 'Poison',    bonus: 1.5 },
  { value: 'burn',      label: 'Burn',      bonus: 1.5 },
];

export function renderCapture(container: HTMLElement) {
  // ─── Header ───
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Capture Calculator'));
  header.appendChild(el('p', {}, 'Calculate catch probabilities using the Gen V capture formula. Select a target Pokemon, adjust HP and status, and compare different Pokeball types.'));
  container.appendChild(header);

  let selected: Pokemon = getPokemon('mewtwo')!;
  let hpPercent = 100;
  let statusValue: StatusCondition | 'none' = 'none';
  let ballValue: PokeballType = 'ultra-ball';
  let level = 50;

  // ─── Pokemon Selection ───
  const selectionSection = el('div', { class: 'demo-section' });
  selectionSection.appendChild(el('h3', {}, 'Target Pokemon'));

  const selRow = el('div', { style: 'display:flex;gap:24px;align-items:flex-start;' });

  // Search
  const searchCol = el('div', { style: 'flex:1;' });
  searchCol.appendChild(el('label', {}, 'Search'));
  const searchInput = el('input', { type: 'text', placeholder: 'Search by name...', style: 'width:100%;' }) as HTMLInputElement;
  searchCol.appendChild(searchInput);

  const searchResults = el('div', { style: 'max-height:180px;overflow-y:auto;margin-top:4px;border:1px solid #2a2a3e;border-radius:6px;display:none;' });
  searchCol.appendChild(searchResults);
  selRow.appendChild(searchCol);

  // Selected preview
  const previewCol = el('div', { style: 'text-align:center;min-width:140px;' });
  selRow.appendChild(previewCol);

  selectionSection.appendChild(selRow);
  container.appendChild(selectionSection);

  // ─── Configuration Panel ───
  const configSection = el('div', { class: 'demo-section' });
  configSection.appendChild(el('h3', {}, 'Configuration'));

  const configGrid = el('div', { style: 'display:grid;grid-template-columns:1fr 1fr;gap:16px;' });

  // HP slider
  const hpCol = el('div');
  hpCol.appendChild(el('label', {}, 'Target HP'));
  const hpRow = el('div', { style: 'display:flex;align-items:center;gap:8px;' });
  const hpSlider = el('input', { type: 'range', min: '1', max: '100', value: '100', style: 'flex:1;' }) as HTMLInputElement;
  const hpLabel = el('span', { style: 'font-size:13px;color:#ccc;min-width:40px;text-align:right;' }, '100%');
  hpRow.appendChild(hpSlider);
  hpRow.appendChild(hpLabel);
  hpCol.appendChild(hpRow);
  configGrid.appendChild(hpCol);

  // Level input
  const levelCol = el('div');
  levelCol.appendChild(el('label', {}, 'Wild Pokemon Level'));
  const levelInput = el('input', { type: 'number', value: '50', min: '1', max: '100', style: 'width:80px;' }) as HTMLInputElement;
  levelCol.appendChild(levelInput);
  configGrid.appendChild(levelCol);

  // Status dropdown
  const statusCol = el('div');
  statusCol.appendChild(el('label', {}, 'Status Condition'));
  const statusSelect = document.createElement('select');
  statusSelect.style.width = '100%';
  for (const s of STATUS_OPTIONS) {
    const opt = el('option', { value: s.value }, `${s.label} (${s.bonus}x)`);
    statusSelect.appendChild(opt);
  }
  statusCol.appendChild(statusSelect);
  configGrid.appendChild(statusCol);

  // Ball type dropdown
  const ballCol = el('div');
  ballCol.appendChild(el('label', {}, 'Pokeball'));
  const ballSelect = document.createElement('select');
  ballSelect.style.width = '100%';
  for (const b of BALL_TYPES) {
    ballSelect.appendChild(el('option', { value: b.value }, b.label));
  }
  ballSelect.value = 'ultra-ball';
  ballCol.appendChild(ballSelect);
  configGrid.appendChild(ballCol);

  configSection.appendChild(configGrid);
  container.appendChild(configSection);

  // ─── Results Display ───
  const resultSection = el('div', { class: 'demo-section' });
  resultSection.appendChild(el('h3', {}, 'Catch Probability'));
  const resultDiv = el('div', { class: 'calc-result' });
  resultSection.appendChild(resultDiv);
  container.appendChild(resultSection);

  // ─── Ball Comparison Table ───
  const tableSection = el('div', { class: 'demo-section' });
  tableSection.appendChild(el('h3', {}, 'Ball Comparison'));
  const tableDiv = el('div');
  tableSection.appendChild(tableDiv);
  container.appendChild(tableSection);

  // ─── Formula Info ───
  const formulaSection = el('div', { class: 'demo-section', style: 'margin-top:48px;' });
  formulaSection.appendChild(el('h3', {}, 'Gen V Capture Formula'));
  formulaSection.appendChild(el('p', { class: 'desc' }, 'pokemon.js implements the official Generation V capture formula used in Black/White and later games. The formula determines the probability of a successful catch based on the target\'s capture rate, current HP, status condition, and the Pokeball used.'));

  const formulaCode = el('div', { class: 'code-block' });
  formulaCode.innerHTML = `<span class="cmt">// Modified catch rate</span>
a = ((3 * maxHP - 2 * currentHP) / (3 * maxHP)) * captureRate * ballModifier * statusBonus

<span class="cmt">// Shake check probability</span>
b = floor(65536 / (255 / a) ^ (3/16))

<span class="cmt">// Probability = passing 3 independent shake checks</span>
P(catch) = (b / 65536) ^ 3`;
  formulaSection.appendChild(formulaCode);

  formulaSection.appendChild(el('p', { class: 'desc' }, 'The HP factor ranges from 1/3 (full HP) to 1 (1 HP). Status conditions provide a flat multiplier: Sleep and Freeze give 2.5x, while Paralysis, Poison, and Burn give 1.5x. Different Pokeball types provide varying ball modifiers depending on the situation.'));

  formulaSection.appendChild(el('p', { class: 'desc' }, 'A critical capture can also occur (Gen V+), which requires only a single shake check instead of three. The probability of a critical capture is based on Pokedex completion progress.'));

  container.appendChild(formulaSection);

  // ─── Helpers ───
  function buildBattlePokemon(): BattlePokemon {
    const bp = createBattlePokemon({
      pokemon_id: selected.id,
      level,
      moves: [],
    });
    // Apply HP percent
    bp.current_hp = Math.max(1, Math.round(bp.max_hp * (hpPercent / 100)));
    // Apply status
    if (statusValue !== 'none') {
      bp.status = statusValue;
    } else {
      bp.status = null;
    }
    return bp;
  }

  function getContext(): CaptureContext {
    return {
      turn: 1,
      is_dark: false,
      is_water_encounter: false,
      already_caught: false,
      attacker_level: level,
    };
  }

  function probColor(pct: number): string {
    if (pct >= 75) return '#6bcb77';
    if (pct >= 40) return '#e5c07b';
    if (pct >= 15) return '#d19a66';
    return '#e06c75';
  }

  function updatePreview() {
    previewCol.innerHTML = '';
    const img = el('img', {
      src: spriteUrl(selected.id),
      alt: selected.name,
      style: 'width:96px;height:96px;image-rendering:pixelated;',
    });
    img.onerror = () => { img.style.display = 'none'; };
    previewCol.appendChild(img);

    previewCol.appendChild(el('div', { style: 'font-weight:600;margin-top:4px;' }, fmtName(selected.name)));

    const types = el('div', { style: 'display:flex;gap:4px;justify-content:center;margin-top:4px;' });
    for (const t of selected.types) types.appendChild(typeBadge(t));
    previewCol.appendChild(types);

    const species = getSpecies(selected.species);
    if (species) {
      previewCol.appendChild(el('div', {
        style: 'font-size:11px;color:#888;margin-top:6px;',
      }, `Base Capture Rate: ${species.capture_rate}`));
    }
  }

  function updateResults() {
    resultDiv.innerHTML = '';

    const bp = buildBattlePokemon();
    const ctx = getContext();
    const prob = getCatchProbability(bp, ballValue, ctx);
    const modifier = getBallModifier(ballValue, bp, ctx);
    const species = getSpecies(selected.species);
    const captureRate = species?.capture_rate ?? 45;

    // Main probability display
    const color = probColor(prob);
    const probNum = el('div', { class: 'damage-number', style: `color:${color};` }, `${prob}%`);
    resultDiv.appendChild(probNum);
    resultDiv.appendChild(el('div', { class: 'damage-label' }, 'Catch probability per throw'));

    // Probability bar
    const barBg = el('div', { style: 'width:100%;height:12px;background:#1e1e2e;border-radius:6px;margin:12px 0;overflow:hidden;' });
    const barFill = el('div', { style: `width:${Math.min(100, prob)}%;height:100%;background:${color};border-radius:6px;transition:width 0.3s ease;` });
    barBg.appendChild(barFill);
    resultDiv.appendChild(barBg);

    // Details
    const details = el('div', { style: 'display:flex;gap:16px;justify-content:center;flex-wrap:wrap;font-size:12px;color:#888;' });
    details.appendChild(el('span', {}, `Ball modifier: ${modifier}x`));
    details.appendChild(el('span', {}, `Base capture rate: ${captureRate}/255`));
    details.appendChild(el('span', {}, `HP: ${hpPercent}%`));
    if (statusValue !== 'none') {
      const bonus = STATUS_OPTIONS.find(s => s.value === statusValue)!.bonus;
      details.appendChild(el('span', { style: 'color:#56b6c2;' }, `${fmtName(statusValue)} (${bonus}x)`));
    }
    resultDiv.appendChild(details);

    // Attempts to expect
    if (prob > 0 && prob < 100) {
      const expected = Math.ceil(1 / (prob / 100));
      resultDiv.appendChild(el('div', {
        style: 'margin-top:12px;font-size:12px;color:#666;',
      }, `Expected throws to catch: ~${expected}`));
    }
  }

  function updateTable() {
    tableDiv.innerHTML = '';

    const bp = buildBattlePokemon();
    const ctx = getContext();

    // Build table data for the main ball types
    const mainBalls: PokeballType[] = [
      'poke-ball', 'great-ball', 'ultra-ball', 'master-ball',
      'net-ball', 'dusk-ball', 'quick-ball', 'timer-ball',
      'nest-ball', 'repeat-ball', 'dive-ball', 'dream-ball',
      'fast-ball', 'level-ball', 'lure-ball', 'heavy-ball',
      'love-ball', 'moon-ball',
    ];

    const rows: { ball: PokeballType; label: string; modifier: number; prob: number }[] = [];
    for (const b of mainBalls) {
      const modifier = getBallModifier(b, bp, ctx);
      const prob = getCatchProbability(bp, b, ctx);
      const entry = BALL_TYPES.find(bt => bt.value === b);
      rows.push({ ball: b, label: entry?.label ?? fmtName(b), modifier, prob });
    }

    // Sort by probability descending
    rows.sort((a, b) => b.prob - a.prob);

    const table = el('table', { style: 'width:100%;border-collapse:collapse;font-size:13px;' });

    // Header
    const thead = el('thead');
    const headRow = el('tr');
    for (const h of ['Ball', 'Modifier', 'Catch Rate', '']) {
      const th = el('th', { style: 'text-align:left;padding:8px 12px;border-bottom:2px solid #2a2a3e;color:#888;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;' }, h);
      headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    table.appendChild(thead);

    // Body
    const tbody = el('tbody');
    for (const row of rows) {
      const tr = el('tr', { style: 'border-bottom:1px solid #1e1e2e;' });

      // Ball name
      const tdName = el('td', { style: 'padding:6px 12px;font-weight:500;' });
      if (row.ball === ballValue) {
        tdName.style.color = '#61afef';
      }
      tdName.textContent = row.label;
      tr.appendChild(tdName);

      // Modifier
      const tdMod = el('td', { style: 'padding:6px 12px;color:#888;' }, `${row.modifier}x`);
      tr.appendChild(tdMod);

      // Probability
      const color = probColor(row.prob);
      const tdProb = el('td', { style: `padding:6px 12px;font-weight:600;color:${color};` }, `${row.prob}%`);
      tr.appendChild(tdProb);

      // Mini bar
      const tdBar = el('td', { style: 'padding:6px 12px;width:120px;' });
      const miniBarBg = el('div', { style: 'width:100%;height:6px;background:#1e1e2e;border-radius:3px;overflow:hidden;' });
      const miniBarFill = el('div', { style: `width:${Math.min(100, row.prob)}%;height:100%;background:${color};border-radius:3px;` });
      miniBarBg.appendChild(miniBarFill);
      tdBar.appendChild(miniBarBg);
      tr.appendChild(tdBar);

      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    tableDiv.appendChild(table);
  }

  function updateAll() {
    updatePreview();
    updateResults();
    updateTable();
  }

  // ─── Events ───
  searchInput.oninput = () => {
    const query = searchInput.value.trim();
    if (!query) {
      searchResults.style.display = 'none';
      return;
    }
    const results = searchPokemon(query).slice(0, 12);
    searchResults.innerHTML = '';
    if (results.length === 0) {
      searchResults.style.display = 'none';
      return;
    }
    searchResults.style.display = 'block';
    for (const p of results) {
      const row = el('div', {
        style: 'padding:6px 10px;cursor:pointer;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1e1e2e;',
      });
      row.onmouseenter = () => { row.style.background = '#2a2a3e'; };
      row.onmouseleave = () => { row.style.background = 'transparent'; };

      const thumb = el('img', {
        src: spriteUrl(p.id),
        alt: p.name,
        style: 'width:32px;height:32px;image-rendering:pixelated;',
      });
      thumb.onerror = () => { thumb.style.display = 'none'; };
      row.appendChild(thumb);
      row.appendChild(el('span', { style: 'font-size:13px;' }, fmtName(p.name)));

      const typesSpan = el('span', { style: 'margin-left:auto;display:flex;gap:2px;' });
      for (const t of p.types) {
        const badge = typeBadge(t);
        badge.style.fontSize = '9px';
        badge.style.padding = '1px 5px';
        typesSpan.appendChild(badge);
      }
      row.appendChild(typesSpan);

      row.onclick = () => {
        selected = p;
        searchInput.value = fmtName(p.name);
        searchResults.style.display = 'none';
        updateAll();
      };
      searchResults.appendChild(row);
    }
  };

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchCol.contains(e.target as Node)) {
      searchResults.style.display = 'none';
    }
  });

  hpSlider.oninput = () => {
    hpPercent = parseInt(hpSlider.value);
    hpLabel.textContent = `${hpPercent}%`;
    updateResults();
    updateTable();
  };

  levelInput.oninput = () => {
    level = Math.max(1, Math.min(100, parseInt(levelInput.value) || 50));
    updateAll();
  };

  statusSelect.onchange = () => {
    statusValue = statusSelect.value as StatusCondition | 'none';
    updateResults();
    updateTable();
  };

  ballSelect.onchange = () => {
    ballValue = ballSelect.value as PokeballType;
    updateResults();
    updateTable();
  };

  // ─── Init ───
  updateAll();
}
