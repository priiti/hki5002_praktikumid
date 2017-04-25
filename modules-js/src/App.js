import Canvas from './modules/Canvas';
import Rectangle from './modules/Rectangle';
import Circle from './modules/Circle';
import nav from './modules/Nav';

document.body.innerHTML = nav;

const board = new Canvas(600, 600, 'board');

// const rect = new Rectangle(20, 20, 40, 40, 'blue');
// board.addDrawableItems(rect);

function createDrops(num) {
	for (let i = 0; i < num; i++) {
		const circle = 
			new Circle(randomNumber(1, board.width), randomNumber(-20, -200), randomNumber(2, 5), 'pink', randomNumber(5, 10));
		board.addDrawableItems(circle);
	}
}

function randomNumber(start, end) {
	return Math.floor((Math.random() * end) + start);
}

// const circle = new Circle(200, 200, 10, 'pink');
// board.addDrawableItems(circle);

// create Circles	
createDrops(500);
// Animate them
animation(board);

function animation(board) {
	board.render();
	//board.items[1]._radius += 1;
	board.items.forEach((item) => {
		item._yValue += item._speed;
		if (item._yValue > board.height) {
			item._yValue = randomNumber(-20, -200);
			item._xValue = randomNumber(1, board.width);
			item._speed = randomNumber(2, 5);
		}
	});
	window.requestAnimationFrame(animation.bind(this, board));
}