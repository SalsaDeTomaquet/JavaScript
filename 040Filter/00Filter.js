const users = [
    {
        "name": "Paco",
        "isActive": false,
        "edad": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "edad": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "edad": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "edad": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "edad": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "edad": 7
    },
];
const choosedUser = users.filter(user => user.isActive == true); // Modifica esta línea para resolver el ejercicio

console.log(choosedUser)