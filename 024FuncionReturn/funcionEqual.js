function testEqual(val) {
    if (val == 5) { // Cambia esta línea
        return "Equal";
    }
    return "Not Equal";
}
let num = testEqual(5);
console.log(num);