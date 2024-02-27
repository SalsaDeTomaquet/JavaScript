// Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente.Utilizar para ello un bucle for.No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

let contadorDeLetras2 = (c, c2, l) => {
    let num = 0;
    let num2 = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i].toUpperCase() === l.toUpperCase()) {
            num++;
        }
    }
    for (let i = 0; i < c2.length; i++) {
        if (c2[i].toUpperCase() === l.toUpperCase()) {
            num2++;
        }
    }
    if (num > num2) return c;
    else if (num2 > num) return c2;
    else return 'son iguales';
}
let palabra = contadorDeLetras2("lorem", "maria", "e")
console.log(palabra)