import { createGenerativeSketch, random } from '/src/shared/sketch.js';

createGenerativeSketch({
  back: 'Generative Art with JavaScript and SVG',

  // Parameters the user can tweak in the controls panel.
  params: {
    hue:        { value: random(0, 360),    min: 0,    max: 360 },
    rotation:   { value: random(-180, 180), min: -180, max: 180 },
    iterations: { value: random(10, 100),   min: 10,   max: 100 },
  },

  draw(svg, p) {
    // Run a loop a random number of times to create our ellipses.
    for (let i = 0; i < p.iterations; i++) {
      // Set the center point, the x and y radii of our ellipse and its rotation.
      let center = 500;
      let radiusX = 100 + (i * 3);
      let radiusY = 300 + (i * 2);
      let rotation = p.rotation + (i * 2);

      // If our random hue is less than 180, increment it. Otherwise decrement it.
      let hue;
      if (p.hue < 180) {
        hue = p.hue + (i * 3);
      } else {
        hue = p.hue - (i * 3);
      }

      // Create our ellipse.
      let ellipse = svg.create('ellipse');
      ellipse.set({
        cx: center,
        cy: center,
        rx: radiusX,
        ry: radiusY,
        fill: 'none',
        stroke: `hsl(${hue} 80% 80% / 0.6)`,
        transform: `rotate(${rotation} ${center} ${center})`,
      });
    }
  },
});
