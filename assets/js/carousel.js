$(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 3,
        },
        600: {
            items: 4,
        },
        800: {
            items: 5,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 6,
        },
    },
});
