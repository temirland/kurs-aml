$(function(){

    $( '.functions__item' ).on('click', function() {
        $( this ).toggleClass('active', 400, 'easeOutSine');

    });

    $("body").niceScroll({
        cursorborder: "none"
    });
    $(".news__day-scroll").niceScroll();
    $(".news__week-scroll").niceScroll();







});