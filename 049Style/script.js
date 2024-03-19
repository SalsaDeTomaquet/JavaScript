let cambiarColor = () => {
    document.querySelector(".respuesta").style.backgroundColor = 'red';
    document.querySelector(".respuesta2").style.backgroundColor = 'red';
    document.querySelector(".respuesta3").style.backgroundColor = 'red';
}
document.querySelector('button').addEventListener('click', cambiarColor);