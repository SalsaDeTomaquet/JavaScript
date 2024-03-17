const nRandom = Math.floor(Math.random() * 6);

const evaluate = () => {
    const n = document.querySelector('#number').value;
    const r = document.querySelector('#result');
    if (n == nRandom) {
        r.value = 'Has acertado el número';
    } else {
        r.value = 'Has fallado el número';
    }
}

document.querySelector('button').addEventListener('click', evaluate);