// Crear y llamar a una función flecha que recibe la velocidad en Km / hora y la devuelva en en metros / hora.Recoger el valor devuelto y mostrarlo con un console.log.
let km = (metros) => {
    metros = metros * 1000;
    return metros;
}
let metros = km(2);
console.log("2 km es igual a: " + metros + " metros")