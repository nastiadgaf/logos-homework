let name = prompt('Type in your name');
let age = prompt('Type in ypur age');

function checkAge(){
    if ( age >= 18){
        return (`Hello, ${name} you are welcome!`);
    } else{
        return (`Hello, ${name} you should grow up!`);
    }
}

alert (checkAge());