function duplica(name, surname) {
    return name + " and " + surname;
}
let x = duplica("Alvaro", "Mota");
let y = duplica("Alb", "a");
console.log(duplica(x, y))


function textSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Error";
    }

}
let size = textSize(120);
console.log(size)