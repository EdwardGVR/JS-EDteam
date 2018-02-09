// Parametros por defecto y rest

/*
	Parametros por defecto	
*/

function sumar (a, b = 2) {
	return a + b;
}

// console.log(sumar(1, 4));
// console.log(sumar(1));



/*
Parametros rest

parecidos al spread operator
*/

			   // -> Parametro rest
			   //    ...elements es un array
function sumarTodos (m, n, ...elements) {
	return elements.reduce((a, b) => a + b);
}

console.log(sumarTodos('a', 'b', 1,2,3,5,6,7));