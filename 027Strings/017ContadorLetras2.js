// Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
let contadorDeLetras = (c, l) => {
    let num = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i].toUpperCase() === l.toUpperCase()) {
            num++;
        }
    }
    return num;
}
let palabra = contadorDeLetras("lorem", "M")
console.log(palabra)
