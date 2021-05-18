let content = document.querySelector('.content');
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let email = document.querySelector('#email');
let number = document.querySelector('#phone_number');
let password = document.querySelector('#password');
let button = document.querySelector('#button');

function checkFirstName(){
    let regexp = /[a-zA-Z]{1,20}$/;
    let val = firstName.value;
    if(!val.match(regexp)) {
        firstName.style.border = '3px solid red';
    }
}

function checkLastName(){
    let regexp2 = /[a-zA-Z]{1,20}$/;
    let val2 = lastName.value;
    if(!val2.match(regexp2)) {
        lastName.style.border = '3px solid red';
    }
}

function checkEmail(){
    let regexp3 =  /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    let val3 = email.value;
    if(!val3.match(regexp3)) {
        email.style.border = '3px solid red';
    }
};
function checkNumber(){
    let regexp4 =  /(?<=(^|\n)(38)?)(050|063|094)\d{7}(?=\r?\n|$)/;
    let val4 = number.value;
    if(!val4.match(regexp4)) {
        number.style.border = '3px solid red';
    }
};
function checkPassword(){
    let regexp5 =  /(?=.*[0-9])(?=.*[a-z_])(?=.*[A-Z]){8,15}/g;
    let val5 = password.value;
    if(!val5.match(regexp5)) {
        password.style.border = '3px solid red';
    }
};
button.addEventListener('click', function(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkNumber();
    checkPassword();
});