/*
	Extending App propeties with Calculator properties
	Adding the calculation functionality
*/

class Calculator extends App {
	constructor(name, convertFrom, convertTo, constant) {
		super(name, convertFrom, convertTo, constant);
		this.calculator = this.createCalculator();
	}

	calculate() {
		const userInput = document.querySelector(`#${this.name}Input`);
		const calculation = (userInput.value * this.constant).toFixed(2);
		document.querySelector(`#${this.name}Answer`).innerHTML = `Vastus on ${calculation}`;
	}
}