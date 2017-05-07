import Element from './DOMElements';
import Trafficlight from './Trafficlight';
import Handler from './Handler';

class Application {
	constructor() {
		this.handler = new Handler();
		document.querySelector('#change-btn').addEventListener('click', this.setStatus.bind(this));
	}
	addNewTrafficlight(id, status) {
		this.handler.items.push(new Trafficlight(id, status));
		document.querySelector('#root').appendChild(Element.createDivElement(`${id}-light`));
		this.getStatus();
	}
	getStatus() {
		const status = this.handler.showObjectStatus();
		status
			.then(data => {
				data.forEach((item) => {
					document.querySelector(`#${item.id}-light`).innerHTML = 
						`Foori staatus on: ${item._status}`;
				});
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
	setStatus() {
		const statusPromise = this.handler.changeObjectStatus();
		statusPromise
			.then((data) => {
				data[0].status = 'kollane';
				data[1].status = 'punane';
			})
			.then(() => {
				this.getStatus();
			})
			.catch((error) => {
				throw new Error(error);
			});
	}
}

export default Application;