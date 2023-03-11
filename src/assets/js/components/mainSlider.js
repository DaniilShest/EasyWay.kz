const mainSlider = new Swiper('.main-slider', {
    speed: 500,
    spaceBetween: 100,
    autoplay: {
        delay: 5000,
    },
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

const mainTrust = new Swiper('.main-trust__slider', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.main-trust-pagination',
        type: 'bullets',
        clickable: true
    },
});

console.log(1)