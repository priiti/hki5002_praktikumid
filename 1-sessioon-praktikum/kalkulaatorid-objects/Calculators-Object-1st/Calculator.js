/*
	Calculator class for new calculator creation
	We add calculators, their properties and functionality
*/

class Calculator {
	constructor(calculator) {
		this.calculatorName = document.querySelector(`#${calculator}`);
		this.calculatorName.innerHTML =
		 	`Tollid: <input type="text" id="${this.calculatorName.id}Input" />
		 	<input type="button" value="Sentimeetriteks" id="${this.calculatorName.id}Btn"/>
		 	<div id=${this.calculatorName.id}Answer></div>`;
		
		this.userInput = document.querySelector(`#${this.calculatorName.id}Input`);
		this.button = document.querySelector(`#${this.calculatorName.id}Btn`);
		this.button.addEventListener('click', this.calculate.bind(this), false);
		this.answer = document.querySelector(`#${this.calculatorName.id}Answer`);
		this.answer.innerHTML = `Vastuse koht`;
	}

	calculate() {
		if (this.userInput.value.trim() == 0 || isNaN(this.userInput.value.trim())) {
			alert("Kontrolli sisendit!");
			this.userInput.value = null;
		} else {
			const conversion = (this.userInput.value * 2.54).toFixed(2);
			this.answer.innerHTML = `${this.userInput.value} tolli on ${conversion} sentimeetrit.`;
		}
	}
}