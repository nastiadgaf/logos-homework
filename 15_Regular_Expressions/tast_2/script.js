let td = document.querySelector('.td');
let submitButton = document.querySelector('#submit');
let editBtn = document.querySelector('.edit-user_button');
let userLogin = document.querySelector('#login');
let userPassword = document.querySelector('#password');
let userEmail = document.querySelector('#email');
let modal = document.querySelector('#myModal');
let closeButton = document.querySelector('.close');
let question = document.querySelector('.question');
let regexp = /[a-zA-Z]{1,20}$/;
let regexp2 = /(?=.*[0-9])(?=.*[a-z_])(?=.*[A-Z]){8,15}/g;
let regexp3 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
let table = document.querySelector('.table');

class User {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
        User.userList.push(this);
    }

    static userList = [];

    createUserRow() {
        this.userRow = document.createElement('tr');
        this.userRow.classList.add('tr_user');
        this.row = this.userRow;
        this.fillUserRow();
    }

    fillUserRow() {
        let tableCeils = [{
                name: 'id',
                value: this.constructor.userList.length
            },
            {
                name: 'login',
                value: this.login
            },
            {
                name: 'password',
                value: this.password
            },
            {
                name: 'email',
                value: this.email
            },
            {
                name: 'edit',
                value: '<button class="edit_button">Edit</button>'
            },
            {
                name: 'delete',
                value: '<button class="delete_button">Delete</button>'
            }
        ];
        for (let dataObject of tableCeils) {
            let ceil = document.createElement('td');
            ceil.classList.add('cell');
            ceil.classList.add(dataObject.name);
            ceil.innerHTML = dataObject.value;
            this.userRow.append(ceil);
        }

        td.append(this.userRow);
    }

    clearInputs() {
        login.value = '';
        password.value = '';
        email.value = '';
    }

    checkFields() {
        return Boolean(this.login.match(regexp) && this.password.match(regexp2) && this.email.match(regexp3))
    }

    checkField() {
        let regs = [{
                name: this.login,
                reg: regexp,
                class: userLogin
            },
            {
                name: this.password,
                reg: regexp2,
                class: userPassword
            },
            {
                name: this.email,
                reg: regexp3,
                class: userEmail
            }
        ]
        let checkReg = () => {
            for (let exp of regs) {
                let isValid = exp.name.match(exp.reg);
                let hasInvalidClass = exp.class.classList.contains('wrong');
                if (!isValid ^ hasInvalidClass) exp.class.classList.toggle('wrong');
            }
        }

        checkReg();
    }


    request() {
        this.checkField();
        if (this.checkFields()) {
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

    fillInputs() {

        // let values = [{
        //         outValue: login.value,
        //         innerValue: this.login
        //     },
        //     {
        //         outValue: password.value,
        //         innerValue: this.password
        //     },
        //     {
        //         outValue: email.value,
        //         innerValue: this.email
        //     }
        // ]
        // for (let val of values) {
        //     for (let i = 1; i <= 4; i++) {
        //         rowArray[0].children[i].textContent = [val.outValue];
        //         [val.innerValue] = rowArray[0].children[i].textContent;
        //     }

        // }

        // rowArray.splice(0, 1);
        // this.clearInputs();

        rowArray[0].children[1].textContent = login.value;
        rowArray[0].children[2].textContent = password.value;
        rowArray[0].children[3].textContent = email.value;
        this.login = rowArray[0].children[1].textContent;
        this.password = rowArray[0].children[2].textContent;
        this.email = rowArray[0].children[3].textContent;
        rowArray = [];
        this.clearInputs();

    }

    editUser() {
        userLogin.value = this.login;
        userPassword.value = this.password;
        userEmail.value = this.email;
    }

    deleteUser() {
        td.removeChild(rowArray[0]);
        let row = rowArray[0];
        let id = row.children[0].textContent;
        id--;
        User.userList.splice(id, 1);
        rowArray = [];
        this.idChange();
    }

    idChange() {
        for (let i = 1; i <= User.userList.length; i++) {
            let row = td.rows[i].cells[0];
            row.innerHTML = i;
        }
    }


    changeEditBtn() {
        editBtn.classList.remove('hide');
        submitButton.classList.add('hide');
    }

    changeAddBtn() {
        submitButton.classList.remove('hide');
        editBtn.classList.add('hide');
    }


}

let rowArray = [];
document.addEventListener('click', function (e) {
    function findRow(target) {
        let row = target;
        let id = row.children[0].textContent;
        userObj = User.userList[--id];
        rowArray.push(row);
        return userObj;
    }

    if (e.target.classList.contains('submit_button')) {
        let userObj = new User(login.value, password.value, email.value);
        userObj.request();
    } else if (e.target.classList.contains('edit_button')) {
        findRow(e.target.closest('tr'));
        userObj.editUser();
        userObj.changeEditBtn();
        userObj.idChange();
    } else if (e.target.classList.contains('delete_button')) {
        findRow(e.target.closest('tr'));
        userObj.deleteUser();
    } else if (e.target.classList.contains('edit-user_button')) {
        findRow(rowArray[0]);
        userObj.fillInputs();
        userObj.changeAddBtn();
    } else if (e.target.classList.contains('close')) {
        modal.classList.add('hide');
    } else if (e.target.classList.contains('question')) {
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

});