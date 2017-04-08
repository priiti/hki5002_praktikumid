/*
	Calculator object has the two way conversion functionality
*/

class Calculator {
	inchesToCentimeters(value) {
		return (value * 2.54).toFixed(2);
	}

	centimetersToInches(value) {
		return (value * 0.39370079).toFixed(4);
	}
}