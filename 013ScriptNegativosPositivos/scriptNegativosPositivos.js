//Declara una constante ‘i’ de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo, si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo
const i = 5;
if (i >= 0) {
    console.log("Tu resultado es Positivo: " + i)
} else {
    console.log("Tu resultado es Negativo: " + i)
}
if (i % 2 == 0) {
    console.log("Tu resultado es Par: " + i)
} else {
    console.log("Tu resultado es Impar: " + i)
}
if (i % 5 == 0) {
    console.log("Tu resultado es Multiplo de 5: " + i)
} else {
    console.log("Tu resultado no es Multiplo de 5: " + i)
}
if (i % 10 == 0) {
    console.log("Tu resultado es Multiplo de 5: " + i)
} else {
    console.log("Tu resultado no es Multiplo de 5: " + i)
}
if (i > 100) {
    console.log("Tu resultado es mayor de 100: " + i)
} else {
    console.log("Tu resultado es menor de 100: " + i)
}
