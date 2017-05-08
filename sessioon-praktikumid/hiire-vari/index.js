window.onload = () => {
	const container = document.querySelector('.container');
	const text = container.querySelector('h1');
	const distance = 100;

	function textShadow(event) {
		const { offsetWidth: width, offsetHeight: height } = container;
		let { offsetX: x, offsetY: y } = event;

		if (this !== event.target) {
			x = x + event.target.offsetX;
			y = y + event.target.offsetY;
		}

		// -> distance / 2 and -(distance / 2) so same amount from the center of heading
		const xDistance = (x / width * distance) - (distance / 2);
		const yDistance = (y / height * distance) - (distance / 2);
		
		text.style.textShadow = `
			${xDistance}px ${yDistance}px 0 rgba(255,0,255,0.7),
			${xDistance * - 1}px ${yDistance}px 0 rgba(0,255,255,0.7),
			${yDistance}px ${xDistance - 1}px 0 rgba(0, 230, 59, 0.3),
			${yDistance * - 1}px ${xDistance}px 0 rgba(95, 66, 217, 0.2)
		`;
	}

	container.addEventListener('mousemove', textShadow);
};