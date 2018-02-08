// Strings

let saludo = 'Bienvenidos a Escuela Digital';

// Propiedades
let longitud = saludo.length;
console.log(saludo);

// Metodos sin parametros

// trim() quita los espacios al inicio y al final
console.log(saludo.trim());

// toUpperCase() lo transforma todo a mayusculas
console.log(saludo.trim().toUpperCase());

// toLowerCase() lo transforma todo a minusculas
console.log(saludo.trim().toLowerCase());



// Metodos con parametros

// indexOf(string, i) -> El primer parametro es el caracter o grupo de caracteres a encontrar, el segundo es la posicion desde donde empezar a buscar
// Devuelve el primer resultado que encuentra
console.log(saludo.indexOf('e', 4));
// Si no lo encuentra, devuelve -1

// lastIndexOf(string, i) -> funcionamiento similar a indexOf, solo que este empieza a buscar dede atras
// Por lo que al indicar en el segundo parametro, la posicion desde donde iniciar a buscar, la ubicara normalmente, y desde ahi empezara a 
// buscar en reversa
console.log(saludo.lastIndexOf('i', 20));

// replace(oldString, newString) -> reemplaza el oldString por el newString, guardando el resultado en una nueva string
let nuevoSaludo = saludo.replace('Escuela Digital', 'Bextlan');
console.log(nuevoSaludo);

// El string original no se modifica
console.log(saludo);

// split('separador', N) -> Convierte un string en un array
// El primer parametro es el criterio por el que se separaran los elementos y no es incluido en el nuevo array
// si se define en vacio (''), lo separa por caracteres
// El segundo parametro es la cantidad de elementos del array que se tomaran en cuenta

let arrayFromSaludo = saludo.split(' ');
console.log(arrayFromSaludo);