import axios from 'axios';

class Services {
	static getJokeFromTheServer() {
		let received = axios({ url: 'http://localhost:3004/api/joke' });
		return received;
	}
}

export default Services;