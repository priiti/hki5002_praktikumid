class Calculator {
	constructor(destination) {
		document.querySelector(`#root`).appendChild(DomElements.createParagraphElement('info', 'Andmete talletamine objektis'));
		document.querySelector(`#root`).appendChild(DomElements.createButtonElement(`left_btn_${destination}`, 'Low'));
		document.querySelector(`#root`).appendChild(DomElements.createInputElement(`${destination}_input`, 0));
		document.querySelector(`#root`).appendChild(DomElements.createSelectElement(`${destination}_select`));
		document.querySelector(`#root`).appendChild(DomElements.createButtonElement(`right_btn_${destination}`, 'High'));
		document.querySelector(`#root`).appendChild(DomElements.createButtonElement(`reset_btn_${destination}`, 'Reset'));
		document.querySelector(`#left_btn_${destination}`)
			.addEventListener('click', this.lowerInventoryValue.bind(this));
		document.querySelector(`#right_btn_${destination}`)
			.addEventListener('click', this.raiseInventoryValue.bind(this));
		document.querySelector(`#reset_btn_${destination}`)
			.addEventListener('click', this.resetInventoryValue.bind(this));
		this._inventory = document.querySelector(`#${destination}_input`);
		this.selection = `${destination}_select`;
		this.canvasBoard = new Canvas(300, 50, 'root');
		this.canvasBoard.addDrawableItems(new Rectangle(this.canvasBoard.context.canvas.height));
	}

	raiseInventoryValue() {
		const newValue = parseInt(document.querySelector(`#${this.selection}`).value) + parseInt(this._inventory.value);
		this._inventory.value = newValue <= 300 ? newValue : 300;
		this.canvasBoard.items[0].width = newValue;
		this.canvasBoard.render();
	}

	lowerInventoryValue() {
		const newValue = parseInt(this._inventory.value) - parseInt(document.querySelector(`#${this.selection}`).value);
		this._inventory.value = newValue >= 0 ? newValue : 0;
		this.canvasBoard.items[0].width = newValue;
		this.canvasBoard.render();
	}
	
	resetInventoryValue() {
		this._inventory.value = 0;
		this.canvasBoard.items[0].width = 0;
		this.canvasBoard.render();
	}
}