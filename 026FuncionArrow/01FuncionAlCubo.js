// Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.


let cubo = (x) => {
    let multicubo = x * x * x;
    console.log(multicubo);
    return multicubo;
}
let multicubo = cubo(3);
console.log(multicubo)

