class Canvas {
	constructor(width, height, destination) {
		this.items = [];
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
		canvas.setAttribute('class', 'board');
		document.querySelector(`#${destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
}