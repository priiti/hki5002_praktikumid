// Staring point of the application

import App from './modules/App';

window.onload = () => {
	const application = new App();
	application.createDrops(500);
	application.animation(application.board);
};