let careerBtn = document.getElementsByClassName("career__btn");
console.log(careerBtn)
for (let i = 0; i < careerBtn.length; i++) {
    careerBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}