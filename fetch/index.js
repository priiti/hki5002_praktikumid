const url = 'http://tigu.hk.tlu.ee/~priit.parl/programmeerimine-1-js/fetch/time.php';

async function getData(url) {
	const data = await fetch(url);
	const time = await data.json();
	
	document.querySelector('#time-section').innerHTML = time;
}

setInterval(() => {
    getData(url);
}, 1000);