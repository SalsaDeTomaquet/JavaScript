// Variable para almacenar el turno del jugador (inicia en 0)
let turno = 0;

// Arreglo para representar el estado del tablero del juego
const tablero = [];

// Función que se ejecuta cuando se hace clic en un botón del tablero
const btnPulsado = (e, pos) => {
    // Obtiene el botón que ha sido clicado
    const btn = e.target;

    // Verifica si la casilla ya ha sido marcada, si es así, sale de la función
    if (tablero[pos]) {
        return;
    }

    // Incrementa el turno para cambiar al siguiente jugador
    turno++;

    // Determina el color del botón basado en el turno actual (turno par = 'red', turno impar = 'green')
    let color;
    if (turno % 2 === 0) {
        color = 'red';
    } else {
        color = 'green';
    }

    // Cambia el color de fondo del botón clicado
    btn.style.backgroundColor = color;

    // Almacena el color del botón en la posición correspondiente del tablero
    tablero[pos] = color;

    // Verifica si algún jugador ha ganado después de cada movimiento
    if (haGanado()) {
        // Si ha ganado, muestra una alerta con el jugador ganador
        alert('¡Enhorabuena jugador ' + color + '!');
    }
}

// Función que verifica si algún jugador ha ganado el juego
const haGanado = () => {
    // Define las combinaciones ganadoras como un arreglo de arreglos
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]              // Diagonales
    ];

    // Itera sobre las combinaciones ganadoras
    for (const combinacion of combinacionesGanadoras) {
        // Obtiene los valores de las casillas de la combinación actual
        const [a, b, c] = combinacion;

        // Verifica si las casillas tienen el mismo color y no están vacías
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return true; // Devuelve true si hay una combinación ganadora
        }
    }

    // Si ninguna combinación ganadora es encontrada, devuelve false
    return false;
}


// Selecciona todos los botones del documento y añade un event listener a cada uno
document.querySelectorAll('button').forEach(
    // Itera sobre cada botón y añade un event listener para el evento de clic
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
);
