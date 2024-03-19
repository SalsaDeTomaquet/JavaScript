const addParagraph = (event) => {
    const number = document.querySelector('input').value;
    let code = '';
    for (let i = 0; i < number; i++) {
        code += 'Cositas guays ';
    }
    document.querySelector('.content').innerHTML = code;
}

document.querySelector('input').addEventListener('input', addParagraph);