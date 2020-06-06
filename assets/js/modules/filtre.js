const button_filtre = document.querySelector("#button-filtre")
const ul_filter = document.querySelector("#ul-filtre")

button_filtre.addEventListener('click', (e) => {
    e.preventDefault
    ul_filter.style.display = "block"
})

ul_filter.addEventListener('mouseleave', (e) => {
    e.preventDefault
    ul_filter.style.display = "none"
})