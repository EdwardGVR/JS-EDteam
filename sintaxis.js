//console.log('Hola Mundo');	// Muestra la expresion entre parentesis en consola
//console.dir();	// Muestra informacion del objeto en consola

/*
* Comentario de 
* multiples
* lineas
*/

// Punto y coma no es obligatorio ya que usa ASI (Automatic semicolon interpreter)
// Sin embargo es una buena practica usarlo para evitar errores de sintaxis

// let holaMundo = 'Hola mundo';

// console.log(holaMundo);

// Al colocar las llaves se genera un nuevo ambito (scope)
{
	// hola existe dentro de este scope
	// let hola = 'hola';
	// console.log(hola);
}

// hola NO existe dentro de este scope
//console.log(hola);

// var tiene el problema de HOISTING con lo que una variable var puede estar declarada
// abajo, pero este disponible arriba, ademas var no tiene scope de bloque

// el interprete de JS ignora los espacios en blanco, sin embargo para una mejor legibilidad del codigo, se debe escribir ordenadamente
// tabulando el codigo, ya sea con tabs o espacios