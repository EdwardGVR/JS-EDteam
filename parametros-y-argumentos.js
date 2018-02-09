// Parametros y argumentos

/*
	Parametros: son las variables locales que se declaran al definir la funcion

	Argumentos: los datos reales que se le pasan al ejecutar la funcion

*/

// let sumar = (a, b) => {
// 	console.log(arguments);
// };




function sumar (a, b) {
	// console.log(arguments);
}


let miSuma = sumar(2, 3);
// console.log(miSuma);

/*

	Si hay mas parametros que argumentos, los argumentos faltantes son undefined

	Si hay mas argumentos que parametros, no devuelve error, y los sobrantes son ignorados

*/


// Spread operator -> ...
// Para volverlo un array [...]
// Expanden los datos de un objeto


function sumarTodos () {
	// console.log([...arguments]);

	return [...arguments].reduce( (a, b) => a + b );

	// let sum = 0;

	// for (var i = 0; i < arguments.length; i++) {
	// 	sum += arguments[i];
	// }

	// return sum;

}

// console.log(sumarTodos(1,2,3,4,5,6,7));

function sumar (a, b) {
	return a + b;
}

let numeros = [1,2];

console.log(sumar(...numeros));