class Rectangle {
	constructor(height) {
		this._width = 0;
		this.height = height;
		this.context = undefined;
	}
	set width(value) {
		this._width = value;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}
		this.context.fillStyle = 'pink';
		this.context.fillRect(0, 0, this._width, this.height);
		this.context.fill();
	}
}

export default Rectangle;