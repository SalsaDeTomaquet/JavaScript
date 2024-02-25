function nor(boolean1, boolean2) {
    if (boolean1 != true && boolean2 != true) {
        return "True";
    } else {
        return "False";
    }
}

let x = nor(false, true);
console.log(x)
