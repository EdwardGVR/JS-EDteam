/*
DOM -> Document Object Model

El DOM se divide a traves de nodos

document
	Es el segundo objeto mas importante, despues de window
	
	A partir de document se dibuja todo el html de la pagina

	Cada elemento del html es un objeto
		Tiene propiedades
		Tiene metodos


	Algunos de los elementos que podemos obtener
		.body()				-> body element
		.documentElement 	-> root (html)
		.links 				-> enlaces
		.scripts 			-> scripts
		.images 			-> images
		.head 				-> head element
		.styleSheets 		-> Hojas de estilos	

*/




/*

Obtener elementos del DOM
	
	Siempre que se trabaje con el DOM se antepone document.

	document.getElementById('id')			-> Obtiene el elemento por su id
	document.querySelector('cssSelector')	-> Obtiene solo el primer el elemento, con cualquier selector valido de CSS
	document.querySelectorAll('cssSelector')-> Devuelve todos los elementos que coincidan con el selector CSS


	querySelector() y querySelectorAll()
		Se pueden ejecutar desde la raiz del documento o desde un elemnto que ya este guardado en memoria
		querySelectorAll() no devuelve un array, devuelve un (nodeList) por lo que es necesario expandirlo
			[...document.querySelectorAll(selector)]

	
	Si no se encuentra el o los elementos se devuelve null
*/

// Con JQuery los elementos se obtenian asi:
// Hacia la validacion internamente
// let title = $('#title');

// No encuentra el elemento y devuelve null
// let title = document.getElementById('title');

// textContent es el texto que esta dentro de un elemento
// title.textContent = 'Bienvenidos';

// El resto de la app que no se ejecutara por culpa del error de la linea anterior
// console.log('Hola mundo');


// Por eso se debe validar que los elementos con los que vamos a trabajar si san validos

// No se encuentra el elemento
// let title = document.getElementById('title');

// Validamos el elemento
// if (title) {
// 	title.textContent = 'Bienvenido';
// }

// El resto de la aplicacion sigue ejecutandose
// console.log('Hola');

let menu = document.getElementById('menu'),
	
// Ejecutando querySelectorAll() desde el elemento menu
menulinks = [...menu.querySelectorAll('li')];

// console.log(menu, menulinks);
// console.log(menulinks[2]);



/*
DOM transversing
	Moverse por el DOM


	.firstChild 		-> El primer hijo
	.firstElementChild 	-> El primer ELEMENTO HTML (etiqueta) hijo

	<div>
		Hola mundo --------------- .firstChild
		<a href = "#">ED</a> ----- .firstElementChild
	</div>



	elemento.firstElementChild 				-> El primer elemento hijo
	elemento.firstChild 					-> El primer nodo hijo
	elemento.lastElementChild 				-> El ultimo elemento hijo
	elemento.lastChild 						-> El ultimo nodo hijo

	elemento.nextElementSibling 			-> El elemento hermano siguiente
	elemento.nextSibling 					-> El nodo hermano siguiente
	elemento.previousElementSibling 		-> El elemento hermano anterior
	elemento.previousSibling 				-> El nodo hermano anterior

	elemento.parentElement 					-> El elemento padre
	elemento.parentNode 					-> El Nodo padre
	elemento.parentElement.parentElement	-> El elemento padre

	elemento.tagName 						-> El nombre de la etiqueta en mayusculas
	elemento.textContent 					-> El texto contenido como string, sin la etiqueta
	
	
	elemento.children 						-> Todos los ELEMENTOS hijos de elemento
	elemento.childNodes						-> Todos los nodos hijos de elemento, ya sean elementos (tags) o no
*/

// console.log(menulinks[0]);




/*

Propiedades de los elementos

	Contenido
		.textContent 						-> Texto plano del elemento (lectura y escritura)
		.innerHTML 							-> HTML interno de un elemento		
	

	Atributos
		.attributes 						-> Devuelve todos los artributos del elementos
		.getAttribute('atributo') 			-> Devuelve el atributo indicado en el parametro
		.id 								-> Devuelve directamente el id del elemento
		.classList 							-> Devuelve la o las clases del elemento

		.setAttribute('atributo', 'value') 	-> Define el atributo indicado en el primer parametro, con el valor indicado en el segundo
		.removeAttribute('atributo') 		-> Remueve el atributo indicado en el parametro


	Clases
		.classList -> Objeto que devuelve un nodeList con las clases del elemento y tiene los siguentes metodos
			.add('className') 				-> Se le pone la clase del parametro al elemento
			.remove('className') 			-> Se le quita la clase del parametro al elemento
			.toggle('className') 			-> Es un interruptor, si el elemento no tiene la clase se la pone, y si ya la tenia, se la quita
			.contains('className') 			-> Devuelve true si el elemento contiene la clase indicada en el parametro

	
	Estilos CSS
		
		Solo usar estilos mediante JS cuando estos requieran calculos, por ejemplo un efecto parallax o algo que no
		se pueda hacer directamente con CSS, de lo contrario se debe evitar ya que
		es una pesima practica

		.style
			.cssProperty 					-> Establecer una propieda CSS cualquiera (usar camelCase en vez de guiones)
			
			Ejemplo: 	item.style.backgroundColor = 'yellow';

*/



/*

Transformar el DOM

	Crear elementos
		document.createElements('tagName')


	Insertear elementos
		.appendChild()				-> Inseta un elemento al final del padre

				Ejemplo: parent.appendChild(element)

		.insertBefore() 			-> Inserta un elemento antes de otro

				Ejemplo: parent.insertBefore(newElement, nextElement)

						parent 		-> Elemento padre
						newElement 	-> Elemento a insertar
						nextElement -> Elemento ya existente antes del cual se insertara el nuevo elemento


		Eliminar y mover elementos del DOM

			Eliminiar

			parent.removeChild(element) 	-> Elimina element de padre (Respecto al padre) y devuelve el elemento removido
			elemento.remove() 				-> Elimina el elemento por si solo y no devuelve nada


*/

// let  item = menulinks[1];

// let el = document.createElement('li');
// el.textContent = 'Soy un nuevo elemento';
// menu.appendChild(el);


// menu.insertBefore(el, menulinks[1]);

// Cambiar la posicion del primer elemento y enviarlo al final
let el = menu.removeChild(menulinks[0]);
menu.appendChild(el);