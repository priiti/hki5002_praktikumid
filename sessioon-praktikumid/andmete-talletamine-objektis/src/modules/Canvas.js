class Canvas {
	constructor(width, height, destination) {
		this.items = [];
		this.destination = destination;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
		canvas.setAttribute('class', 'board');
		document.querySelector(`#${destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
		document.querySelector(`#${destination}`).appendChild(canvas);
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

export default Canvas;