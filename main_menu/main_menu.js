$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 991) {
            $('.navbar-nav > li > a').attr('data-toggle', 'dropdown');
        }
        if ($(window).width() > 992) {
            $('.navbar-nav > li > a').attr('data-toggle', '');
        }
    });
    if ($(window).width() < 991) {
        $('.navbar-nav > li > a').attr('data-toggle', 'dropdown');
    }
    if ($(window).width() > 992) {
        $('.navbar-nav > li > a').attr('data-toggle', '');
    }

    var flagsHead = $('#navbar-flags-head');
    var flagsBody = $('#navbar-flags-body');
    var tradingHead = $('#navbar-trading-head');
    var tradingBody = $('#navbar-trading-body');
    var educationHead = $('#navbar-education-head');
    var educationBody = $('#navbar-education-body');
    var partnersHead = $('#navbar-partners-head');
    var partnersBody = $('#navbar-partners-body');
    var promotionsHead = $('#navbar-promotions-head');
    var promotionsBody = $('#navbar-promotions-body');
    var aboutHead = $('#navbar-about-us-head');
    var aboutBody = $('#navbar-about-us-body');

    // on hover body of dropdown list start
    flagsBody.hover(function () {
        flagsHead.toggleClass('blue-navbar').toggleClass('navbar-arrow-below-blue');
    });

    tradingBody.hover(function () {
        tradingHead.toggleClass('orange-navbar').toggleClass('navbar-arrow-below');
    });

    educationBody.hover(function () {
        educationHead.toggleClass('orange-navbar').toggleClass('navbar-arrow-below');
    });

    partnersBody.hover(function () {
        partnersHead.toggleClass('orange-navbar').toggleClass('navbar-arrow-below');
    });

    promotionsBody.hover(function () {
        promotionsHead.toggleClass('orange-navbar').toggleClass('navbar-arrow-below');
    });

    aboutBody.hover(function () {
        aboutHead.toggleClass('orange-navbar').toggleClass('navbar-arrow-below');
    });
    // on hover body of dropdown list end

});

// the following code for sliding the main menu from the right
$('[data-toggle="slide-collapse"]').on('click', function (event) {
    $('.navbar-inverse .navbar-toggle .icon-bar').toggleClass('orange-icon-bar');
    $('#flags-mobile-btn').removeClass('navbar-arrow-below-blue');

    $navMenuCont = $($(this).data('target'));
    $navMenuCont.stop().animate({
        'width': 'toggle'
    }, 350);
    $("#main_menu_content").toggleClass('in');
    $(".menu-overlay").stop(true, true).fadeToggle(500);
});
$(".menu-overlay").click(function (event) {
    $(".navbar-toggle").trigger("click");
});

$('#show-flags-mobile').on('click', function () {
    $('#flags-mobile-btn').toggleClass('navbar-arrow-below-blue');
    $('#close-flags-mobile').click(function(){
        $('#flags-mobile-btn').removeClass('navbar-arrow-below-blue');
        $('#show-flags-mobile').trigger('click');
    });
});
