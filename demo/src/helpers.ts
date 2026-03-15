import { TYPE_COLORS } from '@objectifthunes/pokemon';
import type { PokemonTypeName } from '@objectifthunes/pokemon';

/** Create an element with optional classes and children */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Record<string, string>,
  ...children: (string | Node)[]
): HTMLElementTagNameMap[K] {
  const elem = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') elem.className = v;
      else if (k === 'html') elem.innerHTML = v;
      else elem.setAttribute(k, v);
    }
  }
  for (const child of children) {
    if (typeof child === 'string') elem.appendChild(document.createTextNode(child));
    else elem.appendChild(child);
  }
  return elem;
}

/** Create a type badge */
export function typeBadge(type: PokemonTypeName): HTMLElement {
  const color = TYPE_COLORS[type] || '#68A090';
  const span = el('span', { class: 'type-badge' }, type);
  span.style.background = color;
  return span;
}

/** Format a name from slug */
export function fmtName(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/** Stat bar color */
export function statColor(val: number): string {
  if (val < 50) return '#e06c75';
  if (val < 80) return '#d19a66';
  if (val < 100) return '#e5c07b';
  if (val < 120) return '#98c379';
  return '#61afef';
}

/** Stat abbreviations */
const STAT_ABBR: Record<string, string> = {
  hp: 'HP', attack: 'ATK', defense: 'DEF',
  'special-attack': 'SPA', 'special-defense': 'SPD', speed: 'SPE',
};

export function statAbbr(name: string): string {
  return STAT_ABBR[name] || name;
}

/** Render stat bars for a pokemon's base stats */
export function renderStatBars(stats: Record<string, number>): HTMLElement {
  const container = el('div', { class: 'stat-bars' });
  const order = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
  let total = 0;
  for (const key of order) {
    const val = stats[key] || 0;
    total += val;
    const row = el('div', { class: 'stat-row' });
    row.appendChild(el('span', { class: 'stat-label' }, statAbbr(key)));
    row.appendChild(el('span', { class: 'stat-value' }, String(val)));
    const bg = el('div', { class: 'stat-bar-bg' });
    const fill = el('div', { class: 'stat-bar-fill' });
    fill.style.width = `${Math.min(100, (val / 255) * 100)}%`;
    fill.style.background = statColor(val);
    bg.appendChild(fill);
    row.appendChild(bg);
    container.appendChild(row);
  }
  const totalRow = el('div', { class: 'stat-row' });
  totalRow.style.marginTop = '4px';
  totalRow.style.borderTop = '1px solid #1e1e2e';
  totalRow.style.paddingTop = '4px';
  totalRow.appendChild(el('span', { class: 'stat-label' }, 'BST'));
  totalRow.appendChild(el('span', { class: 'stat-value' }, String(total)));
  totalRow.appendChild(el('div', { class: 'stat-bar-bg' }));
  container.appendChild(totalRow);
  return container;
}

/** Sprite URL helper */
export function spriteUrl(id: number, variant: 'front' | 'back' | 'front-shiny' | 'back-shiny' = 'front'): string {
  const folders: Record<string, string> = {
    front: 'pokemon/front',
    back: 'pokemon/back',
    'front-shiny': 'pokemon/front-shiny',
    'back-shiny': 'pokemon/back-shiny',
  };
  return `/sprites/${folders[variant]}/${id}.gif`;
}

/** Item sprite URL */
export function itemSpriteUrl(name: string): string {
  return `/sprites/items/${name}.png`;
}

/** HP bar color based on percent */
export function hpColor(pct: number): string {
  if (pct > 0.5) return '#6bcb77';
  if (pct > 0.2) return '#ffd93d';
  return '#e06c75';
}
