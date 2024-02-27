//  Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

// Por ejemplo, la siguiente llamada a la función:

let toCase = (a) => {
    let palabra = a.toLowerCase() + "-" + a.toUpperCase();
    return palabra;
}
let b = toCase("Baca")
console.log(b);