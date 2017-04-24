class Textbox {
	constructor(id) {
		this.element = document.createElement('input');
		this.element.setAttribute('type', 'text');
		this.element.setAttribute('id', id);
		this.element.setAttribute('placeholder', `Kast: ${id}, sisesta number`);

		document.querySelector(`#${'textbox_section'}`)
			.appendChild(this.element);
			
		document.querySelector(`#${'textbox_section'}`)
			.appendChild(document.createElement('br'));
	}
}