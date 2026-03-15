import {
  getPokemon, searchPokemon,
  getMove, getEvolutionLine,
  createBattlePokemon, calculateDamage,
  calcAllStats, suggestMoves,
  TYPE_COLORS,
  POKEMON_COUNT, MOVES_COUNT, ABILITIES_COUNT, ITEMS_COUNT,
  PERFECT_IVS, ZERO_EVS,
} from '@objectifthunes/pokemon';
import type { PokemonTypeName } from '@objectifthunes/pokemon';
import { el, typeBadge, fmtName, spriteUrl, renderStatBars } from '../helpers';

// ─── Reusable helpers ───

function codeBlock(html: string): HTMLElement {
  const block = el('div', { class: 'code-block' });
  block.innerHTML = html;
  return block;
}

function section(title: string, desc: string): HTMLElement {
  const s = el('div', { class: 'demo-section' });
  s.appendChild(el('h3', {}, title));
  s.appendChild(el('p', { class: 'desc' }, desc));
  return s;
}

// Syntax helpers
const kw = (s: string) => `<span class="kw">${s}</span>`;
const fn = (s: string) => `<span class="fn">${s}</span>`;
const str = (s: string) => `<span class="str">'${s}'</span>`;
const num = (n: string | number) => `<span class="num">${n}</span>`;
const cmt = (s: string) => `<span class="cmt">// ${s}</span>`;

export function renderHome(container: HTMLElement) {
  // ─── Header ───
  const header = el('div', { class: 'page-header' });
  header.appendChild(el('h2', {}, 'pokemon.js'));
  header.appendChild(el('p', {}, 'The complete Pokemon data library and game engine for TypeScript and JavaScript. Everything you need to build Pokemon apps -- data, sprites, sounds, battle engine, and more. Pure TypeScript, zero dependencies, framework agnostic.'));
  container.appendChild(header);

  // ─── What's Inside ───
  const inside = el('div', { class: 'demo-section' });
  inside.appendChild(el('h3', {}, "What's Inside"));
  inside.appendChild(el('p', { class: 'desc' }, 'A batteries-included toolkit covering every aspect of Pokemon game data and logic.'));

  const features = [
    { title: 'Data', desc: `${POKEMON_COUNT} Pokemon, ${MOVES_COUNT} Moves, ${ABILITIES_COUNT} Abilities, ${ITEMS_COUNT} Items, 25 Natures` },
    { title: 'Battle Engine', desc: 'Full Gen V+ damage formula, type effectiveness, AI, weather, stat stages, doubles' },
    { title: 'Capture System', desc: '24 Pokeball types, Gen V capture formula, critical captures, shake simulation' },
    { title: 'Assets', desc: 'Animated sprites (front, back, shiny) + cry sounds bundled, no CDN' },
    { title: 'Core Classes', desc: 'PokemonInstance, Team, Battle, Trainer -- full OOP layer with serialization' },
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

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1. QUICK START
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const qs = section(
    'Quick Start',
    'Install the package, import what you need, and start building. All data is bundled -- no API calls, no loading states.',
  );

  qs.appendChild(codeBlock(`${cmt('Install')}
npm install @objectifthunes/pokemon`));

  qs.appendChild(codeBlock(
`${kw('import')} { ${fn('getPokemon')}, ${fn('getMove')}, ${fn('getTypeEffectiveness')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${kw('const')} pikachu = ${fn('getPokemon')}(${str('pikachu')});
console.log(pikachu.name);        ${cmt('pikachu')}
console.log(pikachu.types);       ${cmt("['electric']")}
console.log(pikachu.stats.speed); ${cmt('90')}

${kw('const')} tbolt = ${fn('getMove')}(${str('thunderbolt')});
console.log(tbolt.power);         ${cmt('90')}
console.log(tbolt.type);          ${cmt('electric')}

${kw('const')} eff = ${fn('getTypeEffectiveness')}(${str('electric')}, [${str('water')}]);
console.log(eff);                  ${cmt('2 (super effective)')}`));

  // Live Pikachu card
  const pika = getPokemon('pikachu')!;
  const pikaCard = el('div', { class: 'pokemon-card', style: 'max-width: 240px; margin: 16px 0;' });
  pikaCard.appendChild(el('img', { src: spriteUrl(pika.id), alt: pika.name }));
  const nameRow = el('div', { class: 'name' }, `${pika.name} `);
  nameRow.appendChild(el('span', { class: 'dex-num' }, `#${String(pika.id).padStart(3, '0')}`));
  pikaCard.appendChild(nameRow);
  const pikaTypes = el('div', { class: 'types' });
  for (const t of pika.types) pikaTypes.appendChild(typeBadge(t));
  pikaCard.appendChild(pikaTypes);
  pikaCard.appendChild(renderStatBars(pika.stats));
  qs.appendChild(pikaCard);

  container.appendChild(qs);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 2. DATA ACCESS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const da = section(
    'Data Access',
    'Synchronous data functions give you instant access to the full dataset. Look up Pokemon by ID or name, search by type or generation, and access moves, abilities, items, berries, natures, evolution chains, growth rates, and egg groups.',
  );

  da.appendChild(codeBlock(
`${cmt('--- Pokemon ---')}
${kw('const')} charizard = ${fn('getPokemon')}(${num(6)});              ${cmt("by ID")}
${kw('const')} gengar    = ${fn('getPokemon')}(${str('gengar')});          ${cmt("by name")}
${kw('const')} all       = ${fn('getAllPokemon')}();                   ${cmt(`${POKEMON_COUNT} Pokemon`)}
${kw('const')} results   = ${fn('searchPokemon')}(${str('char')});          ${cmt("fuzzy search => charmander, charizard, ...")}
${kw('const')} fireTypes = ${fn('getPokemonByType')}(${str('fire')});       ${cmt("all fire-type Pokemon")}
${kw('const')} gen1      = ${fn('getPokemonByGeneration')}(${num(1)});      ${cmt("151 Gen 1 Pokemon")}
${kw('const')} species   = ${fn('getSpecies')}(${str('pikachu')});          ${cmt("genus, capture rate, growth rate, flavor text")}

${cmt('--- Moves ---')}
${kw('const')} tbolt     = ${fn('getMove')}(${str('thunderbolt')});         ${cmt("{ power: 90, type: 'electric', accuracy: 100 }")}
${kw('const')} allMoves  = ${fn('getAllMoves')}();                     ${cmt(`${MOVES_COUNT} moves`)}
${kw('const')} elecMoves = ${fn('getMovesByType')}(${str('electric')});     ${cmt("all electric-type moves")}
${kw('const')} pikaMoves = ${fn('getMovesForPokemon')}(${str('pikachu')});  ${cmt("all moves Pikachu can learn")}

${cmt('--- Abilities ---')}
${kw('const')} ability   = ${fn('getAbility')}(${str('levitate')});         ${cmt("{ name, effect, short_effect }")}
${kw('const')} allAbs    = ${fn('getAllAbilities')}();                  ${cmt(`${ABILITIES_COUNT} abilities`)}

${cmt('--- Items & Berries ---')}
${kw('const')} item      = ${fn('getItem')}(${str('leftovers')});           ${cmt("{ name, effect, category, cost }")}
${kw('const')} allItems  = ${fn('getAllItems')}();                     ${cmt(`${ITEMS_COUNT} items`)}
${kw('const')} holdable  = ${fn('getHoldableItems')}();                ${cmt("items that can be held in battle")}
${kw('const')} berry     = ${fn('getBerry')}(${str('sitrus-berry')});       ${cmt("flavors, natural_gift_power, natural_gift_type")}

${cmt('--- Types ---')}
${kw('const')} type      = ${fn('getType')}(${str('fire')});               ${cmt("damage relations, move/pokemon lists")}
${kw('const')} types     = ${fn('getAllTypes')}();                     ${cmt("all 18 types")}
${kw('const')} eff       = ${fn('getTypeEffectiveness')}(${str('fire')}, [${str('grass')}]); ${cmt("2")}
${kw('const')} chart     = ${fn('getTypeChart')}();                    ${cmt("full 18x18 type chart")}

${cmt('--- Natures ---')}
${kw('const')} adamant   = ${fn('getNature')}(${str('adamant')});
${cmt("{ increased_stat: 'attack', decreased_stat: 'special-attack' }")}
${kw('const')} natures   = ${fn('getAllNatures')}();                   ${cmt("25 natures")}

${cmt('--- Evolution ---')}
${kw('const')} chain     = ${fn('getEvolutionChain')}(${num(1)});           ${cmt("chain by ID")}
${kw('const')} pikaChain = ${fn('getEvolutionChainForSpecies')}(${str('pikachu')});
${cmt("pichu -> pikachu -> raichu")}

${cmt('--- Growth & Experience ---')}
${kw('const')} rates     = ${fn('getGrowthRates')}();                  ${cmt("medium, fast, slow, ...")}
${kw('const')} xp        = ${fn('getExperienceForLevel')}(${str('medium')}, ${num(50)}); ${cmt("XP needed to reach level 50")}

${cmt('--- Egg Groups ---')}
${kw('const')} groups    = ${fn('getEggGroups')}();                    ${cmt("field, monster, water1, ...")}`));

  // Live: show search results
  const searchResults = searchPokemon('char');
  const searchDiv = el('div', { style: 'margin-top: 12px;' });
  searchDiv.appendChild(el('div', { style: 'font-size: 11px; color: #888; margin-bottom: 6px; font-weight: 700;' }, "Live: searchPokemon('char')"));
  const searchRow = el('div', { style: 'display: flex; gap: 8px; flex-wrap: wrap;' });
  for (const p of searchResults.slice(0, 6)) {
    const chip = el('div', { style: 'display: flex; align-items: center; gap: 4px; background: #1e1e2e; padding: 4px 10px; border-radius: 8px; font-size: 11px;' });
    chip.appendChild(el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width: 24px; height: 24px; image-rendering: pixelated;' }));
    chip.appendChild(document.createTextNode(fmtName(p.name)));
    searchRow.appendChild(chip);
  }
  searchDiv.appendChild(searchRow);
  da.appendChild(searchDiv);

  container.appendChild(da);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. BATTLE ENGINE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const be = section(
    'Battle Engine',
    'A pure-functional, turn-based battle engine. Create an immutable battle state, feed it actions, and receive a new state plus a log of events. Supports singles, doubles, weather, terrain, stat stages, abilities, held items, entry hazards, and screens.',
  );

  be.appendChild(codeBlock(
`${kw('import')} {
  ${fn('getPokemon')}, ${fn('createDefaultTeamMember')}, ${fn('createBattlePokemon')},
  ${fn('createBattleState')}, ${fn('executeTurn')}, ${fn('getAIAction')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Build team configs with sensible defaults')}
${kw('const')} charizard = ${fn('getPokemon')}(${str('charizard')})!;
${kw('const')} blastoise = ${fn('getPokemon')}(${str('blastoise')})!;

${kw('const')} playerConfig = ${fn('createDefaultTeamMember')}(charizard, {
  level: ${num(50)},
  held_item: ${str('life-orb')},
});
${cmt("=> { pokemon_id: 6, level: 50, moves: [...], ability: 'blaze', ... }")}

${cmt('Or build a BattlePokemon directly for damage calc')}
${kw('const')} bp = ${fn('createBattlePokemon')}({
  pokemon_id: ${num(6)},
  level: ${num(50)},
  moves: [${str('flamethrower')}, ${str('earthquake')}],
  held_item: ${str('choice-specs')},
});

${cmt('Create a battle state (pure data, no side effects)')}
${kw('const')} state = ${fn('createBattleState')}(
  [playerConfig],  ${cmt('player team')}
  [${fn('createDefaultTeamMember')}(blastoise)], ${cmt('opponent team')}
);

${cmt('Execute a turn -- returns a NEW state (immutable)')}
${kw('const')} aiAction = ${fn('getAIAction')}(state, ${str('smart')});
${kw('const')} result = ${fn('executeTurn')}(state, { type: ${str('move')}, move_index: ${num(0)} }, aiAction);
console.log(result.state); ${cmt('new BattleState')}
console.log(result.log);   ${cmt('array of BattleLogEntry')}

${cmt('TeamMemberConfig structure')}
${kw('interface')} TeamMemberConfig {
  pokemon_id: number;
  nickname?: string;
  level?: number;        ${cmt('default 50')}
  nature?: NatureName;   ${cmt("default 'hardy'")}
  ability?: string;      ${cmt('default first ability')}
  ivs?: Partial&lt;IVs&gt;;    ${cmt('default 31 across the board')}
  evs?: Partial&lt;EVs&gt;;    ${cmt('default 0')}
  moves?: string[];      ${cmt('default auto-suggested')}
  held_item?: string | null;
}`));

  be.appendChild(codeBlock(
`${cmt('Doubles battles')}
${kw('import')} { ${fn('executeDoublesTurn')}, ${fn('getDoublesAIActions')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${kw('const')} doublesState = ${fn('createBattleState')}(
  [config1, config2, config3],
  [configA, configB, configC],
  { format: ${str('doubles')} },
);

${kw('const')} aiActions = ${fn('getDoublesAIActions')}(doublesState, ${str('smart')});
${kw('const')} result = ${fn('executeDoublesTurn')}(doublesState, playerActions, aiActions);`));

  container.appendChild(be);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. DAMAGE CALCULATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const dc = section(
    'Damage Calculation',
    'Full Gen V+ damage formula with support for weather, critical hits, screens, abilities, and held items. The calculateDamage function returns the damage dealt, effectiveness multiplier, STAB flag, and min/max damage rolls.',
  );

  dc.appendChild(codeBlock(
`${kw('import')} { ${fn('calculateDamage')}, ${fn('createBattlePokemon')}, ${fn('getMove')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${kw('const')} attacker = ${fn('createBattlePokemon')}({ pokemon_id: ${num(6)}, level: ${num(50)}, moves: [${str('flamethrower')}] });
${kw('const')} defender = ${fn('createBattlePokemon')}({ pokemon_id: ${num(3)}, level: ${num(50)}, moves: [] });
${kw('const')} move = ${fn('getMove')}(${str('flamethrower')})!;

${kw('const')} result = ${fn('calculateDamage')}(attacker, defender, move, {
  weather: ${str('sun')},            ${cmt('boosts fire moves 1.5x')}
  critical_override: ${kw('false')},   ${cmt('force crit on/off')}
  random_override: ${num(1.0)},      ${cmt('max roll (0.85-1.0)')}
  attacker_side: ${kw('undefined')},   ${cmt('BattleSide for screen checks')}
  defender_side: ${kw('undefined')},   ${cmt('Reflect/Light Screen halve damage')}
});

console.log(result.damage);         ${cmt('final damage number')}
console.log(result.min_damage);      ${cmt('min roll')}
console.log(result.max_damage);      ${cmt('max roll')}
console.log(result.effectiveness);   ${cmt('4 (fire vs grass)')}
console.log(result.stab);           ${cmt('true (Charizard is fire type)')}
console.log(result.critical);       ${cmt('false')}
console.log(result.type_message);    ${cmt("'super effective'")}
console.log(result.weather_modifier); ${cmt('1.5')}`));

  // Live damage calc demo
  const atkPoke = createBattlePokemon({ pokemon_id: 6, level: 50, moves: ['flamethrower'] });
  const defPoke = createBattlePokemon({ pokemon_id: 3, level: 50, moves: [] });
  const flamethrower = getMove('flamethrower')!;
  const dmgResult = calculateDamage(atkPoke, defPoke, flamethrower, { weather: 'sun', random_override: 1.0 });
  const dmgMin = calculateDamage(atkPoke, defPoke, flamethrower, { weather: 'sun', random_override: 0.85 });

  const dmgLive = el('div', { style: 'margin-top: 12px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;' });
  dmgLive.appendChild(el('div', { style: 'display: flex; align-items: center; gap: 4px;' },
    el('img', { src: spriteUrl(6, 'back'), alt: 'charizard', style: 'width: 48px; height: 48px; image-rendering: pixelated;' }),
  ));
  const dmgInfo = el('div', {});
  dmgInfo.appendChild(el('div', { style: 'font-size: 11px; color: #888;' }, 'Charizard Flamethrower vs Venusaur (Sun)'));
  dmgInfo.appendChild(el('div', { style: 'font-size: 20px; font-weight: 900; color: #6bcb77;' }, `${dmgMin.damage}-${dmgResult.damage} damage`));
  dmgInfo.appendChild(el('div', { style: 'font-size: 11px; color: #888;' }, `${dmgResult.effectiveness}x ${dmgResult.stab ? '+ STAB' : ''} + Sun boost`));
  dmgLive.appendChild(dmgInfo);
  dmgLive.appendChild(el('div', { style: 'display: flex; align-items: center; gap: 4px;' },
    el('img', { src: spriteUrl(3), alt: 'venusaur', style: 'width: 48px; height: 48px; image-rendering: pixelated;' }),
  ));
  dc.appendChild(dmgLive);

  container.appendChild(dc);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 5. STATS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const stats = section(
    'Stats',
    'Calculate Pokemon stats using the official formulas. Supports base stats, IVs, EVs, natures, levels, and stat stage multipliers.',
  );

  stats.appendChild(codeBlock(
`${kw('import')} {
  ${fn('calcHP')}, ${fn('calcStat')}, ${fn('calcAllStats')},
  ${fn('getNatureModifier')}, ${fn('getStatStageMultiplier')}, ${fn('getEffectiveStat')},
  PERFECT_IVS, ZERO_EVS,
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('HP formula: floor((2*base + iv + floor(ev/4)) * level / 100) + level + 10')}
${kw('const')} hp = ${fn('calcHP')}(${num(35)}, ${num(31)}, ${num(0)}, ${num(50)}); ${cmt('base=35, iv=31, ev=0, level=50 => 110')}

${cmt('Non-HP stat: floor((floor((2*base + iv + floor(ev/4)) * level/100) + 5) * natureMod)')}
${kw('const')} spd = ${fn('calcStat')}(${num(90)}, ${num(31)}, ${num(252)}, ${num(50)}, ${num(1.1)}); ${cmt('speed with +nature & max EVs')}

${cmt('Calculate all 6 stats at once')}
${kw('const')} pikachu = ${fn('getPokemon')}(${str('pikachu')})!;
${kw('const')} computed = ${fn('calcAllStats')}(pikachu.stats, PERFECT_IVS, ZERO_EVS, ${num(50)}, ${str('jolly')});
${cmt('=> { hp, attack, defense, special-attack, special-defense, speed }')}

${cmt('Nature modifier: 1.1 for boosted, 0.9 for reduced, 1.0 neutral')}
${fn('getNatureModifier')}(${str('adamant')}, ${str('attack')});         ${cmt('1.1')}
${fn('getNatureModifier')}(${str('adamant')}, ${str('special-attack')}); ${cmt('0.9')}

${cmt('Stat stage multiplier (-6 to +6)')}
${fn('getStatStageMultiplier')}(${num(2)});        ${cmt('2.0 (+2 stage)')}
${fn('getStatStageMultiplier')}(${num(-1)});       ${cmt('0.667 (-1 stage)')}
${fn('getStatStageMultiplier')}(${num(1)}, ${kw('true')}); ${cmt('1.333 (+1 accuracy/evasion)')}

${cmt('Apply stage to a computed stat')}
${fn('getEffectiveStat')}(${num(150)}, ${num(2)}); ${cmt('300 (150 * 2.0)')}`));

  // Live stat calculation
  const pikaStats = calcAllStats(pika.stats, PERFECT_IVS, ZERO_EVS, 50, 'jolly');
  const statsLive = el('div', { style: 'margin-top: 8px; font-size: 11px; color: #888;' });
  statsLive.appendChild(el('div', { style: 'font-weight: 700; margin-bottom: 4px;' }, "Live: calcAllStats(pikachu, 31 IVs, 0 EVs, Lv50, Jolly)"));
  const statNames = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'] as const;
  const statsRow = el('div', { style: 'display: flex; gap: 12px; flex-wrap: wrap;' });
  for (const s of statNames) {
    statsRow.appendChild(el('span', {}, `${s}: ${(pikaStats as any)[s]}`));
  }
  statsLive.appendChild(statsRow);
  stats.appendChild(statsLive);

  container.appendChild(stats);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6. TYPE SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const ts = section(
    'Type System',
    'Calculate type effectiveness, check STAB, and access the full type color palette. The getEffectiveness function handles dual-type defenders and returns the combined multiplier.',
  );

  ts.appendChild(codeBlock(
`${kw('import')} { ${fn('getEffectiveness')}, ${fn('isSTAB')}, TYPE_COLORS, ${fn('getTypeColor')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Single type')}
${fn('getEffectiveness')}(${str('fire')}, [${str('grass')}]);           ${cmt('2 (super effective)')}
${fn('getEffectiveness')}(${str('fire')}, [${str('water')}]);           ${cmt('0.5 (not very effective)')}
${fn('getEffectiveness')}(${str('normal')}, [${str('ghost')}]);         ${cmt('0 (no effect)')}

${cmt('Dual type -- multipliers stack')}
${fn('getEffectiveness')}(${str('ground')}, [${str('fire')}, ${str('steel')}]); ${cmt('4 (4x effective)')}
${fn('getEffectiveness')}(${str('ice')}, [${str('water')}, ${str('ground')}]);  ${cmt('2')}

${cmt('STAB check')}
${fn('isSTAB')}(${str('fire')}, [${str('fire')}, ${str('flying')}]);    ${cmt('true (fire is one of the types)')}
${fn('isSTAB')}(${str('water')}, [${str('fire')}, ${str('flying')}]);   ${cmt('false')}

${cmt('Type colors for UI rendering')}
TYPE_COLORS.fire;     ${cmt("'#EE8130'")}
TYPE_COLORS.water;    ${cmt("'#6390F0'")}
${fn('getTypeColor')}(${str('electric')});  ${cmt("'#F7D02C'")}`));

  // Live type badges
  const typeBadgeRow = el('div', { style: 'display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px;' });
  const allTypeNames: PokemonTypeName[] = ['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];
  for (const t of allTypeNames) {
    typeBadgeRow.appendChild(typeBadge(t));
  }
  ts.appendChild(typeBadgeRow);

  container.appendChild(ts);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 7. EVOLUTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const evo = section(
    'Evolution',
    'Query evolution chains, check available evolutions based on context (level, happiness, item, trade), and inspect evolution lineages.',
  );

  evo.appendChild(codeBlock(
`${kw('import')} {
  ${fn('getAvailableEvolutions')}, ${fn('getEvolutionTargets')}, ${fn('getEvolutionLine')},
  ${fn('getPreEvolution')}, ${fn('isFinalEvolution')}, ${fn('isBabyPokemon')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Check what a Pokemon can evolve into right now')}
${kw('const')} evos = ${fn('getAvailableEvolutions')}(${str('pikachu')}, {
  level: ${num(25)},
  trigger: ${str('use-item')},
  used_item: ${str('thunder-stone')},
});
${cmt("=> [{ can_evolve: true, target_species: 'raichu', target_pokemon_id: 26, detail: ... }]")}

${cmt('Get all possible evolution targets (regardless of current state)')}
${fn('getEvolutionTargets')}(${str('eevee')});
${cmt("=> [{ species: 'vaporeon', details: [...] }, { species: 'jolteon', ... }, ...]")}

${cmt('Get the full evolution line (ordered base to final)')}
${fn('getEvolutionLine')}(${str('charmeleon')});  ${cmt("['charmander', 'charmeleon', 'charizard']")}
${fn('getEvolutionLine')}(${str('pikachu')});     ${cmt("['pichu', 'pikachu', 'raichu']")}

${cmt('Lineage queries')}
${fn('getPreEvolution')}(${str('charizard')});    ${cmt("'charmeleon'")}
${fn('getPreEvolution')}(${str('charmander')});   ${cmt("null (base form)")}

${fn('isFinalEvolution')}(${str('charizard')});   ${cmt('true')}
${fn('isFinalEvolution')}(${str('charmeleon')});  ${cmt('false')}

${fn('isBabyPokemon')}(${str('pichu')});          ${cmt('true')}
${fn('isBabyPokemon')}(${str('pikachu')});        ${cmt('false')}`));

  // Live: show Charmander evolution line
  const charLine = getEvolutionLine('charmeleon');
  const evoLive = el('div', { style: 'margin-top: 12px;' });
  evoLive.appendChild(el('div', { style: 'font-size: 11px; color: #888; font-weight: 700; margin-bottom: 6px;' }, "Live: getEvolutionLine('charmeleon')"));
  const evoRow = el('div', { style: 'display: flex; align-items: center; gap: 4px;' });
  for (let i = 0; i < charLine.length; i++) {
    const p = getPokemon(charLine[i]);
    if (p) {
      const chip = el('div', { style: 'display: flex; flex-direction: column; align-items: center;' });
      chip.appendChild(el('img', { src: spriteUrl(p.id), alt: p.name, style: 'width: 48px; height: 48px; image-rendering: pixelated;' }));
      chip.appendChild(el('span', { style: 'font-size: 10px;' }, fmtName(p.name)));
      evoRow.appendChild(chip);
      if (i < charLine.length - 1) {
        evoRow.appendChild(el('span', { style: 'font-size: 16px; color: #555;' }, ' -> '));
      }
    }
  }
  evoLive.appendChild(evoRow);
  evo.appendChild(evoLive);

  container.appendChild(evo);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 8. MOVE LEARNING
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const ml = section(
    'Move Learning',
    'Query learnsets, get level-up moves, auto-suggest optimal movesets, and validate whether a move combination is legal.',
  );

  ml.appendChild(codeBlock(
`${kw('import')} {
  ${fn('getLearnset')}, ${fn('getLevelUpMoves')}, ${fn('getMovesAtLevel')},
  ${fn('suggestMoves')}, ${fn('validateMoveset')}, ${fn('canLearnMove')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Full learnset (all methods: level-up, TM, tutor, egg)')}
${kw('const')} learnset = ${fn('getLearnset')}(${fn('getPokemon')}(${str('charizard')})!);
${cmt("=> [{ move: 'scratch', method: 'level-up', level: 1 }, ...]")}

${cmt('Level-up moves only')}
${kw('const')} levelMoves = ${fn('getLevelUpMoves')}(${fn('getPokemon')}(${str('charizard')})!);

${cmt('Moves available at a specific level')}
${kw('const')} atLv36 = ${fn('getMovesAtLevel')}(${fn('getPokemon')}(${str('charizard')})!, ${num(36)});

${cmt('Auto-suggest the best 4 moves (considers STAB, power, type coverage)')}
${kw('const')} suggested = ${fn('suggestMoves')}(${fn('getPokemon')}(${str('charizard')})!, ${num(4)});
${cmt("=> [Move, Move, Move, Move] -- optimized for battle")}

${cmt('Check if a specific Pokemon can learn a move')}
${fn('canLearnMove')}(${str('charizard')}, ${str('flamethrower')}); ${cmt('true')}
${fn('canLearnMove')}(${str('charizard')}, ${str('surf')});         ${cmt('true')}
${fn('canLearnMove')}(${str('charizard')}, ${str('thunderbolt')});  ${cmt('false')}

${cmt('Validate an entire moveset')}
${kw('const')} check = ${fn('validateMoveset')}(${str('charizard')}, [
  ${str('flamethrower')}, ${str('earthquake')}, ${str('dragon-claw')}, ${str('roost')},
]);
console.log(check.valid);  ${cmt('true')}
console.log(check.errors); ${cmt('[]')}`));

  // Live: show suggested moves for Charizard
  const charizardData = getPokemon('charizard')!;
  const suggested = suggestMoves(charizardData, 4);
  const mlLive = el('div', { style: 'margin-top: 12px;' });
  mlLive.appendChild(el('div', { style: 'font-size: 11px; color: #888; font-weight: 700; margin-bottom: 6px;' }, "Live: suggestMoves(charizard, 4)"));
  const mlRow = el('div', { style: 'display: flex; gap: 6px; flex-wrap: wrap;' });
  for (const m of suggested) {
    const color = TYPE_COLORS[m.type as PokemonTypeName] || '#555';
    const chip = el('span', { style: `display: inline-block; padding: 3px 10px; border-radius: 6px; font-size: 11px; color: #fff; font-weight: 700; background: ${color};` }, `${fmtName(m.name)} (${m.power ?? '--'})`);
    mlRow.appendChild(chip);
  }
  mlLive.appendChild(mlRow);
  ml.appendChild(mlLive);

  container.appendChild(ml);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 9. EXPERIENCE & LEVELING
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const xp = section(
    'Experience and Leveling',
    'Calculate experience gains from battles, determine level thresholds, and track XP progress. Uses the Gen V+ scaled experience formula.',
  );

  xp.appendChild(codeBlock(
`${kw('import')} {
  ${fn('calculateExperienceGain')}, ${fn('getLevelForExperience')},
  ${fn('getExperienceToNextLevel')}, ${fn('checkLevelUp')}, ${fn('getExperienceProgress')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('XP gained from defeating a Pokemon')}
${kw('const')} xpGain = ${fn('calculateExperienceGain')}(
  ${num(240)},  ${cmt('defeated base_experience (e.g. Charizard = 240)')}
  ${num(50)},   ${cmt('defeated level')}
  ${num(45)},   ${cmt('winner level')}
  {
    is_trainer_battle: ${kw('true')},  ${cmt('1.5x bonus')}
    has_lucky_egg: ${kw('false')},
    has_exp_share: ${kw('false')},
  },
);

${cmt('What level for a given total XP?')}
${fn('getLevelForExperience')}(${str('medium')}, ${num(125000)});  ${cmt('50')}

${cmt('XP remaining to next level')}
${fn('getExperienceToNextLevel')}(${str('medium')}, ${num(49)}, ${num(110000)});

${cmt('Check for (possibly multiple) level-ups')}
${kw('const')} lvlUp = ${fn('checkLevelUp')}(${str('medium')}, ${num(49)}, ${num(135000)});
console.log(lvlUp.new_level);     ${cmt('51')}
console.log(lvlUp.levels_gained); ${cmt('2')}

${cmt('Get current XP progress (for progress bars)')}
${kw('const')} prog = ${fn('getExperienceProgress')}(${str('medium')}, ${num(50)}, ${num(130000)});
console.log(prog.progress); ${cmt('0.0 to 1.0')}`));

  container.appendChild(xp);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 10. CAPTURE SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const cap = section(
    'Capture System',
    'Full Gen V capture formula with 24 Pokeball types, status modifiers, critical captures, and shake simulation. Calculate catch probability or simulate a full capture attempt.',
  );

  cap.appendChild(codeBlock(
`${kw('import')} { ${fn('attemptCapture')}, ${fn('getCatchProbability')}, ${fn('getBallModifier')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Simulate a capture attempt')}
${kw('const')} result = ${fn('attemptCapture')}(wildPokemon, ${str('ultra-ball')}, {
  turn: ${num(5)},
  is_dark: ${kw('true')},    ${cmt('for Dusk Ball')}
  already_caught: ${kw('false')}, ${cmt('for Repeat Ball')}
  attacker_level: ${num(50)},  ${cmt('for Level Ball')}
});

console.log(result.caught);           ${cmt('true/false')}
console.log(result.shakes);           ${cmt('0-3 (3 = caught)')}
console.log(result.critical_capture); ${cmt('true/false')}
console.log(result.catch_rate);       ${cmt('raw catch rate')}
console.log(result.ball_modifier);    ${cmt('ball multiplier used')}
console.log(result.status_modifier);  ${cmt('status multiplier (sleep=2.5, paralyze=1.5)')}

${cmt('Get catch probability as a percentage (for UI)')}
${kw('const')} pct = ${fn('getCatchProbability')}(wildPokemon, ${str('ultra-ball')});
console.log(pct); ${cmt('e.g. 45.2 (%)')}

${cmt('Get ball modifier for a specific ball + context')}
${fn('getBallModifier')}(${str('quick-ball')}, target, { turn: ${num(1)} }); ${cmt('5 (first turn)')};
${fn('getBallModifier')}(${str('dusk-ball')}, target, { is_dark: ${kw('true')} }); ${cmt('3')};

${cmt('All 24 supported Pokeball types:')}
${cmt("poke-ball, great-ball, ultra-ball, master-ball, safari-ball,")}
${cmt("net-ball, dive-ball, nest-ball, repeat-ball, timer-ball,")}
${cmt("luxury-ball, premier-ball, dusk-ball, heal-ball, quick-ball,")}
${cmt("fast-ball, level-ball, lure-ball, heavy-ball, love-ball,")}
${cmt("friend-ball, moon-ball, sport-ball, dream-ball")}`));

  container.appendChild(cap);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 11. ABILITIES & ITEMS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const ai = section(
    'Abilities and Items (Battle Hooks)',
    'The battle engine uses a hook-based system for abilities and held items. Look up handlers for any ability or item to see what battle events they respond to. The engine calls these hooks automatically during damage calculation, switch-in, end-of-turn, and more.',
  );

  ai.appendChild(codeBlock(
`${kw('import')} { ${fn('getAbilityHandlers')}, ${fn('getHeldItemHandlers')}, ${fn('checkSturdy')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Look up ability handlers')}
${kw('const')} intimidate = ${fn('getAbilityHandlers')}(${str('intimidate')});
${cmt("=> { onSwitchIn: (pokemon, side, oppSide, state, log) => ... }")}

${kw('const')} blaze = ${fn('getAbilityHandlers')}(${str('blaze')});
${cmt("=> { onModifyDamage: (dmg, atk, def, move) => ... }  // 1.5x fire when HP < 1/3")}

${cmt('Look up held item handlers')}
${kw('const')} lifeOrb = ${fn('getHeldItemHandlers')}(${str('life-orb')});
${cmt("=> { onModifyDamage: ..., onAfterDamageDealt: ... }  // 1.3x damage, 10% HP recoil")}

${kw('const')} focusSash = ${fn('getHeldItemHandlers')}(${str('focus-sash')});
${cmt("=> { onTakeDamage: ... }  // survive any hit at full HP with 1 HP")}

${cmt('Sturdy check (standalone utility)')}
${kw('const')} actualDmg = ${fn('checkSturdy')}(defender, ${num(999)});
${cmt("=> max_hp - 1 if Sturdy + full HP, else 999")}

${cmt('Hook types available:')}
${cmt('  onSwitchIn        -- when entering battle')}
${cmt('  onModifyAtk/Def   -- stat modifiers (Huge Power, Pure Power)')}
${cmt('  onModifyDamage    -- damage modifiers (Technician, Adaptability, Multiscale)')}
${cmt('  onModifySpeed     -- speed doublers (Swift Swim, Chlorophyll, Sand Rush)')}
${cmt('  onModifyCritStage -- crit rate (Super Luck, Scope Lens)')}
${cmt('  onPreventCrit     -- crit immunity (Battle Armor, Shell Armor)')}
${cmt('  onStatusAttempt   -- status immunity (Immunity, Limber, Insomnia)')}
${cmt('  onWeatherDamage   -- weather immunity (Magic Guard, Overcoat, Ice Body)')}
${cmt('  onEndOfTurn       -- end-of-turn effects (Speed Boost, Poison Heal, Leftovers)')}
${cmt('  onBurnModify      -- burn override (Guts)')}
${cmt('  onTypeImmunity    -- type absorption (Levitate, Volt Absorb, Flash Fire)')}`));

  container.appendChild(ai);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 12. ENTRY HAZARDS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const hz = section(
    'Entry Hazards',
    'Place and apply entry hazards (Stealth Rock, Spikes, Toxic Spikes, Sticky Web) on a battle side. Hazards are applied automatically when a Pokemon switches in, and can be removed with Rapid Spin or Defog.',
  );

  hz.appendChild(codeBlock(
`${kw('import')} { ${fn('placeHazard')}, ${fn('applyEntryHazards')}, ${fn('removeHazards')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${kw('const')} log = [];

${cmt('Place hazards on the opponent side')}
${fn('placeHazard')}(state.opponent, ${str('stealth-rock')}, log, state.turn);
${cmt("=> 'Pointed stones float in the air around the opposing team!'")}

${fn('placeHazard')}(state.opponent, ${str('spikes')}, log, state.turn);
${cmt('Spikes stack up to 3 layers (1/8, 1/6, 1/4 max HP damage)')}

${fn('placeHazard')}(state.opponent, ${str('toxic-spikes')}, log, state.turn);
${cmt('1 layer = poison, 2 layers = bad poison. Poison types absorb them.')}

${fn('placeHazard')}(state.opponent, ${str('sticky-web')}, log, state.turn);
${cmt('-1 Speed on switch-in. Flying types and Levitate are immune.')}

${cmt('Apply all hazards when a Pokemon switches in')}
${fn('applyEntryHazards')}(state.opponent, switchingInPokemon, log, state.turn);
${cmt('Stealth Rock deals type-effective damage (1/2 to 1/32 max HP)')}

${cmt('Remove all hazards (Rapid Spin / Defog)')}
${fn('removeHazards')}(state.opponent, log, state.turn);`));

  container.appendChild(hz);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 13. STATUS & WEATHER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const sw = section(
    'Status and Weather',
    'Apply end-of-turn status damage, check for paralysis/freeze/sleep cures, and calculate weather-based damage modifiers. All status and weather effects are handled automatically by the battle engine, but these functions are also exported for standalone use.',
  );

  sw.appendChild(codeBlock(
`${kw('import')} {
  ${fn('applyStatusDamage')}, ${fn('checkParalysisSkip')},
  ${fn('checkFreezeThaw')}, ${fn('checkSleepWake')},
  ${fn('getWeatherDamageModifier')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Status damage (end of turn)')}
${kw('const')} dmg = ${fn('applyStatusDamage')}(pokemon);
${cmt('burn:       1/16 max HP')}
${cmt('poison:     1/8 max HP')}
${cmt('bad-poison: 1/16 * turns (toxic scaling)')}

${cmt('Status checks (each turn)')}
${fn('checkParalysisSkip')}();  ${cmt('25% chance => true (cannot move)')}
${fn('checkFreezeThaw')}();     ${cmt('20% chance => true (thaws out)')}
${fn('checkSleepWake')}(pokemon); ${cmt('wakes after 1-3 turns')}

${cmt('Weather damage modifiers for moves')}
${fn('getWeatherDamageModifier')}(${str('sun')}, ${str('fire')});    ${cmt('1.5 (sun boosts fire)')}
${fn('getWeatherDamageModifier')}(${str('sun')}, ${str('water')});   ${cmt('0.5 (sun weakens water)')}
${fn('getWeatherDamageModifier')}(${str('rain')}, ${str('water')});  ${cmt('1.5 (rain boosts water)')}
${fn('getWeatherDamageModifier')}(${str('rain')}, ${str('fire')});   ${cmt('0.5 (rain weakens fire)')}
${fn('getWeatherDamageModifier')}(${str('none')}, ${str('fire')});   ${cmt('1.0 (no weather)')}`));

  container.appendChild(sw);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 14. CORE CLASSES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const cc = section(
    'Core Classes',
    'An OOP layer that wraps the functional engine. PokemonInstance manages a mutable Pokemon with stats, moves, HP, XP, and evolution. Team manages a party of up to 6. Battle orchestrates turns with an AI. Trainer adds bags, badges, and money.',
  );

  cc.appendChild(codeBlock(
`${kw('import')} { ${fn('PokemonInstance')}, ${fn('Team')}, ${fn('Battle')}, ${fn('Trainer')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('--- PokemonInstance ---')}
${kw('const')} pika = ${kw('new')} ${fn('PokemonInstance')}(${str('pikachu')}, {
  level: ${num(50)},
  nature: ${str('jolly')},
  moves: [${str('thunderbolt')}, ${str('iron-tail')}, ${str('quick-attack')}, ${str('electro-ball')}],
  heldItem: ${str('light-ball')},
  isShiny: ${kw('true')},
});

pika.calculatedStats;  ${cmt('{ hp, attack, defense, ... }')}
pika.maxHp;            ${cmt('computed max HP')}
pika.hpPercent;        ${cmt('0-100')}
pika.isFainted;        ${cmt('false')}
pika.bst;              ${cmt('base stat total')}
pika.genus;            ${cmt("'Mouse Pokemon'")}
pika.flavorText;       ${cmt('Pokedex entry')}

pika.takeDamage(${num(30)});    ${cmt('reduces currentHp, returns actual damage')}
pika.heal(${num(20)});          ${cmt('heals HP, returns actual amount')}
pika.fullRestore();      ${cmt('full HP + cure status + restore PP')}
pika.learnMove(${str('volt-tackle')}, ${num(0)}); ${cmt('replace move at slot 0')}
pika.canLearn(${str('surf')});   ${cmt('false')}

${cmt('XP and leveling')}
pika.gainExperience(${num(5000)});  ${cmt('returns levels gained')}
pika.xpProgress;                  ${cmt('{ current, needed, progress }')}
pika.levelUp();                   ${cmt('force level+1')}

${cmt('Evolution')}
pika.canEvolve();                 ${cmt('false (needs Thunder Stone)')}
pika.evolutionTargets;            ${cmt("[{ species: 'raichu', details: [...] }]")}

${cmt('Serialization (save/load)')}
${kw('const')} json = pika.toJSON();
${kw('const')} restored = ${fn('PokemonInstance')}.fromJSON(json);
${kw('const')} cloned = pika.clone();`));

  cc.appendChild(codeBlock(
`${cmt('--- Team ---')}
${kw('const')} team = ${kw('new')} ${fn('Team')}();
team.add(pika);
team.addNew(${str('charizard')}, { level: ${num(50)} }); ${cmt('create + add in one call')}
team.size;        ${cmt('2')}
team.isFull;      ${cmt('false (max 6)')}
team.lead;        ${cmt('first member')}
team.find(${str('pikachu')}); ${cmt('search by name/nickname')}
team.swap(${num(0)}, ${num(1)});  ${cmt('swap positions')}
team.validate({ speciesClause: ${kw('true')}, levelCap: ${num(50)} });

${cmt('Convert to battle configs')}
${kw('const')} configs = team.toBattleConfigs();`));

  cc.appendChild(codeBlock(
`${cmt('--- Battle (OOP wrapper) ---')}
${kw('const')} playerTeam = ${kw('new')} ${fn('Team')}([${kw('new')} ${fn('PokemonInstance')}(${str('charizard')}, { level: ${num(50)} })]);
${kw('const')} oppTeam    = ${kw('new')} ${fn('Team')}([${kw('new')} ${fn('PokemonInstance')}(${str('blastoise')}, { level: ${num(50)} })]);

${kw('const')} battle = ${kw('new')} ${fn('Battle')}(playerTeam, oppTeam);
battle.useMove(${num(0)});           ${cmt('use first move, AI picks opponent action')}
battle.switchPokemon(${num(1)});     ${cmt('switch to team member at index 1')}
battle.useItem(${str('potion')});      ${cmt('use item on active Pokemon')}
battle.throwBall(${str('ultra-ball')}); ${cmt('throw Pokeball (wild battles)')}

battle.playerActive;              ${cmt('BattlePokemon')}
battle.opponentActive;            ${cmt('BattlePokemon')}
battle.turn;                      ${cmt('current turn number')}
battle.isFinished;                ${cmt('true when battle ends')}
battle.winner;                    ${cmt("'player' | 'opponent' | null")}
battle.log;                       ${cmt('full battle log')}
battle.getValidMoves();           ${cmt('[0, 1, 2, 3]')}
battle.getValidSwitches();        ${cmt('[1, 2]')}
battle.aiDifficulty = ${str('smart')};  ${cmt("'random' | 'greedy' | 'smart'")}`));

  cc.appendChild(codeBlock(
`${cmt('--- Trainer ---')}
${kw('const')} ash = ${kw('new')} ${fn('Trainer')}(${str('Ash')});
ash.addPokemon(${str('pikachu')}, { level: ${num(50)} }); ${cmt('adds to team')}
ash.lead;  ${cmt('first team member')}

${cmt('Bag management')}
ash.addItem(${str('potion')}, ${num(5)});
ash.hasItem(${str('potion')});     ${cmt('true')}
ash.getItemCount(${str('potion')}); ${cmt('5')}
ash.removeItem(${str('potion')});   ${cmt('true (removes 1)')}

${cmt('Progression')}
ash.earnBadge(${str('boulder-badge')});
ash.earn(${num(3000)});  ${cmt('money')}
ash.spend(${num(200)});  ${cmt('returns false if not enough')}

${cmt('Start battles')}
${kw('const')} gary = ${kw('new')} ${fn('Trainer')}(${str('Gary')});
${kw('const')} battle = ash.battle(gary);   ${cmt('trainer battle')}
${kw('const')} wild = ash.wildBattle(${kw('new')} ${fn('PokemonInstance')}(${str('pidgey')}, { level: ${num(5)} }));`));

  container.appendChild(cc);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 15. ASSETS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const assets = section(
    'Assets',
    'Bundled animated sprites (front, back, shiny variants), item sprites, and cry sounds. Set a base path once, then use the getter functions to resolve asset URLs.',
  );

  assets.appendChild(codeBlock(
`${kw('import')} { ${fn('getSprite')}, ${fn('getItemSprite')}, ${fn('getCryPath')}, ${fn('setAssetBasePath')} } ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Set base path once (point to where assets are served)')}
${fn('setAssetBasePath')}(${str('/node_modules/@objectifthunes/pokemon/dist/assets/')});

${cmt('Get Pokemon sprite path')}
${fn('getSprite')}(${num(25)});                 ${cmt("front sprite (default)")}
${fn('getSprite')}(${num(25)}, ${str('back')});           ${cmt('back sprite')}
${fn('getSprite')}(${num(25)}, ${str('front-shiny')});    ${cmt('shiny front sprite')}
${fn('getSprite')}(${num(25)}, ${str('back-shiny')});     ${cmt('shiny back sprite')}

${cmt('Get item sprite path')}
${fn('getItemSprite')}(${str('master-ball')});   ${cmt("=> '/assets/items/master-ball.png'")}
${fn('getItemSprite')}(${str('leftovers')});     ${cmt("=> '/assets/items/leftovers.png'")}

${cmt('Get cry sound path')}
${fn('getCryPath')}(${num(25)});  ${cmt("=> '/assets/cries/25.ogg'")}

${cmt("Sprite variants: 'front' | 'back' | 'front-shiny' | 'back-shiny'")}`));

  // Live: show all 4 sprite variants for Pikachu
  const spriteDemo = el('div', { style: 'margin-top: 12px;' });
  spriteDemo.appendChild(el('div', { style: 'font-size: 11px; color: #888; font-weight: 700; margin-bottom: 6px;' }, 'Live: Pikachu sprite variants'));
  const spriteRow = el('div', { style: 'display: flex; gap: 16px; flex-wrap: wrap; align-items: end;' });
  const variants: Array<{ v: 'front' | 'back' | 'front-shiny' | 'back-shiny'; label: string }> = [
    { v: 'front', label: 'front' },
    { v: 'back', label: 'back' },
    { v: 'front-shiny', label: 'front-shiny' },
    { v: 'back-shiny', label: 'back-shiny' },
  ];
  for (const { v, label } of variants) {
    const col = el('div', { style: 'display: flex; flex-direction: column; align-items: center;' });
    col.appendChild(el('img', { src: spriteUrl(25, v), alt: `pikachu-${v}`, style: 'width: 64px; height: 64px; image-rendering: pixelated;' }));
    col.appendChild(el('span', { style: 'font-size: 10px; color: #888;' }, label));
    spriteRow.appendChild(col);
  }
  spriteDemo.appendChild(spriteRow);
  assets.appendChild(spriteDemo);

  container.appendChild(assets);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 16. UTILITIES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const ut = section(
    'Utilities',
    'Formatting, fuzzy search, and generation helpers for common tasks.',
  );

  ut.appendChild(codeBlock(
`${kw('import')} {
  ${fn('formatName')}, ${fn('toSlug')}, ${fn('fuzzyMatch')}, ${fn('fuzzyScore')},
  ${fn('parseGeneration')}, ${fn('formatGeneration')},
} ${kw('from')} ${str('@objectifthunes/pokemon')};

${cmt('Name formatting')}
${fn('formatName')}(${str('fire-blast')});       ${cmt("'Fire Blast'")}
${fn('formatName')}(${str('special-attack')});   ${cmt("'Special Attack'")}
${fn('formatName')}(${str('mr-mime')});           ${cmt("'Mr Mime'")}

${cmt('Slug conversion')}
${fn('toSlug')}(${str('Fire Blast')});            ${cmt("'fire-blast'")}
${fn('toSlug')}(${str('Thunder Wave')});          ${cmt("'thunder-wave'")}

${cmt('Fuzzy matching (all query chars appear in order)')}
${fn('fuzzyMatch')}(${str('char')}, ${str('charizard')});  ${cmt('true')}
${fn('fuzzyMatch')}(${str('pika')}, ${str('pikachu')});    ${cmt('true')}
${fn('fuzzyMatch')}(${str('xyz')}, ${str('pikachu')});     ${cmt('false')}

${cmt('Fuzzy scoring (higher = better match, -1 = no match)')}
${fn('fuzzyScore')}(${str('char')}, ${str('charizard')});  ${cmt('high score (prefix match)')}
${fn('fuzzyScore')}(${str('char')}, ${str('machamp')});    ${cmt('lower score (scattered match)')}
${fn('fuzzyScore')}(${str('xyz')}, ${str('charizard')});   ${cmt('-1 (no match)')}

${cmt('Generation helpers')}
${fn('parseGeneration')}(${str('generation-i')});   ${cmt('1')}
${fn('parseGeneration')}(${str('generation-iv')});  ${cmt('4')}
${fn('formatGeneration')}(${num(1)});               ${cmt("'Generation I'")}
${fn('formatGeneration')}(${num(5)});               ${cmt("'Generation V'")}`));

  container.appendChild(ut);
}
