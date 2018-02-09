// Objeto Math

/*
* Solo tiene propiedades y metodos estaticos (no es necesario instanciarlo para acceder a ellos)
*
*Algunos metodos son:
* Math.max(a, b, c, ...., n) 	-> Devuelve el mayor de una lista de numeros
* Math.min(a, b, c, ...., n) 	-> Devuelve el menor de una lista de numeros	
* Math.random() 				-> Devuelve un numero decimal aleatorio entre 0 y 1
* Math.floor()					-> Redondea un decimal hacia abajo
* Math.ceil()					-> Redondea un decimal hacia arriba
* Math.round()					-> Redondea un decimal a su entero mas cercano (3.7 -> 4 |||| 3.3 -> 3)
* Math.pow(x, n)				-> Eleva x al exponente n
* Math.sqrt(n)					-> Devuelve la raiz de n
*/

// let arr = [1,2,3,7,4,5];

// El spread operator separa, expande el arreglo y lo podemos usar como una lista
// console.log(...arr);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


// Obtener un numero ENTERO aleatorio

let getRandomNumber = (min, max) => {
	// Al multiplicar por el minimo tengo aleatorios entre el cero y el minimo
	return Math.floor(Math.random() * (max - min) + min);
};

console.log(getRandomNumber(10,12));

/*
min = 20
max = 30

la diferencia de (max - min) = 10

	Math.floor(Math.random() * (max - min) + min);

Al multiplicar por la diferencia tenfgo random entre 0 y la diferencia
Luego le sumo el minimo, para que si es random es 0, se le summa el minimo para que cumpla la condicion
*/

let arr = ['carlos', 'jose', 'pepe'];
console.log(arr[getRandomNumber(0, arr.length)]);


// Redondeamos hacia abajo por que queremos incluir el cero entre las posibilidades
// let randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);