let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let signUp = document.querySelector('.sign-up');
let signOut = document.querySelector('#sign-out');
let userName = document.querySelector('.name');
let email = document.querySelector('.email');
let emailInput = document.querySelector('#email_input');
let womanImg = document.querySelector('#woman_img');
let manImg = document.querySelector('#man_img');
let radio = document.querySelectorAll('.input_radio');
let select = document.querySelector('#select');
let proffesion = document.querySelector('.proffesion');
let agrement = document.querySelector('#agrement');
let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#information');
let imageClass = document.querySelector('.image');
signUp.setAttribute('disabled', true);
signUp.classList.add('sign-up-disabled');

function fullBlock() {
    userName.textContent = name.value + ' ' + surname.value;
    email.textContent = emailInput.value;

    radio[0].checked ? imageClass.style.backgroundImage = 'url("img/Без названия (1).jfif")' :
        imageClass.style.backgroundImage = 'url("img/Без названия.jfif")';

    for (let i = 0; i < select.length; i++) {
        if (select[i].selected) {
            proffesion.textContent = select[i].value;
            break;
        }
    }
    form1.style.display = "none";
    form2.style.display = "block";
}

function clearForm() {
    form2.style.display = "none";
    form1.style.display = "block";
    name.value = '';
    surname.value = '';
    emailInput.value = '';
    radio[0].checked = false;
    radio[1].checked = false;
    select[0].selected = true;
    agrement.checked = false;
    signUp.setAttribute('disabled', true);
    signUp.classList.add('sign-up-disabled');
    signUp.classList.remove('sign-up-enabled');
}
notChekedName = name.value.length < 1;
notChekedSurname = surname.value.length < 1;
notChekedEmail = emailInput.value.length < 1;
notChekedGender = radio[0].checked === false && radio[1].checked === false;
notChekedWork = select[1].selected === false && select[2].selected === false && select[3].selected === false;
notChekedAgrement = agrement.checked === false;
function checkForm() {
    if (notChekedName || notChekedSurname || notChekedEmail || notChekedGender || notChekedWork || notChekedAgrement) {
        return false;
    } else {
        return true;
    }

}
form1.onchange = function () {
    if (checkForm()) {
        signUp.removeAttribute('disabled');
        signUp.classList.add('sign-up-enabled');
        signUp.classList.remove('sign-up-disabled');
    } else {
        signUp.setAttribute('disabled', true);
        signUp.classList.add('sign-up-disabled');
        signUp.classList.remove('sign-up-enabled');
    }
}


signUp.addEventListener('click', function () {
    fullBlock();
});

signOut.addEventListener('click', function () {
    clearForm();
})

