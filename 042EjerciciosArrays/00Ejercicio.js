let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    // const r = ...
    // console.log('getWomansName(): ' , r);
}
//JsonFormatter

fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
       characters.filter(character => character)
        console.log(characters);
        getWomansName();
    });