var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
    },
});

$(".owl-carousel").owlCarousel({
    responsiveClass: true,
    nav: false,
    items: 4,
    loop: true,
    dots: true,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});

