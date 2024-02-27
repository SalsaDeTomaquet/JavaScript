// Escribe una función llamada firstChar que recibe como parámetro de entrada una cadena de texto y devuelva la primera letra que no sea un espacio.

// Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim().Si no sabes como funciona este método, intenta consultar primero su funcionamiento en internet y si aún así no lo entiendes, pregúntame y te lo explico:).

// Por ejemplo, la llamada a la función:

let firstChar = (a) => {
    a = a.trim()[0];
    return a;
}
let b = firstChar("        Hola                ");
console.log(b)