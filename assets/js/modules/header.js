const croix = document.getElementById("croix-bg")
const block_bg = document.getElementById("block-bg")
const bars_bg = document.getElementById("bars-bg")

bars_bg.addEventListener('click', () => {
    block_bg.style.transform = "translateX(0)"
})

croix.addEventListener('click', () => {
    block_bg.style.transform = "translateX(-460px)"
})

window.addEventListener('resize', () => {
    block_bg.style.transform = "translateX(-460px)"
})