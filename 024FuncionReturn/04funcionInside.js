// Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.
function test(val) {
    if (val >= 10 && val <= 20) { // Cambia esta línea
        return "Inside";
    } else {
        return "Outside";
    }
}
let valor = test(12);
console.log(valor);