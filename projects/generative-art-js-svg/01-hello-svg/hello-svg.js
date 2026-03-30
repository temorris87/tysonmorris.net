import { createSketch, random } from '/src/shared/sketch.js';

// Create some global variables.
const bgColor = '#121212';

// Create an object to store some of our randomized parameters.
const randomized = {
  hue: random(0, 360),
  rotation: random(-180, 180),
  iterations: random(10, 100),
};

// Create our parent SVG and attach it to the element with id 'container'.
// Set the width and height of the viewBox and the displayed size of the SVG.
const { svg } = createSketch({ back: 'Generative Art with JavaScript and SVG' });

// Create a background layer - a rectangle the full size of our viewBox.
const rect = svg.create('rect');
rect.set({ x: 0, y: 0, width: 1000, height: 1000, fill: bgColor });

// Run a loop a random number of times to create our ellipses.
for (let i = 0; i < randomized.iterations; i++) {
  // Set the center point, the x and y radii of our ellipse and its rotation.
  let center = 500;
  let radiusX = 100 + (i * 3);
  let radiusY = 300 + (i * 2);
  let rotation = randomized.rotation + (i * 2);

  // If our random hue is less than 180, increment it. Otherwise decrement it.
  let hue;
  if (randomized.hue < 180) {
    hue = randomized.hue + (i * 3);
  } else {
    hue = randomized.hue - (i * 3);
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
