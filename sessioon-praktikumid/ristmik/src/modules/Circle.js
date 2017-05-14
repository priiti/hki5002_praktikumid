class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}


	}
}