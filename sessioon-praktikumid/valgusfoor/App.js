const canvasWidth = 400;
const canvasHeight = 500;
let colors = ["red", "white", "white"];;

document.querySelector("#redBtn").addEventListener('click', () => {
	colors = ["red", "white", "white"];
	drawDrafficLight();
});

document.querySelector("#yellowBtn").addEventListener('click', () => {
	colors = ["white", "yellow", "white"];
	drawDrafficLight();
});

document.querySelector("#greenBtn").addEventListener('click', () => {
	colors = ["white", "white", "green"];
	drawDrafficLight();
});

function createCanvas(width, height) {
	const canvas = document.createElement('canvas');
	canvas.id = "canvasBoard";
	canvas.width = width;
	canvas.height = height;

	const application = document.getElementsByTagName("body")[0];
	application.appendChild(canvas);	
}

function drawDrafficLight() {
	const myDrawing = new Draw();
	let radius = 50;
	let x = canvasWidth / 2;
	let y = (canvasHeight - canvasHeight) + 130;
	
	myDrawing.drawRectangle(250, 250, 200, 400);

	for (let i = 0; i < 3; i++) {
		myDrawing.drawCircle(x, y, radius, colors[i]);
		y += 120;
	}
}
createCanvas(canvasWidth, canvasHeight);
drawDrafficLight();