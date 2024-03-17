// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]


let algo = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let a = 0;
let b = 0;
let c = 0;
for (let i = 0; i < algo.length; i++) {
    if (algo[i] > 0) {
        a++
    } else if (algo[i] < 0) {
        b++;
    } else {
        c++
    }
}
console.log(a)
console.log(b)
console.log(c)