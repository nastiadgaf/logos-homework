let time = 5;

function slide() {
    $('.block').slideUp(2000).delay(1000).slideDown(2000);
};

$('.green').on('click', function () {
    for (let i = 0; i < time; i++) {
        slide();
    }
});


