class Elements {
	constructor() {}

	static createButton(idValue, object, text) {
		const button = document.createElement('button');
		button.setAttribute('id', idValue);
		button.textContent = text;
		return button;
	}

	static createDivElement(id) {
		const div = document.createElement('div');
		div.setAttribute('id', id);
		return div;
	}

	static createHeading(type, text) {
		const heading = document.createElement(type);
		heading.textContent = text;
		return heading;
	}
}