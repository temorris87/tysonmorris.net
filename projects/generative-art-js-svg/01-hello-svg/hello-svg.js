import '/src/shared/page.js';
import { SvJs } from 'svjs';

const svg = new SvJs();
svg.addTo(document.getElementById('container'));
svg.set({ viewBox: '0 0 1800 1200', width: '100%', height: '100%' });

// Background
const bg = svg.create('rect');
bg.set({ x: 0, y: 0, width: 1800, height: 1200, fill: '#1a1a2e' });

// Centered square
const square = svg.create('rect');
square.set({ x: 650, y: 350, width: 500, height: 500, fill: 'none', stroke: '#9FA8DA', 'stroke-width': 4 });
