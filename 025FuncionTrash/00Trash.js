function callback() {
    console.log('Llamada al callback');
}

function empezarTodo(a, b, myCallback) {
    console.log(a, b);
    myCallback();
}

empezarTodo(3, 4, callback); ñ