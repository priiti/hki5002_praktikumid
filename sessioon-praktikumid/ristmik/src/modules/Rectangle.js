// Rectangle takes x and y as a center coordinates of a rectangle
class Rectangle {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}

		this.context.fillStyle = this.color;
		this.context.fillRect(this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
		this.context.fill();
	}
}

export default Rectangle;