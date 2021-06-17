let login = document.querySelector('#login');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let userLogin = document.querySelector('#user_login');
let userPassord = document.querySelector('#user_password');
let editButton = document.querySelector('#edit');
let deleteButton = document.querySelector('#delete');
let submitButton = document.querySelector('#submit');
let tr = document.createElement('tr');
class User{
    сonstructor(login, password, email){
        this.login = login;
        this.password = password;
        this.email = email;
    }
   
  
}

submitButton.addEventListener('click', function(){
    tr.innerHeight = login.value;
   // userLogin.textContent = login.value;
});