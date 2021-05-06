let image = document.querySelector('#image');
image.addEventListener('click', function(event) {
    let dataInformation = document.getElementById(event.target.id).dataset.img;
    alert(dataInformation);
});