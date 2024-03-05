// 1. Nuestro heroe entra en una mazmorra con dos puertas.La puerta 1 y la puerta 2. Una puerta lleva a una muerte segura y la otra a otra mazmorra.


let vida = true;
let randomNumber = () => { return Math.floor(Math.random() * 2 + 1) }
let randomNum = randomNumber();
while (vida) {
    let opcion = Number(prompt("Entras en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Tras una de las dos puertas, se encuentra una muerte segura. ¿Qué puerta escoges? 1/2"))
    if (opcion == randomNum) {
        alert("Has escogido sabiamente")

    } else {
        alert("Mala suerta. Un dragón te come")
        vida = false
        break
    }
}