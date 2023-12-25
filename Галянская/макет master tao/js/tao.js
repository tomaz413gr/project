$(document).ready(function () {

    // Sliders

    $('.sliders').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });

    $('.slider__main').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,


        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false
                }
            }
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    })
    
    $('.slider__why').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    })






});

    // Burger__menu

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
burger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('menu__open');
})