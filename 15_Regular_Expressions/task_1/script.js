let content = document.querySelector('.content');
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let email = document.querySelector('#email');
let number = document.querySelector('#phone_number');
let password = document.querySelector('#password');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    let regexp = /[a-zA-Z]{1,20}$/;
    let val = firstName.value;
    if(!val.match(regexp)) {
        alert('First name is not right');
    };
    let regexp2 = /[a-zA-Z]{1,20}$/;
    let val2 = lastName.value;
    if(!val2.match(regexр2)) {
        alert('Last name is not right');
    };
    let regexp3 =  /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    let val3 = email.value;
    if(!val3.match(regexр3)) {
        alert('Email is not right');
    };
    
    let regexp4 =  /(?<=(^|\n)(38)?)(050|063|094)\d{7}(?=\r?\n|$)/;
    let val4 = number.value;
    if(!val4.match(regexр4)) {
        alert('Number is not right');
    };

    let regexp5 =  /(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let val5 = password.value;
    if(!val5.match(regexр5)) {
        alert('Password is not right');
    };
});

