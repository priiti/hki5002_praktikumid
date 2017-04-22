// Canvas class implementation, using it as a module

export default class Canvas {
	constructor(width, height, destination) {
		this.items = [];
		this.width = width;
		this.height = height;
		this.destination = destination;
		let canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.border = '1px solid black';
		document.querySelector(`#${this.destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
	addDrawableItems(object) {
		this.items.push(object);
	}
	render() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
		this.items.forEach((item) => {
			item.draw(this.context);
		});
	}
}