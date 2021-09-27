let watch = document.querySelector('#watch');
let start = document.querySelector('#start');
let loop = document.querySelector('#loop');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timeBlockText = document.querySelector('#time_block_text');

class StopWatch {
    constructor(h, m, s, ms) {
        this.hours = h.toString();
        this.minutes = m.toString();
        this.seconds = s.toString();
        this.ms = ms.toString();
    }

    seconds() {
        watch.innerHTML = this.hours + " : " + this.minutes + ": " + this.second + " : " + this.ms;

        if (this.ms == 100) {
            this.second++;
            this.ms = 0;
        }
        if (second == 60) {
            minutes++;
            second = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        ms++;
        if (hours.toString().length < 2) {
            hours = '0' + hours;
        }

        if (minutes.toString().length < 2) {
            minutes = '0' + minutes;
        }
        if (second.toString().length < 2) {
            second = '0' + second;
        }


    }

    secondsWork() {
        setInterval(this.seconds(), 10)
    }

    reset() {
        watch.innerHTML = '00:00:00:000';
        timeBlockText.textContent = '';
        clearInterval(this.secondsWork());
        hours = '0';
        minutes = '0';
        second = '0';
        ms = '0';
    }
    
    stop(){
        clearInterval(this.secondsWork());
        if (ms > 1) {
            ms++;
        }
    }

    loop(){
        timeBlockText.textContent = timeBlockText.textContent + '' + watch.textContent;
    }
}

let stopWatch = new StopWatch(0, 0, 0, 0);
start.addEventListener('click', function () {
    
    this.secondsWork();

});

reset.addEventListener('click', function () {
    this.reset();

});

stop.addEventListener('click', function () {
    this.stop();
});

loop.addEventListener('click', function () {
    this.loop();
});