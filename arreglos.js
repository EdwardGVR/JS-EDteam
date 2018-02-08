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
// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
// 	let element = arr[index];

// 	if (typeof(element) == 'number') {
// 		sum += arr[index];
// 	}
// }

// console.log(sum);

// Array.prototype.saludo = 'Hola';
// console.log(arr.saludo);

// Devuelve el indice, la posicion en el arreglo del elelemento indicado
// Si no lo encuentra devuelve -1
// console.log(arr.indexOf(3));

// Agregar elementos al array
// .push(el1, el2, el3) -> Añade al final
// .unshift(el1, el2, el3) -> Añade al inicio
// ambos metodos devuelven el nuevo length y puede ser asignado a una variable

// arr.push('javascript', 'desde', 'cero');
// console.log(arr);

// console.log(arr.length);

// let newLength = arr.unshift('unshift', 'agrega', 'al inicio');
// console.log(arr);

// console.log(newLength);

// Al modificar arreglos, se modifica el original, a diferencia de los strings, donde se crea una copia

// Eliminar un solo elemento

// Estos metodos devuelven el elemento eliminado
// .pop() -> al final
// .shift() -> al inicio

// let deletedEl = arr.pop();
// console.log(arr);
// console.log(deletedEl);

// .join('separador') -> convierte un array en un string
// 'separador' es por defecto una coma

// console.log(arr.join(' | '));

// .splice(a, b, items) -> reemplaza, agrega o quita elementos
// a 		-> indice donde comenzara la operacion 
// b  		-> el numero de elementos que va a tomar si es 0, no quita ni reemplaza
// items 	-> los elementos que va agregar si es lo que hara

// arr.splice(2, 0, 'escuela', 'digital');
// console.log(arr);


// .slice si crea un nuevo arreglo
// con los elementos desde el indice del primer parametro, hasta el del segundo, sin tomar en cuenta el elemento de este ultimo
// Si no se pone el segundo parametro, el nuevo arreglo empieza a partir del indice del primer parametro hasta el final
// Si no se pone ningun parametro, crea una copia exacta del arreglo oriinal, que se puede guardar en una variable
let arr2 = arr.slice(2, 5);
console.log(arr2);