// Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

let devuelveEnesimaLetra = (cualquierLetra, n) => {
    return cualquierLetra[n];
}

let enesimaLetra = devuelveEnesimaLetra("Ferdnando", 7);
console.log(enesimaLetra);