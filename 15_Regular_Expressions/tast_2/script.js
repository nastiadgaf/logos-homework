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
    createUserRow() {
        let td = document.createElement('td');
        td.classList.add('td');

<<<<<<< HEAD
        let tr = document.createElement('tr');
        tr.classList.add('tr-new');
        let trPassword = document.createElement('tr');
        trPassword.classList.add('values');
        let trEmail = document.createElement('tr');
        trEmail.classList.add('values');

        let editButton = document.createElement('button');
        editButton.classList.add('edit_button');
        editButton.textContent = 'Edit';
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete_button');
        deleteButton.textContent = 'Delete';
    }
=======
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
>>>>>>> 5cc37f0fe12798cbac0ba6daad7ef6364e24c2b3

    createUserInfo() {
        this.login = this.td.append.this.tr.textContent;
        this.password = this.td.append.this.trPassword.textContent;
        this.login = this.td.append.this.trEmail.textContent;
    }

    addButton() {
        td.append(editButton);
        td.append(deleteButton);
        login.value = '';
        password.value = '';
        email.value = '';
    }
}




submitButton.addEventListener('click', function () {
<<<<<<< HEAD
    let userObj = new User(login.value, password.value, email.value);
    userObj.createUserRow();
    userObj.createUserInfo();
    userObj.addButton();
=======
    checkName();
    checkEmail();
    checkPassword();
    let userObj = new User(login.value);
>>>>>>> 5cc37f0fe12798cbac0ba6daad7ef6364e24c2b3
});

editButton.addEventListener('click', function () {
    login.value = tr.innerHTML;
    password.value = trPassword.innerHTML;
    email.value = trEmail.innerHTML;
})

deleteButton.addEventListener('click', function () {
    tr.innerHTML = '';
    trPassword.innerHTML = '';
    trEmail.innerHTML = '';
    editButton.style.display = 'none';
    deleteButton.style.display = 'none';
})