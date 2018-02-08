// Metodos con parametros

let saludo = 'Bienvenidos a escuela digital';

// substring(a,b), substr(a,b), slice(a,b)
// Extraen una porcion del string

let substring, substr, slice;

// substring(a.b) -> devuelve un nuevo string que empieza desde el indice indicado en el primer parametro, hasta una posicion
// menos del indice indicado en el segundo parametro (no lo incluye)
// Si el segundo parametro es negativo, ira en reversa, a partir del primer parametro
substring = saludo.substring(4, 7);
console.log(substring);


// substr(a,b)	-> devuelve un nuevo string, iniciando en el indice del primer parametro
// Si el primer parametro es negativo, empieza a contar desde el final, (la cantidad de elementos del segundo parametro siempre seran hacia adelante)
// tomando en cuenta la cantidad de elementos indicados en el segundo parametro (no es un indice)
substr = saludo.substr(4, 5);
console.log(substr);

// slice(a, b) -> Al darle valores positivos, es igual a substring
// Al darle valores negativos:
// Negativo en el segundo parametro: no tomara la cantidad de valores, del final del string
// Negativo en el primer parametro: Cuenta esas posiciones desde el final y desde ahi empieza a contar
slice = saludo.slice(4, -7);
console.log(slice);


// Nuevos metodos con ES6 (devuelven un boolean)
// .startsWith(), endsWith(), includes()

console.log(saludo.startsWith('B'));
console.log(saludo.endsWith('l'));
console.log(saludo.includes('escuelal'));