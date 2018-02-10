'use strict';

// CODIGO DESCARGADO

// const getInitialScroll = () => document.documentElement.scrollTop;
// const getFinalScroll = element => Math.floor(element.getBoundingClientRect().top + getInitialScroll());

// const animatedScrollTo = (targetElement,time) => {
//   let initialPosition = getInitialScroll(),
//       finalPosition = getFinalScroll(targetElement),
//       distanceToScroll = finalPosition - initialPosition,
//       scrollFragment = Math.ceil(distanceToScroll / time);
//   animateScroll(scrollFragment, finalPosition);
// };

// const animateScroll = (scrollFragment,finalPosition) => {
//   let animatedScroll = setInterval(function(){
//     document.documentElement.scrollTop += scrollFragment;
//     if (scrollFragment > 0) {
//       if (document.documentElement.scrollTop > finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll)
//     } else {
//       if (document.documentElement.scrollTop < finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll)
//     }

//   },1);
// };

// const animatedScrollEvent = (originElement,time) => {
//   if (originElement.tagName === 'A' && originElement.hash !== '') {
//     let targetElement = document.getElementById(originElement.hash.slice(1));
//     originElement.addEventListener('click', e => {
//       e.preventDefault();
//       animatedScrollTo(targetElement,time)
//     })
//   }
// };

// const animatedScrollAllLinks = time => {
//   let links = document.links;
//   for (let link of links) {
//     animatedScrollEvent(link,time)
//   }
// };

// animatedScrollAllLinks(200);

// animatedScrollEvent(document.getElementById('link2'),500);


// TERMINA CODIGO DESCARGADO


/**********************************************/

// console.log(document.documentElement.scrollTop);
// console.log(window.scrollY);

// let y = 0;
// let animatedScroll = setInterval(function(){
// document.documentElement.scrollTop += 10;

// Con window seria diferente es mas sencillo con document.documentElementt
// y += 10;
// window.scrollBy(0, y);

// }, 10);


var getInitialScroll = function getInitialScroll() {
	return document.documentElement.scrollTop;
};
// getBoundingClientRect detecta las coordenadas respecto al viewport
var getFinalScroll = function getFinalScroll(element) {
	return Math.floor(element.getBoundingClientRect().top + getInitialScroll());
};

// console.log(getFinalScroll(document.getElementById('cap2')));

// Se necesita una unidad de tiempo para hacer la animacion

var animatedScrollTo = function animatedScrollTo(targetElement, time) {
	var initialPosition = getInitialScroll(),
	    finalPosition = getFinalScroll(targetElement),
	    distanceToScroll = finalPosition - initialPosition,


	// Si un auto recorre 10km (una distancia) en 1min (un tiempo) puedo obtener cuanto recorre por segundo
	// supongamos que obtenemos 10m por segundo con Distancia / tiempo
	scrollFragment = distanceToScroll / time;

	animateScroll(scrollFragment, finalPosition);
	// console.log(scrollFragment);
};

var animateScroll = function animateScroll(scrollFragment, finalPosition) {
	// Recorrera el fragmento cada 1ms
	var animatedScroll = setInterval(function () {
		document.documentElement.scrollTop += scrollFragment;

		// Nos va dando la posicion del elemento
		// console.log(document.documentElement.scrollTop);

		if (scrollFragment > 0) {
			if (document.documentElement.scrollTop > finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
		} else {
			if (document.documentElement.scrollTop < finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
		}
	}, 1);
};

var animatedScrollEvent = function animatedScrollEvent(originElement, time) {
	// Si el elemento es un enlace y empieza por almoadilla
	if (originElement.tagName === 'A' && originElement.hash !== '') {
		var targetElement = document.getElementById(originElement.hash.slice(1));
		originElement.addEventListener('click', function (e) {
			e.preventDefault();
			animatedScrollTo(targetElement, time);
		});
	}
};

// Para animar todos los links que haya
var animatedScrollAllLinks = function animatedScrollAllLinks(time) {
	var links = document.links;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var link = _step.value;

			animatedScrollEvent(link, time);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

// Para un solo elemento en especifico
// animatedScrollEvent(document.getElementById('link2'), 500);

// Para todos los links
animatedScrollAllLinks(200);