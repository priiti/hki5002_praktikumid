/* Getter and Setter usage with object */

window.onload = () => {
	document.querySelector('#findCircleAreaBtn')
		.addEventListener('click', calculateCircleArea);
}

class Calculator {
	constructor() {}

	calculateArea() {
		return `Ringi pindala on: ${(Math.pow(this._radius, 2) * Math.PI).toFixed(2)}`;
	}

	get circleArea() {
		return this.calculateArea();
	}

	set radius(radius) {
		if (Number.isNaN(radius)) {
			throw new Error(`Ringi raadius peab olema numbriline väärtus!`);
		}
		this._radius = radius;
	}
}

// Creating a new circle object
const myCircleRadiusCalculator = new Calculator();

function calculateCircleArea() {
	let userRadiusInput = document.querySelector('#circleRadiusInput').value;
	if (userRadiusInput.includes(',')) {
		userRadiusInput = userRadiusInput.replace(/,/g, '.');
	}
	// Uses setter in background to set radius
	myCircleRadiusCalculator.radius = parseFloat(userRadiusInput);
	// Getting the circle area uses getter in the background to get the radius via object function
	document.querySelector('#circleAreaAnswer').innerHTML =
		myCircleRadiusCalculator.circleArea;
}