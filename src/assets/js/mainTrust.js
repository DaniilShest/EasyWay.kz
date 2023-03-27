const mainTrust = new Swiper('.main-trust__slider', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
        el: '.main-trust-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        880: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});