// Esta función se encarga de filtrar los elementos según el color seleccionado
const filterThings = (e) => {
    // Obtenemos el botón que ha sido clicado
    const button = e.target;
    // Variable para almacenar el color seleccionado
    let thingToFilter = '';

    // Determinamos qué color se ha seleccionado
    if (button.classList.contains('yellow')) {
        thingToFilter = 'yellow';
    } else if (button.classList.contains('purple')) {
        thingToFilter = 'purple';
    } else if (button.classList.contains('green')) {
        thingToFilter = 'green';
    } else {
        // Si no se ha seleccionado ningún color específico, se muestra todo
        thingToFilter = 'all';
    }

    // Iteramos sobre todos los elementos con la clase '.box'
    document.querySelectorAll('.box').forEach(box => {
        // Si el elemento tiene la clase del color seleccionado o se ha seleccionado 'all', se muestra
        if (box.classList.contains(thingToFilter) || thingToFilter === 'all') {
            box.classList.remove('disabled');
        } else {
            // Si no coincide con el color seleccionado, se oculta
            box.classList.add('disabled');
        }
    });
}

// Agregamos un evento de clic a cada botón dentro del contenedor '.link'
document.querySelectorAll('.link button').forEach(button => {
    button.addEventListener('click', filterThings);
});
