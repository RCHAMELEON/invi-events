$(document).ready(function () {
    var flag = false;
    $('#checkbox1').click(onclick, function () {
        if(flag == false){
            $('.events-anons').css('display','none');
            $('.events-archive').css('display','table');
            flag  = true;
        }
        else {
            $('.events-anons').css('display','table');
            $('.events-archive').css('display','none');
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

});