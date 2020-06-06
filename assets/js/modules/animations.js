const menu_mobile_deroulante = document.getElementById('menu-mobil-deroualant')
const lien_tp2 = document.getElementById('lien-tp2')
const lien_tp = document.getElementById('lien-tp')
const menu_deroulant_tp = document.getElementById('menu-deroulant')
const menu_liste_deroulante = document.getElementById('liste-deroulante')
const img1 = document.getElementById('img1')
const text = document.getElementById('text')
const lien_voir_plus = document.getElementById('lien-savoir-plus')
const p2_voir_plus = document.getElementById('p2-savoir-plus')
const a_propos = document.getElementById('a-propos')
const section_support = document.getElementById('section_support')

lien_tp2.addEventListener('click', () => {
  menu_mobile_deroulante.style.display = "flex"
})

menu_mobile_deroulante.addEventListener('mouseleave', () => {
 menu_mobile_deroulante.style.display = "none"
})
menu_mobile_deroulante.addEventListener('click', () => {
  menu_mobile_deroulante.style.display = "none"
 })

lien_tp.addEventListener('click', () => {
    menu_deroulant_tp.style.opacity = "1"
    menu_deroulant_tp.style.transform = "translateX(35px)"
})
menu_deroulant_tp.addEventListener('mouseleave', () => {
   menu_deroulant_tp.style.opacity = "0"
   menu_deroulant_tp.style.transform = "translateX(0px)"
 })

window.addEventListener('load', () => {
    setTimeout(() => {
      text.style.opacity = "1"
      text.style.transform = "translateX(0px)"
  }, 600);
  setTimeout(() => {
      img1.style.opacity = "1"
      img1.style.transform = "translateX(0)"
  }, 2200);
})

lien_voir_plus.addEventListener('click', () => {
  p2_voir_plus.classList.toggle('voir-plus')
  lien_voir_plus.classList.toggle('voir-plus-grey')
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 120) {
    a_propos.style.opacity = "1"
    a_propos.style.transform = "translateX(0px)"
  }
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 510) {
    section_support.style.opacity = "1"
    section_support.style.transform = "translateX(0px)"
  }
})

