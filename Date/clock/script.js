let now = document.querySelector('#date_now');

let date = Date.now() ;
//date.setFullYear(year, [month], [date]);
now.append(date);
now.classList = 'clock';