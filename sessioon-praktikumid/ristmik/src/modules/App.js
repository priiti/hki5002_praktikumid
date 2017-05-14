import Canvas from './Canvas';
import Rectangle from './Rectangle';

const board = new Canvas(600, 600, 'board');

const rect = new Rectangle(20, 20, 150, 100, 'black');

board.addDrawableItems(rect);

board.render();

// Crossroads
// Roads
const roads = [
	[0, (board.height / 2) - 50, (board.width), (board.height / 2) - 200, '#696969', true],
	[(board.width / 2) - 50, 0, 100, board.height, '#696969', true]
];

for (let i = 0; i < roads.length; i++) {
	let road =
		new Rectangle(roads[i][0], roads[i][1], roads[i][2], roads[i][3], roads[i][4], roads[i][5]);
	board.addDrawableItems(road);
}

board.render();

export * from './App';