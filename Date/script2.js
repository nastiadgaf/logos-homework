
function printNumbers(from, to){
    if( from > to) return;
        console.log(from);
         return setTimeout(() => printNumbers(++from, to), 1000) ;
    
}

console.log(printNumbers(1,7));