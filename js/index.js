const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    autoHeight: true
});