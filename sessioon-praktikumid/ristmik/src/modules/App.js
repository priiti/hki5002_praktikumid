import Canvas from './Canvas';
import Rectangle from './Rectangle';
import Line from './Line';
import Circle from './Circle';

const board = new Canvas(600, 600, 'board');


// Crossroads
// Roads
const roads = [
	[board.width / 2, board.height / 2, board.width / 6, board.height],
	[board.width / 2, board.height / 2, board.width, board.height / 6]
];

roads.forEach((road) => {
	const r = new Rectangle(road[0], road[1], road[2], road[3], '#696969');
	board.addDrawableItems(r);
});

// Road lanes (moveTo(x,y), lineTo(endX,endY))
const lanes = [
	[0, board.height / 2, board.width / 2 - 50, board.height / 2],
	[board.width / 2 + 50, board.height / 2, board.width, board.height / 2],
	[board.width / 2, 0, board.width / 2, board.height / 2 - 50],
	[board.width / 2, board.height / 2 + 50, board.width / 2, board.height]
];

lanes.forEach((lane) => {
	const l = new Line(lane[0], lane[1], lane[2], lane[3], '#fff');
	board.addDrawableItems(l);
});

// Traffic lights
const lights = [
	[],
	[],
	[],
	[]
];

board.render();

export * from './App';