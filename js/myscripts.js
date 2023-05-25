window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".boxmenu"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });
});

let swiper;

function initializeSwiper() {
    if (window.innerWidth < 992) {
        swiper = new Swiper(".mySwiper", {
            direction: "horizontal",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

initializeSwiper();

window.addEventListener("resize", function () {
    if (swiper) {
        swiper.destroy();
    }
    initializeSwiper();
});

if (window.innerWidth < 768) {
    const carousel = document.querySelector(".owl-carousel");
    const elements = carousel.querySelectorAll("div");

    for (let i = 4; i < elements.length; i++) {
        carousel.removeChild(elements[i]);
    }
}

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
