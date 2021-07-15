let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let signUp = document.querySelector('.signUp');
let signOut = document.querySelector('#signOut');
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
let form2 = document.querySelector('#form2');
let imageClass = document.querySelector('.image');
signUp.setAttribute('disabled', true);

function checkForm() {
    if (name.value.length < 1 || surname.value.length < 1 || emailInput.value.length < 1) {
        return false;
    } else if (radio[0].checked === false && radio[1].checked === false) {
        return false;
    } else if (select[1].selected === false && select[2].selected === false && select[3].selected === false) {
        return false;
    } else if (agrement.checked === false) {
        return false;
    } else {
        return true;
    }
}
form1.onchange = function () {
    if (checkForm(true)) {
        signUp.removeAttribute('disabled');
        signUp.classList.add('signUpTrue');
        signUp.classList.remove('signUp');
    } else {
        signUp.setAttribute('disabled', true);
    }


}

signUp.addEventListener('click', function () {
    if (name.value && surname.value && emailInput.value) {
        userName.textContent = name.value + ' ' + surname.value;
        email.textContent = emailInput.value;
    };

    if (radio[0].checked) {
        imageClass.style.backgroundImage = 'url("img/Без названия (1).jfif")';
    } else if (radio[1].checked) {
        imageClass.style.backgroundImage = 'url("img/Без названия.jfif")';
    }

    for (let i = 0; i < select.length; i++) {
        if (select[i].selected) {
            proffesion.textContent = select[i].value;
            break;
        }
    }
    form1.style.display = "none";
    form2.style.display = "block";
});

signOut.addEventListener('click', function () {
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
    signUp.classList.add('signUpTrue');
    signUp.classList.remove('signUp');
})
