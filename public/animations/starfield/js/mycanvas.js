let starfield;

function setup() {
	let myCanvas = createCanvas(400, 400);
	myCanvas.parent('p5canvas');
	
	starfield = new Starfield(150);
}

function draw() {
	clear();
	starfield.moveStarsAway(200, 200);
	starfield.drawStars();
}