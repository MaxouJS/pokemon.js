import {
  calculateExperienceGain, getLevelForExperience, getExperienceToNextLevel,
  getExperienceProgress, getGrowthRates, getGrowthRate, getExperienceForLevel,
  getPokemon, getSpecies, searchPokemon,
} from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl } from '../helpers';

// Colors for each growth rate curve
const RATE_COLORS: Record<string, string> = {
  erratic:       '#e06c75',
  fast:          '#d19a66',
  'medium-fast': '#e5c07b',
  'medium-slow': '#98c379',
  slow:          '#61afef',
  fluctuating:   '#c678dd',
};

const CHART_LEVELS = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export function renderExperience(container: HTMLElement) {
  // ─── Header ───
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Experience & Leveling'));
  header.appendChild(el('p', {}, 'Explore how experience and leveling works across all 6 growth rate curves. Look up XP requirements for any Pokemon, calculate battle XP gains, and understand the leveling system.'));
  container.appendChild(header);

  // ─── Section 1: Growth Rate Curves ───
  const curvesSection = el('div', { class: 'demo-section' });
  curvesSection.appendChild(el('h3', {}, 'Growth Rate Curves'));
  curvesSection.appendChild(el('p', { class: 'desc' }, 'Total experience required at each level for all 6 growth rates. Bar widths are relative to the maximum XP across all rates at each level.'));

  const rates = getGrowthRates();

  // Legend
  const legend = el('div', { class: 'inline-row', style: 'margin-bottom: 16px;' });
  for (const rate of rates) {
    const dot = el('span', { style: `display:inline-block;width:10px;height:10px;border-radius:50%;background:${RATE_COLORS[rate.name] || '#888'};` });
    const label = el('span', { style: 'font-size:12px;color:#aaa;margin-right:12px;' }, fmtName(rate.name));
    const item = el('span', { style: 'display:inline-flex;align-items:center;gap:4px;' });
    item.appendChild(dot);
    item.appendChild(label);
    legend.appendChild(item);
  }
  curvesSection.appendChild(legend);

  // Chart table
  const chartBox = el('div', { class: 'demo-box', style: 'overflow-x:auto;' });
  const table = document.createElement('table');
  table.style.cssText = 'width:100%;border-collapse:collapse;font-size:12px;';

  // Header row
  const thead = el('tr');
  const thLevel = el('th', { style: 'text-align:left;padding:8px 12px;color:#888;font-weight:600;font-size:11px;border-bottom:1px solid #1e1e2e;width:60px;' }, 'Level');
  thead.appendChild(thLevel);
  for (const rate of rates) {
    const th = el('th', { style: `text-align:left;padding:8px 12px;color:${RATE_COLORS[rate.name] || '#888'};font-weight:600;font-size:11px;border-bottom:1px solid #1e1e2e;` }, fmtName(rate.name));
    thead.appendChild(th);
  }
  table.appendChild(thead);

  // Data rows
  for (const level of CHART_LEVELS) {
    const xpValues = rates.map(r => getExperienceForLevel(r.name, level));
    const maxXp = Math.max(...xpValues, 1);

    const row = el('tr');
    const levelCell = el('td', { style: 'padding:6px 12px;color:#ddd;font-weight:700;font-family:"JetBrains Mono",monospace;font-size:12px;border-bottom:1px solid #1a1a24;' }, String(level));
    row.appendChild(levelCell);

    for (let i = 0; i < rates.length; i++) {
      const xp = xpValues[i];
      const pct = maxXp > 0 ? (xp / maxXp) * 100 : 0;
      const color = RATE_COLORS[rates[i].name] || '#888';

      const cell = el('td', { style: 'padding:6px 12px;border-bottom:1px solid #1a1a24;' });
      const barBg = el('div', { style: 'background:#1e1e2e;border-radius:3px;height:14px;overflow:hidden;margin-bottom:2px;' });
      const barFill = el('div', { style: `height:100%;border-radius:3px;background:${color};width:${pct}%;transition:width 0.3s;` });
      barBg.appendChild(barFill);
      cell.appendChild(barBg);
      cell.appendChild(el('span', { style: 'font-size:10px;color:#888;font-family:"JetBrains Mono",monospace;' }, xp.toLocaleString()));
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  chartBox.appendChild(table);
  curvesSection.appendChild(chartBox);
  container.appendChild(curvesSection);

  // ─── Section 2: Level Calculator ───
  const calcSection = el('div', { class: 'demo-section' });
  calcSection.appendChild(el('h3', {}, 'Level Calculator'));
  calcSection.appendChild(el('p', { class: 'desc' }, 'Enter an XP amount to see the resulting level for each growth rate, or pick a level to see XP requirements.'));

  const calcBox = el('div', { class: 'demo-box' });

  // XP -> Level
  const xpToLevelRow = el('div', { style: 'margin-bottom:24px;' });
  xpToLevelRow.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Enter Total XP'));
  const xpInput = el('input', { type: 'number', placeholder: 'e.g. 125000', style: 'width:200px;' }) as HTMLInputElement;
  xpToLevelRow.appendChild(xpInput);
  const xpResultDiv = el('div', { style: 'margin-top:12px;' });
  xpToLevelRow.appendChild(xpResultDiv);
  calcBox.appendChild(xpToLevelRow);

  // Divider
  calcBox.appendChild(el('div', { style: 'border-top:1px solid #1e1e2e;margin:16px 0;' }));

  // Level -> XP
  const levelToXpRow = el('div');
  levelToXpRow.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Enter Level'));
  const levelInput = el('input', { type: 'number', placeholder: 'e.g. 50', min: '1', max: '100', style: 'width:200px;' }) as HTMLInputElement;
  levelToXpRow.appendChild(levelInput);
  const levelResultDiv = el('div', { style: 'margin-top:12px;' });
  levelToXpRow.appendChild(levelResultDiv);
  calcBox.appendChild(levelToXpRow);

  function renderXpToLevel() {
    xpResultDiv.innerHTML = '';
    const xp = parseInt(xpInput.value);
    if (isNaN(xp) || xp < 0) return;

    const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;' });
    for (const rate of rates) {
      const level = getLevelForExperience(rate.name, xp);
      const color = RATE_COLORS[rate.name] || '#888';
      const card = el('div', { style: `background:#0d0d14;border:1px solid #1e1e2e;border-radius:8px;padding:12px;border-left:3px solid ${color};` });
      card.appendChild(el('div', { style: `font-size:11px;color:${color};font-weight:600;margin-bottom:4px;` }, fmtName(rate.name)));
      card.appendChild(el('div', { style: 'font-size:24px;font-weight:900;color:#ddd;' }, `Lv. ${level}`));
      grid.appendChild(card);
    }
    xpResultDiv.appendChild(grid);
  }

  function renderLevelToXp() {
    levelResultDiv.innerHTML = '';
    const level = parseInt(levelInput.value);
    if (isNaN(level) || level < 1 || level > 100) return;

    const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;' });
    for (const rate of rates) {
      const xp = getExperienceForLevel(rate.name, level);
      const color = RATE_COLORS[rate.name] || '#888';
      const card = el('div', { style: `background:#0d0d14;border:1px solid #1e1e2e;border-radius:8px;padding:12px;border-left:3px solid ${color};` });
      card.appendChild(el('div', { style: `font-size:11px;color:${color};font-weight:600;margin-bottom:4px;` }, fmtName(rate.name)));
      card.appendChild(el('div', { style: 'font-size:18px;font-weight:900;color:#ddd;font-family:"JetBrains Mono",monospace;' }, xp.toLocaleString()));
      card.appendChild(el('div', { style: 'font-size:10px;color:#666;' }, 'total XP'));
      grid.appendChild(card);
    }
    levelResultDiv.appendChild(grid);
  }

  xpInput.oninput = renderXpToLevel;
  levelInput.oninput = renderLevelToXp;

  calcSection.appendChild(calcBox);
  container.appendChild(calcSection);

  // ─── Section 3: Pokemon XP Lookup ───
  const lookupSection = el('div', { class: 'demo-section' });
  lookupSection.appendChild(el('h3', {}, 'Pokemon XP Lookup'));
  lookupSection.appendChild(el('p', { class: 'desc' }, "Search for a Pokemon to see its growth rate, base experience yield, and XP requirements at any level."));

  const lookupBox = el('div', { class: 'demo-box' });

  // Search
  lookupBox.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Search Pokemon'));
  const pokemonSearch = el('input', { type: 'text', placeholder: 'e.g. Pikachu, Charizard...', style: 'width:300px;' }) as HTMLInputElement;
  lookupBox.appendChild(pokemonSearch);
  const searchResults = el('div', { style: 'margin-top:8px;' });
  lookupBox.appendChild(searchResults);
  const pokemonDetail = el('div', { style: 'margin-top:16px;' });
  lookupBox.appendChild(pokemonDetail);

  function showPokemonDetail(pokemonName: string) {
    pokemonDetail.innerHTML = '';
    const pokemon = getPokemon(pokemonName);
    if (!pokemon) return;
    const species = getSpecies(pokemon.species || pokemon.name);
    const growthRateName = species?.growth_rate || 'medium-fast';
    const rate = getGrowthRate(growthRateName);

    // Info card
    const infoRow = el('div', { style: 'display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;' });

    // Sprite + basic info
    const spriteCol = el('div', { style: 'text-align:center;' });
    const img = el('img', { src: spriteUrl(pokemon.id), alt: pokemon.name, style: 'width:96px;height:96px;image-rendering:pixelated;' });
    spriteCol.appendChild(img);
    spriteCol.appendChild(el('div', { style: 'font-size:16px;font-weight:700;margin-top:4px;text-transform:capitalize;' }, fmtName(pokemon.name)));
    spriteCol.appendChild(el('div', { style: 'font-size:11px;color:#666;font-family:"JetBrains Mono",monospace;' }, `#${String(pokemon.id).padStart(3, '0')}`));
    infoRow.appendChild(spriteCol);

    // Stats
    const statsCol = el('div', { style: 'flex:1;min-width:200px;' });

    const color = RATE_COLORS[growthRateName] || '#888';
    const statGrid = el('div', { style: 'display:grid;grid-template-columns:1fr 1fr;gap:8px;' });

    const grCard = el('div', { style: `background:#0d0d14;border-radius:8px;padding:12px;border-left:3px solid ${color};` });
    grCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'Growth Rate'));
    grCard.appendChild(el('div', { style: `font-size:14px;font-weight:700;color:${color};` }, fmtName(growthRateName)));
    statGrid.appendChild(grCard);

    const baseExpCard = el('div', { style: 'background:#0d0d14;border-radius:8px;padding:12px;border-left:3px solid #61afef;' });
    baseExpCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'Base XP Yield'));
    baseExpCard.appendChild(el('div', { style: 'font-size:14px;font-weight:700;color:#61afef;' }, String(pokemon.base_experience)));
    statGrid.appendChild(baseExpCard);

    if (rate?.formula) {
      const formulaCard = el('div', { style: 'background:#0d0d14;border-radius:8px;padding:12px;border-left:3px solid #c678dd;grid-column:1/-1;' });
      formulaCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'Formula'));
      formulaCard.appendChild(el('div', { style: 'font-size:12px;color:#c678dd;font-family:"JetBrains Mono",monospace;' }, rate.formula));
      statGrid.appendChild(formulaCard);
    }

    statsCol.appendChild(statGrid);
    infoRow.appendChild(statsCol);
    pokemonDetail.appendChild(infoRow);

    // XP Curve for this Pokemon
    const curveBox = el('div', { style: 'margin-top:20px;' });
    curveBox.appendChild(el('div', { style: 'font-size:13px;font-weight:600;color:#ccc;margin-bottom:8px;' }, `XP Curve (${fmtName(growthRateName)})`));

    const curveTable = document.createElement('table');
    curveTable.style.cssText = 'width:100%;border-collapse:collapse;font-size:12px;';

    const cHead = el('tr');
    cHead.appendChild(el('th', { style: 'text-align:left;padding:6px 8px;color:#888;font-size:10px;font-weight:600;border-bottom:1px solid #1e1e2e;' }, 'Level'));
    cHead.appendChild(el('th', { style: 'text-align:left;padding:6px 8px;color:#888;font-size:10px;font-weight:600;border-bottom:1px solid #1e1e2e;' }, 'Total XP'));
    cHead.appendChild(el('th', { style: 'text-align:left;padding:6px 8px;color:#888;font-size:10px;font-weight:600;border-bottom:1px solid #1e1e2e;' }, ''));
    curveTable.appendChild(cHead);

    const maxLvlXp = getExperienceForLevel(growthRateName, 100) || 1;
    for (const lvl of CHART_LEVELS) {
      const xp = getExperienceForLevel(growthRateName, lvl);
      const pct = (xp / maxLvlXp) * 100;
      const cRow = el('tr');
      cRow.appendChild(el('td', { style: 'padding:4px 8px;color:#ddd;font-weight:700;font-family:"JetBrains Mono",monospace;font-size:12px;border-bottom:1px solid #1a1a24;width:60px;' }, String(lvl)));
      cRow.appendChild(el('td', { style: 'padding:4px 8px;color:#aaa;font-family:"JetBrains Mono",monospace;font-size:11px;border-bottom:1px solid #1a1a24;width:100px;' }, xp.toLocaleString()));
      const barCell = el('td', { style: 'padding:4px 8px;border-bottom:1px solid #1a1a24;' });
      const bg = el('div', { style: 'background:#1e1e2e;border-radius:3px;height:10px;overflow:hidden;' });
      const fill = el('div', { style: `height:100%;border-radius:3px;background:${color};width:${pct}%;` });
      bg.appendChild(fill);
      barCell.appendChild(bg);
      cRow.appendChild(barCell);
      curveTable.appendChild(cRow);
    }
    curveBox.appendChild(curveTable);
    pokemonDetail.appendChild(curveBox);

    // Interactive level lookup
    const interactiveBox = el('div', { style: 'margin-top:20px;background:#0d0d14;border:1px solid #1e1e2e;border-radius:8px;padding:16px;' });
    interactiveBox.appendChild(el('div', { style: 'font-size:13px;font-weight:600;color:#ccc;margin-bottom:8px;' }, 'Level Details'));

    const levelRow = el('div', { class: 'inline-row' });
    levelRow.appendChild(el('span', { style: 'font-size:11px;color:#888;' }, 'Level:'));
    const detailLevelInput = el('input', { type: 'number', value: '50', min: '1', max: '100', style: 'width:80px;' }) as HTMLInputElement;
    levelRow.appendChild(detailLevelInput);
    interactiveBox.appendChild(levelRow);

    const detailResult = el('div', { style: 'margin-top:12px;' });
    interactiveBox.appendChild(detailResult);

    function updateLevelDetail() {
      detailResult.innerHTML = '';
      const lvl = Math.max(1, Math.min(100, parseInt(detailLevelInput.value) || 50));
      const totalXp = getExperienceForLevel(growthRateName, lvl);
      const toNext = getExperienceToNextLevel(growthRateName, lvl, totalXp);
      const progress = getExperienceProgress(growthRateName, lvl, totalXp);

      const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px;' });

      const totalCard = el('div', { style: 'background:#111118;border-radius:8px;padding:10px;text-align:center;' });
      totalCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'Total XP at Lv.' + lvl));
      totalCard.appendChild(el('div', { style: 'font-size:16px;font-weight:900;color:#ddd;font-family:"JetBrains Mono",monospace;' }, totalXp.toLocaleString()));
      grid.appendChild(totalCard);

      const nextCard = el('div', { style: 'background:#111118;border-radius:8px;padding:10px;text-align:center;' });
      nextCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'XP to Next Level'));
      nextCard.appendChild(el('div', { style: 'font-size:16px;font-weight:900;color:#e5c07b;font-family:"JetBrains Mono",monospace;' }, lvl >= 100 ? 'MAX' : toNext.toLocaleString()));
      grid.appendChild(nextCard);

      const progCard = el('div', { style: 'background:#111118;border-radius:8px;padding:10px;text-align:center;' });
      progCard.appendChild(el('div', { style: 'font-size:10px;color:#888;font-weight:600;margin-bottom:2px;' }, 'Progress'));
      progCard.appendChild(el('div', { style: 'font-size:16px;font-weight:900;color:#98c379;font-family:"JetBrains Mono",monospace;' }, `${Math.round(progress.progress * 100)}%`));
      const progBarBg = el('div', { style: 'background:#1e1e2e;border-radius:4px;height:8px;overflow:hidden;margin-top:6px;' });
      const progBarFill = el('div', { style: `height:100%;border-radius:4px;background:${color};width:${Math.round(progress.progress * 100)}%;` });
      progBarBg.appendChild(progBarFill);
      progCard.appendChild(progBarBg);
      grid.appendChild(progCard);

      detailResult.appendChild(grid);
    }

    detailLevelInput.oninput = updateLevelDetail;
    updateLevelDetail();

    pokemonDetail.appendChild(interactiveBox);
  }

  pokemonSearch.oninput = () => {
    searchResults.innerHTML = '';
    const query = pokemonSearch.value.trim();
    if (query.length < 2) return;

    const results = searchPokemon(query).slice(0, 8);
    if (results.length === 0) {
      searchResults.appendChild(el('div', { style: 'font-size:12px;color:#666;padding:8px 0;' }, 'No Pokemon found.'));
      return;
    }

    const list = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;' });
    for (const p of results) {
      const btn = document.createElement('button');
      btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 12px;font-size:12px;text-transform:capitalize;';
      const spr = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:32px;height:32px;image-rendering:pixelated;' });
      btn.appendChild(spr);
      btn.appendChild(document.createTextNode(fmtName(p.name)));
      btn.onclick = () => {
        pokemonSearch.value = fmtName(p.name);
        searchResults.innerHTML = '';
        showPokemonDetail(p.name);
      };
      list.appendChild(btn);
    }
    searchResults.appendChild(list);
  };

  lookupSection.appendChild(lookupBox);
  container.appendChild(lookupSection);

  // ─── Section 4: Battle XP Calculator ───
  const battleSection = el('div', { class: 'demo-section' });
  battleSection.appendChild(el('h3', {}, 'Battle XP Calculator'));
  battleSection.appendChild(el('p', { class: 'desc' }, 'Calculate experience gained from defeating a Pokemon. Uses the Gen V+ scaled XP formula where the level difference between your Pokemon and the defeated Pokemon affects the XP gained.'));

  const battleBox = el('div', { class: 'demo-box' });

  // Defeated Pokemon search
  battleBox.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Defeated Pokemon'));
  const defeatedSearch = el('input', { type: 'text', placeholder: 'Search defeated Pokemon...', style: 'width:300px;' }) as HTMLInputElement;
  battleBox.appendChild(defeatedSearch);
  const defeatedResults = el('div', { style: 'margin-top:8px;' });
  battleBox.appendChild(defeatedResults);
  const defeatedInfo = el('div', { style: 'margin-top:8px;' });
  battleBox.appendChild(defeatedInfo);

  let defeatedPokemon = getPokemon('pidgey')!;

  function renderDefeatedInfo() {
    defeatedInfo.innerHTML = '';
    if (!defeatedPokemon) return;
    const row = el('div', { style: 'display:inline-flex;align-items:center;gap:8px;background:#0d0d14;border:1px solid #1e1e2e;border-radius:8px;padding:8px 16px;' });
    const spr = el('img', { src: spriteUrl(defeatedPokemon.id), alt: defeatedPokemon.name, style: 'width:40px;height:40px;image-rendering:pixelated;' });
    row.appendChild(spr);
    row.appendChild(el('span', { style: 'font-weight:700;text-transform:capitalize;' }, fmtName(defeatedPokemon.name)));
    row.appendChild(el('span', { style: 'font-size:11px;color:#888;' }, `Base XP: ${defeatedPokemon.base_experience}`));
    defeatedInfo.appendChild(row);
  }

  defeatedSearch.oninput = () => {
    defeatedResults.innerHTML = '';
    const query = defeatedSearch.value.trim();
    if (query.length < 2) return;

    const results = searchPokemon(query).slice(0, 8);
    if (results.length === 0) {
      defeatedResults.appendChild(el('div', { style: 'font-size:12px;color:#666;padding:8px 0;' }, 'No Pokemon found.'));
      return;
    }

    const list = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;' });
    for (const p of results) {
      const btn = document.createElement('button');
      btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 12px;font-size:12px;text-transform:capitalize;';
      const spr = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:32px;height:32px;image-rendering:pixelated;' });
      btn.appendChild(spr);
      btn.appendChild(document.createTextNode(fmtName(p.name)));
      btn.onclick = () => {
        defeatedPokemon = p;
        defeatedSearch.value = fmtName(p.name);
        defeatedResults.innerHTML = '';
        renderDefeatedInfo();
        calculateBattleXp();
      };
      list.appendChild(btn);
    }
    defeatedResults.appendChild(list);
  };

  // Level inputs row
  const levelsRow = el('div', { style: 'display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;' });

  const defLevelCol = el('div');
  defLevelCol.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Defeated Pokemon Level'));
  const defeatedLevelInput = el('input', { type: 'number', value: '25', min: '1', max: '100', style: 'width:100%;' }) as HTMLInputElement;
  defLevelCol.appendChild(defeatedLevelInput);
  levelsRow.appendChild(defLevelCol);

  const yourLevelCol = el('div');
  yourLevelCol.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Your Pokemon Level'));
  const yourLevelInput = el('input', { type: 'number', value: '20', min: '1', max: '100', style: 'width:100%;' }) as HTMLInputElement;
  yourLevelCol.appendChild(yourLevelInput);
  levelsRow.appendChild(yourLevelCol);

  battleBox.appendChild(levelsRow);

  // Options
  const optionsRow = el('div', { class: 'inline-row', style: 'margin-top:12px;' });

  const trainerLabel = el('label', { style: 'display:inline-flex;align-items:center;gap:4px;font-size:12px;color:#888;cursor:pointer;' });
  const trainerCheck = el('input', { type: 'checkbox' }) as HTMLInputElement;
  trainerLabel.appendChild(trainerCheck);
  trainerLabel.appendChild(document.createTextNode('Trainer battle'));
  optionsRow.appendChild(trainerLabel);

  const luckyLabel = el('label', { style: 'display:inline-flex;align-items:center;gap:4px;font-size:12px;color:#888;cursor:pointer;' });
  const luckyCheck = el('input', { type: 'checkbox' }) as HTMLInputElement;
  luckyLabel.appendChild(luckyCheck);
  luckyLabel.appendChild(document.createTextNode('Lucky Egg'));
  optionsRow.appendChild(luckyLabel);

  battleBox.appendChild(optionsRow);

  // Result
  const battleResult = el('div', { class: 'calc-result', style: 'margin-top:16px;' });
  battleBox.appendChild(battleResult);

  function calculateBattleXp() {
    battleResult.innerHTML = '';
    if (!defeatedPokemon) return;

    const defLevel = Math.max(1, Math.min(100, parseInt(defeatedLevelInput.value) || 25));
    const yourLevel = Math.max(1, Math.min(100, parseInt(yourLevelInput.value) || 20));
    const baseExp = defeatedPokemon.base_experience;

    const xpGained = calculateExperienceGain(baseExp, defLevel, yourLevel, {
      is_trainer_battle: trainerCheck.checked,
      has_lucky_egg: luckyCheck.checked,
    });

    const numDiv = el('div', { class: 'damage-number', style: 'color:#6bcb77;' }, `+${xpGained.toLocaleString()}`);
    battleResult.appendChild(numDiv);
    battleResult.appendChild(el('div', { class: 'damage-label' }, 'experience points gained'));

    // Breakdown
    const details = el('div', { style: 'margin-top:12px;font-size:12px;color:#888;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;' });
    details.appendChild(el('span', {}, `Base XP: ${baseExp}`));
    details.appendChild(el('span', {}, `Defeated Lv.${defLevel}`));
    details.appendChild(el('span', {}, `Your Lv.${yourLevel}`));
    if (trainerCheck.checked) details.appendChild(el('span', { style: 'color:#ffd93d;' }, '1.5x Trainer'));
    if (luckyCheck.checked) details.appendChild(el('span', { style: 'color:#d19a66;' }, '1.5x Lucky Egg'));
    battleResult.appendChild(details);

    // Level comparison table
    const compDiv = el('div', { style: 'margin-top:16px;text-align:left;' });
    compDiv.appendChild(el('div', { style: 'font-size:11px;color:#888;font-weight:600;margin-bottom:8px;text-align:center;' }, 'XP gained at different level matchups'));

    const compTable = document.createElement('table');
    compTable.style.cssText = 'width:100%;border-collapse:collapse;font-size:11px;max-width:500px;margin:0 auto;';

    const compHead = el('tr');
    compHead.appendChild(el('th', { style: 'text-align:left;padding:4px 8px;color:#888;font-size:10px;border-bottom:1px solid #1e1e2e;' }, 'Your Level'));
    compHead.appendChild(el('th', { style: 'text-align:right;padding:4px 8px;color:#888;font-size:10px;border-bottom:1px solid #1e1e2e;' }, 'XP Gained'));
    compTable.appendChild(compHead);

    const levels = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100];
    for (const lvl of levels) {
      const xp = calculateExperienceGain(baseExp, defLevel, lvl, {
        is_trainer_battle: trainerCheck.checked,
        has_lucky_egg: luckyCheck.checked,
      });
      const compRow = el('tr');
      const isActive = lvl === yourLevel;
      compRow.appendChild(el('td', { style: `padding:3px 8px;border-bottom:1px solid #1a1a24;${isActive ? 'color:#6bcb77;font-weight:700;' : 'color:#aaa;'}` }, `Lv. ${lvl}`));
      compRow.appendChild(el('td', { style: `padding:3px 8px;border-bottom:1px solid #1a1a24;text-align:right;font-family:"JetBrains Mono",monospace;${isActive ? 'color:#6bcb77;font-weight:700;' : 'color:#aaa;'}` }, `+${xp.toLocaleString()}`));
      compTable.appendChild(compRow);
    }
    compDiv.appendChild(compTable);
    battleResult.appendChild(compDiv);
  }

  defeatedLevelInput.oninput = calculateBattleXp;
  yourLevelInput.oninput = calculateBattleXp;
  trainerCheck.onchange = calculateBattleXp;
  luckyCheck.onchange = calculateBattleXp;

  battleSection.appendChild(battleBox);
  container.appendChild(battleSection);

  // ─── Formula Reference ───
  const formulaSection = el('div', { class: 'demo-section', style: 'margin-top:48px;' });
  formulaSection.appendChild(el('h3', {}, 'How Experience Works'));
  formulaSection.appendChild(el('p', { class: 'desc' }, 'pokemon.js implements the Gen V+ scaled experience formula. Higher-level opponents yield more XP, and defeating Pokemon far below your level gives diminished returns.'));

  const formulaCode = el('div', { class: 'code-block' });
  formulaCode.innerHTML = `<span class="cmt">// Gen V+ Scaled XP Formula</span>
XP = Floor(base_exp * defeated_level / <span class="num">5</span>
     * (<span class="num">1</span> / <span class="num">7</span>)
     * Floor((<span class="num">2</span> * defeated_level + <span class="num">10</span>)^<span class="num">2.5</span>
             / (defeated_level + winner_level + <span class="num">10</span>)^<span class="num">2.5</span>)
     + <span class="num">1</span>)
     * trainer_bonus * lucky_egg_bonus

<span class="cmt">// Modifiers</span>
trainer_bonus  = <span class="num">1.5</span> <span class="cmt">if trainer battle, else 1</span>
lucky_egg      = <span class="num">1.5</span> <span class="cmt">if holding Lucky Egg, else 1</span>
exp_share      = <span class="num">0.5</span> <span class="cmt">if not participated but has Exp Share</span>`;
  formulaSection.appendChild(formulaCode);

  container.appendChild(formulaSection);

  // ─── Initialize defaults ───
  renderDefeatedInfo();
  calculateBattleXp();
}
