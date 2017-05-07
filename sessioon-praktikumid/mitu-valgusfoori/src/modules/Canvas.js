class Canvas {
	constructor(width, height, id, destination) {
		this.items = [];
		this.id = id;
		this.destination = destination;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
		canvas.id = id;
		document.querySelector(`#${this.destination}`)
			.appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
	addDrawableItems(object) {
		this.items.push(object);
	}
	render() {
		this.items.forEach((item) => {
			item.draw(this.context);
		});
	}
}

export default Canvas;