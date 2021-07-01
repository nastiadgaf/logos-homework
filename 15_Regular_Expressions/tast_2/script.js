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
        let userRow = document.createElement('tr');
        userRow.classList.add('tr_user');
        this.row = userRow;

        let userCell = document.createElement('td');
        userCell.classList.add('cell');
        userCell.textContent = this.login;
        userRow.append(userCell);

        let passwordCell = document.createElement('td');
        passwordCell.classList.add('cell');
        passwordCell.textContent = this.password;
        userRow.append(passwordCell);

        let emailCell = document.createElement('td');
        emailCell.classList.add('cell');
        emailCell.textContent = this.email;
        userRow.append(emailCell);

        let editButton = document.createElement('button');
        editButton.classList.add('edit_button');
        editButton.textContent = 'Edit';
        userRow.append(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete_button');
        deleteButton.textContent = 'Delete';
        userRow.append(deleteButton);

        submitButton.classList.add('submit_button');
    }
    clearInputs() {
        login.value = '';
        password.value = '';
        email.value = '';
    }
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('submit_button')) {
        let userObj = new User(login.value, password.value, email.value);
        userObj.createUserRow();
        userObj.clearInputs();
    };
});

// editButton.addEventListener('click', function () {
//     login.value = tr.innerHTML;
//     password.value = trPassword.innerHTML;
//     email.value = trEmail.innerHTML;
// })

// deleteButton.addEventListener('click', function () {
//     tr.innerHTML = '';
//     trPassword.innerHTML = '';
//     trEmail.innerHTML = '';
//     editButton.style.display = 'none';
//     deleteButton.style.display = 'none';
// })