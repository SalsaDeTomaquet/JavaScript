function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    } else if (val <= 5) { result = "Menor o igual a 5"; } return result;


}
let num = testElse(6);
console.log(num);