const blockVoirPlus = document.querySelector('#invisible')
const lienVoirPlus = document.querySelector('#voir-plus')
const iLienVoirPlus = document.querySelector('#i-voir-plus')

lienVoirPlus.addEventListener('click', () => {
    blockVoirPlus.classList.toggle('visible')
    iLienVoirPlus.classList.toggle('rotate')
})

