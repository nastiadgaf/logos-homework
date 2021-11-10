let watch = document.querySelector('#watch');
let start = document.querySelector('#start');
let loop = document.querySelector('#loop');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timeBlockText = document.querySelector('.time_block_text');
let timeBlock = document.querySelector(".time_block");
let loopTextAmount = 0;
class StopWatch {
    constructor(h, m, s, ms) {
        this.hours = h.toString();
        this.minutes = m.toString();
        this.second = s.toString();
        this.ms = ms.toString();
    }

    seconds() {
        watch.innerHTML = this.hours + " : " + this.minutes + ": " + this.second + " : " + this.ms;

        if (this.ms == 100) {
            this.second++;
            this.ms = 0;
        }
        if (this.second == 60) {
            this.minutes++;
            this.second = 0;
        }
        if (this.minutes == 60) {
            this.hours++;
            this.minutes = 0;
        }
        this.ms++;

        let timeArr = [this.hours, this.minutes, this.second]

        timeArr = timeArr.map((val) =>{
            if(val.length < 2) val = '0' + val;
            return val;
        });

        // if (this.hours.toString().length < 2) {
        //     this.hours = '0' + this.hours;
        // }

        // if (this.minutes.toString().length < 2) {
        //     this.minutes = '0' + this.minutes;
        // }
        // if (this.second.toString().length < 2) {
        //     this.second = '0' + this.second;
        // }
    }

    secondsWork() {
        this.stopWatchWork = setInterval(() => this.seconds(), 10)
    }

    reset() {
        watch.innerHTML = '00:00:00:000';
        this.cleanLoopBlock();
        clearInterval(this.stopWatchWork);
        this.hours = '0';
        this.minutes = '0';
        this.second = '0';
        this.ms = '0';
    }

    stop() {
        clearInterval(this.stopWatchWork);
        if (this.ms > 1) {
            this.ms++;
        }
    }

    loop() {
        this.cleanLoopBlockByNumber();
        let loopText = document.createElement('p');
        loopText.classList.add('time_block_text')
        loopText.textContent = `${timeBlockText.textContent}${watch.textContent}`;
        timeBlock.append(loopText);
        loopTextAmount++;
    }

    cleanLoopBlock() {
        while (timeBlock.firstChild) {
            timeBlock.removeChild(timeBlock.firstChild);
        }
    }

    cleanLoopBlockByNumber() {
        if (loopTextAmount === 5) {
            this.cleanLoopBlock();
            loopTextAmount = 0;
        }
    }

}

let stopWatch = new StopWatch(0, 0, 0, 0);
start.addEventListener('click', function () {
    stopWatch.secondsWork();
    start.disabled = true;
});

reset.addEventListener('click', function () {
    stopWatch.reset();
});

stop.addEventListener('click', function () {
    stopWatch.stop();
    start.disabled = false;
});

loop.addEventListener('click', function () {
    stopWatch.loop();
});