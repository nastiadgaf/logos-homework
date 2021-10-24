let rotate = document.querySelectorAll(".line");
let lineHidden = document.querySelector(".line__hidden");
let trigger = document.querySelector('#trigger');
let menu = document.querySelector('#nav__menu');
let lineRight = document.querySelector(".line-right");
let lineLeft = document.querySelector(".line-left");
let lineCenter = document.querySelector(".line-center");
trigger.addEventListener('click', () =>{
    menu.classList.toggle("show");
    lineRight.classList.toggle('rotate-right');
    lineLeft.classList.toggle('rotate-left');
    lineCenter.classList.toggle('line__vsbl');
})