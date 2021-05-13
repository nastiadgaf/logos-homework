let clock = document.querySelector('#clock');
let date = document.querySelector('#date');

function getTime(){
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h;
    }

    if(m.length < 2){
        m = '0' + m;
    }

    if(s.length < 2){
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;
};


function getTodayDate(){
    let nowDate = new Date();
    let d = nowDate.getDate().toString();
    let m = nowDate.getMonth().toString();
    let y = nowDate.getFullYear().toString();

    if( d.length < 2){
        d = '0' + d;
    }

   if(m.length < 2){
        m++;
        m = '0' + m;  
    }

    let dateString = d + '.' + m + '.' + y;
    date.textContent = dateString;
}; 
getTodayDate();
getTime();
setInterval(getTime, 1000);

