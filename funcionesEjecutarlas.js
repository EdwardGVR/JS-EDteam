// FUNCIONES

// Las funciones son bloques de codigo reutilizables

// sintaxis

/*
	function nombreFuncion (parametro1, parametro2, parametro3, parametroN) {
		CODE...
		Cuerpo de la funcion
	}
*/

function sumar (num1, num2) {
	// console.log(num1 + num2);

	// Cuando la funcion encuentra el return, su ejecucion termina ahi
	return num1 + num2;

	// Se pueden retornar objetos
	// return {
	// 	propiedad: valor,
	// 	propiedad: valor
	// }
}


// Los datos que se le pasan son argumentos
// sumar(2,2);

let miSuma = sumar(2,3);
// console.log(miSuma);



// Funciones dentro de objetos
// Cuando una funcion esta dentro de un objeto, se llama metodo
let obj = {
	nombre: 'objeto',
	sumar (a, b) {
		return a + b;
	}
};

// Se utiliza la notacion de punto para acceder a la funcion
let otraSuma = obj.sumar(2,3);

// console.log(otraSuma);



// Ejecutar funciones dentro de otra funcion

function restar (a) {
	return function (b) {
		return a - b;
	} 
}

// los primeros parentesis son de la ejecucion de la primera funcion, los segundos son de la interna
let miResta = restar(5)(3);
// console.log(miResta);

// Ejemplo
function externa (a) {
	return function () {
		return a;
	}
}

let valor = externa(5)();
// console.log(valor);



/* Funciones autoinvocadas */
function mult (a, b) {
	return a * b;
}

let multRes = mult(2, 3);


// Se ponen parentesis para convertirlo todo en una expresion, ejecutable luego con los parentesis
let miMultiplicacion = (function (a, b) {
	return a * b;
})(5, 2);

// console.log(miMultiplicacion);



/* Funcion constructora */
let Pais = function (nombre, moneda) {
	this.nombre = nombre;
	this.moneda = moneda;
};

let peru = new Pais('Peru', 'Sol');

// console.log(peru);



// Llamar funciones indirectamente
/* apply() y call() */

function add (a, b, c) {
	return a + b + c;
}

let numeros = [2,3,4];

// let myAdd = add(numeros);
// console.log(myAdd);

let myAdd = add.apply(undefined, numeros);
console.log(myAdd);

let myOtherAdd = add.call(undefined, 2, 3, 4);
console.log(myOtherAdd);