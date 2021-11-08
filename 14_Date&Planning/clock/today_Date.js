let clock = document.querySelector('#clock');
let date = document.querySelector('#date');

class DateToday {
    createDate() {
        const now = new Date();
        this.hours = now.getHours().toString();
        this.minutes = now.getMinutes().toString();
        this.seconds = now.getSeconds().toString();
        this.days = now.getDate().toString();
        this.month = now.getMonth().toString();
        this.year = now.getFullYear().toString();
    }

    getTime() {
        let date = [this.hours, this.minutes, this.seconds]

        date = date.map((val) =>{
            if(val.length < 2)  val = '0' + val;
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
        let daysDate = [this.days, this.month, this.year]

        daysDate = daysDate.map((val) =>{
            if(val.length < 2)  val = '0' + val;
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

let today = new DateToday();
today.start();
today.render();