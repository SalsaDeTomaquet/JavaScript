
let randomNumber = Math.floor(Math.random() * 5) + 1;
let play = true;
let intento = 0;
while (play) {
    let numero1 = Number(prompt('Introduce un número'));
    if (numero1 === randomNumber) {
        alert("gg");
        play = false;
    }
    else {
        alert("Tu numero introducido: " + numero1 + " esta mal.")
        intento++;
        if (intento === 3) {
            alert("Has perdido tu numero introducido es: " + numero1 + " y el numero random es: " + randomNumber)
            play = false;
        }

    }
}