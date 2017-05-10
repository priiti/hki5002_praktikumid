class Handler {
	constructor() {
		this.items = [];
	}
	addNewObject(object) {
		this.items.push(object);
	}
	showObjectStatus() {
		if (this.items.length === 0) {
			return null;
		}
		return new Promise((resolve, reject) => {
			resolve(this.items);
			reject('Error happened!');
		});
	}
	changeObjectStatus() {
		return new Promise((resolve, reject) => {
			resolve(this.items);
			reject('Error happened!');
		});
	}
}

export default Handler;