console.log(1 == '1'); // true, conversión automática del tipo de datos
console.log(1 === '1'); // false, ya que son datos de diferente tipo
console.log(0 == false); // true
console.log(0 === false); // false, ya que son datos de diferente tipo

const dato1 = 5;
const dato2 = 3;

if (dato1 > dato2) {
    console.log('dato1 es mayor que dato2');
}