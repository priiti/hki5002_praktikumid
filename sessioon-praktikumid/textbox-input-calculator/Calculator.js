class Calculator extends App {
	constructor() {
		super();
	}
	calculate() {
		let sum = 0;
		let count = 0;
		this.boxes.forEach((box) => {
			sum += parseInt(box.element.value);
			count++;
		});
		document.querySelector('#answer').innerHTML = 
			`Keskmine summa on ${(parseInt(sum) / parseInt(count)).toFixed(2)}`;
	}
}