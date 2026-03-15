import './styles.css';
import { setAssetBasePath } from 'pokemon.js';
import { renderHome } from './pages/home';
import { renderPokedex } from './pages/pokedex';
import { renderTypeChart } from './pages/types';
import { renderMoves } from './pages/moves';
import { renderItems } from './pages/items';
import { renderTeamBuilder } from './pages/team-builder';
import { renderDamageCalc } from './pages/damage-calc';
import { renderBattle } from './pages/battle';

setAssetBasePath('/');

type PageKey = 'home' | 'pokedex' | 'types' | 'moves' | 'items' | 'team-builder' | 'damage-calc' | 'battle';

const PAGES: Record<PageKey, { label: string; section: 'docs' | 'demos'; render: (container: HTMLElement) => void }> = {
  home:           { label: 'Getting Started', section: 'docs',  render: renderHome },
  pokedex:        { label: 'Pokedex',         section: 'demos', render: renderPokedex },
  types:          { label: 'Type Chart',      section: 'demos', render: renderTypeChart },
  moves:          { label: 'Move Browser',    section: 'demos', render: renderMoves },
  items:          { label: 'Item Browser',    section: 'demos', render: renderItems },
  'team-builder': { label: 'Team Builder',    section: 'demos', render: renderTeamBuilder },
  'damage-calc':  { label: 'Damage Calc',     section: 'demos', render: renderDamageCalc },
  battle:         { label: 'Battle Demo',     section: 'demos', render: renderBattle },
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

  const spacer = document.createElement('div');
  spacer.style.marginTop = '16px';
  sidebar.appendChild(spacer);

  addSection('Live Demos');
  for (const [key, val] of demoPages) addLink(key, val.label);

  const stats = document.createElement('div');
  stats.className = 'sidebar-stats';
  stats.innerHTML = '649 Pokemon &middot; 577 Moves<br>224 Abilities &middot; 954 Items<br>All sprites &amp; sounds bundled';
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
