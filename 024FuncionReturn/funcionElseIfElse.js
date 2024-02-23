function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else if (val < 5) {
        result = "Smaller than 5";
    } else if (val == 5) {
        result = "Equal to 5";
    }
    return result;
}
let num = testElse(6);
console.log(num);