class Starfield {
	constructor(numberOfStars) {
		this.numberOfStars = numberOfStars;
		this.stars = this.createStars(numberOfStars);
		this.width = 400;
		this.height = 400;
	}
	
	createStars(numberOfStars) {
		let starfield = [];
		for (let i = 0; i < numberOfStars; i++) {
			starfield.push(new Star(random(0,401), random(0,401)));
		}
		return starfield;
	}
	
	moveStarsAway(x, y) {
		let newStars = [];
		for (let star of this.stars) {
			star.moveAway(x, y);
			if (this.isStarInView(star)) {
				newStars.push(star);
			}
		}
		let starsOutOfBounds = this.numberOfStars - newStars.length;
		for (let i = 0; i < starsOutOfBounds; i++) {
			newStars.push(new Star(random(0, 50) + 175, random(0, 50) + 175));
		}
		this.stars = newStars;
	}
	
	drawStars() {
		stroke('white');
		strokeWeight(2);
		for (let star of this.stars) {
			point(star.location);
		}
	}
	
	isStarInView(s) {
		let starX = s.location.x;
		let starY = s.location.y;
		
		return !(starX < 0 || starX > this.width || starY < 0 || starY > this.height);
	}
}