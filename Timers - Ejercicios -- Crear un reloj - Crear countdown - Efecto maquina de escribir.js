// Timers

/*
* Hay dos tipos de timers
* setTimeOut(cb, t) -> espera un tiempo y luego de ese tiempo ejecuta la funcion
* setInterval(cb, t) -> ejecuta la funcion que se le pase por parametros repetidas veces segun la cantidad de tiempo t
*
*	cb -> callback -> Una funcion que se ejecuta internamente en otra
* 	t -> tiempo -> en milisegundos
*/

// let counter = num => console.log(++num);

// setTimeout(function() {
// 	console.log('Hola mundo');
// 	counter(1);
// }, 3000);


// let count = 0;


// Al ponerlo en una variable, se tiene referenciado, con lo que se puede detener luego con clearInterval
// let myInterval = setInterval(function () {
// 	console.log(++count);

// 	if (count === 5) {
// 		clearInterval(myInterval);
// 	}
// }, 1000);

// clearInterval(myInterval);


/*
* EJERCICIO: Crear un reloj
*/

// let reloj = setInterval(function () {
// 	document.body.innerHTML = new Date().toLocaleString();
// }, 1000);


/*
* EJERCICIO: Crear una cuenta regresiva
*
* utilizando los metodos ya creados msToDateObj y msToExpandDateObj
*
*/

// let countDown = ms => {
// 	let myCountDown = setInterval(function () {
// 		ms -= 1000;
// 		let minutes = Math.floor(ms / (1000 * 60)),
// 			seconds = Math.floor((ms % (1000 * 60)) / 1000);
// 			document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;


// 		if (ms === 0) {
// 			clearInterval(myCountDown);
// 			document.body.innerHTML = `Tiempo cumplido`;
// 		}

// 	}, 1000);
// };


// Hacer practica para poder pasar minutos y segundos como parametros
// countDown(80000);



/*
* EJERCICIO: Maquina de escribir
*/


let writing = str => {
	// El split transforma el string en un array con las letras
	let arrFromStr = str.split('');
	let i = 0;
	let pirntStr = setInterval(function () {

		if (arrFromStr[i] === ' ' ) {
			// Si es un espacio vacio, imprimelo y tambien el siguiente caracter
			document.body.innerHTML += arrFromStr[i]
			document.body.innerHTML += arrFromStr[i + 1];
			// Como se han impreso dos caracteres (el espacio y el siguiente) se aumenta en dos el contador
			i += 2;
		} else {
			document.body.innerHTML += arrFromStr[i];
			i++;
		}

		// document.body.innerHTML += arrFromStr[i];

		if (i === arrFromStr.length) {
			clearInterval(pirntStr);
			document.body.style.color = 'steelblue';
		}

	}, 100);
}

writing('ReactJS desde cero curso completo en EDteam');