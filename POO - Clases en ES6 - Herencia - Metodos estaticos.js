// POO

// Clases en ES6

// Es sugar syntax, una forma mas comoda de escribir, sin embargo
// la naturaleza sigue siendo basada en prototipos

class Persona {
	constructor(nombre, apellido, pais) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.pais = pais;
		this.nombreCompleto = `${nombre} ${apellido}`;

	}

	saludar() {
		return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
	}

	// static son metodos que puedes ser ejecutados sin necesidad de instanciar la clase
	static describirPersona (persona) {
		return 	`Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`;
	}
}

// Herencia, la primera clase hereda de la segunda
class Profesor extends Persona {
	constructor (nombre, apellido, pais, curso) {
		// super se trae los parametros de la clase padre
		super(nombre, apellido, pais);
		this.curso = curso;
	}

	invitarAlCurso () {
		return `Hola, soy ${this.nombreCompleto} y te invito al curso ${this.curso}`;
	}
}

class Estudiante extends Persona {

}

const alexys = new Persona('Alexys', 'Lozada', 'Colombia');
// console.log(alexys);
// console.log(alexys.saludar());

const juan = new Persona('Juan', 'Paredes', 'Espana');
// console.log(juan.saludar());

const daniel = new Profesor ('Daniel', 'Romero', 'Colombia', 'PHP desde cero');
console.log(daniel.saludar());
console.log(daniel.invitarAlCurso());


// Utilizando el metodo describirPersona de la clase Persona sin nesecidad de instanciarla, ya que es estatico
console.log(Persona.describirPersona(juan));
console.log(Persona.describirPersona(daniel));



class MiLibreria {
	constructor () {

	}

	static funcionalidadA () {
		return 'blablabla';
	}
}

console.log(MiLibreria.funcionalidadA());

// Definir propiedades estaticas (equivalente basado en prototipos)
// Clase.prototype.propiedadEstatica = 'Valor de la propiedad estatica';
Persona.prototype.propiedadEstatica = 'Valor de la propiedad estatica';

console.log(daniel.propiedadEstatica);