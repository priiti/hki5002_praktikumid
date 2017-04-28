import { component } from './Elements';
import Services from './Services';

class App {
	constructor() {
		document.querySelector(`#root`)
			.innerHTML = component;
		document.querySelector('#get_data')
			.addEventListener('click', this.receiveData);
	}
	async receiveData() {
		try {

			const jokeData = await Services.getJokeFromTheServer()
				.then((response) => {
					document.querySelector('#joke_section')
						.innerHTML = `${response.data.name} joke: ${response.data.joke}`;
				});

		} catch(error) {

			console.log(error);
		}
	}
}

export default App;

// Only with promises?

// class App {
// 	constructor() {
// 		document.querySelector(`#root`)
// 			.innerHTML = component;
// 		document.querySelector('#get_data')
// 			.addEventListener('click', this.receiveData);
// 	}
// 	receiveData() {
// 		Services.getJokeFromTheServer()
// 			.then((response) => {
// 				document.querySelector('#joke_section')
// 					.innerHTML = `${response.data.name} joke: ${response.data.joke}`;
// 			});
// 	}
// }