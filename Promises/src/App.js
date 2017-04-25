import imageLoader from './modules/ImageLoader';

const addNewImage = (src) => {
	let imageElement = document.createElement('img');
	imageElement.setAttribute('height', 200);
	imageElement.setAttribute('width', 300);
	imageElement.src = src;
	document.body.appendChild(imageElement);
};

Promise.all([
		imageLoader('https://cdn.pixabay.com/photo/2016/03/05/22/16/aroma-1239226_1280.jpg'),
		imageLoader('https://cdn.pixabay.com/photo/2016/04/26/16/58/coffe-1354786_1280.jpg'),
		imageLoader('https://cdn.pixabay.com/photo/2015/05/31/12/11/break-791434_1280.jpg')
	])
	.then((images) => {
		images.forEach((img) => {
			addNewImage(img.src);
		});
	});