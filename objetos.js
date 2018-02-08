// Objetos

// let yo = {
//  propuedad: valor
// 	nombre: 'edd',
// 	edad: 22,
// 	pais: 'SV'
// }

// console.log(yo);
// console.log(yo.nombre);
// console.log(yo.edad);
// console.log(yo.pais);

// yo.ciudad = 'SS';

// console.log(yo.ciudad);

const ED = {
	nombre: 'Escuela Digital',
	sedes: ['Bogota', 'Lima'],
	profesores: ['Alexys', 'Daniel', 'Rafa', 'Jon', 'Fransisco', 'Alvaro'],
	fundacion: 2010,
	mejorPlataforma: true,
	eslogan: 'Educacion con honestidad',
	usp: 'Somos el primer sitio de educacion en espanol orientada a proyectos',
	// ES6
	saludar() {
		return 'Bienvenidos a escuela digital';
	}
};

// console.log(ED);

// Operadores en los objetos

// delete -> elimina una propiedad
// in -> devuelve true si existe la propiedad en el objeto o en la cadena de prototipos

// delete ED.fundacion;
// console.log(ED);

// console.log('profesores' in ED);

Object.prototype.numeroMagico = 27;

// console.log('numeroMagico' in ED);
// console.log(ED.numeroMagico);


// hasOwnProperty -> verifica si la propiedad existe propiamente en el objeto como propia y no heredada
// console.log(ED.hasOwnProperty(numeroMagico));
// console.log(ED.hasOwnProperty('eslogan'));

// Se pueden agregar propiedades aunque este definido como const
ED.comunidad = true;
// console.log(ED.hasOwnProperty('comunidad'));

// Crear una copia de un objeto
// ES6

// let ED2 = Object.assign({}, ED);
// console.log(ED);

// Asignar variables existentes a propiedades
let a = 'Hola', b = 'Mundo';


// Forma antigua
// let myObj = {
// 	a: a,
// 	b: b
// }

// Forma nueva ES6
let myObj = {
	a,
	b
}

console.log(myObj);

// Expresiones en el nombre de propiedades

// EXPRESION
// Cualquier porcion de codigo que devuelve un valor

let myObj2 = {
	// Se concatenan las variables
	[a + b]: 'Hola mundo'
}

console.log(myObj2);