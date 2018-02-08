// Arrays
// Los indices de los arrays comienzan en 0

let arr = [1,'2',3,4,5,'true',6];
		// 0,1,2,3,4

// devuelve la longitud del array
// console.log(arr.length);

// Acceder a los elementos
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// for (let index = 0; index < arr.length; index++) {
// 	let element = arr[index];
// 	console.log(element);
// }

// Sumar todos los elementos (todos numeros) de un array

let sum = 0;

for (let index = 0; index < arr.length; index++) {
	let element = arr[index];

	if (typeof(element) == 'number') {
		sum += arr[index];
	}
}

console.log(sum);

Array.prototype.saludo = 'Hola';
console.log(arr.saludo);