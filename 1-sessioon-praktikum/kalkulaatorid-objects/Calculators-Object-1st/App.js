/*
	Calculator uses DOM elements to create certain amount of calculators
	Functionality of calculators is same
	window.onload initializes new calculators
*/

window.onload = () => {
	const elements = document.querySelector("#conversionCalculators");
	const calculators = elements.querySelectorAll("div");	
	calculators.forEach((index) => {
		createCalculator(index.id);
	});
}

function createCalculator(calculatorName) {
	const calculator = new Calculator(calculatorName);
}