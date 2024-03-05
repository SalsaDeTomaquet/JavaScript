// // Los siguientes pasos de resolución del ejercicio estarán dentro de un bucle while que se repetirá hasta que el usuario inserte y valide correctamente su nombre.
// 1. Se solicita al usuario la introducción de su nombre.
let formulario = true
while (formulario) {
    let nom = (prompt("Introduzca su nombre, por favor"))
    // Si el nombre introducido no tiene números, le preguntamos al usuario si ese es su nombre real.Si el usuario responde que no, volvemos a comenzar el proceso con una nueva iteración del bucle.
    // Para evaluar que el nombre introducido por el usuario no contenga ningún número debes buscar una función en internet que devuelva true o false en función de si la cadena recibida como parámetro tiene o no un número.
    if (nom != "") {
        let validarNombre = confirm("El nombre introducido no tiene ningun numero. ¿Su nombre es real? yes/no")
        if (validarNombre == true) {
            alert("Seguimos con el proceso de registro")
            formulario = false
            break
        }
        else {
            alert("Los datos introducidos son incorrectos. El nombre introducido tiene un número")
        }
    } else {
        alert("ERROR 404")
        break
    }
}


