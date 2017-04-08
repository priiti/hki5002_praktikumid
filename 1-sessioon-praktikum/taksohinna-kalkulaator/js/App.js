window.onload = () => {
	document.querySelector('#startFee').innerHTML = `Soidu alustamise tasu: $${startingFee.toFixed(2)}`;
	document.querySelector('#routeFeePerKm').innerHTML = `Kilomeetri maksumus: $${kmFee.toFixed(2)}`;
	document.querySelector('.photo').className += ' day';
}

document.querySelector('#findCost').addEventListener('click', findCost);
document.querySelector('#fareSelection').addEventListener('change', () => {
	const selection = document.querySelector('#fareSelection');
	const fare = selection.options[selection.selectedIndex].value;
	if (fare == 'day') {
		kmFee = 0.39;
		document.querySelector('.photo').className = 'photo day';
	} else {
		kmFee = 0.55;
		document.querySelector('.photo').className = 'photo night';
	}
	document.querySelector('#routeFeePerKm').innerHTML = `Kilomeetri maksumus: $${kmFee.toFixed(2)}`;
});

const startingFee = 3.50;
let kmFee = 0.39;

function findCost() {
	const selection = document.querySelector('#fareSelection');
	const fare = selection.options[selection.selectedIndex].value;
	const routeLength = document.querySelector('#routeLength').value;
	const totalCost = ((routeLength * kmFee) + startingFee).toFixed(2);
	document.querySelector('#rideCost').innerHTML = `Soidu maksumus on $${totalCost}.`;
}