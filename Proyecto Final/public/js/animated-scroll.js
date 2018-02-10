'use strict';

// let y = 0;

// document.body.scrollTop;

var getInitialScroll = function getInitialScroll() {
	return window.scrollY;
};
// console.log(getScroll());
var getFinalScroll = function getFinalScroll(element) {
	return Math.floor(element.getBoundingClientRect().top + getInitialScroll());
};

// console.log(getFinalScroll(document.getElementById('cap2')));

var animatedScrollTo = function animatedScrollTo(element, time) {
	var initialPosition = getInitialScroll(),
	    finalPosition = getFinalScroll(element),
	    distanceToScroll = finalPosition - initialPosition,
	    scrollFragment = distanceToScroll / time;

	animatedScroll(scrollFragment);
};

var animateScroll = function animateScroll(scrollFragment) {
	var animatedScroll = setInterval(function () {
		window.scrollY += scrollFragment;
	}, 1);
};

animatedScrollTo(document.getElementById('cap2'), 500);

// let animatedScroll = setInterval(function(){
// document.body.scrollTop += 10;

// // y =+ 10;
// // window.scrollBy(0, y)
// }, 10);