let watch = document.querySelector('#watch');
let start = document.querySelector('#start');
let loop = document.querySelector('#loop');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timeBlock = document.querySelector('time_block');

start.addEventListener('click', function(){
    let hours = 0;
    let minutes = 0;
    let second = 0;
    let ms = 0;
    function seconds(){
    watch.innerHTML = hours +" : " + minutes + ": " + second + " : " + ms;
    ms++;
        if(ms == 1000){
        second++;
        ms = 0;
    }
    if(second == 60){
        minutes++;
        second = 0;
    }
    if(minutes == 60){
        hours++;
        minutes = 0;
    }
    
    }
    let secondsWork = setInterval(seconds, 1)
}, )

reset.addEventListener('click', function(){
    timerClock.innerHTML = '00:00:00:000';
    clearInterval(secondsWork);
});

stop.addEventListener('click', function(){
    clearInterval(secondsWork);
});

loop.addEventListener('click', function(){
    timeBlock.innerHTML = timerClock.innerHTML;
    
})