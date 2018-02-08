// Switch

let color = prompt(`Escoge un color, escribe su numero:
1. Rojo
2. Verde
3. Azul
4. Negro
5. Amarillo
`);

switch (color) {
	case '1':
		console.log('Elegiste el rojo');
		break;	// detiene la ejecucion del switch
	case '2':
		console.log('Elegiste el verde');
		break;
	case '3':
		console.log('Elegiste el azul');
		break;
	case '4':
		console.log('Elegiste el negro');
		break;
	case '5':
		console.log('Elegiste el amarillo');
		break;
	default:
		console.log('Por favor escoge un color valido');
		break;
}