// Scope: es el ambito o contexto donde se ejecuta una funcion y existen sus variables

// En ES5 el unico scope local se creaba con funciones

// {
// 	let hola;
// 	hola = 'Hola scope';
// }

// let hola; 
// function holaMundo () {
// 	var hola; 
// 	hola = 'Hola Mundo';
// }

// holaMundo();
// console.log(hola);

// function holaDeNuevo () {
// 	hola = 'Hola otra vez';
// }

// holaDeNuevo();
// console.log(hola);



// Al declarar con let, se tiene un scope de bloque

function sumar (a) {
	return function (b) {
		return a + b;
	}
}

let miSuma = sumar(5)(7);
// console.log(miSuma);

// Las funciones pueden acceder al scope que esta por encima de ellas

// Las funciones que estan dentro de otra funcion pueden acceder al scope que esta por fuera de ella



/* CLOSURES */

function saludar () {
	let saludo = 'Hola';

	return function saludarInterno (amigo) {
		// saludarInterno esta accediendo a la variable saludo que esta por fuera
		console.log(`${saludo} ${amigo}`);
	}
}

// saludar()();

// let miSaludo = saludar();
// miSaludo('Alexys');
// miSaludo('Daniel');


function afuera () {
	let numero = 1;
	return function () {
		numero++;
		console.log(numero);
	}
}


// Esto es un closure, desde afuera hemos referenciado una funcion retornada y acceder a sus variables conservando el estado

let aumentar = afuera();

aumentar();
aumentar();
aumentar();
aumentar();
aumentar();

afuera()();