import Element from './DomElements';
import Canvas from './Canvas';
import Circle from './Circle';
import Rectangle from './Rectangle';

class Application {
	constructor(width, height, id) {
		document.querySelector('#app').appendChild(Element.createDivElement(`${id}-section`));
		this.board = new Canvas(width, height, id, `${id}-section`);
		document.querySelector(`#${id}-section`)
			.appendChild(Element.createButtonElement(`${id}-btn`, 'Muuda'));
		this.lightStatus = 'green';
		document.querySelector(`#${id}-btn`)
			.addEventListener('click', this.changeLight.bind(this));
		this.status = 'green';
	}
	changeLight() {
		if (this.status === 'green') {
			this.status = 'yellow';
			return;
		} else if (this.status === 'yellow') {
			this.status = 'red';
			return;
		} else {
			this.status = 'green';
		}
	}
}

export default Application;