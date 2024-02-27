// Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
let crearPalabra = (letra, num) => {
    let palabra = " ";
    for (let i = 0; i < num; i++) {
        palabra += letra.toUpperCase();
    }
    console.log(palabra)
}
crearPalabra("Hola ", 5);