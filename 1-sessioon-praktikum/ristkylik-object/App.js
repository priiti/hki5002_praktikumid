/*
	Rectangle drawing on canvas using objects
	We define canvas object and add it into DOM
	Canvas has functionality to add drawable items and render them
	Rectangle object is for defining it and it has functionality for drawing
*/

document.querySelector('#drawRectangleBtn')
	.addEventListener('click', drawRectangle);

class Canvas {
	constructor(width, height, destination) {
		this.items = [];
		this.width = width;
		this.height = height;
		this.destination = destination;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
		document.querySelector(`#${this.destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}

	addDrawableItem(object) {
		this.items.push(object);
	}

	render() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
		this.items.forEach((item) => {
			item.draw(this.context);
		});
	}
}

class Rectangle {
	constructor(x, y, width, height, color) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.context = undefined;
	}

	// Rectangle drawing on canvas
	draw(context) {
		this.context = context;
		if (this.context === null) {
			return false;
		}
		this.context.fillStyle = this.color;
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.fillStyle = 'white';
		this.context.fillText(this.width, (this.x + (this.width / 2)) - 5, this.y + 15);
		this.context.fillText(this.height, this.x + 5, this.y + (this.height / 2));
		this.context.stroke();
	}
}

const myCanvas = new Canvas(400, 400, 'board');

function drawRectangle() {
	const rectangleX = parseInt(document.querySelector('#leftbox').value);
	const rectangleY = parseInt(document.querySelector('#upperbox').value);
	const rectangleWidth = parseInt(document.querySelector('#widthbox').value);
	const rectangleHeight = parseInt(document.querySelector('#heightbox').value);
	const color = document.querySelector('#selectedColor').value;
	let myRectangle = 
		new Rectangle(rectangleX, rectangleY, rectangleWidth, rectangleHeight, color);

	myCanvas.addDrawableItem(myRectangle);
	myCanvas.render();
}