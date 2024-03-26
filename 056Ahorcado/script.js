// // Array de palabras aleatorias
// const palabras = ["manzana", "naranja", "pera", "platano", "sandia", "melon", "uva"];

// // Obtener elementos del DOM
// const palabraSecretaElemento = document.getElementById("palabraSecreta");
// const letraInput = document.getElementById("letraInput");
// const enviarLetraBtn = document.getElementById("enviarLetra");
// const letrasErroneasElemento = document.getElementById("letrasErroneas");
// const contadorErroresElemento = document.getElementById("contadorErrores");
// const slider = document.getElementsByClassName('slider');
// const reiniciar = document.getElementById("reiniciar")

// // Palabra secreta y palabra oculta inicial
// let secretWord;
// let hiddenWord;
// let errores = 0;
// let letrasErroneas = [];



// // Función para seleccionar una palabra aleatoria del array
// const seleccionarPalabraAleatoria = () => {
//     const indiceAleatorio = Math.floor(Math.random() * palabras.length);
//     return palabras[indiceAleatorio];
// }

// // Función para reemplazar una letra en una posición específica de una cadena
// const replaceAt = (string, character, index) => {
//     return string.substring(0, index) + character + string.substring(index + character.length);
// }

// // Función para iniciar el juego
// const iniciarJuego = () => {
//     // Restablecer errores y letras erroneas
//     contadorImagen = 0;
//     errores = 0;
//     letrasErroneas = [];
//     // Actualizar contador de errores
//     contadorErroresElemento.textContent = 'Errores: ' + errores;

//     // Seleccionar una palabra aleatoria
//     secretWord = seleccionarPalabraAleatoria();
//     // Convertir la palabra aleatoria en una palabra oculta
//     hiddenWord = secretWord.replace(/./g, "_ ");

//     // Mostrar palabra oculta inicial
//     palabraSecretaElemento.textContent = hiddenWord;
//     letrasErroneasElemento.textContent = '';
//     const carrousel = () => {
//         if (error > -2) {
//             error = error - 1;
//         } else {
//             error = 0;
//         }
//         console.log(error)
//         slider.style.marginLeft = sliderWidth * error + 'px';
//     }
// }

// // Función para manejar el evento de clic del botón "Enviar"
// enviarLetraBtn.addEventListener("click", () => {
//     const letter = letraInput.value.toLowerCase();

//     // Verificar si la letra está en la palabra secreta y actualizar la palabra oculta
//     let letraEncontrada = false;
//     for (let i = 0; i < secretWord.length; i++) {
//         if (letter === secretWord[i]) {
//             hiddenWord = replaceAt(hiddenWord, letter, i * 2);
//             letraEncontrada = true;
//         }
//     }

//     // Actualizar el contenido del elemento HTML con la palabra oculta actualizada
//     palabraSecretaElemento.textContent = hiddenWord;

//     // Verificar si la letra no está en la palabra secreta
//     if (!letraEncontrada) {
//         // Incrementar el contador de errores
//         errores++;
//         // Actualizar contador de errores
//         contadorErroresElemento.textContent = 'Errores: ' + errores;
//         // Agregar la letra incorrecta a la lista
//         letrasErroneas.push(letter);
//         // Actualizar lista de letras erroneas
//         letrasErroneasElemento.textContent = 'Letras erroneas: ' + letrasErroneas.join(', ');
//     }

//     // Verificar si todas las letras han sido adivinadas
//     if (hiddenWord.indexOf("_") === -1) {
//         alert('¡Bien! ¡Has ganado! La palabra secreta era: ' + secretWord.toUpperCase());
//     } else {
//         // Limpiar el campo de entrada para la siguiente letra
//         letraInput.value = "";
//     }

// });
// // Iniciar el juego al cargar la página
// iniciarJuego();
// Obtener elementos del DOM
const palabraSecretaElement = document.getElementById('palabraSecreta');
const letraInputElement = document.getElementById('letraInput');
const enviarLetraBtn = document.getElementById('enviarLetra');
const letrasErroneasElement = document.getElementById('letrasErroneas');
const contadorErroresElement = document.getElementById('contadorErrores');
const slider = document.querySelector('.slider');
const imagenAhorcado = document.querySelector('.pablo');

// Palabra secreta y variables de juego
let palabraSecreta = '';
let letrasAcertadas = [];
let letrasErroneas = [];
let errores = 0;

// Función para inicializar el juego
const iniciarJuego = () => {
    // Reiniciar variables
    palabraSecreta = obtenerPalabraSecreta(); // Aquí debes implementar tu lógica para obtener la palabra secreta
    letrasAcertadas = new Array(palabraSecreta.length).fill('_');
    letrasErroneas = [];
    errores = 0;

    // Mostrar la palabra oculta
    actualizarPalabraSecreta();

    // Limpiar campos y elementos
    letraInputElement.value = '';
    letrasErroneasElement.textContent = '';
    contadorErroresElement.textContent = 'Errores: 0';

    // Reiniciar el slider del ahorcado
    reiniciarAhorcado();
};

// Función para obtener la palabra secreta (debes implementar tu propia lógica)
const obtenerPalabraSecreta = () => {
    return 'javascript'; // Por ahora, devolveremos una palabra fija para simplificar
};

// Función para actualizar la palabra secreta en la interfaz
const actualizarPalabraSecreta = () => {
    palabraSecretaElement.textContent = letrasAcertadas.join(' ');
};

// Función para manejar el intento de adivinar una letra
const validarLetra = () => {
    const letra = letraInputElement.value.toLowerCase();
    letraInputElement.value = ''; // Limpiar el input

    if (!letra || !/[a-z]/.test(letra)) {
        alert('Por favor, introduce una letra válida.');
        return;
    }

    if (palabraSecreta.includes(letra)) {
        // La letra está en la palabra secreta
        palabraSecreta.split('').forEach((letraPalabra, index) => {
            if (letraPalabra === letra) {
                letrasAcertadas[index] = letra;
            }
        });
        actualizarPalabraSecreta();

        // Verificar si se ha completado la palabra
        if (!letrasAcertadas.includes('_')) {
            alert('¡Felicidades! Has adivinado la palabra secreta.');
            iniciarJuego();
        }
    } else {
        // La letra no está en la palabra secreta
        letrasErroneas.push(letra);
        letrasErroneasElement.textContent = `Letras erróneas: ${letrasErroneas.join(', ')}`;
        errores++;
        contadorErroresElement.textContent = `Errores: ${errores}`;

        // Mover el slider del ahorcado
        moverSliderAhorcado();
    }
};

// Función para mover el slider del ahorcado
const moverSliderAhorcado = () => {
    if (errores < palabraSecreta.length) {
        const posicion = 100 * errores; // Multiplica la posición base por el número de errores
        slider.style.transform = `translateX(-${posicion}%)`;
    }
};

// Función para reiniciar el slider del ahorcado
const reiniciarAhorcado = () => {
    slider.style.transform = 'translateX(0)';
};

// Eventos
enviarLetraBtn.addEventListener('click', validarLetra);

// Iniciar el juego al cargar la página
window.onload = iniciarJuego;
