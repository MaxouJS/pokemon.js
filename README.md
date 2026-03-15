# @objectifthunes/pokemon

The complete Pokemon game engine for TypeScript and JavaScript. Data, sprites, sounds, battle system, evolution, leveling, and more — all in one package.

**Pure TypeScript. Zero dependencies. Framework agnostic.**

Covers **Gen 1–5** (Pokemon #1–649) with animated sprites from Black & White and vintage cries.

## Install

```bash
npm install @objectifthunes/pokemon
```

## Quick Start

```ts
import { getPokemon, PokemonInstance, Team, Battle, Trainer } from '@objectifthunes/pokemon';

// Look up any Pokemon
const pikachu = getPokemon('pikachu');
console.log(pikachu.name, pikachu.types, pikachu.stats);

// Create a battle-ready instance
const myPikachu = new PokemonInstance(pikachu, {
  nickname: 'Sparky',
  level: 50,
  nature: 'timid',
  moves: ['thunderbolt', 'quick-attack', 'iron-tail', 'surf'],
});

// Build a team
const team = new Team();
team.add(myPikachu);
team.add(new PokemonInstance(getPokemon('charizard'), { level: 50 }));

// Start a battle
const battle = new Battle({
  player: { name: 'Ash', team },
  opponent: { name: 'Gary', team: enemyTeam },
});
battle.selectMove(0); // use first move
battle.executeTurn();
```

## Features

### Complete Pokedex (Gen 1–5)

```ts
import {
  getPokemon, getAllPokemon, getPokemonByType, getPokemonByGeneration,
  searchPokemon, getSpecies, getMove, getAbility, getItem, getBerry,
  getNature, getType, getEvolutionChain,
} from '@objectifthunes/pokemon';

// 649 Pokemon, 577 moves, 224 abilities, full type chart
const charizard = getPokemon('charizard');   // by name
const bulbasaur = getPokemon(1);             // by ID

// Filter and search
const fireTypes = getPokemonByType('fire');   // 48 fire-type Pokemon
const gen1 = getPokemonByGeneration(1);       // 151 Pokemon
const results = searchPokemon('char');        // fuzzy search

// Species data
const species = getSpecies('pikachu');
// { genus: 'Mouse Pokemon', capture_rate: 190, growth_rate: 'medium', ... }

// Moves with full metadata
const tbolt = getMove('thunderbolt');
// { type: 'electric', power: 90, accuracy: 100, pp: 15, damage_class: 'special', ... }

// Natures
const adamant = getNature('adamant');
// { increased: 'attack', decreased: 'special-attack' }
```

### Type Effectiveness

```ts
import { getEffectiveness, getEffectivenessMessage, isSTAB } from '@objectifthunes/pokemon';

getEffectiveness('fire', ['grass']);          // 2 (super effective)
getEffectiveness('ice', ['ground', 'flying']); // 4 (4x effective)
getEffectiveness('normal', ['ghost']);        // 0 (immune)
getEffectivenessMessage(2);                  // "It's super effective!"

isSTAB('electric', ['electric']);             // true
```

### Stat Calculations

```ts
import { calcAllStats, getNatureModifier, getStatStageMultiplier } from '@objectifthunes/pokemon';

const stats = calcAllStats(charizard.stats, {
  level: 50,
  ivs: { hp: 31, attack: 31, defense: 31, 'special-attack': 31, 'special-defense': 31, speed: 31 },
  evs: { hp: 0, attack: 252, defense: 0, 'special-attack': 0, 'special-defense': 4, speed: 252 },
  nature: 'adamant',
});
// { hp: 153, attack: 136, defense: 98, 'special-attack': 104, ... }

// Stage multipliers (e.g. after Swords Dance)
getStatStageMultiplier(2);  // 2.0x at +2 stages
getStatStageMultiplier(-1); // 0.67x at -1 stage
```

### Damage Calculation

```ts
import { calculateDamage } from '@objectifthunes/pokemon';

const result = calculateDamage(attackerPokemon, defenderPokemon, move, {
  weather: 'sun',           // fire moves boosted, water weakened
  critical: false,
  randomFactor: 1.0,        // max roll (default: random 0.85–1.0)
});
// { damage: 216, effectiveness: 2, isSTAB: true, isCritical: false, ... }
```

### PokemonInstance

Full-featured Pokemon objects with HP, PP, EVs, experience, and serialization.

```ts
import { PokemonInstance } from '@objectifthunes/pokemon';

const mon = new PokemonInstance(getPokemon('snorlax'), {
  nickname: 'Sleepy',
  level: 50,
  nature: 'adamant',
  ability: 'thick-fat',
  moves: ['body-slam', 'earthquake', 'rest', 'crunch'],
  ivs: { hp: 31, attack: 31, defense: 31, 'special-attack': 31, 'special-defense': 31, speed: 31 },
  evs: { hp: 252, attack: 252, defense: 0, 'special-attack': 0, 'special-defense': 4, speed: 0 },
  gender: 'male',
  isShiny: false,
});

// HP management
mon.takeDamage(100);
console.log(mon.currentHp, mon.hpPercent, mon.isFainted);
mon.heal(50);
mon.fullRestore();

// PP tracking
mon.usePP('body-slam');
mon.restorePP('body-slam');

// Experience & leveling
mon.addExperience(5000);  // auto levels up
mon.levelUp();            // force +1 level

// Evolution
if (mon.canEvolve()) {
  const evolved = mon.evolve(mon.availableEvolutions[0]);
}

// Serialization (save/load)
const json = mon.toJSON();
const restored = PokemonInstance.fromJSON(json);
```

### Team Management

```ts
import { Team, MAX_TEAM_SIZE } from '@objectifthunes/pokemon';

const team = new Team();
team.add(pikachu);
team.add(charizard);

team.swap(0, 1);         // swap positions
team.setLead(1);          // move to front
team.remove(0);           // remove by index

team.lead;                // first Pokemon
team.size;                // current size
team.isFull;              // size === 6
team.aliveMembers;        // non-fainted members
team.find('charizard');   // find by species
team.has('pikachu');      // check by species

team.validate();          // { valid: boolean, errors: string[] }
const copy = team.clone();
```

### Trainer

```ts
import { Trainer } from '@objectifthunes/pokemon';

const ash = new Trainer('Ash', team);

// Bag (item inventory)
ash.addItem('potion', 5);
ash.addItem('ultra-ball', 10);
ash.hasItem('potion');       // true
ash.getItemCount('potion');  // 5
ash.removeItem('potion', 2); // use 2
ash.bagContents;             // [{ name, quantity }]

// Money
ash.earn(5000);
ash.spend(3000);  // returns true if affordable

// Badges
ash.earnBadge('Boulder Badge');
ash.badges;  // ['Boulder Badge']
```

### Battle System

Full turn-based battle engine with AI, weather, entry hazards, stat stages, and items.

```ts
import { Battle } from '@objectifthunes/pokemon';

const battle = new Battle({
  player: { name: 'Ash', team: playerTeam },
  opponent: { name: 'Gary', team: opponentTeam },
  options: { weather: 'rain' },
});

// Select action and execute
battle.selectMove(0);       // use move at index 0
battle.selectSwitch(2);     // switch to Pokemon at index 2
battle.useItem('potion');   // use item on active Pokemon
battle.throwBall('ultra-ball'); // throw a Pokeball (wild battles)
battle.executeTurn();

// Read state
battle.state;               // full BattleState
battle.log;                 // BattleLogEntry[]
battle.isOver;              // boolean
battle.winner;              // 'player' | 'opponent' | null

// Wild battles
const wild = new Battle({
  player: { name: 'Ash', team: playerTeam },
  opponent: { name: 'Wild', team: wildTeam },
  options: { isWild: true },
});
wild.throwBall('ultra-ball');
wild.executeTurn();
```

### Capture Mechanics

Gen V capture formula with 24 Pokeball types.

```ts
import { attemptCapture, getCatchProbability, getBallModifier } from '@objectifthunes/pokemon';

// Get catch probability as a percentage
const chance = getCatchProbability(wildPokemon, 'ultra-ball', {
  isNight: true,
  turnCount: 1,
});

// Simulate a capture attempt
const result = attemptCapture(wildPokemon, 'ultra-ball');
// { caught: boolean, shakes: 0-3, critical_capture: boolean }

// Ball modifier lookup
getBallModifier('dusk-ball', target, { isNight: true }); // 3.5x
getBallModifier('net-ball', target);   // 3.5x for water/bug types
getBallModifier('master-ball', target); // 255x (guaranteed catch)
```

**Supported Pokeballs:** poke-ball, great-ball, ultra-ball, master-ball, net-ball, dive-ball, nest-ball, repeat-ball, timer-ball, luxury-ball, premier-ball, dusk-ball, heal-ball, quick-ball, fast-ball, level-ball, lure-ball, heavy-ball, love-ball, friend-ball, moon-ball, sport-ball, dream-ball, safari-ball

### Battle Items

```ts
import { useBattleItem } from '@objectifthunes/pokemon';

// Healing
useBattleItem('potion', target);        // +20 HP
useBattleItem('super-potion', target);  // +60 HP
useBattleItem('hyper-potion', target);  // +120 HP
useBattleItem('max-potion', target);    // full HP
useBattleItem('full-restore', target);  // full HP + cure status

// Status cures
useBattleItem('antidote', target);      // cure poison
useBattleItem('paralyze-heal', target); // cure paralysis
useBattleItem('full-heal', target);     // cure any status

// Revives
useBattleItem('revive', target);        // revive at 50% HP
useBattleItem('max-revive', target);    // revive at 100% HP

// Stat boosts (Gen 5+: +2 stages)
useBattleItem('x-attack', target);
useBattleItem('x-defense', target);
useBattleItem('x-sp-atk', target);
useBattleItem('x-sp-def', target);
useBattleItem('x-speed', target);

// PP restoration
useBattleItem('ether', target);       // +10 PP to first depleted move
useBattleItem('max-ether', target);   // full PP to first depleted move
useBattleItem('elixir', target);      // +10 PP to all moves
useBattleItem('max-elixir', target);  // full PP to all moves
```

### Evolution

```ts
import {
  getAvailableEvolutions, getEvolutionLine, isFinalEvolution, isBabyPokemon,
  getEvolutionChainForSpecies,
} from '@objectifthunes/pokemon';

// Check what a Pokemon can evolve into
const targets = getAvailableEvolutions('eevee', { level: 25 });
// ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon']

// Trace evolution lines
getEvolutionLine('charizard');  // ['charmander', 'charmeleon', 'charizard']
isFinalEvolution('charizard'); // true
isBabyPokemon('pichu');        // true

// Full chain data
const chain = getEvolutionChainForSpecies('eevee');
// { species: 'eevee', evolves_to: [{ species: 'vaporeon', ... }, ...] }
```

### Experience & Leveling

```ts
import {
  calculateExperienceGain, getLevelForExperience,
  getExperienceProgress, checkLevelUp,
} from '@objectifthunes/pokemon';

// XP from battle
const xp = calculateExperienceGain({
  defeatedPokemon: getPokemon('starly'),
  defeatedLevel: 15,
  isTrainerBattle: true,
  hasLuckyEgg: false,
});

// Level from total XP
getLevelForExperience(50000, 'medium-slow'); // level number

// Progress bar data
getExperienceProgress(3500, 'medium');
// { current: 3500, needed: 1000, progress: 0.75 }
```

### Animated Sprites & Cries

All 649 Pokemon have animated GIF sprites (front, back, shiny, back-shiny) from Black & White, plus vintage OGG cries.

```ts
import { setAssetBasePath, getSprite, getItemSprite, getCryPath } from '@objectifthunes/pokemon';

// Configure asset path (once at app startup)
setAssetBasePath('/node_modules/@objectifthunes/pokemon/dist/assets/');

// Pokemon sprites (animated GIFs)
getSprite(25);               // Pikachu front
getSprite(25, 'back');       // Pikachu back
getSprite(25, 'front-shiny'); // Pikachu shiny front
getSprite(25, 'back-shiny'); // Pikachu shiny back

// Item sprites (PNGs)
getItemSprite('master-ball');
getItemSprite('potion');

// Vintage cries (OGG)
getCryPath(25);  // Pikachu cry
```

### Utilities

```ts
import {
  formatName, toSlug, formatStatName, formatHeight, formatWeight,
  formatPokedexNumber, getTypeColor, getTypeTextColor,
  fuzzyMatch, fuzzyScore, parseGeneration, formatGeneration, getGenerationRange,
} from '@objectifthunes/pokemon';

formatName('thunder-punch');       // "Thunder Punch"
toSlug('Thunder Punch');           // "thunder-punch"
formatStatName('special-attack');  // "Sp. Atk"
formatHeight(17);                  // "1.7 m"
formatWeight(905);                 // "90.5 kg"
formatPokedexNumber(25);           // "#025"

getTypeColor('fire');              // "#EE8130"
getTypeTextColor('dark');          // "#FFFFFF"

fuzzyMatch('pikc', 'pikachu');     // true (typo-tolerant)
fuzzyScore('pika', 'pikachu');     // 16 (relevance score)

parseGeneration('generation-iii'); // 3
formatGeneration(3);               // "Generation III"
getGenerationRange(1);             // { start: 1, end: 151 }
```

### Functional Engine (Low-Level)

Use the functional API directly for full control over the battle state machine.

```ts
import { createBattleState, createBattlePokemon, executeTurn, getAIAction } from '@objectifthunes/pokemon';

// Build state manually
const state = createBattleState(playerSide, opponentSide, { weather: 'rain' });

// AI picks a move
const aiAction = getAIAction(state, 'medium'); // 'easy' | 'medium' | 'hard'

// Execute a full turn
const nextState = executeTurn(state, playerAction, opponentAction);
```

## Subpath Imports

Import only what you need for smaller bundles:

```ts
import { getPokemon } from '@objectifthunes/pokemon/data';
import { calculateDamage } from '@objectifthunes/pokemon/engine';
import { getSprite } from '@objectifthunes/pokemon/assets';
import { PokemonInstance } from '@objectifthunes/pokemon/core';
import { formatName } from '@objectifthunes/pokemon/utils';
```

## What's Included

| Category | Count | Details |
|----------|-------|---------|
| Pokemon | 649 | Gen 1–5 with stats, types, abilities, moves |
| Moves | 577 | Power, accuracy, PP, effects, meta |
| Abilities | 224 | Name, description, generation |
| Items | 954 | Cost, category, effect description |
| Berries | 64 | Firmness, natural gift data, flavors |
| Types | 19 | Full damage relations matrix |
| Natures | 25 | Stat modifiers |
| Species | 649 | Genus, capture rate, growth rate, egg groups |
| Evolution Chains | 288 | Full evolution trees with trigger details |
| Sprites | ~2,600 | Animated GIFs (front, back, shiny, back-shiny) |
| Item Sprites | 900+ | PNG sprites for items |
| Cries | 649 | Vintage OGG sound files |

## Tech Stack

- **Pure TypeScript** — full type safety, no `any`
- **Zero runtime dependencies**
- **ESM + CJS** dual output via tsup
- **Tree-shakeable** — import only what you use
- **Framework agnostic** — works with React, Vue, Svelte, vanilla JS, Node, or anything else

## Development

```bash
pnpm install
pnpm build:data       # generate data files from PokeAPI source
pnpm build:sprites    # build sprite index + copy assets
pnpm build            # full build (data + sprites + lib + assets)
pnpm test             # run tests
pnpm typecheck        # type-check without emitting
```

## License

MIT
