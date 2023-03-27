const mainSlider = new Swiper('.main-slider', {
    speed: 500,
    spaceBetween: 100,
    // autoplay: {
    //     delay: 5000,
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.main-slider__pagination',
        type: 'bullets',
        clickable: true
    },
    autoHeight: true
});

const catalogSlider = new Swiper('.main-catalog__slider', {
    speed: 500,
    pagination: {
        el: '.catalog-slider__pagination',
        type: 'bullets',
        clickable: true
    },
    autoHeight: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1060: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

