(function(){
    let mainMenu =document.querySelector('.main-menu');
    let mainMenuItems = document.querySelectorAll('.main-menu__item');

    for (let i = 0; i < mainMenuItems.length; i++){
        mainMenuItems[i].textContent = i + 1;
    }
    console.log(mainMenu);
})()
