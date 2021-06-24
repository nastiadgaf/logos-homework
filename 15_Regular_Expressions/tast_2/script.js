let login = document.querySelector('#login');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let userLogin = document.querySelector('#user_login');
let userPassord = document.querySelector('#user_password');
let edit = document.querySelector('#edit');
let deleteUser = document.querySelector('#delete');
let submitButton = document.querySelector('#submit');
let tdMain = document.querySelector('.td-main');

class User {
    сonstructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }

    createRow() {

    }
}

// Сделать отдельную функцию
let tr = document.createElement('div');
tr.classList.add('tr-new');
let editButton = document.createElement('button');
editButton.classList.add('edit_button');
editButton.textContent = 'Edit';
let deleteButton = document.createElement('button');
deleteButton.classList.add('delete_button');
deleteButton.textContent = 'Delete';
let tdPassword = document.createElement('div');
tdPassword.classList.add('values');
let tdEmail = document.createElement('div');
tdEmail.classList.add('values');

function addButton() {
    tdMain.append(editButton);
    tdMain.append(deleteButton);
    login.value = '';
    password.value = '';
    email.value = '';
}

function checkName() {
    let regexp = /[a-zA-Z]{1,20}$/;
    let val = login.value;
    if (!val.match(regexp)) {
        login.style.border = '3px solid red';
    } else {
        tdMain.append(tr);
        tr.innerHTML = login.value;
        login.style.border = '1px solid black';
        addButton();
    }
}

function checkPassword() {
    let regexp2 = /(?=.*[0-9])(?=.*[a-z_])(?=.*[A-Z]){8,15}/g;
    let val2 = password.value;
    if (!val2.match(regexp2)) {
        password.style.border = '3px solid red';
    } else {
        tdMain.append(tdPassword);
        tdPassword.innerHTML = password.value;
        password.style.border = '1px solid black';
        addButton();
    }
};

function checkEmail() {
    let regexp3 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    let val3 = email.value;
    if (!val3.match(regexp3)) {
        email.style.border = '3px solid red';
    } else {
        tdMain.append(tdEmail);
        tdEmail.innerHTML = email.value;
        email.style.border = '1px solid black';
        addButton();
    }
};

submitButton.addEventListener('click', function () {
    checkName();
    checkEmail();
    checkPassword();
    let userObj = new User(login.value);
});

editButton.addEventListener('click', function () {
    login.value = tr.innerHTML;
    password.value = tdPassword.innerHTML;
    email.value = tdEmail.innerHTML;
})

deleteButton.addEventListener('click', function () {
    tr.innerHTML = '';
    tdPassword.innerHTML = '';
    tdEmail.innerHTML = '';
    editButton.style.display = 'none';
    deleteButton.style.display = 'none';
})