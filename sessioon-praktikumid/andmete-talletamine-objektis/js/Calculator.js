class Calculator {
	constructor(a, b, input) {
		document.body.appendChild(DomElements.createDivElement('warehouse'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createParagraphElement('info', 'Andmete talletamine objektis'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createButtonElement(a, 'Low'));
		document.querySelector(`#warehouse`).appendChild(DomElements.createInputElement(input, 0));
		document.querySelector(`#warehouse`).appendChild(DomElements.createButtonElement(b, 'High'));
		document.querySelector(`#${a}`).addEventListener('click', this.lowerInventoryValue.bind(this));
		document.querySelector(`#${b}`).addEventListener('click', this.raiseInventoryValue.bind(this));

		this._inventory = document.querySelector(`#${input}`);
	}
	raiseInventoryValue() {
		this._inventory.value++;
	}
	lowerInventoryValue() {
		this._inventory.value--;
	}
}