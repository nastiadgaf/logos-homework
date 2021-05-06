let mainMenu = document.querySelector('.main-menu');
let footer = document.querySelector('footer');
let footerMenu = mainMenu.cloneNode(); 

footer.append(footerMenu);
console.log(footer);