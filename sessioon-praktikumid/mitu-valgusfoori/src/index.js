import Application from './modules/Application';
import Header from './modules/Header';
import Element from './modules/DOMElements';

window.onload = () => {
	document.querySelector('#root').innerHTML = Header;
	document.querySelector('#root').appendChild(Element.createDivElement('app'));
	const trafficLight1 = new Application(80, 200, `board${1}`);
	const trafficLight2 = new Application(80, 200, `board${2}`);
	const trafficLight3 = new Application(80, 200, `board${3}`);
	const trafficLight4 = new Application(80, 200, `board${4}`);
};