// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta.Utilizar para ello el método indexOf.

let tieneLetra = (cadena, letra) => {
    if (cadena.indexOf(letra) >= 0) {
        return true;
    } else {
        return false
    }
}
let a = tieneLetra("Hola", "o");
console.log(a)