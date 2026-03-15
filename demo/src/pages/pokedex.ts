import { getAllPokemon, searchPokemon, getPokemonByType, ALL_TYPES } from 'pokemon.js';
import type { Pokemon, PokemonTypeName } from 'pokemon.js';
import { el, typeBadge, fmtName, renderStatBars, spriteUrl } from '../helpers';

const PER_PAGE = 24;

export function renderPokedex(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Pokedex'));
  header.appendChild(el('p', {}, 'Browse all 649 Pokemon with search and type filtering.'));
  container.appendChild(header);

  let allPokemon = getAllPokemon();
  let filtered: Pokemon[] = allPokemon;
  let page = 0;
  let searchTerm = '';
  let activeType: PokemonTypeName | null = null;

  // ─── Controls ───
  const controls = el('div', { class: 'demo-section' });

  const searchRow = el('div', { class: 'inline-row', style: 'margin-bottom: 12px;' });
  const searchInput = el('input', { type: 'text', placeholder: 'Search by name or number...', style: 'width: 300px;' });
  searchRow.appendChild(searchInput);
  controls.appendChild(searchRow);

  const typeRow = el('div', { class: 'inline-row', style: 'margin-bottom: 16px;' });
  const allBtn = el('button', { class: 'active' }, 'All');
  typeRow.appendChild(allBtn);

  const POKEMON_TYPES = ALL_TYPES.filter(t => t !== 'shadow' && t !== 'stellar' && t !== 'unknown') as PokemonTypeName[];
  const typeButtons: HTMLButtonElement[] = [allBtn as HTMLButtonElement];
  for (const t of POKEMON_TYPES) {
    const btn = document.createElement('button');
    btn.textContent = fmtName(t);
    btn.style.fontSize = '11px';
    btn.style.padding = '4px 10px';
    typeRow.appendChild(btn);
    typeButtons.push(btn);
  }
  controls.appendChild(typeRow);
  container.appendChild(controls);

  // ─── Grid ───
  const gridContainer = el('div');
  container.appendChild(gridContainer);

  // ─── Pagination ───
  const paginationEl = el('div', { class: 'pagination' });
  container.appendChild(paginationEl);

  function applyFilters() {
    page = 0;
    if (searchTerm) {
      filtered = searchPokemon(searchTerm).map(name => allPokemon.find(p => p.name === name)!).filter(Boolean);
    } else if (activeType) {
      filtered = getPokemonByType(activeType);
    } else {
      filtered = allPokemon;
    }
    renderGrid();
  }

  function renderGrid() {
    gridContainer.innerHTML = '';
    const start = page * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    if (pageItems.length === 0) {
      gridContainer.appendChild(el('p', { style: 'color: #666; padding: 24px;' }, 'No Pokemon found.'));
    }

    const grid = el('div', { class: 'card-grid' });
    for (const p of pageItems) {
      const card = el('div', { class: 'pokemon-card', style: 'cursor: pointer;' });

      const img = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:80px;height:80px;' });
      img.onerror = () => { img.style.display = 'none'; };
      card.appendChild(img);

      const nameDiv = el('div', { class: 'name' }, fmtName(p.name) + ' ');
      nameDiv.appendChild(el('span', { class: 'dex-num' }, `#${String(p.id).padStart(3, '0')}`));
      card.appendChild(nameDiv);

      const types = el('div', { class: 'types' });
      for (const t of p.types) types.appendChild(typeBadge(t));
      card.appendChild(types);

      // Toggle stats on click
      let showStats = false;
      card.onclick = () => {
        showStats = !showStats;
        const existing = card.querySelector('.stat-bars');
        if (showStats && !existing) {
          card.appendChild(renderStatBars(p.stats));
        } else if (!showStats && existing) {
          existing.remove();
        }
      };

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

  // ─── Events ───
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

  for (let i = 0; i < POKEMON_TYPES.length; i++) {
    const t = POKEMON_TYPES[i];
    typeButtons[i + 1].onclick = () => {
      activeType = t;
      (searchInput as HTMLInputElement).value = '';
      searchTerm = '';
      for (const b of typeButtons) b.classList.remove('active');
      typeButtons[i + 1].classList.add('active');
      applyFilters();
    };
  }

  applyFilters();
}
