let sum = 0;

for( i = 1; i <= 60; i++){
    if ( i % 2 == 0 && i % 3 == 0 ){
        sum += i;
    }
}
console.log(sum);