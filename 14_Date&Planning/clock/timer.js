
let timer = document.querySelector('#timer_time');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let startTimer = document.querySelector('#start_timer');
let stopTimer = document.querySelector('#stop_timer');
let timerClock = document.querySelector('#timer_clock');
let resetTimer = document.querySelector('#reset_timer');

plus.addEventListener('click', function(){
    timer.innerHTML++;
})

minus.addEventListener('click', function(){
    if(timer.innerHTML < 1){
        minus.disable;
    } else{
        timer.innerHTML--;
    }
})
let timerWork;
startTimer.addEventListener('click', function(){
    let m = timer.innerHTML;
    let s = 0;
    function getTimerTime(){
        timerClock.innerHTML = m +" : " + s ;
    if ( m == 0 && s == 0){
            alert('timer is over');
            clearInterval(timerWork);
        } 
    if(s == 0){
        m--;
        s = 60;
    if (m == 0){
        m= 0;
    }
        }
    s--;
    }
    if( s > 1){
        s--;
    }
    timerWork = setInterval( getTimerTime ,1000);
})


resetTimer.addEventListener('click', function(){
    timerClock.innerHTML = '00:00';
    clearInterval(timerWork);
});

stopTimer.addEventListener('click', function(){
    clearInterval(timerWork);
});