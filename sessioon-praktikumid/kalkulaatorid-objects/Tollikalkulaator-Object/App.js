/*
	There's one calculator per page
	Calculator object is created for functionality add- on
*/

window.onload = () => {
	// Setting up startup scenario for calculator
	conversionState();
}

document.querySelector("#conversion").addEventListener('change', conversionState);
document.querySelector("#convertBtn").addEventListener('click', convert);

// Calculator starting stage
function conversionState() {
	const conversionSelection = document.querySelector("#conversion");
	const conversion = conversionSelection.options[conversionSelection.selectedIndex].value;
	if (conversion == "inch") {
		document.querySelector("#fromTo").innerHTML =
			`Teisenda tollid sentimeetriteks.`;
	} else {
		document.querySelector("#fromTo").innerHTML =
			`Teisenda sentimeetrid tollideks.`;
	}
}

// Creating new calculator object
const conversionCalculator = new Calculator();

// Converting functionality which uses created object's functionality
function convert() {
	const conversionSelection = document.querySelector("#conversion");
	const conversion = conversionSelection.options[conversionSelection.selectedIndex].value;
	const convertValue = document.querySelector("#from").value;
	if (conversion == "inch") {
		document.querySelector("#answer").innerHTML = 
			`${convertValue} tolli on ${conversionCalculator.inchesToCentimeters(convertValue)} sentimeetrit.`
	} else {
		document.querySelector("#answer").innerHTML = 
			`${convertValue} sentimeetrit on ${conversionCalculator.centimetersToInches(convertValue)} tolli.`
	}
}