
// Completar la función para que se cumplan las siguientes condiciones:

// function testSize(num) {
//     return "Change Me"; // Quitar esta línea y poner en su lugar la lógica pertinente (bloques de tipo if/else)
// }
// num < 5 → return "Tiny";
// num < 10 → return "Small";
// num < 15 → return "Medium";
// num < 20 → return "Large";
// num >= 20 → return "Huge";

function textSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Error";
    }

}
let size = textSize(120);
console.log(size)