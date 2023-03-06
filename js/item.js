const swiper = new Swiper('.item__slider', {
    speed: 500,
    spaceBetween: 100,
    // autoplay: {
    //     delay: 5000,
    // },
    autoHeight: true,
    navigation: {
        nextEl: '.item-slider-next',
        prevEl: '.item-slider-prev',
    },
    thumbs: {
        swiper: {
            el: '.item__minislider',
            speed: 500,
            spaceBetween: 5,
            autoHeight: true,
            slidesPerView: 3,
            slideThumbActiveClass: 'item-minislider__slide-active'
        }
    }
});
