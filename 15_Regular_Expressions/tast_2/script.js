let login = document.querySelector('#login');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let userLogin = document.querySelector('#user_login');
let userPassord = document.querySelector('#user_password');
let editButton = document.querySelector('#edit');
let deleteButton = document.querySelector('#delete');
let submitButton = document.querySelector('#submit');
let tdMain = document.querySelector('.td-main');
let tr = document.createElement('div');
class User {
    сonstructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }


}

submitButton.addEventListener('click', function () {
    tr.classList.add('tr-new');
    tdMain.append(tr);
    // tr.innerHeight = login.value;
    tr.innerHTML = login.value;
});