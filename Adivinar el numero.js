// EJERCICIO: Adivina el numero

let guessNumber = (min, max) => {
	let numMachine = getRandomNumber(min, max)
	let numPlayer;
	let count = 0;

	do {
		// lo ingresado en la ventana de prompt se devuelve siempre como string
		// numPlayer = prompt('Adivina el numero de la maquina');
		// Convertir el valor a number
		// numPlayer = Number(prompt('Adivina el numero de la maquina'));
		// Parsear (convertir) el valor a numero, en base decimal
		numPlayer = parseInt(prompt(`Adivina el numero de la maquina (entre ${min} y ${max})`), 10);
		count++;

		// Al ser dinamicamente tipado, JS lo convierte a number para realizar las comparaciones
		if (numPlayer > numMachine) {
			alert(`Tu numero es mayor que el de la maquina
Llevas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
		} else if (numPlayer < numMachine) {
			alert(`Tu numero es menor que el de la maquina
Llevas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
		} else {
			alert(`Adivinaste el numero!
Usaste ${count} ${count === 1 ? 'intento' : 'intentos'}`)
		}

	} while (numPlayer !== numMachine);
};


let getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

guessNumber(0, 20);