let td = document.querySelector('.td');
let submitButton = document.querySelector('#submit');
let userLogin = document.querySelector('#login');
let userPassword = document.querySelector('#password');
let userEmail = document.querySelector('#email');
let modal = document.querySelector('#myModal');
let closeButton = document.querySelector('.close');
let question = document.querySelector('.question');
question.classList.add('question_hide');
class User {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
        User.userList.push(this);
    }

    static userList = [];

    createUserRow() {
        let userRow = document.createElement('tr');
        userRow.classList.add('tr_user');
        this.row = userRow;

        let userLists = document.createElement('td');
        userLists.classList.add('cell');
        userLists.innerHTML = this.constructor.userList.length;
        userRow.append(userLists);

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

        td.append(userRow);
        submitButton.classList.add('submit_button');
    }

    clearInputs() {
        login.value = '';
        password.value = '';
        email.value = '';
    }

    checkField() {
            let regexp = /[a-zA-Z]{1,20}$/;
            let val = this.login;
            let regexp2 = /(?=.*[0-9])(?=.*[a-z_])(?=.*[A-Z]){8,15}/g;
            let val2 = this.password;
            let regexp3 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
            let val3 = this.email;
            if(val.match(regexp) && val2.match(regexp2) && val3.match(regexp3)){
                return true;
            } else {
                return false;
            }
    }

    validate(){
        if(!this.checkField()){
            userLogin.classList.add('wrong');
            userPassword.classList.add('wrong');
            userEmail.classList.add('wrong');
            return false;
        } else{
            userLogin.classList.remove('wrong');
            userPassword.classList.remove('wrong');
            userEmail.classList.remove('wrong');
            return true;
        }
    }

    check() {
        this.checkField();
        this.validate();
        if (this.checkField()) {
            this.createUserRow();
            question.classList.add('question_hide');
            question.classList.remove('question_show');
            this.clearInputs();
        } else {
            User.userList.pop(this);
            question.classList.remove('question_hide');
            question.classList.add('question_show');
        }
    }

    editUser() {
        userLogin.value = this.login;
        userPassword.value = this.password;
        userEmail.value = this.email;
    }

    deleteUser() {
        delete this.userObj;
    }
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('submit_button')) {
        let userObj = new User(login.value, password.value, email.value);
        userObj.check();
    } else if (e.target.classList.contains('edit_button')) {
        userObj.editUser();
    } else if (e.target.classList.contains('delete_button')) {
        this.userObj.deleteUser();
    } else if (e.target.classList.contains('close')) {
        modal.classList.add('hide');
    } else if (e.target.classList.contains('question')) {
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

});
