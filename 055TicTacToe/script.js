let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const color = turno % 2 ? 'red' : 'green';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if (haGanado()) {
        alert('¡Enhorabuena! ¡Has ganado! Jugador: ' + color);
        reiniciarJuego();
    } else if (turno === 9) {
        alert('¡Empate! ¡Nadie ha ganado!');
        reiniciarJuego();
    }
};

const haGanado = () => {
    const lineasGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6]              // Diagonales
    ];

    for (let linea of lineasGanadoras) {
        const [a, b, c] = linea;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return true;
        }
    }
    return false;
};

const reiniciarJuego = () => {
    turno = 0;
    tablero.length = 0; // Limpiar el tablero
    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = ''; // Restaurar color de los botones
    });
};

document.querySelectorAll('button').forEach((obj, i) => {
    obj.addEventListener('click', (e) => btnPulsado(e, i));
});
