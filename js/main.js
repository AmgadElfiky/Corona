$(document).ready(function () {
    $('.icons,.overlay,.overlay-menu ul li a').click(function () {
        $('.overlay').toggle();
        $('.overlay-menu').toggle();
        $('.close-icon').toggle();
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 450) {
            $('.nav-container').addClass("fixed")
            $('.go').show();
        } else {
            $('.nav-container').removeClass("fixed");
            $('.go').hide();

        }
    });

    var scroll = new SmoothScroll('a[href*="#"]');

    new WOW().init();

    $(document).ready(function () {

        $('.color-faq').click(function () {
            $('.color-faq').removeClass('active');
            $(this).addClass('active');
        });
        $('.faq-text .item').first().show();
        $('.color-faq').click(function () {
            let indexofColorfaq = $(this).index();
            $('.faq-text .item').hide();
            $('.faq-text .item').eq(indexofColorfaq).show();
        });

        // faq test-1

        $('.click1').click(function () {
            $('.faq-text ul li.click1').toggleClass('style-li');
            $('.faq-text ul li.click1 .icon-minus').toggle();
            $('.faq-text ul li.click1 .icon-plus').toggle();
            $('.faq-text ul li.click1 + .ul-text').slideToggle();
        });
        $('.click2').click(function () {
            $('.faq-text ul li.click2').toggleClass('style-li');
            $('.faq-text ul li.click2 .icon-minus').toggle();
            $('.faq-text ul li.click2 .icon-plus').toggle();
            $('.faq-text ul li.click2 + .ul-text').slideToggle();
        });
        $('.click3').click(function () {
            $('.faq-text ul li.click3').toggleClass('style-li');
            $('.faq-text ul li.click3 .icon-minus').toggle();
            $('.faq-text ul li.click3 .icon-plus').toggle();
            $('.faq-text ul li.click3 + .ul-text').slideToggle();
        });
        $('.click4').click(function () {
            $('.faq-text ul li.click4').toggleClass('style-li');
            $('.faq-text ul li.click4 .icon-minus').toggle();
            $('.faq-text ul li.click4 .icon-plus').toggle();
            $('.faq-text ul li.click4 + .ul-text').slideToggle();
        });
        $('.click5').click(function () {
            $('.faq-text ul li.click5').toggleClass('style-li');
            $('.faq-text ul li.click5 .icon-minus').toggle();
            $('.faq-text ul li.click5 .icon-plus').toggle();
            $('.faq-text ul li.click5 + .ul-text').slideToggle();
        });
        $('.click6').click(function () {
            $('.faq-text ul li.click6').toggleClass('style-li');
            $('.faq-text ul li.click6 .icon-minus').toggle();
            $('.faq-text ul li.click6 .icon-plus').toggle();
            $('.faq-text ul li.click6 + .ul-text').slideToggle();
        });
    });

    $(function () {
        $("body").niceScroll({
            cursorcolor: "red",
            cursorwidth: "20px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
        });
    });
});