class TrafficLight {
	constructor(id, status) {
		this.id = id;
		this._status = status;
	}
	get status() {
		return this._status;
	}
	set status(value) {
		this._status = value;
	}
}

export default TrafficLight;