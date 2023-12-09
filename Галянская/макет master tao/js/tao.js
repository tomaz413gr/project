$(document).ready(function () {
    $('.sliders').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});