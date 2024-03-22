document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        let txt = '';
        document.querySelectorAll('input[type="radio"]:checked').forEach((radioChecked) => {
            txt += '' + radioChecked.closest('p').textContent + '';
        });
        document.querySelector('.resultado').innerHTML = txt;
    });
});