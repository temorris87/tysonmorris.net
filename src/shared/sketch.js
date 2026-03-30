import '/src/shared/page.js';
import { SvJs } from 'svjs';

const BACK_HREF = '/projects/generative-art-js-svg/';

function setBackLink(back) {
  if (back) {
    document.getElementById('back-link').innerHTML =
      `<a href="${BACK_HREF}" class="back-link">&#8592; ${back}</a>`;
  }
}

function createSvg(viewBoxSize) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const svg = new SvJs();
  svg.addTo(container);
  svg.set({ viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: '100%', height: '100%' });
  return svg;
}

function buildControlsPanel(params, back) {
  const panel = document.createElement('div');
  panel.className = 'controls-panel';

  if (back) {
    const backEl = document.createElement('a');
    backEl.href = BACK_HREF;
    backEl.className = 'back-link';
    backEl.innerHTML = `&#8592; ${back}`;
    panel.appendChild(backEl);
  }

  for (const [key, cfg] of Object.entries(params)) {
    const label = cfg.label ?? key.charAt(0).toUpperCase() + key.slice(1);
    const step = cfg.step ?? 1;

    const control = document.createElement('div');
    control.className = 'control';
    control.innerHTML = `
      <div class="control__header">
        <span class="control__label">${label}</span>
        <span class="control__value">${cfg.value}</span>
      </div>
      <input class="control__slider" type="range"
        min="${cfg.min}" max="${cfg.max}" step="${step}" value="${cfg.value}"
        data-param="${key}">
    `;
    panel.appendChild(control);
  }

  const btn = document.createElement('button');
  btn.className = 'controls-panel__regenerate btn';
  btn.textContent = 'Regenerate';
  panel.appendChild(btn);

  return panel;
}

/**
 * Sets up an SvJs canvas sized to fill the viewport between header and footer.
 * @param {object} options
 * @param {string} options.back - Back link label
 * @param {number} [options.viewBoxSize=1000] - ViewBox width and height
 * @returns {{ svg: SvJs, svgSize: number }}
 */
export function createSketch({ back, viewBoxSize = 1000 } = {}) {
  setBackLink(back);

  const headerHeight = document.getElementById('site-header').offsetHeight;
  const availableHeight = window.innerHeight - headerHeight - 80;
  const svgSize = window.innerWidth > window.innerHeight ? availableHeight : window.innerWidth;

  const svg = new SvJs();
  svg.addTo(document.getElementById('container'));
  svg.set({ viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: svgSize, height: svgSize });

  return { svg, svgSize };
}

/**
 * Sets up an SvJs canvas with a controls panel for tweaking and regenerating parameters.
 * @param {object} options
 * @param {string} options.back - Back link label
 * @param {number} [options.viewBoxSize=1000] - ViewBox width and height
 * @param {object} options.params - Parameter descriptors: { key: { value, min, max, step?, label? } }
 * @param {function} options.draw - Drawing callback: (svg, params) => void
 */
export function createGenerativeSketch({ back, viewBoxSize = 1000, params = {}, draw } = {}) {

  // Move canvas-wrap out of its .container and directly into .canvas-section,
  // then append the controls panel so it fills the far right of the section.
  const canvasWrap = document.querySelector('.canvas-wrap');
  const canvasContainer = canvasWrap.parentElement;
  const canvasSection = canvasWrap.closest('.canvas-section');

  canvasSection.classList.add('sketch-layout');
  canvasSection.appendChild(canvasWrap);
  canvasContainer.remove();
  canvasSection.appendChild(buildControlsPanel(params, back));

  // Extract current values into a plain object passed to draw
  const values = {};
  for (const [key, cfg] of Object.entries(params)) {
    values[key] = cfg.value;
  }

  function redraw() {
    const svg = createSvg(viewBoxSize);
    draw(svg, { ...values });
  }

  // Update value and redraw live as sliders move
  canvasSection.querySelectorAll('.control__slider').forEach(input => {
    input.addEventListener('input', e => {
      const key = e.target.dataset.param;
      values[key] = Number(e.target.value);
      e.target.closest('.control').querySelector('.control__value').textContent = e.target.value;
      redraw();
    });
  });

  // Re-randomize all params within their min/max and redraw
  canvasSection.querySelector('.controls-panel__regenerate').addEventListener('click', () => {
    for (const [key, cfg] of Object.entries(params)) {
      const isInteger = (cfg.step ?? 1) === 1;
      const newVal = random(cfg.min, cfg.max, isInteger);
      values[key] = newVal;
      const input = canvasSection.querySelector(`.control__slider[data-param="${key}"]`);
      input.value = newVal;
      input.closest('.control').querySelector('.control__value').textContent = newVal;
    }
    redraw();
  });

  redraw();
}

/**
 * Returns a random number between min and max.
 * @param {number} min
 * @param {number} max
 * @param {boolean} [integer=true]
 */
export function random(min, max, integer = true) {
  const r = Math.random() * (max - min) + min;
  return integer ? Math.floor(r) : r;
}
