// Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra.Utilizar para ello un bucle for.
let addGuiones = (letra, num) => {
    let palabra = " ";
    for (let i = 0; i < num; i++) {
        palabra += letra + " - ";
    }
    console.log(palabra)
}
addGuiones("Hola ", 5);