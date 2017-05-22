const url = 'http://tigu.hk.tlu.ee/~priit.parl/programmeerimine-1-js/fetch/time.php';

async function getData(url) {
	const data = await fetch(url);
	const time = await data.json();
	
	document.querySelector('#time-section').innerHTML = time;
}

async function getGreetingFromServer() {
	const firstname = document.querySelector('#firstname');
	const lastname = document.querySelector('#lastname');
	const greetingData = await fetch(url, {
		method: 'POST',
		body: firstname
	})
	console.log(greetingData);
}

setInterval(() => {
    getData(url);
}, 1000);

document.querySelector('#get-greeting-btn').addEventListener('click', getGreetingFromServer, false);