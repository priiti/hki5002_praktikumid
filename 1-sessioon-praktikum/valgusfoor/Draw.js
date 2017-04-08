class Draw {
	constructor() {
		const board = document.querySelector("#canvasBoard");
		const canvasWidth = board.width;
		const canvasHeight = board.height;
		this.context = board.getContext("2d");
	}

	drawRectangle(x, y, width, height) {
		this.context.fillStyle = "#000000";
		this.context.fillRect((canvasWidth / 2) - (width / 2 ), (canvasHeight / 2) - (height / 2), width, height);
		this.context.stroke();
	}

	drawCircle(x, y, radius, color) {
		this.context.strokeStyle = "white";
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2 * Math.PI);
		
		if (color == "red") {
			this.context.strokeStyle = "red";
			this.context.fillStyle = "red";
			this.context.fill();
		} else {
			this.context.stroke();
		}

		if (color == "yellow") {
			this.context.strokeStyle = "yellow";
			this.context.fillStyle = "yellow";
			this.context.fill();
		} else {
			this.context.stroke();
		}

		if (color == "green") {
			this.context.strokeStyle = "green";
			this.context.fillStyle = "green";
			this.context.fill();
		} else {
			this.context.stroke();
		}	
	}
}