// Tipos de datos
// JS es dinamicamente tipado
// JS esta basado en prototipos, de donde vienen las propiedades de cada tipo de dato

// Tipos primitivos
/*
string (texto)
number (numeros) -> sin diferenciar entre enteros y flotantes
boolean (verdadero o false)
undefined
null
*/

// DATOS string (texto)

// let holaMundo = 'Hola \'mundo\'';

let amigo = "Juan Perez";

let numero = 2;
// let saludo = "Bienvenido, " + amigo;

// String template, para incluir variables en la cadena, sin tener que concatenar
let saludo = `Bienvenido, ${amigo} ${numero * 3} veces`;

// DATOS number (numeros)

let birth = 1995;
let year = new Date().getFullYear();
let edad = year - birth;

// Aqui no realiza la suma, sino que los concatena, ya que uno de ellos es string
//console.log(5 + '5');
//console.log('5' + 5);

// DATOS boolean (v / f)

let verdadero = true;
let falso = false;

if ('a' == 'b') {	// La condicion devuelve un boolean
	console.log("Son iguales");
} else {
	console.log("No son iguales");
}

// DATOS undefined
// Cuando no se le asigna valor a una variable

// Esta declarada, pero no se le ha asignado un valor
let noDefinida;

// DATOS null
// Cuando no existe la variable y no tiene un valor

let title = document.getElementById('title');

// Operador typeof
// es un operador unario que devuelve el tipo del dato que se le indica en parametro

console.log(typeof(true));
console.log(typeof("hola"));
console.log(typeof(20));



// Como guarda un numero, tenemos disponibles los metodos para numeros desde el prototipo
// let numero = 20;

// Como guarda un String, tenemos disponibles los metodos para cadenas desde el prototipo
// let saludo = 'Hola mundo';

// Tipos compuestos u objetos
/*
arrays
objects
maps
sets
function
*/