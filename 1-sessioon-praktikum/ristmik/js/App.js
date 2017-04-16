
class Canvas {
	constructor(width, height, destination) {
		this.items = [];
		this.width = width;
		this.height = height;
		this.destination = destination;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = '1px solid black';
		document.querySelector(`.${this.destination}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}

	addDrawableItems(object) {
		this.items.push(object);
	}

	render() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
		this.items.forEach((item) => {
			item.draw(this.context);
		});
	}
}

class Rectangle {
	constructor(x, y, width, height, color, fill) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.context = undefined;
		this.fill = fill;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return false;
		}
		if (!this.fill) {
			this.context.fillStyle = this.color;
			this.context.rect(this.x, this.y, this.width, this.height);
			this.context.stroke();
		} else {
			this.context.fillStyle = this.color;
			this.context.fillRect(this.x, this.y, this.width, this.height);
			this.context.stroke();
		}
		
	}
}

class Circle {
	constructor(x, y, radius, color) {
		this._color = color;
		this._radius = radius;
		this.x = x;
		this.y = y;
	}

	set radius(radius) {
		if (Number.isNan(radius)) {
			throw new Error(`Ringi raadius ei ole number`);
		}
		this._radius = radius;
	}

	set color(color) {
		this._color = color;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return false;
		}
		this.context.beginPath();
		this.context.fillStyle = this._color;
		this.context.arc(this.x, this.y, this._radius, 0, 2 * Math.PI);
		this.context.fill();
	}
}

class Line {
	constructor(x, y, endX, endY, color) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.endX = endX;
		this.endY = endY;
	}

	draw(context) {
		this.context = context;
		if (this.context === null) {
			return false;
		}
		this.context.beginPath();
		this.context.strokeStyle = this.color;
		this.context.setLineDash([5, 10]);
		this.context.moveTo(this.x, this.y);
		this.context.lineTo(this.endX, this.endY);
		this.context.lineWidth = 5;
		this.context.stroke();
	}
}	

const cWidth = 600;
const cHeight = 600;
const myCanvas = new Canvas(cWidth, cHeight, 'board');

// Roads
const roads = [
		[0, (cHeight / 2) - 50, (cWidth), (cHeight / 2) - 200, '#696969', true],
		[(cWidth / 2) - 50, 0, 100, cHeight, '#696969', true]
	];

for (let i = 0; i < roads.length; i++) {
	let road = 
		new Rectangle(roads[i][0], roads[i][1], roads[i][2], roads[i][3], roads[i][4], roads[i][5]);
	myCanvas.addDrawableItems(road);
}

//  Road lanes
const roadLanes = [
		[(cWidth / 2), 0, (cWidth / 2), (cHeight / 2) - 50, 'white'],
		[(cWidth / 2), (cHeight / 2) + 50, cWidth / 2, cHeight, 'white'],
		[0, cHeight / 2, (cWidth / 2) - 50, cHeight / 2, 'white'],
		[(cWidth / 2) + 50, cHeight / 2, cWidth, cHeight / 2, 'white']
	];

for (let i = 0; i < roadLanes.length; i++) {
	let lane = 
		new Line(roadLanes[i][0], roadLanes[i][1], roadLanes[i][2], roadLanes[i][3], roadLanes[i][4]);
	myCanvas.addDrawableItems(lane);		
}

// Traffic lights
const trafficLights = [
		[(cWidth / 2) - 145, (cHeight / 2) + 60, 85, 50, 'black', true],
		[(cWidth / 2) - 145, (cHeight / 2) + 60, 85, 50, 'black', true]
	];

for (let i = 0; i < trafficLights.length; i++) {
	let light = 
		new Rectangle(trafficLights[i][0], trafficLights[i][1], trafficLights[i][2], trafficLights[i][3], trafficLights[i][4], trafficLights[i][5]);
	myCanvas.addDrawableItems(light);
}


const myRectangle = new Rectangle(10, 10, 100, 100, 'black', true);
//myCanvas.addDrawableItems(myRectangle);
// const myCircle = new Circle(100, 75, 50, 'red');
// myCanvas.addDrawableItems(myCircle);


myCanvas.render();
// let a = true;
// document.querySelector('#btn').addEventListener('click', draw);

// function draw() {
// 	if (a) {
// 		myCircle.color = 'blue';
// 		myCanvas.render();
// 		a = false;
// 	} else {
// 		myCircle.color = 'red';
// 		myCanvas.render();
// 		a = true;
// 	}
// }

//myCanvas.render();
let countdown;
function timer(seconds) {
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft <= 0) {
			
			console.log(`Finished!`);
			clearInterval(countdown);
			return true;
		}

	}, 1000);
}

// timer(5);