// Operador ternario
// Forma abreviada de escribir un if
// condicion ? valorIfTrue : valorIfFalse;

// Para poder usarlo, deben estar contempladas ambos resultados de la condicion y no solo si es true

let nombre = prompt('Escribe tu nombre');

nombre.length > 5 ? console.log('tu nombre es largo') : console.log('tu nombre es corto');

// tambien se puede escribir el if en una sola linea
if (nombre.length > 5) console.log('Tu nombre es largo');