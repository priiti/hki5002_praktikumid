import Canvas from './Canvas';
import Rectangle from './Rectangle';
import Line from './Line';
import Circle from './Circle';

const board = new Canvas(600, 600, 'board');

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

//  Road lanes
const roadLanes = [
	[(board.width / 2), 0, (board.width / 2), (board.height / 2) - 50, 'white'],
	[(board.width / 2), (board.height / 2) + 50, board.width / 2, board.height, 'white'],
	[0, board.height / 2, (board.width / 2) - 50, board.height / 2, 'white'],
	[(board.width / 2) + 50, board.height / 2, board.width, board.height / 2, 'white']
];

for (let i = 0; i < roadLanes.length; i++) {
	let lane = 
		new Line(roadLanes[i][0], roadLanes[i][1], roadLanes[i][2], roadLanes[i][3], roadLanes[i][4]);
	board.addDrawableItems(lane);		
}

board.render();

export * from './App';