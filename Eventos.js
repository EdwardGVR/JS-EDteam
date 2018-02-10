/*

Eventos
	
	Un evento es 'cualquier' cosa que sucede en la aplicacion


	Reconocer los eventos disponibles en un objeto

		console.dir(obj);

		Todos los que comiencen con 'on' son eventos


	Como aplicar una funcion a un evento 
		
		(NO recomendado)

		objeto.on[Event] = function () {};
			onEvent = evento del objeto

		El problema con esto es que despues no se puede crear otro evento en ese objeto


		
		(RECOMENDADO usar addEventListener)

		objeto.addEventListener('event', function () {})
			event -> el nombre del evento (sin 'on')
			function -> la funcion que se ejecuta al dispararse el evento


			(capturing NO suele usarse)
			PUEDE haber un tercer parametro, que puede ser true o false, el cual indicaria
			si va haber la fase de capturing o no

			La fase de capturing es el evento que se ejecuta al reves, es decir al contrario de que se ejecuten en el elemento mas interno

*/


/*

Eventos comunes

	Del mouse
		'click' 		-> Cuando el ususario hace click
		'dblclick' 		-> Doble click
		'mousedown' 	-> Poner el mouse sobre un elemento
		'mouseenter' 	-> El mouse entra al elemento
		'mouseleave'	-> El mouse sale del elemento
		'mousemove'
		'mouseout'
		'mouseover'
		'mouseup'
		'mousewheel'

	Del teclado
		'keydown' 		-> Se presiona una tecla
		'keyup'			-> Se levanta una tecla

	De formulario
		'submit'		-> Se envia el formulario
		'change'		-> Cambio de valor de un input
	
	De window
		'resize'		-> Cuando se redimensiona la ventana
		'scroll'		-> Se hace scroll
		'load' 			-> Cuando se carga completamente TODA la pagina web (scripts, css, ...)
		'DOMContentLoaded' -> Cuando se renderiza el DOM

*/

					//         e -> es el evento (tiene toda la informacion del evento)
					//				e.target -> el elemento donde se disparo el evento
// menu.addEventListener('click', e => {

//	prevent default evita el comportamiento predeterminado del navegador
//	Por ejemplo al hacer click en un enlace, no me llevara al destino del enlace

	// e.preventDefault();
	// e.target.style.backgroundColor = 'red';
// });



// Otra forma de escribir la funcion de arriba

// let eventHandler = e => {
// 	e.preventDefault();
// 	e.target.style.backgroundColor = 'red';
// };

// menu.addEventListener('click', eventHandler);



/*

Delegacion de eventos

	Cuando un evento se dispara hay dos fases:
		capture
		bubbling
		
		El evento empieza a ocurrir en el elemento mas escondido, mas profundo en el DOM
		y luego sube a los demas elementos

	Es mas facil asignar el evento en el padre cuando se quiere asignar un evento a muchos hijos


*/


let eventHandler = e => {

	e.preventDefault();
//			 los tagName son en mayusculas
	if (e.target.tagName === 'A') {
		console.log(e.target.textContent);
	}
};

menu.addEventListener('click', eventHandler);