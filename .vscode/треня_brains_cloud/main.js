$(function () {
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    scrollTech(scrollPos, introH);

    header.addClass('fixed');
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        console.log(scrollPos);
        scrollTech(scrollPos, introH);

    });

    function scrollTech(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        console.log(elementId);
        let elementOffset = $(elementId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset
        }), 700;

    });



})
