import '/src/shared/page.js';
import { SvJs } from 'svjs';

const BACK_HREF = '/projects/generative-art-js-svg/';

/**
 * Sets up an SvJs canvas sized to fill the viewport between header and footer.
 * @param {object} options
 * @param {string} options.back - Back link label
 * @param {number} [options.viewBoxSize=1000] - ViewBox width and height
 * @returns {{ svg: SvJs, svgSize: number }}
 */
export function createSketch({ back, viewBoxSize = 1000 } = {}) {
  if (back) {
    document.getElementById('back-link').innerHTML =
      `<a href="${BACK_HREF}" class="back-link">&#8592; ${back}</a>`;
  }

  const headerHeight = document.getElementById('site-header').offsetHeight;
  const footerHeight = document.getElementById('site-footer').offsetHeight;
  const availableHeight = window.innerHeight - headerHeight - footerHeight - 80;
  const svgSize = window.innerWidth > window.innerHeight ? availableHeight : window.innerWidth;

  const svg = new SvJs();
  svg.addTo(document.getElementById('container'));
  svg.set({ viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`, width: svgSize, height: svgSize });

  return { svg, svgSize };
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
