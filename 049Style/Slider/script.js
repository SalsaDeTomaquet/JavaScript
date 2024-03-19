let left = 0;
const sliderWidth = 512;
const slider = document.querySelector('.slider');
const carrousel = () => {
	if (left > -2) {
		left = left - 1;
	} else {
		left = 0;
	}
	console.log(left)
	slider.style.marginLeft = sliderWidth * left + 'px';
}

document.querySelector('button').addEventListener('click', carrousel);