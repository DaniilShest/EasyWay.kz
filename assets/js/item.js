const itemSlider = new Swiper('.item__slider', {
    speed: 500,
    autoHeight: true,
    spaceBetween: 20,
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
            slideThumbActiveClass: 'item-minislider__slide-active',
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
                580: {
                    slidesPerView: 4,
                    spaceBetween: 5
                },
                800: {
                    slidesPerView: 5,
                    spaceBetween: 5
                },
                1020: {
                    slidesPerView: 3,
                    spaceBetween: 5
                }
            }
        }
    }
});

const itemImgs = document.getElementsByClassName('item-imgs')

for (let i = 0; i < itemImgs.length; i++) {
    const element = itemImgs[i];
    lightGallery(element, {
        thumbnail: true
    });
}

const step = document.getElementById('item-constructor-step')
const next = document.getElementById('item-constructor-next')
const prev = document.getElementById('item-constructor-prev')
const price = document.getElementById('item-constructor-price')
const submitBtn = document.getElementById('item-constructor-submit')
const points = document.getElementById('item-constructor-points')
const line = document.getElementById('item-constructor-line')
const img = document.getElementById('item-constructor-img')

document.querySelector('a[href^="#constructor"').addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector('.item-constructor').offsetHeight;
    const topOffset = 100; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

let activeStep = 0;
let constructorCheckbox;
const priceArray = {
    0: 440000
}

const pointsArray = {
}

const formSteps = [
    {
        title: 'Высота подъема',
        options: [
            {
                title: 'до 1 метра',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'до 1,5 метров',
                data: 0,
                img: './assets/img/item/2.webp'
            },
            {
                title: 'до 2 метров',
                data: 0,
                img: './assets/img/item/3.webp'
            },
            {
                title: 'до 2,5 метров',
                data: 50000,
                img: './assets/img/item/4.webp'
            },
            {
                title: 'до 3 метров',
                data: 50000,
                img: './assets/img/item/5.webp'
            }
        ]
    },
    {
        title: 'Габариты площадки',
        options: [
            {
                title: '1040 х 960 мм.',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: '1250 х 960 мм.',
                data: 10000,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Покрытие площадки',
        options: [
            {
                title: 'Перфорированный лист',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Алюминиевый рифленый лист',
                data: 20000,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Скат с площадки',
        options: [
            {
                title: 'Cтальной (площадка с перфорированным листом)',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Перфорированный (площадка с перфорированным листом)',
                data: 0,
                img: './assets/img/item/2.webp'
            },
            {
                title: 'Алюминиевый (площадка с алюминиевым рифленым листом)',
                data: 0,
                img: './assets/img/item/3.webp'
            },
        ]
    },
    {
        title: 'Заезд/выезд на площадку',
        options: [
            {
                title: 'Прямой',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Слева',
                data: 0,
                img: './assets/img/item/2.webp'
            },
            {
                title: 'Справа',
                data: 0,
                img: './assets/img/item/3.webp'
            },
            {
                title: 'Прямой и слева',
                data: 0,
                img: './assets/img/item/4.webp'
            },
            {
                title: 'Прямой и справа',
                data: 0,
                img: './assets/img/item/5.webp'
            }
        ]
    },
    {
        title: 'Калитка на нижней посадочной площадке',
        options: [
            {
                title: 'Слева',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Справа',
                data: 0,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Калитка на верхней посадочной площадке',
        options: [
            {
                title: 'Слева',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Справа',
                data: 0,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Поручни',
        options: [
            {
                title: 'Круглые',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Квадратные',
                data: 0,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Ловитель на случай обрыва троса',
        options: [
            {
                title: 'Не устанавливать',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Установить',
                data: 50000,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Козырек (навес от дождя и снега)',
        options: [
            {
                title: 'Не устанавливать',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Установить',
                data: 50000,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Крепление подъемного механизма',
        options: [
            {
                title: 'Сварное',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Анкерное',
                data: 0,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Управление подъемным механизмом',
        options: [
            {
                title: 'Проводной пульт управления',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Проводной пульт управления (дополнительный)',
                data: 10000,
                img: './assets/img/item/2.webp'
            },
            {
                title: 'Посты управления на стене (2 шт.) и платформе',
                data: 50000,
                img: './assets/img/item/3.webp'
            },
            {
                title: 'Посты управления на стойке (2 шт.) и платформе',
                data: 50000,
                img: './assets/img/item/4.webp'
            }
        ]
    },
    {
        title: 'Кнопка вызова',
        options: [
            {
                title: 'Не устанавливать',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Установить',
                data: 10000,
                img: './assets/img/item/2.webp'
            }
        ]
    },
    {
        title: 'Цвет',
        options: [
            {
                title: 'Cерый цвет',
                data: 0,
                img: './assets/img/item/1.webp'
            },
            {
                title: 'Коричневый цвет',
                data: 0,
                img: './assets/img/item/2.webp'
            },
            {
                title: 'Индивидуальный цвет',
                data: 10000,
                img: './assets/img/item/2.webp'
            }
        ]
    }
]


function updateStep(index) {
    step.innerHTML = `<div class="item-constructor__point-mobile">Шаг ${index + 1} из ${formSteps.length}</div>`
    step.innerHTML += `<div class="item-constructor__question">${formSteps[index].title}</div>`
    if (formSteps[index].title !== 'Оставить заявку') {
        formSteps[index].options.forEach(option => {
            step.innerHTML += `<a class="btn-light item-constructor__btn" data-img=${option.img} data-price="${option.data}">${option.title}</a>`
        })
    } else {
        step.innerHTML += `
        <input type="text" required name="text-input" id="" placeholder="Ваше имя">
        <input type="tel" required name="tel-input" id="" placeholder="Ваш телефон">
        <textarea name="textaria" id="" cols="10" rows="5" placeholder="Ваш вопрос"></textarea>
        <div class="checkbox">
        <input type="checkbox" class="custom-checkbox" name="form-constructor-checkbox" id="form-constructor-checkbox"><label for="form-constructor-checkbox">
            Согласен на обработку персональных данных</label>
        </div>
        `
        updateCheckbox()
    }

    if (activeStep < formSteps.length - 1) {
        updateBtns()
    } else {
        updateControls()
    }
    updatePoints()
    updateLine()
}

function updateBtns() {
    if (activeStep < formSteps.length - 1) {
        const btns = document.querySelectorAll('.item-constructor__btn')
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(el => {
                    el.classList.remove('active')
                })
                btn.classList.add('active')
                priceArray[activeStep + 1] = Number(btn.dataset.price)
                updateImg(btn.dataset.img)
                updatePrice()
                updateControls(btns)
            })
        })
        updateImg(btns[0].dataset.img)
        updateControls(btns)
    }
}

function checkActivatedBtn(btns) {
    let check = false
    btns.forEach((btn) => {
        if (btn.classList.contains('active')) {
            check = true
        }
    })
    return check
}

next.addEventListener('click', (e) => {
    e.preventDefault()
    if (activeStep < formSteps.length) {
        activeStep++;
        updateStep(activeStep)
    }
})

prev.addEventListener('click', (e) => {
    e.preventDefault()
    if (activeStep > 0) {
        priceArray[activeStep] = 0
        priceArray[activeStep + 1] = 0
        updatePrice()
        activeStep--;
        updateStep(activeStep)
    }
})

function updateControls(btns) {

    if (activeStep === 0) prev.setAttribute('disabled', true)
    if (activeStep > 0) prev.removeAttribute('disabled')

    if (activeStep === formSteps.length - 1) next.setAttribute('disabled', true)
    if (activeStep < formSteps.length - 1) next.removeAttribute('disabled')
    if (activeStep < formSteps.length - 1) {
        if (checkActivatedBtn(btns) && activeStep !== formSteps.length - 1) next.removeAttribute('disabled')
        if (!checkActivatedBtn(btns)) next.setAttribute('disabled', true)
    }

    updateSubmit()
}

function updateSubmit() {
    if (activeStep === formSteps.length - 1 && constructorCheckbox.checked) submitBtn.removeAttribute('disabled')
    else submitBtn.setAttribute('disabled', true)
}

function updateCheckbox() {
    constructorCheckbox = document.getElementById('form-constructor-checkbox')
    constructorCheckbox.onchange = () => {
        updateSubmit()
    }
}

function updatePrice() {
    let sum = 0;
    for (let price of Object.values(priceArray)) {
        sum += price;
    }
    price.innerHTML = sum.toLocaleString('ru-RU')
}

function updatePoints() {
    for (let i = 0; i < formSteps.length; i++) {
        if (i <= activeStep) {
            pointsArray[i] = true
        } else {
            pointsArray[i] = false
        }
    }
    points.innerHTML = ''
    for (let i = 0; i < formSteps.length; i++) {
        points.innerHTML += `<div class="item-constructor__point ${pointsArray[i] ? 'active' : ''}"><span>${i + 1}</span></div>`
    }
}

function updateLine() {
    if (activeStep === formSteps.length - 1) {
        line.style.width = `99%`
    } else {
        line.style.width = `${activeStep / (formSteps.length - 1) * 100}%`
    }
}

function updateImg(path) {
    img.src = path
}

window.onload = () => {
    formSteps.push({ title: 'Оставить заявку' })
    updateStep(0)
}