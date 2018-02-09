// Fechas y horarios internacionales

/*
UTC es la referencia de donde se sacan los demas horarios

.getUTC...
.getTimezoneOffset() -> Decuelve la diferencia en minutos de la hora cero del meridiando de greenwich a la zona horaria local
*/

let date = new Date();

// Hora local
// console.log(date.getHours());

// Hora UTC de referencia internacional
// console.log(date.getUTCHours());

// Diferencia de minuto con Greenwich
// console.log(date.getTimezoneOffset());

let date2 = new Date('Feb 9 2018 17:00:00 GMT-0600');
let hours = date2.getHours(),
	utcHours = date2.getUTCHours(),
	difHours = new Date().getTimezoneOffset() / 60;

console.log(hours, utcHours, difHours);

// console.log(date2.getHours());

document.body.textContent = `${utcHours - difHours}`;