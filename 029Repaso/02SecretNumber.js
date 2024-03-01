// Calcular número secreto

let numero1 = Number(prompt('Introduce un número'));
let randomNumber = Math.floor(Math.random() * (5 - 1) + 1)
// alert(randomNumber)
if (numero1 == randomNumber) {
    alert("Tu numero introducido es: " + numero1 + " y el numero aleatorio generado es: " + randomNumber + " GG!")

} else {
    alert("Bad Game :(")
}