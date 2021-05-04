let content = document.querySelector('.content');
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let email = document.querySelector('#email');
let number = document.querySelector('#phone_number');
let password = document.querySelector('#password');
let button = document.querySelector('#button');

button.addEventListener('click', function(e){
    let regexp = /^(?=.{1,15}$)[a-zA-Z][a-zA-Z0-9]*(?: [a-zA-Z0-9]+)*$/;
    let val = firstName.value;
    if(val.match(regexp)) {
        alert('vufidn00');
    } else{
        alert('321');
    }
});

button.addEventListener('click', function(e){
    let regexp2 = /[a-zA-Z]{1,20}$/;
    let val2 = secondName.value;
    if(val2.match(regex2)) {
        alert('vufidn00');
    } else{
        alert('321');
    }
});

