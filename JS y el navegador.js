// JavaScript y el navegador

/*
API -> Application Programming Interface => Conjunto de propiedades, objetos, metodos
											que podemos usar para crear funcionalidades

Esto NO es parte del lenguaje en si (NO es parte del core);

Con JavaScript accedemos a las APIs del navegador

******************************************************************************************

objeto window -> Es el padre de todos los objetos (En el navegador)

alert('Hola mundo') === window.alert('Hola mundo')
console.log('Hola') === window.console.log('Hola')

*/


/*
Propiedades -> Devuelven informacion
	
	Dimensiones
		.innerWidth		-> tamano del contenido -- No cuenta la barra de scroll
		.innerHeight	-> tamano del contenido
		.outerWidth		-> El ancho de la VENTANA
		.outerHeight	-> El alto de la VENTANA del navegador

		(Se recomienda siempre usar window.)


	Coordenadas de la esquina superior derecha de la ventana del navegador respecto a la pantalla (monitor)
		screenX			-> Coordenada horizontal 
		screenY			-> Coordenada vertical


	Scroll (Podemos saber cuanto scroll hay)
		scrollX			-> Cuanto scroll en horizontal
		scrollY			-> Cuanto scroll en vertical

(Medidad en pixeles)


	Storage (Guardar informacion en el navegador en formato JSON)
		localStorage 	-> Se mantiene el registro aun despues de cerrar el navegador o apagar la PC
						   Puede ser borrado manualmente.
		sessionStorage 	-> Almacenamiento local que se borra al cerrar el navegador

JSON: Es un equivalente a los objetos de JS (clave: valor), con la diferencia de que no admiten metodos
	  y las claves siempre deben estar encerradas entre comillas dobles ("clave": valor)

	  Un JSON realmente no es un objeto, es un String, se debe usar por ejemplo json.parse para convertir
	  el json a un objeto, o json.stringify para convertirlo en string


*** Metodos de window ***

	Dialogos
		alert()			-> Manda un mensaje en un cuadro de dialogo
		prompt()		-> Muestra un cuadro de dialogo con un input, guarda lo que introduzcamos en una variable (string)
		confirm()		-> Podemos formular preguntas cuyas opciones de respuesta sean si o no, acepto o rechazo..
						   Al hacer click en ok devuelve true, al hacer click en cancelar devuelve false


	Manipular ventanas
		.open('url')	-> Abre una nueva ventana (popup) -- Tomar en cuenta que en la actualidad los navegadores bloquean estas ventanas
						   Se debe poner la direccion con todo el protocolo (http[s]://www.example.com)
		
		.close()		-> Cierra una ventana -- Solamente cierra ventanas que se hayan abierto mediante el propio script (tu propio codigo)
		
		.getSelection()	-> Obtiene un objeto, entre cuyas propiedades esta data, donde esta la seleccion realizada con el mouse
						   se puede utilizar window.getSelection().toString() para obtener directamente el texto
		
		.getComputedStyle(element) 

						-> Devuelve un objeto con todas las propiedades CSS computadas (las que realmente se aplican)
						   del elemento que se le pasa por parametro

						   Podemos acceder a una regla css en especifico usando la notacion de punto

						   		window.getComputedStyle(elemento).propiedadcss;

						   	Si la propiedad en css lleva guion, no la escribimos asi en JS, sino que usamo camelCase
								
								window.getComputedStyle(elemento).propiedadcssConGuiones;									


	Manipular el scroll (Podriamos crear un evento que haga que el scroll vaya a determinado lugar)
		.scrollTo(x, y)	-> Nos envia a la posicion x, y
		.scrollBy(x, y)	-> Suma o resta (dependiendo del signo de las coordenadas) a la posicion ACTUAL los valores x, y

*/




/*

*** Objeto hystory ***

Guarda el historial de la pestana actual y de la sesion actual
(NO es el historial completo del navegador)
(Al cerrar la pestana o el navegador se pierde esta informacion)

window.history 	-> su propiedad length indica la cantidad de paginas a las que podemos acceder
				   con los botones atras (<-) y adelante (->) del navegador

	Metodos para moverme en el historial
		.back()		-> moverme hacia atras
		.forward()	-> moverme hacia adelante
		.go(n)		-> moverse en el historial
							n positivo: va hacia adelante	|	Ejemplo n = 2 es como presionar dos veces el boton adelante (->) del navegador
							n negativo: va hacia atras	|	Ejemplo n = -2 es como presionar dos veces el boton atras (<-) del navegador


*/




/*

*** Objeto navigator ***

Nos da las propiedades del navegador -- muchas del propio fabricante
	Podriamos identificar el navegador por medio de propiedades cuyos valores sean identificativos


	geolocation
		
		Es un objeto con tres metodos
		Es una propiedad estandar
		Es la API de Geolocalizacion

	dentro del prototipo tenenos:

		watchPosition() 		-> Obtener la posicion del sujeto mientras se mueve

							hint: [corchetes indican que esos parametros son opcionales]
		getCurrentPosition(success[, error, options])
								-> Obtener la posicion actual, fija
									-- Devuelve un objeto Position con las propiedades
											coords
											timestamp
									-- Tiene tres parametros de los cuales solo success es obligatorio
									   
									   success -> es una funcion

		clearWatch()			-> Es para limpiar el watchPosition()


*/

// navigator.geolocation.getCurrentPosition(function (geoposition) {
// 	let coords = geoposition.coords,
// 		lat = coords.latitude,
// 		long = coords.longitude;

// 	// Obtenemos las coordenadas que podemos usar para ubicar por ejemplo en Gmaps
// 	console.log(lat, long);
// });




/*

*** Objeto location ***
	
	Objeto que esta dentro de window
	Contiene la informacion de la pagina actual

	-- Propiedades
		.href		-> url
		.hash 		-> el marcador #
		// Video en el canal de youtube para ir a un lugar determinado de la pagina usando #

		.pathname	-> La ruta dentro del dominio
		.origin 	-> protocol + hostname
		.protocol 	-> http o https
		.hostname	-> hostname (dominio o IP)
		.host 		-> hostname y port
		.port 		-> puerto
		.search 	-> parametros de busqueda ?id=1

*/

/*
Ejercicio: Determinar item activo de un menu
*/

function getCurrentMenuItem (containerElement) {
	let url = location.href,
		links = [...containerElement.querySelectorAll('a')];

	links.map(link => {
		if (link.href === url) return link.classList.add('active');
	})
}

getCurrentMenuItem(document.getElementById('menu'));