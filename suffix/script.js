let rotate = document.querySelectorAll(".line");
let lineHidden = document.querySelector(".line__hidden");
let trigger = document.querySelector('#trigger');
let menu = document.querySelector('#nav__menu');

trigger.addEventListener('click', () =>{
    menu.classList.toggle("show");
    rotate.classList.toggle("rotate");
    lineHidden.classList.toggle("lide__hide");
})