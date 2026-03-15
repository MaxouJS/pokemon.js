import { searchPokemon, getPokemon } from '@objectifthunes/pokemon';
import type { Pokemon } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl } from '../helpers';

const MAX_TEAM = 6;

export function renderTeamBuilder(container: HTMLElement) {
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Team Builder'));
  header.appendChild(el('p', {}, 'Build a Pokemon team. Search for Pokemon, add them to your roster, and see your team at a glance.'));
  container.appendChild(header);

  let team: Pokemon[] = [];

  // ─── Team Display ───
  const teamSection = el('div', { class: 'demo-section' });
  const teamHeader = el('h3', {}, 'Your Team (0/6)');
  teamSection.appendChild(teamHeader);
  const teamGrid = el('div', { class: 'team-grid' });
  teamSection.appendChild(teamGrid);

  const clearBtn = document.createElement('button');
  clearBtn.className = 'danger';
  clearBtn.textContent = 'Clear Team';
  clearBtn.style.marginTop = '8px';
  clearBtn.onclick = () => { team = []; renderTeam(); };
  teamSection.appendChild(clearBtn);
  container.appendChild(teamSection);

  // ─── Add Pokemon ───
  const addSection = el('div', { class: 'demo-section' });
  addSection.appendChild(el('h3', {}, 'Add Pokemon'));
  addSection.appendChild(el('p', { class: 'desc' }, 'Type at least 2 characters to search. Click a result to add it to your team.'));

  const searchInput = el('input', { type: 'text', placeholder: 'Search Pokemon by name...', style: 'width: 400px; margin-bottom: 16px;' });
  addSection.appendChild(searchInput);

  const resultsGrid = el('div', { class: 'card-grid' });
  addSection.appendChild(resultsGrid);
  container.appendChild(addSection);

  function renderTeam() {
    teamHeader.textContent = `Your Team (${team.length}/${MAX_TEAM})`;
    teamGrid.innerHTML = '';

    for (let i = 0; i < MAX_TEAM; i++) {
      const slot = el('div', { class: `team-slot ${i >= team.length ? 'empty' : ''}` });
      if (i < team.length) {
        const p = team[i];
        const img = el('img', { src: spriteUrl(p.id), alt: p.name });
        img.onerror = () => { img.style.display = 'none'; };
        slot.appendChild(img);
        slot.appendChild(el('div', { style: 'font-size:12px;font-weight:600;text-transform:capitalize;margin-top:4px;' }, p.name));
        const types = el('div', { style: 'display:flex;gap:3px;margin-top:4px;justify-content:center;' });
        for (const t of p.types) types.appendChild(typeBadge(t));
        slot.appendChild(types);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '\u00D7';
        removeBtn.onclick = (e) => { e.stopPropagation(); team.splice(i, 1); renderTeam(); };
        slot.appendChild(removeBtn);
      } else {
        slot.appendChild(el('span', {}, 'Empty'));
      }
      teamGrid.appendChild(slot);
    }

    clearBtn.style.display = team.length > 0 ? 'inline-block' : 'none';
  }

  function renderResults(query: string) {
    resultsGrid.innerHTML = '';
    if (query.length < 2) return;

    const results = searchPokemon(query).slice(0, 12);
    for (const p of results) {

      const alreadyIn = team.some(t => t.id === p.id);
      const card = el('div', { class: 'pokemon-card', style: `cursor:${alreadyIn || team.length >= MAX_TEAM ? 'not-allowed' : 'pointer'};opacity:${alreadyIn ? '0.4' : '1'};` });

      const img = el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width:56px;height:56px;' });
      img.onerror = () => { img.style.display = 'none'; };
      card.appendChild(img);

      const nameDiv = el('div', { class: 'name', style: 'font-size:12px;' }, fmtName(p.name));
      card.appendChild(nameDiv);

      const types = el('div', { class: 'types' });
      for (const t of p.types) types.appendChild(typeBadge(t));
      card.appendChild(types);

      if (alreadyIn) {
        card.appendChild(el('div', { style: 'font-size:10px;color:#6bcb77;margin-top:4px;' }, 'In team'));
      }

      if (!alreadyIn && team.length < MAX_TEAM) {
        card.onclick = () => {
          team.push(p);
          renderTeam();
          renderResults(query);
        };
      }

      resultsGrid.appendChild(card);
    }
  }

  searchInput.oninput = () => {
    renderResults((searchInput as HTMLInputElement).value.trim());
  };

  renderTeam();
}
