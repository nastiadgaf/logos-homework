let td = document.querySelector('.td');
let submitButton = document.querySelector('#submit');
let editBtn = document.querySelector('.edit-user_button');
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

    fillInputs(){ 
        rowArray[0].children[1].textContent = login.value;
        rowArray[0].children[2].textContent = password.value;
        rowArray[0].children[3].textContent = email.value;
        this.login =rowArray[0].children[1].textContent;
        this.password =rowArray[0].children[2].textContent;
        this.email =rowArray[0].children[3].textContent;
        rowArray.pop(this);
        this.clearInputs();
        
    }

    editUser() {
        userLogin.value = this.login;
        userPassword.value = this.password;
        userEmail.value = this.email;
    }

    deleteUser() {
        td.removeChild(rowArray[0]);
        User.userList.pop(this);
        rowArray.pop(this);
    }

    toggleEditBtn(){
        editBtn.classList.remove('hide');
        submitButton.classList.add('hide');
    }

    toggleAddBtn(){
        submitButton.classList.remove('hide');
        editBtn.classList.add('hide');
    }
}

let rowArray = [];

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('submit_button')) {
        let userObj = new User(login.value, password.value, email.value);
        userObj.check();
    } else if (e.target.classList.contains('edit_button')) {
        let row = e.target.closest('tr');
        let id = row.children[0].textContent;
        let userObj = User.userList[--id];
        userObj.editUser();
        userObj.toggleEditBtn();
        rowArray.push(row);
    } else if (e.target.classList.contains('delete_button')) {
        let row = e.target.closest('tr');
        let id = row.children[0].textContent;
        let userObj = User.userList[--id];
        rowArray.push(row);
        userObj.deleteUser();
    } else if (e.target.classList.contains('edit-user_button')) {
        let row = rowArray[0];
        let id = row.children[0].textContent;
        let userObj = User.userList[--id];
        userObj.fillInputs();
        userObj.toggleAddBtn();
    }else if (e.target.classList.contains('close')) {
        modal.classList.add('hide');
    } else if (e.target.classList.contains('question')) {
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

});
