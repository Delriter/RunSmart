/* $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 1500,
        adaptiveHeight: true,
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
}); */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: "bottom",
    nav: false,
});

document.querySelector('.prev').addEventListener('click',  function () {
    slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });