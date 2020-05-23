$(function(){

    $( '.functions__item' ).on('click', function() {
        $( this ).toggleClass('active', 400, 'easeOutSine');

    });

    $("body").niceScroll({
        cursorborder: "none"
    });
    $(".news__day-scroll").niceScroll();
    $(".news__week-scroll").niceScroll();



    $('.organizations__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.organizations__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.organizations__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });



});