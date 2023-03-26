const objectSlider = new Swiper('.object-slider', {
    speed: 500,
    spaceBetween: 20,
    pagination: {
        el: '.object-slider__pagination',
        type: 'bullets',
        clickable: true
    }
});

const objects = document.getElementsByClassName('object-slider__wrapper')

for (let i = 0; i < objects.length; i++) {
    const element = objects[i];
    lightGallery(element, {
        thumbnail: true
    });
}
