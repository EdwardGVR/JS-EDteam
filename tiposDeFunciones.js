// Tipos de funciones

/*
	Funciones por definicion

	function funcionPorDefinicion () {
		CODE...
	}

	funcionPorDefinicion();

************************************************

	Funciones por expresion
	Cuando esta dentro de una variable

	let funcionPorExpresion = function () {
		CODE...
	}

	funcionPorExpresion();

*/

let c = console.log;
// c('Hola mundo');


/*

	Funciones nombradas
	
		se invocan por medio de su nombre

	Funciones anonimas

		se invocan mediante referencia o como callback

			callback:
				Una funcion que es ejecutada por otra luego de un proceso

										  -> callback
				el.addEventListener('click', function () {
					// Hacer algo
				})

*/



/*

	Arrow function ES6
	Son funciones anonimas

	sintaxis:
		(param1, param2, param3) => valorDeRetorno

*/

		// (parametros) => valorDeRetorno
let suma = (a, b) => a + b;

// Equivalente
// let suma function (a, b) {
// 	return a + b;
// }

let miSuma = suma(1, 2);
// c(miSuma);



// Cuando se necesita hacer un proceso antes, se usan las llaves

// let suma = function (a, b) {
// 	if (a > b) {
// 		return a + b;
// 	} 

// 	return b;
// }


// Si solo es un parametro no son necesarios los parentesis
// let cuadrado = a => {
// 	if (typeof(a) == 'number') {
// 		return a * a;
// 	}
// }


// Refactorizado con operador ternario
let cuadrado = a => (typeof(a) == 'number') ? a * a : undefined;

let miCuadrado = cuadrado(6);
// c(miCuadrado);


// Si se va a devolver un objeto, ponerlo entre parentesis
let myObj = (a, b) => ({a, b});

let myCustomObject = myObj('Hola', 'mundo');
c(myCustomObject);