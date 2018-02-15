$(document).ready(function () {
    var flag = false;
    $('#checkbox1').click(onclick, function () {
        if(flag == false){
            $('.events-anons').fadeOut();
            $('.events-archive').fadeIn();
            flag  = true;
        }
        else {
            $('.events-anons').fadeIn();
            $('.events-archive').fadeOut();
            flag  = false;
        }
    });

    $('.hamburger').click(onclick, function () {
        if(flag == false){
            $(this).addClass('open-hamburger');
            $('.menu-hamburger').css('box-shadow','none');
            $('.headings').addClass('headings_open');
            $('.heading').css('display', 'table');
            flag  = true;
        }
        else {
            $(this).removeClass('open-hamburger');
            $('.headings').removeClass('headings_open');
            $('.menu-hamburger').css('box-shadow','1px 1px 0 0 rgba(230, 230, 230, 0.73)');
            flag  = false;
        }
    });

    $('.heading-archive').click(onclick, function () {
        $('.heading-anons').css('display', 'none');
        $('.headings').removeClass('headings_open');
        $('.hamburger').removeClass('open-hamburger');
        $('.events-anons').css('display', 'none');
        $('.events-archive').css('display', 'table');
    });

    $('.heading-anons').click(onclick, function () {
        $('.heading-archive').css('display', 'none');
        $('.headings').removeClass('headings_open');
        $('.hamburger').removeClass('open-hamburger');
        $('.events-archive').css('display', 'none');
        $('.events-anons').css('display', 'table');
    });

    $('.description-archive').hover(function () {
        $(this).parent().find('.event__img').css('-webkit-transform', 'translateY(-100%)');
    }, function () {
        $(this).parent().find('.event__img').css('-webkit-transform', 'translateY(0)');
    })

});