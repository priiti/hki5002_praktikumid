class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.context = undefined;
	}
	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}
		this.context.fillStyle = 'black';
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.fill();
	}
}