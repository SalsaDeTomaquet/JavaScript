const showMenu = () => {
    document.querySelector('.panel').classList.toggle('active');
}

document.querySelector('.hamburguesa').addEventListener('click', showMenu)