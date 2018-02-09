'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task(name) {
		_classCallCheck(this, Task);

		this.name = name;
		this.isComplete = false;
	}

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this.isComplete = !this.isComplete;
		}
	}]);

	return Task;
}();

var TaskList = function () {
	function TaskList(name) {
		_classCallCheck(this, TaskList);

		this.name = name;
		this.tasks = [];
	}

	_createClass(TaskList, [{
		key: 'addTask',
		value: function addTask(task, element) {
			this.tasks.push(task);
			this.renderTasks(element);
		}
	}, {
		key: 'removeTask',
		value: function removeTask(i, element) {
			this.tasks.splice(i, 1);
			this.renderTasks(element);
		}
	}, {
		key: 'renderTasks',
		value: function renderTasks(element) {
			var tasks = this.tasks.map(function (task) {
				return '\n\t\t\t<li class="task" ' + (task.isComplete ? 'complete' : '') + '>\n\t\t\t\t<input type="checkbox" \n\t\t\t\t       class="task__complete-button"\n\t\t\t\t       ' + (task.isComplete ? 'checked' : '') + '\n\t\t\t\t>\n\t\t\t\t<span class="task__name">' + task.name + '</span>\n\t\t\t\t<a href="#" class="task__remove-button">X</a>\n\t\t\t</li>\n\t\t';
			});

			// Para que elimine el ultimo elemento, le indicamos un string vacio '' como valor inicial
			element.innerHTML = tasks.reduce(function (a, b) {
				return a + b;
			}, '');
		}
	}]);

	return TaskList;
}();

// Trabajar con el DOM

var addTaskElement = document.getElementById('add-task');
var taskContainerElement = document.getElementById('task-container');

var inbox = new TaskList('inbox');

// FUNCIONES PARA INTERACTUAR CON EL DOM

// Funcion para anadir tarea desde el DOM

// El parametro e es un objeto con propiedades del evento
function addDOMTask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

	// Obtener el texto del input
	if (e.key === 'Enter') {
		// Crear la tarea instanciando la clase
		// en este contexto this es el elemento en el que el evento fue ejecutado
		var task = new Task(this.value);

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
function getTaskIndex(e) {
	// Obtenemos el elemento de la tarea, el padre que es el li
	var taskItem = e.target.parentElement,

	// creamos un array con todos los elementos li
	tasksItems = [].concat(_toConsumableArray(taskContainerElement.querySelectorAll('li')));
	return tasksItems.indexOf(taskItem);
}

// Funcion para eliminar tarea desde el DOM
// Se le pasa el evento
function removeDOMTask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

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
function completeDOMTask(e) {
	var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

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