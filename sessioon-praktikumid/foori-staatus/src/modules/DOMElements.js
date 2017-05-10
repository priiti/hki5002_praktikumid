class DOMElements {
	constructor() {}
	static createDivElement(id) {
		const div = document.createElement('div');
		div.id = id;
		return div;
	}
}

export default DOMElements;