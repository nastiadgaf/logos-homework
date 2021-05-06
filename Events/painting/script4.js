let text = document.querySelectorAll('.text');
let textContent = document.querySelectorAll('.text_content');
let content = document.querySelector('#content');

content.addEventListener('click', function(event){
    if (event.target.dataset.changebackground){
        content.classList ='pink';
    } else if (event.target.dataset.changetext) {
        content.classList ='text-color';
    }
});
