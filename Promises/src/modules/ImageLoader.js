function loadImage(url) {
	return new Promise((resolve, reject) => {
		let image = new Image();
		
		image.onload = () => {
			resolve(image);
		};

		image.onerror = () => {
			let message = `Could not load image from ${url}`;
			reject(new Error(message));
		};
		image.src = url;
	});
};

export default loadImage;