import Canvas from './Canvas';
import Rectangle from './Rectangle';
import Circle from './Circle';
import header from './Nav';

class App {
	constructor() {
		document.querySelector('#root').innerHTML = header;
		this.board = new Canvas(600, 600, 'board');
	}
	
	createDrops(num) {
		for (let i = 0; i < num; i++) {
			const color = "#"+((1<<24)*Math.random()|0).toString(16);
			const circle = 
				new Circle(
					this.randomNumber(1, this.board.width), // x
					this.randomNumber(-20, -200), // y
					this.randomNumber(2, 5), // radius
					color, // color
					this.randomNumber(3, 7) // speed
				);
			this.board.addDrawableItems(circle);
		}
	}

	randomNumber(start, end) {
		return Math.floor((Math.random() * end) + start);
	}

	expolode(yValue, itemRadius) {
		if (yValue > (this.board.height - (itemRadius * 2))) {
			return true;
		}
		return false;
	}

	animation(board) {
		this.board.render();
		this.board.items.forEach((item) => {
			item._yValue += item._speed;
			if (this.expolode(item._yValue, item._radius)) {
					item._radius += 3;
				}
			if (item._yValue > this.board.height) {
				item._yValue = this.randomNumber(-20, -200);
				item._xValue = this.randomNumber(1, this.board.width);
				item._speed = this.randomNumber(2, 4);
				item._radius = this.randomNumber(2, 5);
			}
		});
		window.requestAnimationFrame(this.animation.bind(this, this.board));
	}
}

export default App;