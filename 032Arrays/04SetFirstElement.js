// Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera.El valor recibido debería reemplazar lo que haya en la primera posición del array.El array debería ser devuelto.

//     Ejemplo:

// setFirstElement([1, 2], 3);

let element = setFirstElement = (arr, num) => {
    arr.shift()
    arr.unshift(num)
    return arr
}
let c = setFirstElement([1, 2], 3);
console.log(c);
