// loops
// Repetir una accion varias veces

// for

// declarar variable que recorre el for; limite; incremento / decremento
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

let teachers = ['Alexys', 'Jon', 'Daniel', 'Fransisco', 'Rafa', 'Jose', 'Alvaro'];

for (let i = 0; i < teachers.length; i++) {
	// if (teachers[i].toUpperCase().indexOf('A') == 0) {
	   if (teachers[i].toUpperCase().startsWith('J')) {
		// break;
		continue;
	}
	console.log(teachers[i]);
}

// break
// sale del ciclo

// continue
// se salta una iteracion del ciclo