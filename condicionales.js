// Condicionales

// if (true) {
// 	if ( 5 == 5) {
// 	console.info('Se cumplio la condicion');
// } else {
// 	console.warn('La condicion no se cumplio');
// }

if (5 != 3 && 5 == 10) {		// && Ambas condiciones deben cumplirse
	console.info('Se cumplio la condicion');
} else {
	console.warn('La condicion no se cumplio');
}

if (5 != 3 || 5 == 10) {		// || Basta con que una condicion se cumpla
	console.info('Se cumplio la condicion');
} else {
	console.warn('La condicion no se cumplio');
}

// prompt('message') -> muestra un cuadro de dialogo, devuelve un string con la respuesta del usuario
let edad = prompt('Dime tu edad');

if (edad < 12) {
	console.log("Eres niño");
	if (edad < 2) {
		console.log("Eres un bebe");
	}
} else if (edad >= 12 && edad < 18) {
	console.log("Eres adolescente");
} else if (edad >= 18 && edad < 60) {
	console.log("Eres adulto");
} else {
	console.log("Eres anciano");
}

// valores truthy y falsy
// Valores que no son booleans, pero equivalen a estos

// truthy: strings no vacios, [], {}, Numeros diferentes de cero
// falsy: Numero cero, string vacio, undefined, null, NaN


if (edad) {
	console.log('ingresaste un valor truthy');
} else {
	console.log('Ingresaste un valor falsy');
}