// Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra.Utilizar para ello un bucle for.

let contadorDeLetras = (c, l) => {
    let num = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === l) {
            num++;
        }
    }
    return num;
}
let palabra = contadorDeLetras("lorem", "m")
console.log(palabra)
