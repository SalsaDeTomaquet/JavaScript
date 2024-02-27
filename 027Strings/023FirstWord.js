// Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena.La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

// Por ejemplo:

let firstWord = (a) => {
    let b = a.indexOf(" ");
    let c = a.substring(0, b)
    return c;
}
let d = firstWord("algo y mas")
console.log(d)