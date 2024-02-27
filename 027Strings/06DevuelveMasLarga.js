// Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga.En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
let devuelveMasLarga = (cadena1, cadena2) => {
    cadena1 = cadena1.length;
    cadena2 = cadena2.length;

    if (cadena1 > cadena2) {
        console.log("Cadena 1 es mas larga")
        return cadena1;
    } else if (cadena1 < cadena2) {
        console.log("Cadena 2 es mas larga")
        return cadena2;
    } else {
        console.log("Las dos cadenas tienen la misma longitud")
        return cadena1;
    }

}

cadenas = devuelveMasLarga("aaaaaaaaaaaaaaaaaa", "cuarentabbbbbbbbbbbbbb");
console.log(cadenas)


