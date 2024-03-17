// Definir el tablero del juego
let board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

// Función para imprimir el tablero en una alerta
let printBoard = () => {
    alert(
        board[0] + "|" + board[1] + "|" + board[2] + "\n" +
        board[3] + "|" + board[4] + "|" + board[5] + "\n" +
        board[6] + "|" + board[7] + "|" + board[8]
    );
}

// Función para verificar si hay un ganador
let hasGanado = () => {
    // Combinaciones ganadoras posibles en el tablero
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]              // Diagonal
    ];

    // Verificar cada combinación ganadora
    for (let combo of combinacionesGanadoras) {
        let [a, b, c] = combo;
        if (board[a] !== '_' && board[a] === board[b] && board[a] === board[c]) {
            return true; // Hay un ganador
        }
    }
    return false; // No hay ganador
}

// Imprimir el tablero inicial
printBoard();

// Inicializar variables
let winner = false;
let player1 = true;

// Bucle principal del juego
while (!winner) {
    // Solicitar al jugador que elija una posición
    let num = Number(prompt("Introduce un número del 0 al 8"));

    // Obtener el símbolo del jugador actual (X o O)
    let player = player1 ? "X" : "O";

    // Verificar si la posición seleccionada ya está ocupada
    if (board[num] !== '_') {
        alert("La posición está ocupada. Por favor, elige otra.");
        continue; // Saltar esta iteración del bucle
    }

    // Colocar el símbolo del jugador en la posición seleccionada
    board[num] = player;

    // Alternar turno de jugador
    player1 = !player1;

    // Verificar si hay un ganador
    if (hasGanado()) {
        alert("¡El ganador es: " + player + "!");
        winner = true; // Establecer ganador como verdadero para salir del bucle
    }

    // Imprimir el tablero actualizado
    printBoard();
}
