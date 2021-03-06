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
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.stroke();
	}
}

export default Rectangle;