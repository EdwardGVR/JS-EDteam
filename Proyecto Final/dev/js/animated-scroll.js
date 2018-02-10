// let y = 0;

// document.body.scrollTop;

const getInitialScroll = () => window.scrollY;
// console.log(getScroll());
const getFinalScroll = element => Math.floor(element.getBoundingClientRect().top + getInitialScroll());

// console.log(getFinalScroll(document.getElementById('cap2')));

const animatedScrollTo = (element, time) => {
	let initialPosition = getInitialScroll(),
		finalPosition = getFinalScroll(element),
		distanceToScroll = finalPosition - initialPosition,
		scrollFragment = distanceToScroll / time;

	animatedScroll(scrollFragment);
};

const animateScroll = scrollFragment => {
	let animatedScroll = setInterval(function(){
		window.scrollY += scrollFragment;
	}, 1);
};



animatedScrollTo(document.getElementById('cap2'), 500);

// let animatedScroll = setInterval(function(){
	// document.body.scrollTop += 10;

	// // y =+ 10;
	// // window.scrollBy(0, y)
// }, 10);