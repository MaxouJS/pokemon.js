import { getAllMoves, ALL_TYPES, TYPE_COLORS } from '@objectifthunes/pokemon';
import type { Move, PokemonTypeName } from '@objectifthunes/pokemon';
import { el, fmtName } from '../helpers';

const PER_PAGE = 20;
const MOVE_TYPES = ALL_TYPES.filter(t => t !== 'shadow' && t !== 'stellar' && t !== 'unknown') as PokemonTypeName[];

export function renderMoves(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Move Browser'));
  header.appendChild(el('p', {}, 'Search and filter all 577 moves by name, type, and sort by power, accuracy, or name.'));
  container.appendChild(header);

  const allMoves = getAllMoves();
  let filtered: Move[] = [...allMoves];
  let page = 0;
  let searchTerm = '';
  let activeType: PokemonTypeName | null = null;
  let sortBy: 'power' | 'name' | 'accuracy' = 'power';

  // ─── Controls ───
  const controls = el('div', { style: 'margin-bottom: 16px;' });

  const searchInput = el('input', { type: 'text', placeholder: 'Search moves...', style: 'width: 300px; margin-bottom: 8px;' });
  controls.appendChild(searchInput);
  controls.appendChild(el('br'));

  const typeRow = el('div', { class: 'inline-row', style: 'margin-bottom: 8px;' });
  const allBtn = el('button', { class: 'active', style: 'font-size:11px;padding:4px 10px;' }, 'All');
  typeRow.appendChild(allBtn);

  const typeButtons: HTMLButtonElement[] = [allBtn as HTMLButtonElement];
  for (const t of MOVE_TYPES) {
    const btn = document.createElement('button');
    btn.textContent = fmtName(t);
    btn.style.cssText = `font-size:11px;padding:4px 10px;`;
    typeRow.appendChild(btn);
    typeButtons.push(btn);
  }
  controls.appendChild(typeRow);

  const sortRow = el('div', { class: 'inline-row', style: 'margin-bottom: 16px;' });
  sortRow.appendChild(el('span', { style: 'font-size:11px;color:#666;margin-right:4px;' }, 'Sort:'));
  const sortButtons: HTMLButtonElement[] = [];
  for (const s of ['power', 'name', 'accuracy'] as const) {
    const btn = document.createElement('button');
    btn.textContent = fmtName(s);
    btn.style.cssText = 'font-size:11px;padding:4px 10px;';
    if (s === sortBy) btn.classList.add('active');
    btn.onclick = () => {
      sortBy = s;
      for (const b of sortButtons) b.classList.remove('active');
      btn.classList.add('active');
      applyFilters();
    };
    sortRow.appendChild(btn);
    sortButtons.push(btn);
  }
  controls.appendChild(sortRow);
  container.appendChild(controls);

  const gridContainer = el('div');
  container.appendChild(gridContainer);

  const paginationEl = el('div', { class: 'pagination' });
  container.appendChild(paginationEl);

  function applyFilters() {
    page = 0;
    let result = allMoves;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(m => m.name.includes(q) || fmtName(m.name).toLowerCase().includes(q));
    }

    if (activeType) {
      result = result.filter(m => m.type === activeType);
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'power') return (b.power || 0) - (a.power || 0);
      if (sortBy === 'accuracy') return (b.accuracy || 0) - (a.accuracy || 0);
      return a.name.localeCompare(b.name);
    });

    filtered = result;
    renderGrid();
  }

  function renderGrid() {
    gridContainer.innerHTML = '';
    const start = page * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    if (pageItems.length === 0) {
      gridContainer.appendChild(el('p', { style: 'color: #666; padding: 24px;' }, 'No moves found.'));
    }

    const grid = el('div', { class: 'card-grid' });
    for (const m of pageItems) {
      const color = TYPE_COLORS[m.type as PokemonTypeName] || '#68A090';
      const card = el('div', { class: 'move-card' });
      card.style.borderLeftColor = color;

      const nameRow = el('div', { class: 'move-name' }, fmtName(m.name));
      card.appendChild(nameRow);

      const meta = el('div', { class: 'move-meta' });
      meta.appendChild(el('span', { style: `color:${color};font-weight:700;text-transform:uppercase;` }, m.type));
      meta.appendChild(el('span', {}, m.damage_class));
      if (m.power) meta.appendChild(el('span', {}, `${m.power} pow`));
      if (m.accuracy) meta.appendChild(el('span', {}, `${m.accuracy}% acc`));
      meta.appendChild(el('span', {}, `${m.pp} PP`));
      card.appendChild(meta);

      if (m.effect_text) {
        const effect = el('div', { class: 'move-effect' }, m.effect_text.slice(0, 120) + (m.effect_text.length > 120 ? '...' : ''));
        card.appendChild(effect);
      }

      grid.appendChild(card);
    }
    gridContainer.appendChild(grid);

    // Pagination
    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    paginationEl.innerHTML = '';
    if (totalPages > 1) {
      const prev = el('button', {}, 'Prev');
      prev.disabled = page === 0;
      prev.onclick = () => { page--; renderGrid(); };
      paginationEl.appendChild(prev);
      paginationEl.appendChild(el('span', {}, `Page ${page + 1} of ${totalPages}`));
      const next = el('button', {}, 'Next');
      next.disabled = page >= totalPages - 1;
      next.onclick = () => { page++; renderGrid(); };
      paginationEl.appendChild(next);
    }
    paginationEl.appendChild(el('span', { style: 'color:#666;margin-left:12px;' }, `${filtered.length} results`));
  }

  // Events
  searchInput.oninput = () => {
    searchTerm = (searchInput as HTMLInputElement).value.trim();
    activeType = null;
    for (const b of typeButtons) b.classList.remove('active');
    typeButtons[0].classList.add('active');
    applyFilters();
  };

  allBtn.onclick = () => {
    activeType = null;
    (searchInput as HTMLInputElement).value = '';
    searchTerm = '';
    for (const b of typeButtons) b.classList.remove('active');
    allBtn.classList.add('active');
    applyFilters();
  };

  for (let i = 0; i < MOVE_TYPES.length; i++) {
    typeButtons[i + 1].onclick = () => {
      activeType = MOVE_TYPES[i];
      (searchInput as HTMLInputElement).value = '';
      searchTerm = '';
      for (const b of typeButtons) b.classList.remove('active');
      typeButtons[i + 1].classList.add('active');
      applyFilters();
    };
  }

  applyFilters();
}
