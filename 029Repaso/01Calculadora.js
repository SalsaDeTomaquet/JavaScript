// El usuario debe introducir dos números y un operador y visualizar por consola el resultado de la operación.Las operaciones serán +, -, *, /.

// Pasos para resolver el ejercicio:

// 1. Recogida de datos: numero1, numero2, operador.Los datos que recogemos de un prompt siempre serán texto, así que si queremos utilizar números, utilizaremos:
let numero1 = Number(prompt('Introduce un número'));
let numero2 = Number(prompt('Introduce un número'));

alert("Los numeros introducidos son: " + numero1 + " y " + numero2)
let operacion = prompt("Que operación quieres hacer: '+, -, *, /'")
let resultado = 0;
if (operacion == "+") {
    let resultado = numero1 + numero2
    alert("Tu resultado es: " + resultado)
} else if (operacion == "-") {
    resultado = numero1 - numero2
    alert("Tu resultado es: " + resultado)
} else if (operacion == "*") {
    resultado = numero1 * numero2
    alert("Tu resultado es: " + resultado)
} else if (operacion == "/") {
    resultado = numero1 / numero2
    alert("Tu resultado es: " + resultado)
} else {
    alert("Introduzca de nuevo la operacion que quiera realizar")
}