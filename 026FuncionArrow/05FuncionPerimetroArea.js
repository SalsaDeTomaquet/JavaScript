// Crear estas dos funciones flecha:

// calculatePerimeter(radius); 
// Perímetro de la circunferencia = 2 * Math.PI * radio
// calculateArea(radius); 
// Área de la circunferencia = Math.PI * radio * radio
// Recoger los valores devueltos por las funciones y mostrarlos con un console.log.

let calculatePerimeter = (radius) => {
    radius = 2 * Math.PI * radius;
    return radius;
}
let perimetroRadio = calculatePerimeter(2);
console.log(perimetroRadio);

let calculateArea = (radius) => {
    radius = Math.PI * radius * radius;
    return radius;
}
let areaRadio = calculateArea(2);
console.log(perimetroRadio);