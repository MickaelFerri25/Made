const bars1 = document.querySelector("#bars1")
const bars2 = document.querySelector("#bars2")
const bars3 = document.querySelector("#bars3")
const button_red = document.querySelector("#button-red")

window.addEventListener('load', () => {
    setTimeout(() => {
        bars1.style.opacity = "1"
        bars1.style.transform = "translateX(0)"
    }, 600);
    setTimeout(() => {
        bars2.style.opacity = "1"
        bars2.style.transform = "translateX(0)"
    }, 1000);
    setTimeout(() => {
        bars3.style.opacity = "1"
        bars3.style.transform = "translateX(0)"
    }, 1500);
    setTimeout(() => {
        button_red.style.opacity = "1"
        button_red.style.transform = "translateX(0)"
    }, 2000);
})