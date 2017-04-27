window.onload = () => {
	const app = new Calculator();
	app.createBox();
}

class App {
	constructor() {
		this.boxes = [];
		this._count = 1;
		this.applicationSetup();
	}
	applicationSetup() {
		document.querySelector('body')
			.appendChild(Elements.createHeading('h1', 'Aritmeetiline keskmine'));
		document.querySelector('body')
			.appendChild(Elements.createDivElement('textbox_section'));
		document.querySelector('body')
			.appendChild(Elements.createButton('add_textbox_btn', this, 'Lisa uus kast'));
		document.querySelector('body')
			.appendChild(Elements.createButton('calculate_btn', this, 'Arvuta keskmine'));	
		document.querySelector('#add_textbox_btn')
			.addEventListener('click', this.createBox.bind(this));
		document.querySelector('#calculate_btn')
			.addEventListener('click', this.calculate.bind(this));
		document.querySelector('body')
			.appendChild(Elements.createDivElement('answer'));
	}
	createBox() {
		this.addNewBoxes(new Textbox(this._count));
		this._count++;
	}
	addNewBoxes(object) {
		this.boxes.push(object);
	}
}