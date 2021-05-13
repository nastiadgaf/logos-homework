let firstInput = document.querySelector('#first-input');
let secondInput = document.querySelector('#second-input');
let thirdInput = document.querySelector('#third-input');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    if(firstInput.value){
        secondInput.value = firstInput.value;
        firstInput.value = '';
    }
});

thirdInput.onblur = function(e){
    if(e.target.value){
        e.target.placeholder = e.target.value;
        e.target.value = "";
    } 
};