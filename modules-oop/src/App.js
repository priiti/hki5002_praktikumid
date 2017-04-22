// Importing modules for usage
import Canvas from './Modules/Canvas';
import Rectangle from './Modules/Rectangle'

// Eventlistener for the btn
window.onload = () => {
	document.querySelector('#btn_add_elements')
		.addEventListener('click', () => {
			const amount = document.querySelector('#rect_input').value;
			myApp.createElements(amount);
			myApp.startApplication();
		});
};

// Class application, which uses imported modules to create objects
class App {
	constructor() {
		this.canvas = new Canvas(600, 600, 'board');
		this._amount = 0;
	}

	createElements(value) {
		let size = {
			dimensions: 20
		};
		const a = value;
		for (let i = 0; i < a; i++) {
			let color = '#'+Math.floor(Math.random()*16777215).toString(16);
			let x = Math.floor((Math.random() * 600) + 1);
			let y = Math.floor((Math.random() * 600) + 1);

			const rect = new Rectangle(x, y, size.dimensions, size.dimensions, color);
			this.canvas.addDrawableItems(rect);
		}
	}

	startApplication() {
		this.canvas.render();
	}
}

const myApp = new App();