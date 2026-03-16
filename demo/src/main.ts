import './styles.css';
import { setAssetBasePath } from '@objectifthunes/pokemon';
import { renderHome } from './pages/home';
import { renderPokedex } from './pages/pokedex';
import { renderTypeChart } from './pages/types';
import { renderMoves } from './pages/moves';
import { renderItems } from './pages/items';
import { renderAbilities } from './pages/abilities';
import { renderEvolution } from './pages/evolution';
import { renderExperience } from './pages/experience';
import { renderCapture } from './pages/capture';
import { renderTeamBuilder } from './pages/team-builder';
import { renderDamageCalc } from './pages/damage-calc';
import { renderBattle } from './pages/battle';
import { renderDoubles } from './pages/doubles';
import { renderSequencer } from './pages/sequencer';

setAssetBasePath('/');

type PageKey =
  | 'home'
  | 'pokedex' | 'types' | 'moves' | 'items' | 'abilities'
  | 'evolution' | 'experience' | 'capture'
  | 'team-builder' | 'damage-calc' | 'battle' | 'doubles' | 'sequencer';

const PAGES: Record<PageKey, { label: string; section: 'docs' | 'data' | 'demos'; render: (container: HTMLElement) => void }> = {
  home:           { label: 'Getting Started', section: 'docs',  render: renderHome },
  pokedex:        { label: 'Pokedex',         section: 'data',  render: renderPokedex },
  types:          { label: 'Type Chart',      section: 'data',  render: renderTypeChart },
  moves:          { label: 'Move Browser',    section: 'data',  render: renderMoves },
  items:          { label: 'Item Browser',    section: 'data',  render: renderItems },
  abilities:      { label: 'Ability Browser', section: 'data',  render: renderAbilities },
  evolution:      { label: 'Evolution',       section: 'data',  render: renderEvolution },
  experience:     { label: 'Experience & XP', section: 'data',  render: renderExperience },
  capture:        { label: 'Capture Calc',    section: 'demos', render: renderCapture },
  'team-builder': { label: 'Team Builder',    section: 'demos', render: renderTeamBuilder },
  'damage-calc':  { label: 'Damage Calc',     section: 'demos', render: renderDamageCalc },
  battle:         { label: 'Battle Demo',     section: 'demos', render: renderBattle },
  doubles:        { label: 'Doubles Battle',  section: 'demos', render: renderDoubles },
  sequencer:      { label: 'Sequencer',       section: 'demos', render: renderSequencer },
};

let currentPage: PageKey = 'home';

function navigate(page: PageKey) {
  currentPage = page;
  render();
}

function render() {
  const root = document.getElementById('root')!;
  root.innerHTML = '';

  const layout = document.createElement('div');
  layout.className = 'app-layout';

  // ─── Sidebar ───
  const sidebar = document.createElement('nav');
  sidebar.className = 'sidebar';

  const logo = document.createElement('div');
  logo.className = 'sidebar-logo';
  logo.innerHTML = `<h1>pokemon.js</h1><p>The complete Pokemon game engine</p>`;
  sidebar.appendChild(logo);

  const docPages = Object.entries(PAGES).filter(([, v]) => v.section === 'docs');
  const dataPages = Object.entries(PAGES).filter(([, v]) => v.section === 'data');
  const demoPages = Object.entries(PAGES).filter(([, v]) => v.section === 'demos');

  const addSection = (label: string) => {
    const sec = document.createElement('div');
    sec.className = 'sidebar-section';
    sec.textContent = label;
    sidebar.appendChild(sec);
  };

  const addLink = (key: string, label: string) => {
    const a = document.createElement('a');
    a.className = `sidebar-link ${currentPage === key ? 'active' : ''}`;
    a.textContent = label;
    a.href = '#';
    a.onclick = (e) => { e.preventDefault(); navigate(key as PageKey); };
    sidebar.appendChild(a);
  };

  addSection('Documentation');
  for (const [key, val] of docPages) addLink(key, val.label);

  let spacer = document.createElement('div');
  spacer.style.marginTop = '16px';
  sidebar.appendChild(spacer);

  addSection('Data Browsers');
  for (const [key, val] of dataPages) addLink(key, val.label);

  spacer = document.createElement('div');
  spacer.style.marginTop = '16px';
  sidebar.appendChild(spacer);

  addSection('Interactive Demos');
  for (const [key, val] of demoPages) addLink(key, val.label);

  const stats = document.createElement('div');
  stats.className = 'sidebar-stats';
  stats.innerHTML = '649 Pokemon &middot; 577 Moves<br>224 Abilities &middot; 678 Items<br>All sprites &amp; sounds bundled';
  sidebar.appendChild(stats);

  layout.appendChild(sidebar);

  // ─── Main ───
  const main = document.createElement('main');
  main.className = 'main-content';
  PAGES[currentPage].render(main);
  layout.appendChild(main);

  root.appendChild(layout);
}

render();
