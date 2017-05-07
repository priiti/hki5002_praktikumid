import Element from './DOMElements';
import Canvas from './Canvas';
import Circle from './Circle';
import Rectangle from './Rectangle';

class Application {
	constructor(width, height, id) {
		document.querySelector('#app').appendChild(Element.createDivElement(`${id}-section`));
		this.board = new Canvas(width, height, id, `${id}-section`);
	}
}

export default Application;