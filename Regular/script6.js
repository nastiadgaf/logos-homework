

function parse(expr){
    let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

    let numbers = expr.match(regexp);
    return numbers;
}
let [a, op, b] = parse("1.2 * 3.4");

console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4