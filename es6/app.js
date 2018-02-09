class Task {
	constructor (name) {
		this.name = name;
		this.isComplete = false;
	}

	complete () {
		this.isComplete = !this.isComplete;
	}
}

class TaskList {
	constructor (name) {
		this.name = name;
		this.tasks = [];
	}

	addTask (task, element) {
		this.tasks.push(task);
		this.renderTasks(element);
	}

	removeTask (i, element) {
		this.tasks.splice(i, 1);
		this.renderTasks(element);
	}

	renderTasks (element) {
		let tasks = this.tasks.map( task => `
			<li class="task" ${ task.isComplete ? 'complete' : '' }>
				<input type="checkbox" 
				       class="task__complete-button"
				       ${ task.isComplete ? 'checked' : '' }
				>
				<span class="task__name">${task.name}</span>
				<a href="#" class="task__remove-button">X</a>
			</li>
		` );

		// Para que elimine el ultimo elemento, le indicamos un string vacio '' como valor inicial
		element.innerHTML = tasks.reduce((a, b)  => a + b, '');
	}
}



// Trabajar con el DOM

const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('task-container');

const inbox = new TaskList('inbox');


// FUNCIONES PARA INTERACTUAR CON EL DOM

// Funcion para anadir tarea desde el DOM

// El parametro e es un objeto con propiedades del evento
function addDOMTask (e, list = inbox) {
	// Obtener el texto del input
	if (e.key === 'Enter') {
		// Crear la tarea instanciando la clase
		// en este contexto this es el elemento en el que el evento fue ejecutado
		let task = new Task (this.value);
		
		// Anadir la tarea a la lista
		list.addTask(task, taskContainerElement);

		// Borrar el texto del input
		this.value = '';
	}

	// console.log(e.key);
}

// Escuchador de eventos
// El navegador esta atento a cuando un evento ocurra, cuando este ocurre ejecuta acciones
// keyup -> cuando se suelta una tecla
// No se necesita poner parentesis en addDOMTask por que es un callback, y se ejecuta internamente

addTaskElement.addEventListener('keyup', addDOMTask);


// Obtener indice de la tarea actual
function getTaskIndex (e) {
	// Obtenemos el elemento de la tarea, el padre que es el li
	let taskItem = e.target.parentElement,
		// creamos un array con todos los elementos li
	    tasksItems = [...taskContainerElement.querySelectorAll('li')];
	    return tasksItems.indexOf(taskItem);
}


// Funcion para eliminar tarea desde el DOM
// Se le pasa el evento
function removeDOMTask (e, list = inbox) {
	// Se comprueba que se pulso el enlace (nombre de la etiqueta en mayuscula)
	if (e.target.tagName === 'A') {
		// Remover tarea de la lista (se necesita el indice)
		list.removeTask(getTaskIndex(e), taskContainerElement);
	}

	// console.log('remove');
} 


// Delegacion de eventos
// si se quiere detectar un evento en muchos elementos, no se pone un evento por cada uno
// Se crea el evento en el contenedor, y luego se detecta en cual de los hijos se ejecuto el evento
// El evento se escucha en el padre
taskContainerElement.addEventListener('click', removeDOMTask);


// Completar la tarea
function completeDOMTask (e, list = inbox) {
	// Identificar que se hizo click en el input (checkbox)
	if (e.target.tagName === 'INPUT') {
		// Completar la tarea de la lista (se necesita el indice)
		list.tasks[getTaskIndex(e)].complete();


		// Estoy en el input y nesecito ir al padre
		// classList -> lista que contiene a todas las clases de este elemento
		// toggle() -> metodo que cambia, anade o quita una clase cada vez

		// Esto es para que en el navegador se vea un cambio a traves de CSS (visualmente)
		e.target.parentElement.classList.toggle('complete');

		console.table(list.tasks);
	}
}

taskContainerElement.addEventListener('click', completeDOMTask);


// Todos los elementos del DOM son objetos //