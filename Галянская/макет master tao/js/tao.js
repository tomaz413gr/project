$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow:'<button class="btn__arrow btn__sliderleft"><img src="img/left.png" alt=""></button>',
        nextArrow:'<button class="btn__arrow btn__sliderright"><img src="img/right.png" alt=""></button>',
    });
});