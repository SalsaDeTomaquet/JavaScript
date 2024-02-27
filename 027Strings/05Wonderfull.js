//  Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

let imprimirLetras = (cadena) => {
    cadena = cadena.substring(3, 7);
    return cadena;
}
let cadena = imprimirLetras("Wonderful day");
console.log(cadena)