const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
// const ojos = Object.values(testObj);      // Cambiar esta línea
// const nombre = Object.values(testObj);    // Cambia esta línea

const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;
console.log(ojos); // Debería mostrar: 2
console.log(nombre); //