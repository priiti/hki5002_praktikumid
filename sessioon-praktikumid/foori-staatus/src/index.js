import Application from './modules/Application';
import Header from './modules/Header';

window.onload = () => {
	document.querySelector('#root').innerHTML = Header;
	const app = new Application();
	app.addNewTrafficlight('first', 'roheline');
	app.addNewTrafficlight('second', 'roheline');
}