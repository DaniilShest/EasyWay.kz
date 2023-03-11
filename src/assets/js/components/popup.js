const popupCheckbox = document.getElementById("popup-checkbox")
const popupBtn = document.getElementById("popup-btn")

popupCheckbox.addEventListener("change", () => {
    console.log(popupBtn)
    if (popupBtn.hasAttribute('disabled')) { popupBtn.removeAttribute('disabled') }
    else { popupBtn.setAttribute('disabled', true) }
})