//Ejercicio generador de letras aleatorias.
// Partiremos de una constante que almacene tu nombre.Luego, crearemos un número al azar dentro del rango de letras que contiene tu nombre.Ese número será la posición de la letra aleatoria de tu nombre que queremos obtener.

// Tendrás que usar los siguientes códigos:

// Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
// nombre.charAt();
// nombre.length;

// Pasos para resolver el ejercicio:

// Declaramos una constante con nuestro nombre.
// Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
// Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición.
// Mostramos la letra en la consola.


let randomLetterInt = (a) => {
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    return c;
}
let randomLetter = randomLetterInt("Roberto");
console.log(randomLetter)

//Dudas