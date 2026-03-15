import {
  getEvolutionChainForSpecies, getAllEvolutionChains, getEvolutionLine,
  getPreEvolution, isFinalEvolution, isBabyPokemon,
  getPokemon, searchPokemon,
} from '@objectifthunes/pokemon';
import type { PokemonTypeName } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl, renderStatBars } from '../helpers';

/** Describe how an evolution is triggered */
function describeEvolution(detail: {
  trigger: string;
  min_level: number | null;
  item: string | null;
  held_item: string | null;
  min_happiness: number | null;
  time_of_day: string;
}): string {
  if (!detail) return '';
  const parts: string[] = [];
  switch (detail.trigger) {
    case 'level-up':
      if (detail.min_level) parts.push(`Lv ${detail.min_level}`);
      else parts.push('Level up');
      break;
    case 'trade':
      parts.push('Trade');
      break;
    case 'use-item':
      parts.push('Use item');
      break;
    default:
      parts.push(fmtName(detail.trigger));
  }
  if (detail.item) parts.push(fmtName(detail.item));
  if (detail.held_item) parts.push(`holding ${fmtName(detail.held_item)}`);
  if (detail.min_happiness) parts.push(`happiness ${detail.min_happiness}+`);
  if (detail.time_of_day) parts.push(detail.time_of_day);
  return parts.join(' \u00B7 ');
}

interface EvolutionNode {
  species: string;
  evolution_details: Array<{
    trigger: string;
    min_level: number | null;
    item: string | null;
    held_item: string | null;
    min_happiness: number | null;
    time_of_day: string;
  }>;
  evolves_to: EvolutionNode[];
}

/** Flatten a chain node into an array of stages (handles branching like Eevee) */
function flattenChain(node: EvolutionNode): EvolutionNode[][] {
  if (node.evolves_to.length === 0) {
    return [[node]];
  }
  const paths: EvolutionNode[][] = [];
  for (const child of node.evolves_to) {
    for (const subPath of flattenChain(child)) {
      paths.push([node, ...subPath]);
    }
  }
  return paths;
}

/** Build the visual chain display for a single evolution path */
function renderChainPath(
  path: EvolutionNode[],
  highlightName: string | null,
): HTMLElement {
  const row = el('div', { style: 'display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;' });

  for (let i = 0; i < path.length; i++) {
    const node = path[i];
    const pokemon = getPokemon(node.species);

    // Arrow between stages
    if (i > 0) {
      const arrowBox = el('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:2px;min-width:60px;' });
      const arrow = el('div', { style: 'font-size:20px;color:#4d96ff;' }, '\u2192');
      arrowBox.appendChild(arrow);
      // Show evolution method
      if (node.evolution_details.length > 0) {
        const method = describeEvolution(node.evolution_details[0]);
        if (method) {
          arrowBox.appendChild(el('div', { style: 'font-size:9px;color:#666;text-align:center;max-width:80px;line-height:1.3;' }, method));
        }
      }
      row.appendChild(arrowBox);
    }

    // Pokemon stage card
    const isHighlighted = highlightName !== null && node.species === highlightName;
    const stage = el('div', {
      style: `display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 16px;background:${isHighlighted ? '#1a2a4a' : '#111118'};border:1px solid ${isHighlighted ? '#4d96ff' : '#1e1e2e'};border-radius:12px;min-width:100px;transition:all 0.15s;`,
    });

    if (pokemon) {
      const img = el('img', {
        src: spriteUrl(pokemon.id),
        alt: node.species,
        style: 'width:72px;height:72px;image-rendering:pixelated;object-fit:contain;',
      });
      img.onerror = () => { img.style.display = 'none'; };
      stage.appendChild(img);
      stage.appendChild(el('div', { style: 'font-size:13px;font-weight:700;text-transform:capitalize;' }, fmtName(node.species)));
      stage.appendChild(el('div', { style: 'font-size:11px;color:#666;font-family:"JetBrains Mono",monospace;' }, `#${String(pokemon.id).padStart(3, '0')}`));
      const types = el('div', { style: 'display:flex;gap:3px;margin-top:2px;' });
      for (const t of pokemon.types) types.appendChild(typeBadge(t as PokemonTypeName));
      stage.appendChild(types);
    } else {
      stage.appendChild(el('div', { style: 'font-size:13px;font-weight:700;text-transform:capitalize;' }, fmtName(node.species)));
    }

    row.appendChild(stage);
  }

  return row;
}

/** Render a full chain card (handles branching evolutions) */
function renderChainCard(
  chainNode: EvolutionNode,
  highlightName: string | null,
): HTMLElement {
  const card = el('div', {
    style: 'background:#111118;border:1px solid #1e1e2e;border-radius:12px;padding:20px;margin-bottom:12px;',
  });

  const paths = flattenChain(chainNode);

  if (paths.length === 1) {
    card.appendChild(renderChainPath(paths[0], highlightName));
  } else {
    // Branching evolution (e.g. Eevee) — show each path
    for (let i = 0; i < paths.length; i++) {
      if (i > 0) {
        const divider = el('div', { style: 'height:1px;background:#1e1e2e;margin:12px 0;' });
        card.appendChild(divider);
      }
      card.appendChild(renderChainPath(paths[i], highlightName));
    }
  }

  return card;
}

/** Render stat comparison between evolution stages */
function renderStatComparison(names: string[]): HTMLElement {
  const container = el('div', {
    style: 'background:#111118;border:1px solid #1e1e2e;border-radius:12px;padding:20px;margin-top:12px;',
  });
  container.appendChild(el('h4', { style: 'font-size:14px;font-weight:700;margin-bottom:12px;color:#ccc;' }, 'Stat Comparison'));

  const statOrder = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
  const statAbbrs: Record<string, string> = {
    hp: 'HP', attack: 'ATK', defense: 'DEF',
    'special-attack': 'SPA', 'special-defense': 'SPD', speed: 'SPE',
  };

  // Header row with pokemon names
  const headerRow = el('div', { style: 'display:flex;gap:8px;margin-bottom:8px;align-items:center;' });
  headerRow.appendChild(el('div', { style: 'width:40px;' })); // spacer for stat label
  for (const name of names) {
    const pokemon = getPokemon(name);
    if (!pokemon) continue;
    const nameEl = el('div', { style: 'flex:1;text-align:center;font-size:11px;font-weight:700;text-transform:capitalize;color:#888;' }, fmtName(name));
    headerRow.appendChild(nameEl);
  }
  container.appendChild(headerRow);

  // Stat rows
  for (const stat of statOrder) {
    const row = el('div', { style: 'display:flex;gap:8px;align-items:center;margin-bottom:6px;' });
    row.appendChild(el('div', { style: 'width:40px;font-size:10px;font-weight:600;color:#666;font-family:"JetBrains Mono",monospace;' }, statAbbrs[stat]));

    for (const name of names) {
      const pokemon = getPokemon(name);
      if (!pokemon) continue;
      const val = pokemon.stats[stat] || 0;
      const cell = el('div', { style: 'flex:1;display:flex;align-items:center;gap:4px;' });
      const bg = el('div', { style: 'flex:1;height:6px;background:#1e1e2e;border-radius:3px;overflow:hidden;' });
      let color = '#61afef';
      if (val < 50) color = '#e06c75';
      else if (val < 80) color = '#d19a66';
      else if (val < 100) color = '#e5c07b';
      else if (val < 120) color = '#98c379';
      const fill = el('div', { style: `height:100%;width:${Math.min(100, (val / 255) * 100)}%;background:${color};border-radius:3px;` });
      bg.appendChild(fill);
      cell.appendChild(bg);
      cell.appendChild(el('span', { style: 'font-size:10px;font-family:"JetBrains Mono",monospace;color:#aaa;width:28px;text-align:right;' }, String(val)));
      row.appendChild(cell);
    }
    container.appendChild(row);
  }

  // BST row
  const bstRow = el('div', { style: 'display:flex;gap:8px;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid #1e1e2e;' });
  bstRow.appendChild(el('div', { style: 'width:40px;font-size:10px;font-weight:600;color:#666;font-family:"JetBrains Mono",monospace;' }, 'BST'));
  for (const name of names) {
    const pokemon = getPokemon(name);
    if (!pokemon) continue;
    const total = statOrder.reduce((sum, s) => sum + (pokemon.stats[s] || 0), 0);
    bstRow.appendChild(el('div', { style: 'flex:1;text-align:center;font-size:12px;font-weight:700;color:#ccc;font-family:"JetBrains Mono",monospace;' }, String(total)));
  }
  container.appendChild(bstRow);

  return container;
}

export function renderEvolution(container: HTMLElement) {
  // ─── Header ───
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'Evolution Explorer'));
  header.appendChild(el('p', {}, 'Search for any Pokemon to see its full evolution chain, evolution methods, and stat progression across stages.'));
  container.appendChild(header);

  // ─── Stats overview ───
  const allChains = getAllEvolutionChains();
  const statsBar = el('div', { style: 'display:flex;gap:16px;margin-bottom:24px;' });
  const statCard = (label: string, value: string) => {
    const card = el('div', { style: 'background:#111118;border:1px solid #1e1e2e;border-radius:10px;padding:12px 20px;display:flex;flex-direction:column;align-items:center;' });
    card.appendChild(el('div', { style: 'font-size:24px;font-weight:900;color:#4d96ff;' }, value));
    card.appendChild(el('div', { style: 'font-size:11px;color:#666;margin-top:2px;' }, label));
    return card;
  };
  statsBar.appendChild(statCard('Evolution Chains', String(allChains.length)));

  // Count Pokemon with evolutions
  let babyCount = 0;
  let finalCount = 0;
  const sampleNames = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'eevee', 'ralts', 'abra', 'gastly'];
  for (const name of sampleNames) {
    if (isBabyPokemon(name)) babyCount++;
    if (isFinalEvolution(name)) finalCount++;
  }
  container.appendChild(statsBar);

  // ─── Search section ───
  const searchSection = el('div', { class: 'demo-section' });
  searchSection.appendChild(el('h3', {}, 'Search Pokemon'));
  searchSection.appendChild(el('p', { class: 'desc' }, 'Search for any Pokemon to view its evolution chain, methods, and stat comparison.'));

  const searchRow = el('div', { class: 'inline-row', style: 'margin-bottom:16px;' });
  const searchInput = el('input', { type: 'text', placeholder: 'Search by name (e.g. Pikachu, Eevee, Ralts)...', style: 'width:400px;' });
  searchRow.appendChild(searchInput);
  searchSection.appendChild(searchRow);

  // Search results dropdown
  const suggestionsBox = el('div', { style: 'position:relative;' });
  const suggestionsList = el('div', {
    style: 'position:absolute;top:0;left:0;width:400px;max-height:200px;overflow-y:auto;background:#0d0d14;border:1px solid #2a2a3a;border-radius:8px;z-index:10;display:none;',
  });
  suggestionsBox.appendChild(suggestionsList);
  searchSection.appendChild(suggestionsBox);

  // Result container
  const resultContainer = el('div');
  searchSection.appendChild(resultContainer);
  container.appendChild(searchSection);

  function showChainFor(name: string) {
    resultContainer.innerHTML = '';
    suggestionsList.style.display = 'none';

    const pokemon = getPokemon(name);
    if (!pokemon) {
      resultContainer.appendChild(el('p', { style: 'color:#666;padding:16px;' }, `No Pokemon found: "${name}"`));
      return;
    }

    // Info header
    const infoRow = el('div', { style: 'display:flex;align-items:center;gap:16px;margin-bottom:16px;' });
    const img = el('img', {
      src: spriteUrl(pokemon.id),
      alt: pokemon.name,
      style: 'width:80px;height:80px;image-rendering:pixelated;object-fit:contain;',
    });
    img.onerror = () => { img.style.display = 'none'; };
    infoRow.appendChild(img);

    const infoText = el('div');
    const titleRow = el('div', { style: 'display:flex;align-items:center;gap:8px;' });
    titleRow.appendChild(el('span', { style: 'font-size:20px;font-weight:800;' }, fmtName(pokemon.name)));
    titleRow.appendChild(el('span', { style: 'font-size:14px;color:#666;font-family:"JetBrains Mono",monospace;' }, `#${String(pokemon.id).padStart(3, '0')}`));
    infoText.appendChild(titleRow);

    const typesRow = el('div', { style: 'display:flex;gap:4px;margin:6px 0;' });
    for (const t of pokemon.types) typesRow.appendChild(typeBadge(t as PokemonTypeName));
    infoText.appendChild(typesRow);

    // Badges
    const badges = el('div', { style: 'display:flex;gap:6px;margin-top:4px;' });
    if (isBabyPokemon(name)) {
      badges.appendChild(el('span', { style: 'font-size:10px;padding:2px 10px;border-radius:10px;background:#d19a66;color:#111;font-weight:700;' }, 'Baby Pokemon'));
    }
    if (isFinalEvolution(name)) {
      badges.appendChild(el('span', { style: 'font-size:10px;padding:2px 10px;border-radius:10px;background:#6bcb77;color:#111;font-weight:700;' }, 'Final Evolution'));
    }
    const preEvo = getPreEvolution(name);
    if (preEvo) {
      badges.appendChild(el('span', { style: 'font-size:10px;padding:2px 10px;border-radius:10px;background:#1a1a24;color:#888;border:1px solid #2a2a3a;' }, `Evolves from ${fmtName(preEvo)}`));
    }
    infoText.appendChild(badges);
    infoRow.appendChild(infoText);
    resultContainer.appendChild(infoRow);

    // Evolution chain
    const chain = getEvolutionChainForSpecies(name);
    if (chain) {
      resultContainer.appendChild(el('h4', { style: 'font-size:14px;font-weight:700;margin-bottom:8px;color:#ccc;' }, 'Evolution Chain'));
      resultContainer.appendChild(renderChainCard(chain.chain as EvolutionNode, name));
    } else {
      resultContainer.appendChild(el('p', { style: 'color:#666;padding:8px 0;' }, 'No evolution chain data available for this Pokemon.'));
    }

    // Stat comparison
    const line = getEvolutionLine(name);
    if (line && line.length > 1) {
      // Only include Pokemon that exist in the data
      const validLine = line.filter(n => getPokemon(n) != null);
      if (validLine.length > 1) {
        resultContainer.appendChild(renderStatComparison(validLine));
      }
    }
  }

  // Search events
  searchInput.oninput = () => {
    const query = (searchInput as HTMLInputElement).value.trim();
    if (query.length < 2) {
      suggestionsList.style.display = 'none';
      return;
    }
    const results = searchPokemon(query).slice(0, 8);
    if (results.length === 0) {
      suggestionsList.style.display = 'none';
      return;
    }
    suggestionsList.innerHTML = '';
    suggestionsList.style.display = 'block';
    for (const name of results) {
      const pokemon = getPokemon(name);
      const option = el('div', {
        style: 'padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:background 0.1s;',
      });
      option.onmouseenter = () => { option.style.background = '#1a1a24'; };
      option.onmouseleave = () => { option.style.background = 'transparent'; };
      if (pokemon) {
        const miniImg = el('img', {
          src: spriteUrl(pokemon.id),
          alt: name,
          style: 'width:32px;height:32px;image-rendering:pixelated;object-fit:contain;',
        });
        miniImg.onerror = () => { miniImg.style.display = 'none'; };
        option.appendChild(miniImg);
        const info = el('div');
        info.appendChild(el('div', { style: 'font-size:13px;font-weight:600;' }, fmtName(name)));
        const typesDiv = el('div', { style: 'display:flex;gap:3px;margin-top:2px;' });
        for (const t of pokemon.types) {
          const badge = typeBadge(t as PokemonTypeName);
          badge.style.fontSize = '9px';
          badge.style.padding = '1px 6px';
          typesDiv.appendChild(badge);
        }
        info.appendChild(typesDiv);
        option.appendChild(info);
      } else {
        option.appendChild(el('span', { style: 'font-size:13px;' }, fmtName(name)));
      }
      option.onclick = () => {
        (searchInput as HTMLInputElement).value = fmtName(name);
        showChainFor(name);
      };
      suggestionsList.appendChild(option);
    }
  };

  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!suggestionsBox.contains(e.target as Node) && e.target !== searchInput) {
      suggestionsList.style.display = 'none';
    }
  });

  // ─── Featured Chains ───
  const featuredSection = el('div', { class: 'demo-section' });
  featuredSection.appendChild(el('h3', {}, 'Featured Evolution Lines'));
  featuredSection.appendChild(el('p', { class: 'desc' }, 'Popular evolution chains showcasing different evolution methods and branching paths.'));

  const FEATURED = ['charmander', 'eevee', 'ralts', 'abra', 'magikarp', 'larvitar', 'dratini', 'poliwag'];

  for (const name of FEATURED) {
    const chain = getEvolutionChainForSpecies(name);
    if (!chain) continue;

    const pokemon = getPokemon(name);
    const sectionHeader = el('div', { style: 'display:flex;align-items:center;gap:8px;margin-bottom:8px;margin-top:16px;' });
    if (pokemon) {
      const miniImg = el('img', {
        src: spriteUrl(pokemon.id),
        alt: name,
        style: 'width:28px;height:28px;image-rendering:pixelated;object-fit:contain;',
      });
      miniImg.onerror = () => { miniImg.style.display = 'none'; };
      sectionHeader.appendChild(miniImg);
    }
    sectionHeader.appendChild(el('span', { style: 'font-size:14px;font-weight:700;' }, `${fmtName(name)} Line`));

    // Show badges for the base Pokemon
    if (isBabyPokemon(name)) {
      sectionHeader.appendChild(el('span', { style: 'font-size:9px;padding:2px 8px;border-radius:10px;background:#d19a66;color:#111;font-weight:700;' }, 'Baby'));
    }

    featuredSection.appendChild(sectionHeader);

    // Wrap the chain card to be clickable
    const chainCard = renderChainCard(chain.chain as EvolutionNode, null);
    chainCard.style.cursor = 'pointer';
    chainCard.onclick = () => {
      (searchInput as HTMLInputElement).value = fmtName(name);
      showChainFor(name);
      // Scroll to the result
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    featuredSection.appendChild(chainCard);
  }

  container.appendChild(featuredSection);
}
