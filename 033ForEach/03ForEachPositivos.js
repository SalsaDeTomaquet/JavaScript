// Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.Los valores habrán sido harcodeados en un array.La salida por consola debería ser similar a esta:
let numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivosCounter = 0;
let negativesCounter = 0;
let positivosSum = 0;
let negativesSum = 0;
let zerosCounter = 0;
numbers.forEach(numbers => {
    if (numbers > 0) {
        positivosCounter++
        positivosSum += numbers

    } else if (numbers < 0) {
        negativesCounter++
        negativesSum += numbers
    } else {
        zerosCounter++
    }
})
console.log("Positivos: " + positivosCounter / positivosSum)
console.log("Negativos: " + negativesCounter / negativesSum)
console.log("Ceros: " + zerosCounter)