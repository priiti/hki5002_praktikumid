class Rectangle {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.color = color;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}
		this.context.fillStyle = 'pink';
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.fill();
	}
}