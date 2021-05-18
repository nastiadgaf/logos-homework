

let watch = document.querySelector('#watch');
let start = document.querySelector('#start');
let loop = document.querySelector('#loop');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timeBlockText = document.querySelector('#time_block_text');

let secondsWork;
    let hours;
    let minutes;
    let second;
    let ms;
start.addEventListener('click', function(){
    hours = '0';
    minutes = '0';
    second = '0';
    ms = '0';
    hours.toString();
    minutes.toString();
    second.toString();
    ms.toString();
    function seconds(){
    watch.innerHTML = hours +" : " + minutes + ": " + second + " : " + ms;
    
    if(ms == 100){
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
    ms++;
    if(hours.length < 2){
        hours = '0' + hours;
    }

    if(minutes.length < 2){
        minutes = '0' + minutes;
    }
    if(second.length < 2){
        second = '0' + second;
    }

    }
    secondsWork = setInterval(seconds, 10)
}, )

reset.addEventListener('click', function(){
    watch.innerHTML = '00:00:00:000';
    timeBlockText.textContent = '';
    clearInterval(secondsWork);
   
});

stop.addEventListener('click', function(){
    clearInterval(secondsWork);
    if(ms> 1){
        ms++;
    }
});

loop.addEventListener('click', function(){
    timeBlockText.textContent = timeBlockText.textContent+ '' + watch.textContent;
});