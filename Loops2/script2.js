let num1 = 9;

function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return true;
  }

 for ( let j = num1;  ; j++){
   if (isPrime(j)) break;
 }

console.log(j);