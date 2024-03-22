const trs = document.querySelectorAll('.cuadrado');

trs.forEach((tr) => {
    tr.addEventListener('click', () => {
        trs.forEach((tr) => {
            tr.style.backgroundColor = 'transparent';
        });
        tr.style.backgroundColor = 'red';
        tr.querySelector('input[type=radio]').checked = true;
    });
});