import Canvas from './Canvas';
import Rect from './Rectangle';

class App {
	constructor() {
		this.board = new Canvas(300, 300, `board`);
	}
}

// const rect = new Rectangle(10, 10, 200, 200);

export default App;