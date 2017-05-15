class Line {
	constructor(x, y, endX, endY, color) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.endX = endX;
		this.endY = endY;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return false;
		}
		this.context.beginPath();
		this.context.strokeStyle = this.color;
		this.context.setLineDash([5, 10]);
		this.context.moveTo(this.x, this.y);
		this.context.lineTo(this.endX, this.endY);
		this.context.lineWidth = 5;
		this.context.stroke();
	}
}

export default Line;