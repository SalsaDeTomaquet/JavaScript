// Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

let tieneLetra = (cadena, letra) => {
    if (cadena.toUpperCase().indexOf(letra.toUpperCase() >= 0)) {
        return true;
    } else {
        return false
    }
}
let a = tieneLetra("Hola", "O");
console.log(a)