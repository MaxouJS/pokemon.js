import { getAllItems } from 'pokemon.js';
import type { Item } from 'pokemon.js';
import { el, fmtName, itemSpriteUrl } from '../helpers';

const PER_PAGE = 20;

export function renderItems(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Item Browser'));
  header.appendChild(el('p', {}, 'Search and filter all items by name and category, and sort by name or cost.'));
  container.appendChild(header);

  const allItems = getAllItems();
  let filtered: Item[] = [...allItems];
  let page = 0;
  let searchTerm = '';
  let activeCategory: string | null = null;
  let sortBy: 'name' | 'cost' = 'name';

  // Get unique categories
  const categories = [...new Set(allItems.map(i => i.category))].sort();

  // ─── Controls ───
  const controls = el('div', { style: 'margin-bottom: 16px;' });

  const searchInput = el('input', { type: 'text', placeholder: 'Search items...', style: 'width: 300px; margin-bottom: 8px;' });
  controls.appendChild(searchInput);
  controls.appendChild(el('br'));

  const catRow = el('div', { class: 'inline-row', style: 'margin-bottom: 8px; max-height: 72px; overflow-y: auto;' });
  const allBtn = el('button', { class: 'active', style: 'font-size:11px;padding:4px 8px;' }, 'All');
  catRow.appendChild(allBtn);

  const catButtons: HTMLButtonElement[] = [allBtn as HTMLButtonElement];
  for (const c of categories) {
    const btn = document.createElement('button');
    btn.textContent = fmtName(c);
    btn.style.cssText = 'font-size:10px;padding:3px 8px;';
    catRow.appendChild(btn);
    catButtons.push(btn);
  }
  controls.appendChild(catRow);

  const sortRow = el('div', { class: 'inline-row', style: 'margin-bottom: 16px;' });
  sortRow.appendChild(el('span', { style: 'font-size:11px;color:#666;margin-right:4px;' }, 'Sort:'));
  const sortButtons: HTMLButtonElement[] = [];
  for (const s of ['name', 'cost'] as const) {
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
    let result = allItems;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(i => i.name.includes(q) || fmtName(i.name).toLowerCase().includes(q));
    }
    if (activeCategory) {
      result = result.filter(i => i.category === activeCategory);
    }
    result = [...result].sort((a, b) => {
      if (sortBy === 'cost') return (b.cost || 0) - (a.cost || 0);
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
      gridContainer.appendChild(el('p', { style: 'color: #666; padding: 24px;' }, 'No items found.'));
    }

    const grid = el('div', { class: 'card-grid' });
    for (const item of pageItems) {
      const card = el('div', { class: 'item-card', style: 'cursor:pointer;' });

      const img = el('img', { src: itemSpriteUrl(item.name), alt: item.name });
      img.onerror = () => { img.style.display = 'none'; };
      card.appendChild(img);

      const info = el('div');
      info.appendChild(el('div', { class: 'item-name' }, fmtName(item.name)));
      const meta = el('div', { class: 'item-meta' });
      meta.appendChild(el('span', {}, fmtName(item.category)));
      if (item.cost) meta.appendChild(el('span', {}, ` \u00B7 ${item.cost}\u00A5`));
      info.appendChild(meta);

      if (item.short_effect) {
        const effect = el('div', { class: 'item-effect' });
        effect.textContent = item.short_effect.slice(0, 100) + (item.short_effect.length > 100 ? '...' : '');
        info.appendChild(effect);

        // Expand on click
        card.onclick = () => {
          if (effect.textContent === item.short_effect) {
            effect.textContent = item.short_effect.slice(0, 100) + (item.short_effect.length > 100 ? '...' : '');
          } else {
            effect.textContent = item.short_effect;
          }
        };
      }
      card.appendChild(info);
      grid.appendChild(card);
    }
    gridContainer.appendChild(grid);

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
    activeCategory = null;
    for (const b of catButtons) b.classList.remove('active');
    catButtons[0].classList.add('active');
    applyFilters();
  };

  allBtn.onclick = () => {
    activeCategory = null;
    (searchInput as HTMLInputElement).value = '';
    searchTerm = '';
    for (const b of catButtons) b.classList.remove('active');
    allBtn.classList.add('active');
    applyFilters();
  };

  for (let i = 0; i < categories.length; i++) {
    catButtons[i + 1].onclick = () => {
      activeCategory = categories[i];
      (searchInput as HTMLInputElement).value = '';
      searchTerm = '';
      for (const b of catButtons) b.classList.remove('active');
      catButtons[i + 1].classList.add('active');
      applyFilters();
    };
  }

  applyFilters();
}
