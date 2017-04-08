/*
	window.onload initializes new calculators with given properties
	Calculators have slightly similar functionality as (id, from, to, constant)
	App is used to add attributes and insert them into DOM
	Calculator is used for calculation functionality
	Getters and setters would be good to implement
*/

window.onload = () => {
	const inchesToCm = 
		new Calculator("first", "Tollid", "Sentimeetriteks", 2.54);
	const dollarsToEuros =
		new Calculator("second", "Dollarid", "Eurodeks", 0.9375);
}

class App {
	constructor(name, convertFrom, convertTo, constant) {
		this.name = name;
		this.convertFrom = convertFrom;
		this.convertTo = convertTo;
		this.constant = constant;
	}

	createCalculator() {
		const element = document.createElement("div");
		const conversionFrom = document.createElement("div");
		const input = document.createElement("input");
		const button = document.createElement("input");
		const answer = document.createElement("div");
		
		element.setAttribute("id", this.name);
		element.textContent = this.convertFrom;
		input.setAttribute("type", "text");
		input.setAttribute("id", `${this.name}Input`);
		button.setAttribute("type", "button");
		button.setAttribute("id", `${this.name}Btn`);
		button.setAttribute("value", this.convertTo);
		answer.setAttribute("id", `${this.name}Answer`);
		answer.textContent = "Vastus";
		element.appendChild(conversionFrom);
		element.appendChild(input);
		element.appendChild(button);
		element.appendChild(answer);

		document.querySelector("#conversionCalculators").appendChild(element);
		button.addEventListener('click', this.calculate.bind(this));
	}
}

