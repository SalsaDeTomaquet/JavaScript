let board = ["_", "_", "_", "_", "_", "_", "_", "_", "_",]
let printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}
let hasGanado = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != '_') {
        return true
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] != '_') {
        return true
    } else if (board[6] === board[7] && board[6] === board[8] && board[6] != '_') {
        return true
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] != '_') {
        return true
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] != '_') {
        return true
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] != '_') {
        return true
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] != '_') {
        return true
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] != '_') {
        return true
    } else { return false }

}
printBoard();
let winner = false;
let player1 = true;
while (!winner) {
    let num = Number(prompt("Introduce un numero del 0 al 8"))
    let player = player1 ? "X" : "O"
    board[num] = player
    player1 = !player1
    if (hasGanado()) {
        alert("El ganador es: " + player)
    }
    printBoard();
}