const checkbox = document.getElementById("form__checkbox")
const btn = document.getElementById("form__btn")

checkbox.addEventListener("change", () => {
    if (btn.hasAttribute('disabled')) { btn.removeAttribute('disabled') }
    else { btn.setAttribute('disabled', true) }
})