// Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera.La función no debería tener en cuenta mayúsculas y minúsculas.

let indexOfIgnoreCase = (a, b) => {
    c = a.toUpperCase() + b.indexOf(b.toUpperCase());
    return c;

}
let d = indexOfIgnoreCase("bit ", "IT")
console.log(d)