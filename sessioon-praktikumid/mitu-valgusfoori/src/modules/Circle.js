class Circle {
	constructor(x, y, radius, color) {
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.color = color;
		this.context = undefined;
	}

	set color(color) {
		this.color = color;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}
		this.context.beginPath();
		this.context.fillStyle = this.color;
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fill();
	}
}