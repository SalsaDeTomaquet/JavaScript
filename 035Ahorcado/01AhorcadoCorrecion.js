// Función para reemplazar un carácter en una posición específica dentro de una cadena
let replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

// Lista de palabras para elegir aleatoriamente
let words = ["azul", "amarillo", "rojo", "casa"];

// Elegir una palabra secreta al azar
let palabraSecreta = words[Math.floor(Math.random() * words.length)];

// Ocultar la palabra secreta con guiones bajos
let hiddenWord = palabraSecreta.replace(/./g, "_ ");

// Inicializar variable para controlar si se ha ganado
let won = false;

// Bucle principal del juego
while (!won) {
    // Mostrar la palabra oculta al jugador
    alert(hiddenWord);

    // Solicitar al jugador que introduzca una letra
    let letraIntroducida = prompt("Introduce una letra: ");

    // Inicializar variable para controlar si se ha encontrado la letra
    let letraEncontrada = false;

    // Buscar la letra introducida en la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        // Comparar la letra introducida (mayúscula o minúscula) con las letras de la palabra secreta
        if (palabraSecreta[i] === letraIntroducida) {
            // Reemplazar el guión bajo en la posición correspondiente con la letra encontrada
            hiddenWord = replaceAt(hiddenWord, letraIntroducida, i * 2);
            letraEncontrada = true;
        }
    }

    // Si la letra no se encuentra en la palabra secreta, mostrar un mensaje de fallo
    if (!letraEncontrada) {
        alert("Has fallado.");
    }

    // Si no hay más guiones bajos en la palabra oculta, el jugador ha ganado
    if (hiddenWord.indexOf("_") == -1) {
        alert("¡Has ganado! La palabra es: " + palabraSecreta);
        won = true;
    }
}
