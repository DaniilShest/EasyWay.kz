const popupCheckbox = document.getElementById("popup-checkbox")
const popupBtn = document.getElementById("popup-btn")

popupCheckbox.addEventListener("change", () => {
    console.log(popupBtn)
    if (popupBtn.hasAttribute('disabled')) { popupBtn.removeAttribute('disabled') }
    else { popupBtn.setAttribute('disabled', true) }
})

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}