//  Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto.Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.

let generarNombre = (a, b, c) => {
    let error = "Error"

    if (a.length < 5 || b.length < 5 || c.length < 5) {
        return error;
    } else {
        return a.substring(0, 3) + b.substring(0, 3) + c.substring(0, 3);
    }
}
let tresCadenas = generarNombre("Holaaa", "Sosssy", "Pssablo");
console.log(tresCadenas)
