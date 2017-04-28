class Canvas {
	constructor(width, height, destination) {
		this.items = [];
<<<<<<< HEAD
=======
		this.destination = destination;
>>>>>>> fd5fc04d267d650ef267c47a0b1ba1dca43d713a
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
<<<<<<< HEAD
		canvas.setAttribute('class', 'board');
		document.querySelector(`#${destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
=======
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
>>>>>>> fd5fc04d267d650ef267c47a0b1ba1dca43d713a
}