// loops

// while

let i = 100;

// while (i > 0) {
   while (i--) {	// ira decrementando desde el valor declarado, al llegar a cero genera un valor falsy y sale del ciclo
	console.log(i);
}

// Do while
// El enunciado se ejecuta al menos una vez y luego evalua la condicion

let password = 'ED';
let pass;

do {
	pass = prompt('Introduzca la contrasena');
} while (pass != 'ED');