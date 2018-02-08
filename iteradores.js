// funciones de ES6 para arrays

function nombre () {
	// CODE...
}

//nombre();

//parametro => // Valor retornado

// Si es mas de un parametro van entre parentesis
//(parametro1, parametro2) => // Valor retornado

// Si no tiene parametros
//() => // Valor retornado


// Devuelve el primer elemento que cumple con la condicion que se le pasa por callback

// ES6

// .find(cb);

let arr = [1,2,3,4,5];
let num = arr.find(el => el > 3);
let numIndex = arr.findIndex( el => el > 3 );
console.log(num);
console.log(numIndex);

// Iteradores
// Son objetos que contienen un metodo next()
// Ese metodo next devuelve un objeto con dos propiedades
// value, done

// .keys(), values()  -> No soportado, entries()

let iterador = arr.keys();
console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());