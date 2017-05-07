class DomElements {
	static createDivElement(id) {
		const div = document.createElement('div');
		div.setAttribute('id', id);
		return div;
	}

	static createButtonElement(id, text) {
		const button = document.createElement('button');
		button.setAttribute('id', id);
		button.textContent = text;
		return button;
	}
}

export default DomElements;