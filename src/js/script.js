$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.png" alt="arrow"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });
});