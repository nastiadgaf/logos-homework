let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let signUp = document.querySelector('#signUp');
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

signUp.setAttribute('disabled', true);

form1.onchange = function(){
    if(name.value.length < 1 ){
        signUp.setAttribute('disabled', true);
    } else if (surname.value.length < 1){
        signUp.setAttribute('disabled', true);
    } else if (emailInput.value.length < 1){
        signUp.setAttribute('disabled', true);
    } else if(radio[0].checked === false && radio[1].checked === false ){
        signUp.setAttribute('disabled', true);
    } else if(select[1].selected === false && select[2].selected === false &&  select[3].selected === false){
        signUp.setAttribute('disabled', true);
    } else if(agrement.checked === false){
        signUp.setAttribute('disabled', true);
    } else{
        signUp.removeAttribute('disabled');
        signUp.style.backgroundColor = 'rgb(15, 161, 71)';
        signUp.style.border = '1px solid green'
    }
}
    
signUp.addEventListener('click', function(){
        if(name.value && surname.value && emailInput.value){
            userName.textContent = name.value + ' ' + surname.value;
            email.textContent = emailInput.value;
        }; 
    
        if(radio[0].checked){
            manImg.style.display = "flex";
            womanImg.style.display = "none";
        } else if ( radio[1].checked){
            womanImg.style.display = "flex";
            manImg.style.display = "none";
        }
    
        for( let i = 0; i < select.length; i++ ){
             if(select[i].selected){
                 proffesion.textContent = select[i].value;
                 break;
             } 
         }
            form1.style.display = "none";
            form2.style.display = "block";
});

signOut.addEventListener('click', function(){
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
    signUp.style.backgroundColor = 'rgb(61, 194, 112)';
    signUp.style.border = '1px solid green'
})
