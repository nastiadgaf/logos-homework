let regexp = /(-?\.?\d)+/g;

let str = "-1.5 0 2 -123.4. -1.5.2";

console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4