// Recorrer arrays sin usar ciclos

// .map() -> crear un nuevo array en el que se pueden realizar operaciones sobre cada elemento
// .filter() -> filtrar elementos del array original y devolverlos en nuevo array
// .reduce() -> tomar todos los elementos del array y devolver un unico valor (por ejemplo la suma de los elementos)

let estudiantes = [
	{
		nombre: 'Carlos',
		calificacion: 20
	},
	{
		nombre: 'Juan',
		calificacion: 12
	},
	{
		nombre: 'Maria',
		calificacion: 9
	},
	{
		nombre: 'Pepe',
		calificacion: 7
	},
	{
		nombre: 'Arturo',
		calificacion: 17
	}
];

// console.log(estudiantes[1]);

// .map(cb) -> Recibe un callback (una funcion) que se va a ejecutar en cada elemento del array
// Transforma cada elemento del array segun el callback y devuelve un nuevo array



// Forma tradicional con ciclo

// let estudiantesNombres = [];

// for (let i = 0; i < estudiantes.length; i++) {
// 	estudiantesNombres.push(estudiantes[i].nombre);
// }

// console.log(estudiantesNombres);


// Usando map()
// let estudiantesNombres = estudiantes.map( estudiante => estudiante.nombre );
// console.log(estudiantesNombres);



// .filter(cb) -> filtra elementos y crea un nuevo array con estos

// let estudiantesAprobados = estudiantes.filter( estudiante => estudiante.calificacion > 10 ); 
// console.log(estudiantesAprobados);

// let estudiantesAprobadosNombres = estudiantesAprobados.map( estudianteAprobado => estudianteAprobado.nombre );
// console.log(estudiantesAprobadosNombres);



// .reduce(cb(prev, current, i, array), initial) -> Devuelve un solo valor a partir de operaciones en los elementos

// i -> indice es OPCIONAL
// array -> es OPCIONAL
// initial -> es OPCIONAL


// EJERCICIO: Obtener promedio
let numeros = [2,4,60,8,10];

let suma = numeros.reduce( (a,b) => a + b );
// console.log(suma);

let max = numeros.reduce( (a,b) => a > b ? a : b );
// console.log(max);

// a > b ? a : b;

// if (a > b) {
// 	return a;
// } else {
// 	return b;
// }

let promedio = numeros.reduce( (a,b,i,arr) => {
	b += a;
	return (i == arr.length -1) ? b / arr.length : b;

	// if (i == arr.length - 1) {
	// 	return b / arr.length;
	// } else {
	// 	return b;
	// }
});
// console.log(promedio);


// EJERCICIO: Obtener mejor estudiante
// usando el array estudiantes

let mejorEstudiante = estudiantes
					  .reduce( (a, b) => {

					  	if (a.calificacion > b.calificacion) {
							return {
					  			nombre: a.nombre,
					  			calificacion: a.calificacion
					  		}					  		
					  	} else {
					  		return {
					  			nombre: b.nombre,
					  			calificacion: b.calificacion
					  		}
					  	}
					  } );

console.log(mejorEstudiante);