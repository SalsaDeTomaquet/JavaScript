//Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

let devuelvePrimeraLetra = (primeraLetra) => {
    primeraLetra = primeraLetra.charAt(0)
    return primeraLetra;
}
let primeraLetra = devuelvePrimeraLetra("CadenaTexto");
console.log(primeraLetra);
