// This
// Es un apuntador hacia un objeto, no siempre apunta al objeto en el que esta

let myObject = {
	nombre: 'Edward',
	saludar() {
		console.log(`Hola ${this.nombre}`);
	}
}

// Cuando la funcion es un metodo de un objeto, this, es el objeto
// Cuando la funcion esta afuera, this, es undefined

// myObject.saludar();


// 'use strict'; -> Es una instruccion de ES5, que obliga a usar buenas practicas

'use strict';
function checkThis() {
	console.log(this);
}

// checkThis();

	  // -> this     , array 
// sumar.apply(undefined, numeros);



// Lexical this

function Boy (edad) {
	this.edad = 0;
	// let _t = this;


// Forma antigua
// 						 tiempo en ms
	// setInterval(function () {
	// 	_t.edad++;
	// }, 1000);

// Forma nueva 
// Con las arrow fucntion se referencia el contexto (this) correcto
	setInterval( () =>  this.edad++ , 1000 );
}

	let juanito = new Boy ();

	// Usar console.log(this) para verificar cual es el contexto en el que se devuelve