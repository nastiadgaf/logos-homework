let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let signUp = document.querySelector('#signUp');
let userName = document.querySelector('.name');
let email = document.querySelector('.email');
let emailInput = document.querySelector('#email_input');
let womanImg = document.querySelector('#woman_img');
let manImg = document.querySelector('#man_img');
let radio = document.querySelectorAll('.input_radio');

signUp.addEventListener('click', function(){
    if(name.value && surname.value && emailInput.value){
        userName.textContent = name.value + surname.value;
        email.textContent = emailInput.value;
    };
    if(radio.value = 'man'){
        alert('fhda');
    } else if(radio.value = 'woman'){
        alert('fejid');
    };
});