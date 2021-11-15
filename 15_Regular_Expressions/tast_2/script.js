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
let currentRow = null;

class User {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.constructor.userList.push(this);
    }

    static userList = [];

    regs = [{
            value: login.value,
            reg: regexp,
            element: userLogin
        },
        {
            value: password.value,
            reg: regexp2,
            element: userPassword
        },
        {
            value: email.value,
            reg: regexp3,
            element: userEmail
        }
    ]

    createUserRow() {
        this.userRow = document.createElement('tr');
        this.userRow.classList.add('tr_user');
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
        for (let exp of this.regs) {
            let isValid = exp.value.match(exp.reg);
            let hasInvalidClass = exp.element.classList.contains('wrong');
            if (!isValid ^ hasInvalidClass) exp.element.classList.toggle('wrong');
        }
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

    checkEditField() {
        this.checkField()
        this.checkFields()
        if (this.checkFields()) {
            this.fillInputs();
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
        //     for (let i = 1; i <= 3; i++) {
        //         currentRow.children[i].textContent = val.outValue;
        //         val.innerValue = currentRow.children[i].textContent;
        //     }
        // }



        currentRow.children[1].textContent = login.value;
        currentRow.children[2].textContent = password.value;
        currentRow.children[3].textContent = email.value;
        this.login = currentRow.children[1].textContent;
        this.password = currentRow.children[2].textContent;
        this.email = currentRow.children[3].textContent;
        currentRow = null;
        this.clearInputs();

    }

    editUser() {
        userLogin.value = this.login;
        userPassword.value = this.password;
        userEmail.value = this.email;
    }

    deleteUser() {
        td.removeChild(currentRow);
        let id = currentRow.children[0].textContent;
        id--;
        User.userList.splice(id, 1);
        currentRow = null;
        for (let i = 1; i <= User.userList.length; i++) {
            let row = td.rows[i].cells[0];
            row.innerHTML = i;
        }
    }

    changeEditBtn() {
        editBtn.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }

    changeAddBtn() {
        submitButton.classList.remove('hidden');
        editBtn.classList.add('hidden');
    }


}


document.addEventListener('click', function (e) {
    function getUserById(target) {
        let row = target;
        currentRow = row;
        let id = row.children[0].textContent;
        userObj = User.userList[--id];
        return userObj;
    }

    function checkClassName(name) {
        return e.target.classList.contains(name);
    }

    switch (true) {
        case checkClassName('submit_button'):
            let userObj = new User(login.value, password.value, email.value);
            userObj.request();
            break;
        case checkClassName('edit_button'):
            getUserById(e.target.closest('tr'));
            userObj.editUser();
            userObj.changeEditBtn();
            break;
        case checkClassName('delete_button'):
            getUserById(e.target.closest('tr'));
            userObj.deleteUser();
            break;
        case checkClassName('edit-user_button'):
            getUserById(currentRow);
            userObj.checkEditField();
            userObj.changeAddBtn();
            break;
        case checkClassName('close'):
            modal.classList.add('hidden');
            break;
        case checkClassName('question'):
            modal.classList.remove('hidden');
            modal.classList.add('show');
            break;
    }


});