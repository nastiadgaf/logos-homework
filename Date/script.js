//const date = new Date(2012, 1, 20, 3, 12);
let days = ['Вс','Вт','Ср','Чт','Пт','Сб','Пн',]

function getWeekDay(date){
    return date.getDay();
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"
