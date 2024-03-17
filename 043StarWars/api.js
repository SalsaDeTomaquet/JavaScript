
let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const gender = characters.filter(character => character.gender == "female")
    gender.map(character => console.log(character.name))
    console.log(gender)
}
const getSmallerPeople = () => {
    const alturas = characters.map(character => ({ ...character, height: character.height - 10 }))
    console.log(alturas)
}
const sumaDePeso = () => {
    // const pesos = characters.map(peso => Number(peso.mass))
    // const sumaPesos = pesos.reduce((acc, suma) => acc + suma, 0)
    const pesos = characters.reduce((acc, suma) => acc + Number(suma.mass), 0)
    console.log(pesos)
    // console.log(sumaPesos)
}

const mediaDeAltura = () => {
    const medioAltura = characters.reduce((acc, character) => acc + Number(character.height), 0) / characters.length

    console.log(medioAltura)
}
const collectByIndex = (index) => {
    collectedCharacters.push(characters[index])
    console.log(collectedCharacters)

}
//Estudia a partir de aqui
const collectByName = (characterName) => {
    const characterNames = characters.find(characterName => characterName.name === characterName)
    collectedCharacters.push(characterNames);
    console.log(collectedCharacters);

}
const removeByName = (characterName) => {
    const removeNames = characters.filter(character => character.name != removeNames);
    console.log(removeNames);
}
const getCharacterFilms = (characterName) => {
    const movies = characters.find(character => character.name === characterName);
    console.log(movies.films);
}
const collectByName2 = (characterName) => {


}
const mediaDeAltura2 = () => {
    const medioAlturaDos = characters.reduce((acc, character) => acc + Number(character.height), 0) / characters.length;
    console.log(medioAlturaDos);
}
const removeByName2 = (charactersName) => {
    const removeNamesDos = characters.filter(character => character.name !== charactersName);
    console.log(removeNamesDos);
}



fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        getWomansName();
        getSmallerPeople();
        sumaDePeso();
        mediaDeAltura();
        collectByIndex(0);
        collectByName();
        removeByName();
        getCharacterFilms();
        mediaDeAltura2();
        collectByName2();
        removeByName2();
    });