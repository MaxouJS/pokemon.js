import {
  getPokemon, getAllPokemon, getMove, getMovesForPokemon,
  calculateDamage, createBattlePokemon, calcAllStats,
  PERFECT_IVS, ZERO_EVS, TYPE_COLORS,
} from '@objectifthunes/pokemon';
import type { Pokemon, Move, PokemonTypeName, Weather } from '@objectifthunes/pokemon';
import { el, fmtName, spriteUrl, typeBadge } from '../helpers';

export function renderDamageCalc(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Damage Calculator'));
  header.appendChild(el('p', {}, 'A full-featured damage calculator built with the pokemon.js battle engine. Select attacker, defender, move, and modifiers to see exact damage ranges.'));
  container.appendChild(header);

  const allPokemon = getAllPokemon();
  const pokemonNames = allPokemon.map(p => p.name).sort();

  let attacker: Pokemon = getPokemon('charizard')!;
  let defender: Pokemon = getPokemon('venusaur')!;
  let selectedMove: Move | null = getMove('flamethrower');
  let level = 50;
  let weather: Weather | 'none' = 'none';
  let critical = false;

  // ─── Calculator Panel ───
  const section = el('div', { class: 'demo-section' });
  section.appendChild(el('h3', {}, 'Calculator'));

  const calcPanel = el('div', { class: 'calc-panel' });

  // Attacker side
  const atkSide = el('div', { class: 'calc-side' });
  atkSide.appendChild(el('h4', {}, 'Attacker'));

  atkSide.appendChild(el('label', {}, 'Pokemon'));
  const atkSelect = document.createElement('select');
  for (const name of pokemonNames) {
    atkSelect.appendChild(el('option', { value: name }, fmtName(name)));
  }
  atkSelect.value = attacker.name;
  atkSide.appendChild(atkSelect);

  atkSide.appendChild(el('label', {}, 'Move'));
  const moveSelect = document.createElement('select');
  atkSide.appendChild(moveSelect);

  atkSide.appendChild(el('label', {}, 'Level'));
  const levelInput = el('input', { type: 'number', value: '50', min: '1', max: '100' }) as HTMLInputElement;
  atkSide.appendChild(levelInput);

  const atkSprite = el('div', { style: 'text-align:center;margin-top:12px;' });
  atkSide.appendChild(atkSprite);

  calcPanel.appendChild(atkSide);

  // VS column
  const vsCol = el('div', { style: 'display:flex;align-items:center;font-size:24px;font-weight:900;color:#333;padding-top:60px;' }, 'VS');
  calcPanel.appendChild(vsCol);

  // Defender side
  const defSide = el('div', { class: 'calc-side' });
  defSide.appendChild(el('h4', {}, 'Defender'));

  defSide.appendChild(el('label', {}, 'Pokemon'));
  const defSelect = document.createElement('select');
  for (const name of pokemonNames) {
    defSelect.appendChild(el('option', { value: name }, fmtName(name)));
  }
  defSelect.value = defender.name;
  defSide.appendChild(defSelect);

  const defSprite = el('div', { style: 'text-align:center;margin-top:12px;' });
  defSide.appendChild(defSprite);

  calcPanel.appendChild(defSide);
  section.appendChild(calcPanel);

  // Options row
  const optionsRow = el('div', { class: 'inline-row', style: 'margin-top:16px;' });
  optionsRow.appendChild(el('span', { style: 'font-size:11px;color:#888;' }, 'Weather:'));
  const weatherSelect = document.createElement('select');
  weatherSelect.style.width = '120px';
  for (const w of ['none', 'sun', 'rain', 'sand', 'hail'] as const) {
    weatherSelect.appendChild(el('option', { value: w }, fmtName(w)));
  }
  optionsRow.appendChild(weatherSelect);

  const critLabel = el('label', { style: 'display:inline-flex;align-items:center;gap:4px;font-size:12px;color:#888;cursor:pointer;margin-left:12px;' });
  const critCheck = el('input', { type: 'checkbox' }) as HTMLInputElement;
  critLabel.appendChild(critCheck);
  critLabel.appendChild(document.createTextNode('Critical hit'));
  optionsRow.appendChild(critLabel);

  section.appendChild(optionsRow);

  // Result
  const resultDiv = el('div', { class: 'calc-result', style: 'margin-top:16px;' });
  section.appendChild(resultDiv);

  container.appendChild(section);

  function populateMoves() {
    moveSelect.innerHTML = '';
    const moves = getMovesForPokemon(attacker.name);
    const damagingMoves = moves
      .filter(m => m.power !== null && m.power > 0)
      .sort((a, b) => (b.power || 0) - (a.power || 0));

    for (const m of damagingMoves) {
      moveSelect.appendChild(el('option', { value: m.name }, `${fmtName(m.name)} (${m.type}, ${m.power} pow)`));
    }
    selectedMove = damagingMoves.length > 0 ? damagingMoves[0] : null;
  }

  function updateSprites() {
    atkSprite.innerHTML = '';
    const atkImg = el('img', { src: spriteUrl(attacker.id, 'back'), alt: attacker.name, style: 'width:96px;height:96px;image-rendering:pixelated;' });
    atkSprite.appendChild(atkImg);
    const atkTypes = el('div', { style: 'display:flex;gap:4px;justify-content:center;margin-top:4px;' });
    for (const t of attacker.types) atkTypes.appendChild(typeBadge(t));
    atkSprite.appendChild(atkTypes);

    defSprite.innerHTML = '';
    const defImg = el('img', { src: spriteUrl(defender.id), alt: defender.name, style: 'width:96px;height:96px;image-rendering:pixelated;' });
    defSprite.appendChild(defImg);
    const defTypes = el('div', { style: 'display:flex;gap:4px;justify-content:center;margin-top:4px;' });
    for (const t of defender.types) defTypes.appendChild(typeBadge(t));
    defSprite.appendChild(defTypes);
  }

  function calculate() {
    resultDiv.innerHTML = '';
    if (!selectedMove) {
      resultDiv.appendChild(el('div', { class: 'damage-label' }, 'No damaging moves available'));
      return;
    }

    // Build BattlePokemon via createBattlePokemon (uses TeamMemberConfig)
    const atkBP = createBattlePokemon({
      pokemon_id: attacker.id,
      level,
      moves: [selectedMove.name],
    });
    const defBP = createBattlePokemon({
      pokemon_id: defender.id,
      level,
      moves: [],
    });

    const w = (weatherSelect as HTMLSelectElement).value;
    const maxResult = calculateDamage(atkBP, defBP, selectedMove, {
      weather: w === 'none' ? undefined : w as Weather,
      critical_override: critical,
      random_override: 1.0,
    });

    const minResult = calculateDamage(atkBP, defBP, selectedMove, {
      weather: w === 'none' ? undefined : w as Weather,
      critical_override: critical,
      random_override: 0.85,
    });

    const pct = Math.round((maxResult.damage / defBP.max_hp) * 100);
    const minPct = Math.round((minResult.damage / defBP.max_hp) * 100);
    const color = maxResult.effectiveness >= 2 ? '#6bcb77' : maxResult.effectiveness > 0 && maxResult.effectiveness < 1 ? '#e06c75' : maxResult.effectiveness === 0 ? '#666' : '#ddd';

    const numDiv = el('div', { class: 'damage-number', style: `color:${color};` }, String(maxResult.damage));
    resultDiv.appendChild(numDiv);

    resultDiv.appendChild(el('div', { class: 'damage-label' }, `${minResult.damage}\u2013${maxResult.damage} damage (${minPct}\u2013${pct}% HP)`));

    const details = el('div', { style: 'margin-top:12px;font-size:12px;color:#888;display:flex;gap:16px;justify-content:center;' });
    details.appendChild(el('span', {}, `${maxResult.effectiveness}x effectiveness`));
    if (maxResult.stab) details.appendChild(el('span', { style: 'color:#6bcb77;' }, 'STAB'));
    if (maxResult.critical) details.appendChild(el('span', { style: 'color:#ffd93d;' }, 'Critical'));
    if (w !== 'none') details.appendChild(el('span', { style: 'color:#56b6c2;' }, fmtName(w)));
    resultDiv.appendChild(details);
  }

  // Events
  atkSelect.onchange = () => {
    attacker = getPokemon(atkSelect.value)!;
    populateMoves();
    updateSprites();
    calculate();
  };

  defSelect.onchange = () => {
    defender = getPokemon(defSelect.value)!;
    updateSprites();
    calculate();
  };

  moveSelect.onchange = () => {
    selectedMove = getMove(moveSelect.value);
    calculate();
  };

  levelInput.oninput = () => {
    level = Math.max(1, Math.min(100, parseInt(levelInput.value) || 50));
    calculate();
  };

  weatherSelect.onchange = () => calculate();
  critCheck.onchange = () => { critical = critCheck.checked; calculate(); };

  // ─── Formula docs ───
  const formulaSection = el('div', { class: 'demo-section', style: 'margin-top:48px;' });
  formulaSection.appendChild(el('h3', {}, 'How Damage Works'));
  formulaSection.appendChild(el('p', { class: 'desc' }, 'pokemon.js implements the official Gen V+ damage formula. The calculation involves a base damage roll followed by a chain of multipliers.'));

  const formulaCode = el('div', { class: 'code-block' });
  formulaCode.innerHTML = `<span class="cmt">// Base damage</span>
damage = Floor((((<span class="num">2</span> * Level / <span class="num">5</span>) + <span class="num">2</span>) * Power * A/D) / <span class="num">50</span>) + <span class="num">2</span>

<span class="cmt">// Modifier chain</span>
damage *= Targets * Weather * Critical * Random * STAB * Type * Burn * Other`;
  formulaSection.appendChild(formulaCode);

  formulaSection.appendChild(el('p', { class: 'desc' }, "A is the effective Attack or Sp. Atk stat (after stages). D is the effective Defense or Sp. Def. The move's damage_class determines which pair is used. Each modifier is a separate multiplicative factor."));

  container.appendChild(formulaSection);

  // Init
  populateMoves();
  updateSprites();
  calculate();
}
