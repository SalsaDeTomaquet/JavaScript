let numberDni = prompt("Introduzca el numero del dni sin la letra: ")

let calcularLetraDni = (numberDni) => {
    if (numberDni.length == 8 && Number(numberDni)) {
        let cadena = 'TRWAGMYFPDXBNJZSQVHLCKET'
        numberDni = parseInt(numberDni);
        let posicion = numberDni % (cadena.length - 1);
        return cadena[posicion];
    } else {
        alert("Introduzca un valor de 8 numeros")
    }

}
let c = calcularLetraDni(numberDni);
console.log(c)

alert("Hola jan")
confirm