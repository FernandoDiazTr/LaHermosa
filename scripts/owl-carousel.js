let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    navText: [
        `<button><span class="fas fa-chevron-left"></span></button>`,
        '<button><span class="fas fa-chevron-right"></span></button>'
    ],
    navElement: 'div',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        769: {
            items: 3
        }
    }
});