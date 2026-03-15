import { getAllTypes, getTypeEffectiveness, ALL_TYPES, TYPE_COLORS } from 'pokemon.js';
import type { PokemonTypeName } from 'pokemon.js';
import { el, fmtName } from '../helpers';

const CHART_TYPES = ALL_TYPES.filter(t => t !== 'shadow' && t !== 'stellar' && t !== 'unknown') as PokemonTypeName[];

export function renderTypeChart(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Type Chart'));
  header.appendChild(el('p', {}, 'Full 18x18 type effectiveness chart and interactive calculator. Understand how attack types interact with defending type combinations.'));
  container.appendChild(header);

  // ─── Chart ───
  const section1 = el('div', { class: 'demo-section' });
  section1.appendChild(el('h3', {}, 'Effectiveness Matrix'));
  section1.appendChild(el('p', { class: 'desc' }, 'Rows are attacking types, columns are defending. Green means super effective, red means not very effective, and black means immune.'));

  const tableWrap = el('div', { style: 'overflow-x: auto;' });
  const table = document.createElement('table');
  table.style.cssText = 'border-collapse: collapse; font-size: 9px;';

  // Header row
  const thead = el('tr');
  thead.appendChild(el('td', { style: 'width: 56px;' }));
  for (const dt of CHART_TYPES) {
    const th = el('td', { style: `text-align:center;padding:2px;font-weight:700;font-size:8px;text-transform:uppercase;color:${TYPE_COLORS[dt]};writing-mode:vertical-lr;transform:rotate(180deg);height:60px;` }, dt.slice(0, 3));
    thead.appendChild(th);
  }
  table.appendChild(thead);

  // Data rows
  for (const atk of CHART_TYPES) {
    const row = el('tr');
    const label = el('td', { style: `padding:2px 6px;font-weight:700;font-size:9px;text-transform:uppercase;color:${TYPE_COLORS[atk]};white-space:nowrap;` }, atk);
    row.appendChild(label);
    for (const def of CHART_TYPES) {
      const eff = getTypeEffectiveness(atk, [def]);
      let bg = '#1a1a24';
      let text = '';
      if (eff === 2) { bg = '#2a5a2a'; text = '2'; }
      else if (eff === 0.5) { bg = '#5a2a2a'; text = '\u00BD'; }
      else if (eff === 0) { bg = '#111'; text = '0'; }
      else { text = ''; }
      const cell = el('td', {
        style: `text-align:center;padding:0;width:36px;height:28px;background:${bg};font-weight:700;color:#ddd;font-size:10px;border:1px solid #0a0a0f;border-radius:2px;`,
      }, text);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableWrap.appendChild(table);
  section1.appendChild(tableWrap);
  container.appendChild(section1);

  // ─── Calculator ───
  const section2 = el('div', { class: 'demo-section' });
  section2.appendChild(el('h3', {}, 'Type Calculator'));
  section2.appendChild(el('p', { class: 'desc' }, 'Select an attacking type and up to two defending types to see the effectiveness multiplier.'));

  const calcBox = el('div', { class: 'demo-box' });

  // Attack type
  calcBox.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Attack Type'));
  const atkSelect = document.createElement('select');
  atkSelect.style.marginBottom = '16px';
  for (const t of CHART_TYPES) {
    const opt = el('option', { value: t }, fmtName(t));
    atkSelect.appendChild(opt);
  }
  calcBox.appendChild(atkSelect);

  // Defense types
  calcBox.appendChild(el('label', { style: 'display:block;font-size:11px;font-weight:600;color:#888;margin-bottom:6px;' }, 'Defending Type(s) — click to toggle (up to 2)'));
  const defRow = el('div', { class: 'inline-row', style: 'margin-bottom: 16px;' });
  let selectedDef: PokemonTypeName[] = ['normal'];

  const defButtons: HTMLButtonElement[] = [];
  for (const t of CHART_TYPES) {
    const btn = document.createElement('button');
    btn.textContent = fmtName(t);
    btn.style.cssText = `font-size:11px;padding:4px 10px;background:${TYPE_COLORS[t]};color:#fff;border:2px solid transparent;opacity:0.4;`;
    if (t === 'normal') {
      btn.style.opacity = '1';
      btn.style.borderColor = '#fff';
    }
    defButtons.push(btn);
    defRow.appendChild(btn);
  }
  calcBox.appendChild(defRow);

  // Result
  const resultDiv = el('div', { style: 'text-align:center;padding:24px;' });
  calcBox.appendChild(resultDiv);

  function updateResult() {
    const atk = (atkSelect as HTMLSelectElement).value as PokemonTypeName;
    const eff = getTypeEffectiveness(atk, selectedDef);
    let color = '#888';
    let label = '';
    if (eff === 0) { color = '#666'; label = 'No effect'; }
    else if (eff < 1) { color = '#e06c75'; label = 'Not very effective'; }
    else if (eff === 1) { color = '#888'; label = 'Normal'; }
    else if (eff >= 2) { color = '#6bcb77'; label = 'Super effective'; }
    resultDiv.innerHTML = `<div style="font-size:48px;font-weight:900;color:${color}">${eff}x</div><div style="font-size:16px;font-weight:700;color:${color};margin-top:4px;">${label}</div>`;
  }

  for (let i = 0; i < CHART_TYPES.length; i++) {
    defButtons[i].onclick = () => {
      const t = CHART_TYPES[i];
      const idx = selectedDef.indexOf(t);
      if (idx >= 0) {
        if (selectedDef.length > 1) selectedDef.splice(idx, 1);
      } else {
        if (selectedDef.length >= 2) selectedDef.shift();
        selectedDef.push(t);
      }
      for (let j = 0; j < CHART_TYPES.length; j++) {
        const active = selectedDef.includes(CHART_TYPES[j]);
        defButtons[j].style.opacity = active ? '1' : '0.4';
        defButtons[j].style.borderColor = active ? '#fff' : 'transparent';
      }
      updateResult();
    };
  }

  atkSelect.onchange = updateResult;
  updateResult();

  section2.appendChild(calcBox);
  container.appendChild(section2);
}
