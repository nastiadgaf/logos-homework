let clock = document.querySelector('#clock');
let date = document.querySelector('#date');

class DateToday {
    constructor(nowDate) {
        this.time = nowDate;
        this.nowDate = nowDate;
    }

    createDate(){
        this.h = this.time.getHours().toString();
        this.min = this.time.getMinutes().toString();
        this.s = this.time.getSeconds().toString();
        this.d = this.nowDate.getDate().toString();
        this.m = this.nowDate.getMonth().toString();
        this.y = this.nowDate.getFullYear().toString();
    }

    getTime() {
        let date = [{name: this.h},{name: this.min},{name: this.s}]

        let dateString = () =>{
            for( let val of date){
                if(val.name.length < 2){
                    val.name = '0' + val.name;
                }
            }
        }

        let clockString = this.h + ':' + this.min + ':' + this.s;

        if (this.h == '00' && this.min == '00' && this.s == '00') {
            this.getTodayDate();
        }

        dateString();
        clock.textContent = clockString;
    }

    getTodayDate(){
        let daysDate = [{name: this.d},{name: this.m++}]

        let daysDateString = () =>{
            for( let val of daysDate){
                if(val.name.length < 2){
                    val.name = '0' + val.name;
                    console.log(val.name)
                }
            }
        }

        daysDateString();
        let dateString = this.d + '.' + this.m + '.' + this.y;
        date.textContent = dateString;
    }

    start(){
        this.createDate();
        this.getTodayDate();
        this.getTime();
    }

    render(){
        this.renderTime = setInterval(() => this.start(), 1000);
    }
}

let today = new DateToday(new Date());
today.start();
today.render();
