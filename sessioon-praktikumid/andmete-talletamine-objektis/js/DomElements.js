class DomElements {
	constructor() {}

	static createParagraphElement(id, value) {
		const element = document.createElement('p');
		element.setAttribute('id', id);
		element.textContent = value;
		return element;
	}

	static createDivElement(id) {
		const element = document.createElement('div');
		element.setAttribute('id', id);
		return element;
	}

	static createButtonElement(id, text) {
		const element = document.createElement('button');
		element.setAttribute('id', id);
		element.textContent = text;
		return element;
	}

	static createSelectElement(id) {
		const element = document.createElement('select');
		element.setAttribute('id', id)
		for (let i = 0; i < 5; i++) {
			const option = document.createElement('option');
			option.value = (i * 5 === 0) ? 1 : i * 5;
			option.innerHTML = (i * 5 === 0) ? 1 : i * 5;
			element.appendChild(option);
		}
		return element;
	}

	static createInputElement(id, value) {
		const element = document.createElement('input');
		element.setAttribute('id', id);
		element.setAttribute('type', 'text');
		element.setAttribute('disabled', true);
		element.setAttribute('value', value);
		return element;
	}
}