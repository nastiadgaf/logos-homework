let clock = document.querySelector('#clock');
let date = document.querySelector('#date');

class DateToday {
    createDate() {
        const now = new Date();
        this.h = now.getHours().toString();
        this.min = now.getMinutes().toString();
        this.s = now.getSeconds().toString();
        this.d = now.getDate().toString();
        this.m = now.getMonth().toString();
        this.y = now.getFullYear().toString();
    }

    getTime() {
        let date = [this.h, this.min, this.s]

        date = date.map((val) =>{
            if(val.length >= 2) return val;
            val = '0' + val;
            return val;
        });

        let clockString = '';

        for (let i = 0; i < date.length; i++) {
            clockString += date[i];
            if(i === date.length -1) continue;
            clockString += ':';
        }


        clock.textContent = clockString;
    }

    getTodayDate() {
        let daysDate = [this.d, this.m++, this.y]

        daysDate = daysDate.map((val) =>{
            if(val.length >= 2) return val;
            val = '0' + val;
            return val;
        });

        let dateString = '';

        for (let i = 0; i < daysDate.length; i++) {
            dateString +=  daysDate[i];
            if(i === daysDate.length -1) continue;
            dateString += '.';
        } 
        date.textContent = dateString;
    }

    start() {
        this.createDate();
        this.getTodayDate();
        this.getTime();
    }

    render() {
        this.renderTime = setInterval(() => this.start(), 1000);
    }
}

let today = new DateToday(new Date());
today.start();
today.render();