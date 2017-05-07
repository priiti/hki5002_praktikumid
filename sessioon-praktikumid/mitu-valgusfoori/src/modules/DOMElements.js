class DomElement {
	
	static createDivElement(id) {
		const div = document.createElement('div');
		div.setAttribute('id', id);
		return div;
	}
}

export default DomElement;