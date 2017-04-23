export default class Circle {
	constructor(x, y, radius, color, speed) {
		this._xValue = x;
		this._yValue = y;
		this._radius = radius;
		this._color = color;
		this._speed = speed;
	}
	set radius(radius) {
		if (Number.isNaN(radius)) {
			throw new Error(`Kontrolli ringi raadiust!`);
		}
		this._radius = radius;
	}
	set color(color) {
		this._color = color;
	}
	set yValue(value) {
		this._yValue = value;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return;
		}
		this.context.beginPath();
		this.context.fillStyle = this._color;
		this.context.arc(this._xValue, this._yValue, this._radius, 0, 2 * Math.PI);
		this.context.fill();
	}
}