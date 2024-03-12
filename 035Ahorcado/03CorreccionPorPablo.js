const words = ['casa', 'perro', 'coche', 'amor'];
const secretWord = words[Math.floor(Math.random() * words.length)];
let hiddenWord = secretWord.replace(/./g, "_ ");
alert(secretWord)
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}


let haGanadoAlguien = false;
while (!haGanadoAlguien) {
    alert(hiddenWord)
    const letter = prompt('Introduce una letra');

    for (let i = 0; i < secretWord.length; i++) {
        if (letter === secretWord[i]) {
            hiddenWord = replaceAt(hiddenWord, letter, i * 2);
        }
    }
    if (hiddenWord.indexOf("_") == -1) {
        alert('bien! has ganado')
        haGanadoAlguien = true;
    }

}