// Date
// Es un objeto con toda la info de la fecha y hora en el momento de ejecucion, requiere ser instanciado para usarse
// No es un clase, en JS no hay clases como tal, se ha adaptado la sintaxis para que sea mas comoda
// Pero JS esta basado en prototipos

//let date = new Date(),
//	date2 = new Date();
// console.dir(date);



// Metdos set

// Estos sets SOLO afectan a la instancia que se modifica
//date.setFullYear(1980);
//date.setMinutes(58);
//date.setHours(20);
//date.setDate(21);	// Fecha del mes
//date.setMonth(11);	// Va del 0 -> enero al 11 -> diciembre

// console.log(date, date2);



// Metodos get

// .getFullYear();
// .getMonth();			// Mes (0 -> enero)
// .getHours();			// 24 horas
// .getSeconds();
// .getMilliseconds();
// .getDate();			// La fecha del mes
// .getDay();			// Dia de la semana (0 -> domingo)
// .getTime();			// Milisegundos desde el 1 de enero de 1970

// let date3 = new Date();

// console.log(date3.getFullYear());
// console.log(date3.getMonth());
// console.log(date3.getDay());
// console.log(date3.getDate());
// console.log(date3.getHours());
// console.log(date3.getMinutes());
// console.log(date3.getTime());



/* EJERCICIO: Imprimir fecha y hora con formato personalizado */

// let date = new Date();

// Obtener el nombre del dia
// let getStringDay = date => {
// 	let days = [
// 		'Domingo',
// 		'Lunes',
// 		'Martes',
// 		'Miercoles',
// 		'Jueves',
// 		'Viernes',
// 		'Sabado'
// 	];

// 	return days[date.getDay()];
// };

// Obtener nombre del mes
// let getStringMonth = date => {
// 	let months = [
// 		'Enero',
// 		'Febrero',
// 		'Marzo',
// 		'Abril',
// 		'Mayo',
// 		'Junio',
// 		'Julio',
// 		'Agosto',
// 		'Septiembre',
// 		'Octubre',
// 		'Noviembre',
// 		'Diciembre'
// 	];

// 	return months[date.getMonth()];
// };

// este slice obtiebe los dos ultimos digitos
// let hourLeadingZero = num => ('0' + num).slice(-2);

// // Obtener hora am / pm
// let getAmPmHour = date => {
// 	let hours = date.getHours(),
// 		minutes = date.getMinutes(),
// 		seconds = date.getSeconds(),
// 		amPm = (hours >= 12) ? 'pm' : 'am';

// 	if (amPm === 'pm') hours -= 12;

// 	return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)} ${amPm}`;
// };



// let dateFormated = `
// 	${getStringDay(date)} 
// 	${date.getDate()} 
// 	de 
// 	${getStringMonth(date)}
// 	de 
// 	${date.getFullYear()}, 
// 	${getAmPmHour(date)}`;

// console.log(dateFormated);




// Definir fechas
/*
Una forma es por parametros
	 new Date(year, month, day, hours, minutes, seconds, milliseconds);

Otra forma es con los metodos set

Otra forma es con un string en cierto formato
*/

// Por parametros
// console.log(new Date(1995, 7, 16, 6, 53, 32));

// Con string
// Formato MM/DD/YY
// console.log(new Date('2/4/1980'));
// Se puede omitir el dia de la semana
// console.log(new Date('Tue Mar 28 2017 17:56:50 GMT-0600'));




// Operaciones con fechas
// El interprete maneja las fechas internamente con milisegundos (ms)

/*
ms / 1000 = seg

1s   = 1000ms
1min = 1000ms * 60
1hr  = 1000ms * 60 * 60
1dy  = 1000ms * 60 * 60 * 24
1yr  = 1000ms * 60 * 60 * 24 * 365

*/

let msToDateObj = ms => {
	// Math.floor -> redondea hacia abajo
	let seconds = Math.floor(ms / 1000),
	    minutes = Math.floor(ms / (1000 * 60)),
	    hours   = Math.floor(ms / (1000 * 60 * 60)),
	    days    = Math.floor(ms / (1000 * 60 * 60 * 24)),
	    months  = Math.floor(ms / (1000 * 60 * 60 * 24 * 30)),
	    years   = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

	return {years, months, days, hours, minutes, seconds};
};

let msToExpandDateObj = ms => {
	let years = msToDateObj(ms).years,
		// months = msToDateObj(ms).months ,
		days  = msToDateObj(ms).days % 365,
		hours  = msToDateObj(ms).hours % 24,
		minutes  = msToDateObj(ms).minutes % 60,
		seconds  = msToDateObj(ms).seconds % 60;

	return {years, days, hours, minutes, seconds};
};

let date = new Date(),
	date2 = new Date('Aug 16 1995 17:56:50 GMT-0600');


console.log(msToDateObj(date - date2));
console.log(msToExpandDateObj(date - date2));