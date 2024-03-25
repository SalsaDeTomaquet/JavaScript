// Array de palabras aleatorias
const palabras = ["manzana", "naranja", "pera", "platano", "sandia", "melon", "uva"];

// Obtener elementos del DOM
const palabraSecretaElemento = document.getElementById("palabraSecreta");
const letraInput = document.getElementById("letraInput");
const enviarLetraBtn = document.getElementById("enviarLetra");
const letrasErroneasElemento = document.getElementById("letrasErroneas");
const contadorErroresElemento = document.getElementById("contadorErrores");

// Palabra secreta y palabra oculta inicial
let secretWord;
let hiddenWord;
let errores = 0;
let letrasErroneas = [];

// Función para seleccionar una palabra aleatoria del array
const seleccionarPalabraAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

// Función para reemplazar una letra en una posición específica de una cadena
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

// Función para iniciar el juego
const iniciarJuego = () => {
    // Restablecer errores y letras erroneas
    errores = 0;
    letrasErroneas = [];
    // Actualizar contador de errores
    contadorErroresElemento.textContent = 'Errores: ' + errores;

    // Seleccionar una palabra aleatoria
    secretWord = seleccionarPalabraAleatoria();
    // Convertir la palabra aleatoria en una palabra oculta
    hiddenWord = secretWord.replace(/./g, "_ ");

    // Mostrar palabra oculta inicial
    palabraSecretaElemento.textContent = hiddenWord;
    letrasErroneasElemento.textContent = '';
}

// Función para manejar el evento de clic del botón "Enviar"
enviarLetraBtn.addEventListener("click", () => {
    const letter = letraInput.value.toLowerCase();

    // Verificar si la letra está en la palabra secreta y actualizar la palabra oculta
    let letraEncontrada = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (letter === secretWord[i]) {
            hiddenWord = replaceAt(hiddenWord, letter, i * 2);
            letraEncontrada = true;
        }
    }

    // Actualizar el contenido del elemento HTML con la palabra oculta actualizada
    palabraSecretaElemento.textContent = hiddenWord;

    // Verificar si la letra no está en la palabra secreta
    if (!letraEncontrada) {
        // Incrementar el contador de errores
        errores++;
        // Actualizar contador de errores
        contadorErroresElemento.textContent = 'Errores: ' + errores;
        // Agregar la letra incorrecta a la lista
        letrasErroneas.push(letter);
        // Actualizar lista de letras erroneas
        letrasErroneasElemento.textContent = 'Letras erroneas: ' + letrasErroneas.join(', ');
    }

    // Verificar si todas las letras han sido adivinadas
    if (hiddenWord.indexOf("_") === -1) {
        alert('¡Bien! ¡Has ganado! La palabra secreta era: ' + secretWord);
    } else {
        // Limpiar el campo de entrada para la siguiente letra
        letraInput.value = "";
    }

});

// Iniciar el juego al cargar la página
iniciarJuego();