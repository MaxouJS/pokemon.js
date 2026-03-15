import { getAllAbilities, getAbility, getAllPokemon, getPokemon } from '@objectifthunes/pokemon';
import type { Ability, Pokemon } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl } from '../helpers';

const PER_PAGE = 20;

/** Build a lookup: ability name -> { regular: Pokemon[], hidden: Pokemon[] } */
function buildAbilityPokemonMap(allPokemon: Pokemon[]) {
  const map = new Map<string, { regular: Pokemon[]; hidden: Pokemon[] }>();
  for (const p of allPokemon) {
    for (const a of p.abilities) {
      const key = a.name;
      if (!map.has(key)) map.set(key, { regular: [], hidden: [] });
      const entry = map.get(key)!;
      if (a.is_hidden) {
        entry.hidden.push(p);
      } else {
        entry.regular.push(p);
      }
    }
  }
  return map;
}

export function renderAbilities(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Ability Browser'));
  header.appendChild(el('p', {}, 'Browse and search all 224 abilities. Each ability can affect battles in unique ways — click any ability to see its full details and every Pokemon that can have it.'));
  container.appendChild(header);

  const allAbilities = getAllAbilities();
  const allPokemon = getAllPokemon();
  const abilityPokemonMap = buildAbilityPokemonMap(allPokemon);

  let filtered: Ability[] = [...allAbilities];
  let page = 0;
  let searchTerm = '';
  let expandedAbility: string | null = null;

  // ─── Controls ───
  const controls = el('div', { style: 'margin-bottom: 16px;' });

  const searchInput = el('input', {
    type: 'text',
    placeholder: 'Search abilities by name...',
    style: 'width: 300px; margin-bottom: 8px;',
  });
  controls.appendChild(searchInput);
  container.appendChild(controls);

  const gridContainer = el('div');
  container.appendChild(gridContainer);

  const paginationEl = el('div', { class: 'pagination' });
  container.appendChild(paginationEl);

  function applyFilters() {
    page = 0;
    let result = allAbilities;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        a => a.name.includes(q) || fmtName(a.name).toLowerCase().includes(q),
      );
    }
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    filtered = result;
    renderGrid();
  }

  function renderGrid() {
    gridContainer.innerHTML = '';
    const start = page * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    if (pageItems.length === 0) {
      gridContainer.appendChild(
        el('p', { style: 'color: #666; padding: 24px;' }, 'No abilities found.'),
      );
    }

    const grid = el('div', { class: 'card-grid' });
    for (const ability of pageItems) {
      const pokemonData = abilityPokemonMap.get(ability.name);
      const regularPokemon = pokemonData?.regular ?? [];
      const hiddenPokemon = pokemonData?.hidden ?? [];
      const allWithAbility = [...regularPokemon, ...hiddenPokemon];
      const hasHidden = hiddenPokemon.length > 0;
      const isExpanded = expandedAbility === ability.name;

      const card = el('div', {
        class: 'ability-card',
        style: 'cursor:pointer;',
      });

      // ─── Card header ───
      const nameRow = el('div', { class: 'ability-name' }, fmtName(ability.name));
      card.appendChild(nameRow);

      // ─── Meta row: generation + hidden indicator ───
      const meta = el('div', { class: 'ability-meta' });
      meta.appendChild(
        el('span', {}, `Gen ${ability.generation.replace('generation-', '').toUpperCase()}`),
      );
      if (hasHidden) {
        const hiddenBadge = el('span', {
          style:
            'background:#3a2a1a;color:#d19a66;padding:1px 6px;border-radius:4px;font-size:10px;font-weight:600;',
        }, 'Hidden');
        meta.appendChild(hiddenBadge);
      }
      card.appendChild(meta);

      // ─── Effect (short) ───
      const effectText = ability.short_effect || ability.effect || '';
      const shortEffect = el('div', { class: 'ability-effect' });
      if (!isExpanded) {
        shortEffect.textContent =
          effectText.slice(0, 120) + (effectText.length > 120 ? '...' : '');
      } else {
        shortEffect.textContent = ability.effect || ability.short_effect || 'No description available.';
      }
      card.appendChild(shortEffect);

      // ─── Pokemon preview (first 8 sprites) ───
      if (allWithAbility.length > 0) {
        const previewCount = isExpanded ? 0 : Math.min(8, allWithAbility.length);
        if (previewCount > 0) {
          const spriteRow = el('div', { class: 'ability-sprites' });
          for (let i = 0; i < previewCount; i++) {
            const p = allWithAbility[i];
            const wrap = el('div', {
              style:
                'display:inline-flex;flex-direction:column;align-items:center;width:48px;',
              title: fmtName(p.name),
            });
            const img = el('img', {
              src: spriteUrl(p.id),
              alt: p.name,
              style: 'width:32px;height:32px;image-rendering:pixelated;object-fit:contain;',
            });
            img.onerror = () => {
              img.style.display = 'none';
            };
            wrap.appendChild(img);
            wrap.appendChild(
              el(
                'span',
                { style: 'font-size:9px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:48px;' },
                fmtName(p.name),
              ),
            );
            spriteRow.appendChild(wrap);
          }
          if (allWithAbility.length > previewCount) {
            spriteRow.appendChild(
              el(
                'span',
                { style: 'font-size:11px;color:#555;align-self:center;margin-left:4px;' },
                `+${allWithAbility.length - previewCount} more`,
              ),
            );
          }
          card.appendChild(spriteRow);
        }
      }

      // ─── Expanded detail ───
      if (isExpanded) {
        const detail = el('div', {
          style:
            'margin-top:12px;padding-top:12px;border-top:1px solid #1e1e2e;',
        });

        // Full effect text
        const fullEffect = el('div', {
          style: 'font-size:12px;color:#aaa;line-height:1.5;margin-bottom:12px;',
        });
        fullEffect.textContent = ability.effect || 'No detailed description available.';
        detail.appendChild(fullEffect);

        // Regular ability Pokemon
        if (regularPokemon.length > 0) {
          detail.appendChild(
            el('div', { style: 'font-size:11px;font-weight:700;color:#888;margin-bottom:6px;' }, `Regular ability (${regularPokemon.length})`),
          );
          const regGrid = el('div', { class: 'ability-sprites' });
          for (const p of regularPokemon) {
            const wrap = el('div', {
              style:
                'display:inline-flex;flex-direction:column;align-items:center;width:48px;',
              title: fmtName(p.name),
            });
            const img = el('img', {
              src: spriteUrl(p.id),
              alt: p.name,
              style: 'width:32px;height:32px;image-rendering:pixelated;object-fit:contain;',
            });
            img.onerror = () => {
              img.style.display = 'none';
            };
            wrap.appendChild(img);
            wrap.appendChild(
              el(
                'span',
                { style: 'font-size:9px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:48px;' },
                fmtName(p.name),
              ),
            );
            regGrid.appendChild(wrap);
          }
          detail.appendChild(regGrid);
        }

        // Hidden ability Pokemon
        if (hiddenPokemon.length > 0) {
          detail.appendChild(
            el('div', { style: 'font-size:11px;font-weight:700;color:#d19a66;margin-top:10px;margin-bottom:6px;' }, `Hidden ability (${hiddenPokemon.length})`),
          );
          const hidGrid = el('div', { class: 'ability-sprites' });
          for (const p of hiddenPokemon) {
            const wrap = el('div', {
              style:
                'display:inline-flex;flex-direction:column;align-items:center;width:48px;',
              title: fmtName(p.name),
            });
            const img = el('img', {
              src: spriteUrl(p.id),
              alt: p.name,
              style: 'width:32px;height:32px;image-rendering:pixelated;object-fit:contain;',
            });
            img.onerror = () => {
              img.style.display = 'none';
            };
            wrap.appendChild(img);
            wrap.appendChild(
              el(
                'span',
                { style: 'font-size:9px;color:#d19a66;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:48px;' },
                fmtName(p.name),
              ),
            );
            hidGrid.appendChild(wrap);
          }
          detail.appendChild(hidGrid);
        }

        if (allWithAbility.length === 0) {
          detail.appendChild(
            el('div', { style: 'font-size:11px;color:#555;' }, 'No Pokemon have this ability in the current dataset.'),
          );
        }

        card.appendChild(detail);
      }

      // ─── Click to expand/collapse ───
      card.onclick = () => {
        expandedAbility = expandedAbility === ability.name ? null : ability.name;
        renderGrid();
      };

      grid.appendChild(card);
    }
    gridContainer.appendChild(grid);

    // ─── Pagination ───
    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    paginationEl.innerHTML = '';
    if (totalPages > 1) {
      const prev = el('button', {}, 'Prev');
      prev.disabled = page === 0;
      prev.onclick = (e) => { e.stopPropagation(); page--; renderGrid(); };
      paginationEl.appendChild(prev);
      paginationEl.appendChild(el('span', {}, `Page ${page + 1} of ${totalPages}`));
      const next = el('button', {}, 'Next');
      next.disabled = page >= totalPages - 1;
      next.onclick = (e) => { e.stopPropagation(); page++; renderGrid(); };
      paginationEl.appendChild(next);
    }
    paginationEl.appendChild(
      el('span', { style: 'color:#666;margin-left:12px;' }, `${filtered.length} results`),
    );
  }

  // ─── Events ───
  searchInput.oninput = () => {
    searchTerm = (searchInput as HTMLInputElement).value.trim();
    expandedAbility = null;
    applyFilters();
  };

  applyFilters();
}
