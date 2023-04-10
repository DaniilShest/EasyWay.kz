
document.querySelectorAll('.filter-dropdown').forEach(function (dropdownWrapper) {
    console.log(document.querySelectorAll('.filter-dropdown'))
    const dropdownBtn = document.querySelector('.filter-dropdown__button');
    const dropdownList = document.querySelector('.filter-dropdown__list');
    const dropdownItems = document.querySelectorAll('.filter-dropdown__list-item');
    const dropdownInput = document.querySelector('.filter-dropdown__input_hidden')

    dropdownBtn.addEventListener('click', function () {
        console.log(dropdownList)
        dropdownList.classList.toggle('filter-dropdown__list_visible');
        this.classList.toggle('filter-dropdown__button_active');
    });

    dropdownItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            dropdownItems.forEach(function (el) {
                el.classList.remove('filter-dropdown__list-item_active');
            })
            e.target.classList.add('filter-dropdown__list-item_active');
            dropdownBtn.innerText = this.innerText;
            dropdownBtn.style.backgroundImage = `url(assets/img/catalog/icons/${this.dataset.image}.svg)`
            dropdownInput.value = this.dataset.value;
            dropdownList.classList.remove('filter-dropdown__list_visible');
        })
    })

    document.addEventListener('click', function (e) {
        if (e.target !== dropdownBtn) {
            dropdownBtn.classList.remove('filter-dropdown__button_active');
            dropdownList.classList.remove('filter-dropdown__list_visible');
        }
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropdownBtn.classList.remove('filter-dropdown__button_active');
            dropdownList.classList.remove('filter-dropdown__list_visible');
        }
    })
})