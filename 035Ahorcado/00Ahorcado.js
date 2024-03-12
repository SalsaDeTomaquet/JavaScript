let replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}


let word = ["azul", "verde", "rojo", "casa"]
let palabraSecreta = word[Math.floor(Math.random() * word.length)]
let hiddenWord = palabraSecreta.replace(/./g, "_ ");

let won = false
while (!won) {
    alert(hiddenWord)
    let letraIntroducida = prompt("Introduce una letra: ")
    let letraEncontrada = false
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i].toUpperCase() === letraIntroducida.toUpperCase()) {
            hiddenWord = replaceAt(hiddenWord, letraIntroducida, i * 2);
            letraEncontrada = true
        }
    }
    if (!letraEncontrada) {
        alert("Has fallado" + "La palabra es: " + palabraSecreta)
    }
    if (hiddenWord.indexOf("_") == -1) {
        alert("Has ganado!" + "La palabra es: " + palabraSecreta)

        won = true
    }

}