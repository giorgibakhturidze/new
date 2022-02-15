$(document).ready(function () {
    $('.toggle').click(function(e){
        e.preventDefault();
        $('.move').toggle(1000);
    })
});