import { createGenerativeSketch, random } from '/src/shared/sketch.js';

createGenerativeSketch({
  back: 'Generative Art with JavaScript and SVG',

  // Parameters the user can tweak in the controls panel.
  params: {
    rows:    { value: random(12, 30),  min: 12, max: 30  },
    columns: { value: random(12, 30),  min: 12, max: 30  }
  },

  // Draw a grid of rectangles with random widths and heights. The color is a hue that's created
  // from the volme ratio.
  draw(svg, p, { width, height }) {
    const cellW = width / p.columns;
    const cellH = height / p.rows;

    for (let i = 0; i < p.columns; i++) {
      for (let j = 0; j < p.rows; j++) {
        let rCellW = random(5, cellW);
        let rCellH = random(5, cellH);
        let hue = (rCellW * rCellH)/(cellW*cellH) * 360;
        svg.create('rect').set({
          x: (i * cellW) + ((cellW - rCellW) / 2),
          y: (j * cellH) + ((cellH - rCellH) / 2),
          width: rCellW,
          height: rCellH,
          fill: 'none',
          stroke: `hsl(${hue} 80% 80% / 0.6)`,
        });
      }
    }
  },
});
