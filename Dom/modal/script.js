let body = document.body;
let modal = document.querySelector('#myModal');
let button = document.querySelector('#button');
let span = document.querySelector('.close');

body.addEventListener('click', function(event){
  if (event.target.dataset.button){
    modal.style.display = "block";
} if (event.target.dataset.close){
    modal.style.display = "none";
}
});