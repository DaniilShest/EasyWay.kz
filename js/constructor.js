const step = document.getElementById('item-constuctor-step')
const next = document.getElementById('item-constuctor-next')
const prev = document.getElementById('item-constuctor-prev')
const price = document.getElementById('item-constuctor-price')
const submitBtn = document.getElementById('item-constructor-submit')
const points = document.getElementById('item-constuctor-points')
const line = document.getElementById('item-constuctor-line')
const img = document.getElementById('item-constuctor-img')
let activeStep = 0;
const priceArray = {
    0: 440000
}

const pointsArray = {
}


const formSteps = [
    {
        title: 'Высота подъемника',
        options: [
            {
                title: 'Высота до 1м.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Высота до 1,5м.',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Высота до 2м.',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'Высота до 2,5м.',
                data: 50000,
                img: '../img/item/4.png'
            },
            {
                title: 'Высота до 3м.',
                data: 50000,
                img: '../img/item/5.png'
            }
        ]
    },
    {
        title: 'Площадка подъёмного механизма',
        options: [
            {
                title: '1040 х 960 мм.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: '1250 х 960 мм.',
                data: 10000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Покрытие площадки подъемного механизма',
        options: [
            {
                title: 'Перфорированный лист',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Алюминиевый рифленый лист',
                data: 20000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Скат с площадки подъемного механизма',
        options: [
            {
                title: 'Cтальной (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Перфорированный (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Алюминиевый (площадка с алюминиевым рифленым листом)',
                data: 0,
                img: '../img/item/3.png'
            },
        ]
    },
    {
        title: 'Заезд/выезд на площадку подъемного механизма',
        options: [
            {
                title: 'Прямой',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'слева',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'справа',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'прямой и слева',
                data: 0,
                img: '../img/item/4.png'
            },
            {
                title: 'прямой и справа',
                data: 0,
                img: '../img/item/5.png'
            }
        ]
    },
    {
        title: 'Высота подъемника',
        options: [
            {
                title: 'Высота до 1м.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Высота до 1,5м.',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Высота до 2м.',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'Высота до 2,5м.',
                data: 50000,
                img: '../img/item/4.png'
            },
            {
                title: 'Высота до 3м.',
                data: 50000,
                img: '../img/item/5.png'
            }
        ]
    },
    {
        title: 'Площадка подъёмного механизма',
        options: [
            {
                title: '1040 х 960 мм.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: '1250 х 960 мм.',
                data: 10000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Покрытие площадки подъемного механизма',
        options: [
            {
                title: 'Перфорированный лист',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Алюминиевый рифленый лист',
                data: 20000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Скат с площадки подъемного механизма',
        options: [
            {
                title: 'Cтальной (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Перфорированный (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Алюминиевый (площадка с алюминиевым рифленым листом)',
                data: 0,
                img: '../img/item/3.png'
            },
        ]
    },
    {
        title: 'Заезд/выезд на площадку подъемного механизма',
        options: [
            {
                title: 'Прямой',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'слева',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'справа',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'прямой и слева',
                data: 0,
                img: '../img/item/4.png'
            },
            {
                title: 'прямой и справа',
                data: 0,
                img: '../img/item/5.png'
            }
        ]
    }, {
        title: 'Высота подъемника',
        options: [
            {
                title: 'Высота до 1м.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Высота до 1,5м.',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Высота до 2м.',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'Высота до 2,5м.',
                data: 50000,
                img: '../img/item/4.png'
            },
            {
                title: 'Высота до 3м.',
                data: 50000,
                img: '../img/item/5.png'
            }
        ]
    },
    {
        title: 'Площадка подъёмного механизма',
        options: [
            {
                title: '1040 х 960 мм.',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: '1250 х 960 мм.',
                data: 10000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Покрытие площадки подъемного механизма',
        options: [
            {
                title: 'Перфорированный лист',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Алюминиевый рифленый лист',
                data: 20000,
                img: '../img/item/2.png'
            }
        ]
    },
    {
        title: 'Скат с площадки подъемного механизма',
        options: [
            {
                title: 'Cтальной (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'Перфорированный (площадка с перфорированным листом)',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'Алюминиевый (площадка с алюминиевым рифленым листом)',
                data: 0,
                img: '../img/item/3.png'
            },
        ]
    },
    {
        title: 'Заезд/выезд на площадку подъемного механизма',
        options: [
            {
                title: 'Прямой',
                data: 0,
                img: '../img/item/1.png'
            },
            {
                title: 'слева',
                data: 0,
                img: '../img/item/2.png'
            },
            {
                title: 'справа',
                data: 0,
                img: '../img/item/3.png'
            },
            {
                title: 'прямой и слева',
                data: 0,
                img: '../img/item/4.png'
            },
            {
                title: 'прямой и справа',
                data: 0,
                img: '../img/item/5.png'
            }
        ]
    },
]


function updateStep(index) {
    step.innerHTML = `<div class="item-constuctor__question">${formSteps[index].title}</div>`
    formSteps[index].options.forEach(option => {
        step.innerHTML += `<a class="btn-light item-constuctor__btn" data-img=${option.img} data-price="${option.data}">${option.title}</a>`
    })
    updateBtns()
    updatePoints()
    updateLine()
}

function updateBtns() {
    const btns = document.querySelectorAll('.item-constuctor__btn')
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
    if (activeStep < formSteps.length - 1) {
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
    if (checkActivatedBtn(btns) && activeStep !== formSteps.length - 1) next.removeAttribute('disabled')
    if (!checkActivatedBtn(btns)) next.setAttribute('disabled', true)

    if (activeStep === formSteps.length - 1 && checkActivatedBtn(btns)) submitBtn.removeAttribute('disabled')
    if (activeStep < formSteps.length - 1) submitBtn.setAttribute('disabled', true)

}

function updatePrice() {
    let sum = 0;
    for (let price of Object.values(priceArray)) {
        sum += price;
    }
    price.innerHTML = sum
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
        points.innerHTML += `<div class="item-constuctor__point ${pointsArray[i] ? 'active' : ''}"><span>${i + 1}</span></div>`
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
    updateStep(0)
}
