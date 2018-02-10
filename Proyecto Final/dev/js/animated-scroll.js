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


const getInitialScroll = () => document.documentElement.scrollTop;
// getBoundingClientRect detecta las coordenadas respecto al viewport
const getFinalScroll = element => Math.floor(element.getBoundingClientRect().top + getInitialScroll());

// console.log(getFinalScroll(document.getElementById('cap2')));

// Se necesita una unidad de tiempo para hacer la animacion

const animatedScrollTo = (targetElement, time) => {
	let initialPosition = getInitialScroll(),
		finalPosition = getFinalScroll(targetElement),
		distanceToScroll = finalPosition - initialPosition,

		// Si un auto recorre 10km (una distancia) en 1min (un tiempo) puedo obtener cuanto recorre por segundo
		// supongamos que obtenemos 10m por segundo con Distancia / tiempo
		scrollFragment = distanceToScroll / time;

	animateScroll(scrollFragment, finalPosition);
	// console.log(scrollFragment);
};

const animateScroll = (scrollFragment, finalPosition) => {
	// Recorrera el fragmento cada 1ms
	let animatedScroll = setInterval(function () {
		document.documentElement.scrollTop += scrollFragment;

		// Nos va dando la posicion del elemento
		// console.log(document.documentElement.scrollTop);

		if (scrollFragment > 0) {
			if (document.documentElement.scrollTop > finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
		} else {
			if (document.documentElement.scrollTop < finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
		}

	}, 1);
};

const animatedScrollEvent = (originElement, time) => {
	// Si el elemento es un enlace y empieza por almoadilla
	if (originElement.tagName === 'A' && originElement.hash !== '') {
		let targetElement = document.getElementById(originElement.hash.slice(1));
		originElement.addEventListener('click', e => {
			e.preventDefault();
			animatedScrollTo(targetElement,time);
		});
	}
};

// Para animar todos los links que haya
const animatedScrollAllLinks = time => {
	let links = document.links;
	for (let link of links) {
		animatedScrollEvent(link, time);
	}
};

// Para un solo elemento en especifico
// animatedScrollEvent(document.getElementById('link2'), 500);

// Para todos los links
animatedScrollAllLinks(200);