// Variables y constantes

// variable: 	espacio en memoria donde se guarda informacion
// no pueden comenzar con numero

// let precio = 125;
// let impuesto = precio * 0.18;
// let descuento = precio * 0.1;
// let precioFinal = precio + impuesto - descuento;


// Otra forma de declarar varias variables, usando solo una vez let y separando cada una por coma
let precio = 125,
	 impuesto = precio * 0.18,
	 descuento = precio * 0.1,
	 precioFinal = precio + impuesto - descuento;

console.log(precio);
console.log(impuesto);
console.log(descuento);
console.log(precioFinal);


// Declarar constantes para datos que no van a variar
const fechaNacimiento = 1995;


// Al usar let el ambito de la variable es solamente el de su bloque
{
	let a = 10;

	// Las variables de afuera si tienen scope dentro del bloque
	console.log(a + ' Del primer bloque');
	console.log(precio + ' Impreso desde el bloque');
}

// Por lo que estas dos variables llamadas a no entran en conficto ni se sobreescriben
{
	let a = 20;
	console.log(a, ' Del segundo bloque');
}