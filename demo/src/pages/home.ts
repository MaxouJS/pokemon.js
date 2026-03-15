import { getPokemon, POKEMON_COUNT, MOVES_COUNT, ABILITIES_COUNT, ITEMS_COUNT } from '@objectifthunes/pokemon';
import { el, typeBadge, renderStatBars, spriteUrl } from '../helpers';

export function renderHome(container: HTMLElement) {
  // ─── Header ───
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'pokemon.js'));
  header.appendChild(el('p', {}, 'The complete Pokemon data library and game engine for TypeScript and JavaScript. Everything you need to build Pokemon apps — data, sprites, sounds, battle engine, and more. Pure TypeScript, zero dependencies, framework agnostic.'));
  container.appendChild(header);

  // ─── Install ───
  const install = el('div', { class: 'install-box' }, 'npm install pokemon.js');
  container.appendChild(install);

  // ─── Quick Start ───
  const qs = el('div', { class: 'demo-section' });
  qs.appendChild(el('h3', {}, 'Quick Start'));
  qs.appendChild(el('p', { class: 'desc' }, 'Import what you need and start building. All data is bundled — no API calls, no loading states.'));

  const code = el('div', { class: 'code-block' });
  code.innerHTML = `<span class="kw">import</span> { <span class="fn">getPokemon</span>, <span class="fn">getMove</span>, <span class="fn">getTypeEffectiveness</span> } <span class="kw">from</span> <span class="str">'pokemon.js'</span>;

<span class="kw">const</span> pikachu = <span class="fn">getPokemon</span>(<span class="str">'pikachu'</span>);
<span class="kw">const</span> thunderbolt = <span class="fn">getMove</span>(<span class="str">'thunderbolt'</span>);
<span class="kw">const</span> effectiveness = <span class="fn">getTypeEffectiveness</span>(<span class="str">'electric'</span>, [<span class="str">'water'</span>]); <span class="cmt">// 2</span>`;
  qs.appendChild(code);

  // ─── Live Pikachu card ───
  const pika = getPokemon('pikachu')!;
  const card = el('div', { class: 'pokemon-card', style: 'max-width: 240px; margin: 16px 0;' });
  const img = el('img', { src: spriteUrl(pika.id), alt: pika.name });
  card.appendChild(img);
  const nameRow = el('div', { class: 'name' }, `${pika.name} `);
  nameRow.appendChild(el('span', { class: 'dex-num' }, `#${String(pika.id).padStart(3, '0')}`));
  card.appendChild(nameRow);
  const types = el('div', { class: 'types' });
  for (const t of pika.types) types.appendChild(typeBadge(t));
  card.appendChild(types);
  card.appendChild(renderStatBars(pika.stats));
  qs.appendChild(card);
  container.appendChild(qs);

  // ─── What's Inside ───
  const inside = el('div', { class: 'demo-section' });
  inside.appendChild(el('h3', {}, "What's Inside"));
  inside.appendChild(el('p', { class: 'desc' }, 'A batteries-included toolkit covering every aspect of Pokemon game data and logic.'));

  const features = [
    { title: 'Data', desc: `${POKEMON_COUNT} Pokemon, ${MOVES_COUNT} Moves, ${ABILITIES_COUNT} Abilities, ${ITEMS_COUNT} Items, 25 Natures` },
    { title: 'Battle Engine', desc: 'Full Gen V+ damage formula, type effectiveness, AI, weather, stat stages' },
    { title: 'Capture System', desc: '24 Pokeball types, Gen V capture formula, critical captures, shake simulation' },
    { title: 'Assets', desc: 'All animated sprites + cry sounds bundled, no CDN' },
    { title: 'Core Classes', desc: 'PokemonInstance, Team, Battle, Trainer — full OOP layer with serialization' },
    { title: 'Utilities', desc: 'Formatting, fuzzy search, type colors, generation helpers' },
  ];

  const grid = el('div', { class: 'feature-grid' });
  for (const f of features) {
    const card = el('div', { class: 'feature-card' });
    card.appendChild(el('h4', {}, f.title));
    card.appendChild(el('p', {}, f.desc));
    grid.appendChild(card);
  }
  inside.appendChild(grid);
  container.appendChild(inside);

  // ─── Data Access ───
  const da = el('div', { class: 'demo-section' });
  da.appendChild(el('h3', {}, 'Data Access'));
  da.appendChild(el('p', { class: 'desc' }, 'Synchronous data functions give you instant access to the full dataset. No fetching, no loading states.'));

  const code2 = el('div', { class: 'code-block' });
  code2.innerHTML = `<span class="kw">import</span> { <span class="fn">getPokemon</span>, <span class="fn">getMove</span>, <span class="fn">getTypeEffectiveness</span> } <span class="kw">from</span> <span class="str">'pokemon.js'</span>;

<span class="kw">const</span> pikachu = <span class="fn">getPokemon</span>(<span class="str">'pikachu'</span>);
<span class="kw">const</span> thunderbolt = <span class="fn">getMove</span>(<span class="str">'thunderbolt'</span>);
<span class="kw">const</span> effectiveness = <span class="fn">getTypeEffectiveness</span>(<span class="str">'electric'</span>, [<span class="str">'water'</span>]); <span class="cmt">// 2</span>

<span class="fn">getPokemonByType</span>(<span class="str">'fire'</span>);        <span class="cmt">// all fire-type Pokemon</span>
<span class="fn">getPokemonByGeneration</span>(<span class="num">1</span>);     <span class="cmt">// 151 Gen 1 Pokemon</span>
<span class="fn">searchPokemon</span>(<span class="str">'char'</span>);          <span class="cmt">// fuzzy search</span>
<span class="fn">getSpecies</span>(<span class="str">'pikachu'</span>);          <span class="cmt">// genus, capture rate, growth rate</span>
<span class="fn">getNature</span>(<span class="str">'adamant'</span>);           <span class="cmt">// { increased: 'attack', decreased: 'special-attack' }</span>`;
  da.appendChild(code2);
  container.appendChild(da);

  // ─── Battle Engine ───
  const be = el('div', { class: 'demo-section' });
  be.appendChild(el('h3', {}, 'Battle Engine'));
  be.appendChild(el('p', { class: 'desc' }, 'Full turn-based battle engine with damage calculation, AI, weather, stat stages, items, and capture.'));

  const code3 = el('div', { class: 'code-block' });
  code3.innerHTML = `<span class="kw">import</span> { <span class="fn">PokemonInstance</span>, <span class="fn">Team</span>, <span class="fn">Battle</span> } <span class="kw">from</span> <span class="str">'pokemon.js'</span>;

<span class="kw">const</span> team = <span class="kw">new</span> <span class="fn">Team</span>();
team.<span class="fn">add</span>(<span class="kw">new</span> <span class="fn">PokemonInstance</span>(<span class="fn">getPokemon</span>(<span class="str">'charizard'</span>)!, {
  level: <span class="num">50</span>,
  moves: [<span class="str">'flamethrower'</span>, <span class="str">'earthquake'</span>, <span class="str">'dragon-claw'</span>, <span class="str">'roost'</span>],
}));

<span class="kw">const</span> battle = <span class="kw">new</span> <span class="fn">Battle</span>({ player: { name: <span class="str">'Ash'</span>, team }, opponent: { name: <span class="str">'Gary'</span>, team: enemyTeam } });
battle.<span class="fn">selectMove</span>(<span class="num">0</span>);
battle.<span class="fn">executeTurn</span>();`;
  be.appendChild(code3);
  container.appendChild(be);
}
