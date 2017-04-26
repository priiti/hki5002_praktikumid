class Calculator {
	constructor(destination) {
		document.body.appendChild(DomElements.createDivElement('warehouse'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createParagraphElement('info', 'Andmete talletamine objektis'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createButtonElement(`left_btn_${destination}`, 'Low'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createInputElement(`${destination}_input`, 0));
		document.querySelector(`#warehouse`).appendChild(DomElements.createSelectElement(`${destination}_select`));
		document.querySelector(`#warehouse`).appendChild(DomElements.createButtonElement(`right_btn_${destination}`, 'High'));
		document.querySelector(`#left_btn_${destination}`).addEventListener('click', this.lowerInventoryValue.bind(this));
		document.querySelector(`#right_btn_${destination}`).addEventListener('click', this.raiseInventoryValue.bind(this));

		this._inventory = document.querySelector(`#${destination}_input`);
		this.selection = `${destination}_select`;
	}
	raiseInventoryValue() {
		const newValue = parseInt(document.querySelector(`#${this.selection}`).value) + parseInt(this._inventory.value);
		this._inventory.value = newValue;
	}
	lowerInventoryValue() {
		const newValue = parseInt(this._inventory.value) - parseInt(document.querySelector(`#${this.selection}`).value);
		this._inventory.value = newValue;
	}
}