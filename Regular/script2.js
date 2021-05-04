let regexp = /#[a-fA-F0-9]\w{6}\b/g;

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str.match(regexp) )  // #121212,#AA00ef