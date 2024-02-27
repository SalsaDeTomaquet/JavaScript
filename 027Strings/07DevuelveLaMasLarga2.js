// Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga.En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.

let devuelveMasLarga = (cadena1, cadena2, cadena3) => {
    cadena1 = cadena1.length;
    cadena2 = cadena2.length;
    cadena3 = cadena3.length;
    if (cadena1 > cadena2 && cadena1 > cadena3) {
        console.log("Cadena 1 es mas larga")
        return cadena1;
    } else if (cadena1 < cadena2 && cadena3 < cadena2) {
        console.log("Cadena 2 es mas larga")
        return cadena2;
    } else if (cadena3 > cadena1 && cadena3 > cadena2) {
        console.log("Cadena 3 es mas larga")
        return cadena3;
    } else {
        console.log("Hay almenos dos cadenas iguales")
        return cadena1
    }
}

cadenas = devuelveMasLarga("SAM", "MAX", "AC");
console.log(cadenas)