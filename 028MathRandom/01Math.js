//Obtener un número aleatorio entre 5 y 7.


let randomIntFromInterval = (min, max) => {
    number = Math.floor(Math.random() * (max - min + 1) + min)
    return number;
}
let randomInt = randomIntFromInterval(7, 5);
console.log(randomInt)