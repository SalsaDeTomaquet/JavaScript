const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}

const evaluateWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== '_') {
        return true
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '_') {
        return true
    } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '_') {
        return true
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '_') {
        return true
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '_') {
        return true
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '_') {
        return true
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '_') {
        return true
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '_') {
        return true
    } else {
        return false
    }
}
let isPlayer1 = true;

let haGanadoAlguien = false;
while (!haGanadoAlguien) {
    printBoard();
    let posicion = prompt('Ingrese la posición. 0-8');
    const player = isPlayer1 ? 'X' : 'O';
    if (board[posicion] !== '_') {
        alert('Posición ocupada');
        continue;
    }
    board[posicion] = player;
    if (evaluateWin()) {
        alert('Ha ganado el jugador ' + player);
        haGanadoAlguien = true;
    }
    isPlayer1 = !isPlayer1;
}
