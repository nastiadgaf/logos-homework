let timer = document.querySelector('.timer_time');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let startTimer = document.querySelector('.start_timer');
let stopTimer = document.querySelector('.stop_timer');
let timerClock = document.querySelector('.timer_clock');
let resetTimer = document.querySelector('.reset_timer');

class Timer {
    constructor(){
        this.minutes = +timer.innerHTML;
        this.seconds = 0;
    }

    plusWork() {
        this.minutes++;
        timer.innerHTML = this.minutes;
        this.updateString();
    }

    minusWork() {
        if (this.minutes < 1) {
            minus.disable;
        } else {
            this.minutes--;
            timer.innerHTML = this.minutes;
            this.updateString();
        }
    }

    updateString(){
        if(timer.innerHTML.length < 2){
            timer.innerHTML = `0${this.minutes}`;
        }
    }

    updateSecondsString(){
        if(this.seconds.length < 2){
            timerClock.innerHTML = `${this.minutes}:0${this.seconds}`;
        }
    }
    updateTimeValue(){
        timerClock.innerHTML = this.minutes + " : " + this.seconds;
    }

    decreaseBySecond() {
        console.log(this.minutes)
        console.log(this.seconds)
        
            if (this.minutes === 0 && this.seconds === 0) {
                clearInterval(this.timerWork);
                this.updateTimeValue();
            }
            if(this.seconds === 0){
                this.minutes = this.minutes -1;
                this.seconds = 59;
                this.updateTimeValue();
            } else{
                this.seconds = this.seconds -1;
                this.updateTimeValue();
            }
        }

        startTimerWork() {
            this.timerWork = setInterval(() => this.decreaseBySecond(), 1000);
        }

        stopTimerWork() {
            clearInterval(this.timerWork);
        }

        resetTimerWork() {
            timerClock.innerHTML = '00:00';
            this.minutes = 0;
            this.seconds = 0;
            timer.innerHTML = 0;
            this.updateTimeValue();
            clearInterval(this.timerWork);
        }
}

    let newTimer = new Timer();

document.addEventListener('click', function(e){

    if(e.target.classList.contains('plus')){
        newTimer.plusWork();
    } else if(e.target.classList.contains('minus')){
        newTimer.minusWork();
    } else if(e.target.classList.contains('start_timer')){
       newTimer.startTimerWork();
    } else if(e.target.classList.contains('reset_timer')){
        newTimer.resetTimerWork();
    } else if(e.target.classList.contains('stop_timer')){
        newTimer.stopTimerWork();
    } 
})
