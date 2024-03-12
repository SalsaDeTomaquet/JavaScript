// Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.

let algo = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

let positivesAmount = 0;
let negativosAmount = 0;

let positivesSum = 0;
let negativesSum = 0;



for (let i = 0; i < algo.length; i++) {

    if (algo[i] > 0) {
        positivesAmount++
        positivesSum += algo[i];
    } else if (algo[i] < 0) {
        negativosAmount++
        negativesSum += algo[i];
    }

}
let positivesMedia = positivesSum / positivesAmount;
let negativesMedia = negativesSum / negativosAmount;
console.log(positivesMedia, negativesMedia)