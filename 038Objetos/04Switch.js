function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    // Sólo cambia el código por encima de esta línea
    return lookup[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago