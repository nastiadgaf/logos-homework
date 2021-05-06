let arrowTop = document.querySelector('#arrowTop');

arrowTop.onclick = function scrollUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop >600){
        arrowTop.style.display = 'block';
    } else{
        arrowTop.style.display = 'none';
    }
};

