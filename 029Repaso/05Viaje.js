// Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje.Para ello, solicitaremos al usuario el número de noches que pasará fuera y el destino del viaje

let destino = prompt("¿Donde quieres viajar? \n"
    + "·Oviedo\n" + "·Barcelona\n" + "·Madrid\n" + "·Tokyo")
let numNoches = prompt("Cuantas noches te quedas?")
let costeHotel = (numNoches) => {
    return numNoches * 140
}

let costeAvion = (destino, numNoches) => {
    let coste;
    if (destino == "oviedo") {

        coste = numNoches * 15;
    } else if (destino == "barcelona" || destino == "madrid") {
        coste = numNoches * 90
    } else if (destino == "tokyo") {
        coste = numNoches * 700
    }

    if (numNoches > 3) {
        return coste *= 0.9;
    }
    return
}


let costeAlquilerCoche = (numNoches) => {
    let alquiler = 40 * numNoches

    if (numNoches >= 7) {
        alquiler -= 50

    } else if (numNoches > 3) {
        alquiler -= 20

    } else ("No se aplica descuento.")
    return alquiler
}

let resultado1 = Number(costeHotel(numNoches));
let resultado2 = Number(costeAvion(destino.toLowerCase(), numNoches));
let resultado3 = Number(costeAlquilerCoche(numNoches));

console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);  
