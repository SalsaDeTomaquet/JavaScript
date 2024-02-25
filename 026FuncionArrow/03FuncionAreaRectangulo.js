// Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.

// Recoger el valor devuelto y mostrarlo con un console.log.

// Cuando una función recibe varios parámetros, estos irán separados por coma.

let area = (alto, ancho) => {
    let rectangulo = alto * ancho;
    console.log(rectangulo);
    return rectangulo;
}
let rectangulo = area(5, 2);
console.log("El area del rectangulo es: " + rectangulo);