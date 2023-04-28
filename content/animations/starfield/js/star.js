class Star {
	constructor(x, y) {
		this.location = createVector(x, y);
	}
	
	moveAway(x, y) {
		let origin = createVector(x, y);
		let difference = this.location.sub(origin);
		this.location = origin.add(difference.mult(1.01));
	}
}