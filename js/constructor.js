const step = document.getElementById('item-constuctor-step')
const next = document.getElementById('item-constuctor-next')
const prev = document.getElementById('item-constuctor-prev')
const price = document.getElementById('item-constuctor-price')
const submitBtn = document.getElementById('item-constructor-submit')
let activeStep = 0;
const priceArray = {
    0: 440000
}


const formSteps = [
    {
        title: 'Высота подъемника',
        options: [
            {
                title: 'Высота до 2м.',
                data: 0
            },
            {
                title: 'Высота до 2,5м.',
                data: 50000
            },
            {
                title: 'Высота до 3м.',
                data: 50000
            }
        ]
    },
    {
        title: 'Площадка подъёмного механизма',
        options: [
            {
                title: '1040 х 960 мм.',
                data: 0
            },
            {
                title: '1250 х 960 мм.',
                data: 10000
            }
        ]
    },
    {
        title: 'Покрытие площадки подъемного механизма',
        options: [
            {
                title: 'Перфорированный лист',
                data: 0
            },
            {
                title: 'Алюминиевый рифленый лист',
                data: 20000
            }
        ]
    },
]

function updateStep(index) {
    step.innerHTML = `
        <div class="item-constuctor__question">${formSteps[index].title}</div>`
    formSteps[index].options.forEach(option => {
        step.innerHTML += `
        <a class="btn-light item-constuctor__btn" data-price="${option.data}">${option.title}</a>`
    })
    const btns = getBtns()
    updateBtns(btns)
    updateControls(btns)
}

function getBtns() {
    const btns = document.querySelectorAll('.item-constuctor__btn')
    return btns
}

function updateBtns(btns) {

    btns.forEach(btn => {
        btn.addEventListener('click', () => {

            btns.forEach(el => {
                el.classList.remove('active')
            })
            btn.classList.add('active')
            priceArray[activeStep + 1] = Number(btn.dataset.price)
            updatePrice()
            updateControls()
        })
    })
}

function checkActivatedBtn(btns) {
    btns.forEach((btn) => {
        if (btn.classList.contains('active')) return true
    })
    return false
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

    if (activeStep === formSteps.length - 1) submitBtn.removeAttribute('disabled')
    if (activeStep < formSteps.length - 1) submitBtn.setAttribute('disabled', true)

    if (checkActivatedBtn(btns)) next.removeAttribute('disabled')
    if (!checkActivatedBtn(btns)) next.setAttribute('disabled', true)
}

function updatePrice() {
    let sum = 0;
    for (let price of Object.values(priceArray)) {
        sum += price;
    }
    price.innerHTML = sum
}

window.onload = () => {
    updateStep(0)
}
