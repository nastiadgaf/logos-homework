let timer = document.querySelector('#timer_time');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let startTimer = document.querySelector('#start_timer');
let stopTimer = document.querySelector('#stop_timer');
let timerClock = document.querySelector('#timer_clock');
let resetTimer = document.querySelector('#reset_timer');

class Timer {
    plusWork() {
        timer.innerHTML++;
    }

    minusWork() {
        if (timer.innerHTML < 1) {
            minus.disable;
        } else {
            timer.innerHTML--;
        }
    }

    getTimerTime() {
        this.m = timer.innerHTML;
        this.s = 0;
        timerClock.innerHTML = this.m + " : " + this.s;
            if (this.m == 0 && this.s == 0) {
                clearInterval(this.timerWork);
            }
            
            if (this.s == 0) {
                this.m--;
                this.s = 60;
            }
            this.s--;
            if (this.m == 0) {
                this.m = 0;
                
            }

            if (this.s > 1) {
                this.s--;
            }
        
        }

        startTimerWork() {
            this.timerWork = setInterval(() => this.getTimerTime(), 1000);
        }

        stopTimerWork() {
            clearInterval(this.timerWork);
        }

        resetTimerWork() {
            timerClock.innerHTML = '00:00';
            clearInterval(this.timerWork);
        }
}

    let newTimer = new Timer();
    plus.addEventListener('click', function () {
        newTimer.plusWork();
    })

    minus.addEventListener('click', function () {
        newTimer.minusWork();
    })

    startTimer.addEventListener('click', function () {
        newTimer.startTimerWork();
    })


    resetTimer.addEventListener('click', function () {
        newTimer.resetTimerWork();
    });

    stopTimer.addEventListener('click', function () {
        newTimer.stopTimerWork();
    });