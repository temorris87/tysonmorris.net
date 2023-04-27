function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent('p5canvas');
}

function draw() {
  if (mouseIsPressed) {
	fill(0);
  } else {
	fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}