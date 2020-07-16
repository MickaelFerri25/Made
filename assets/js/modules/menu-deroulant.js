const menu_deroulant_tp = document.getElementById('menu-deroulant')
const menu_liste_deroulante = document.getElementById('liste-deroulante')
const lien_tp2 = document.getElementById('lien-tp2')
const lien_tp = document.getElementById('lien-tp')

if(lien_tp2) {
  lien_tp2.addEventListener('click', () => {
    menu_mobile_deroulante.style.display = "flex"
  })
}

if(lien_tp) {
  lien_tp.addEventListener('click', () => {
    menu_deroulant_tp.style.opacity = "1"
    menu_deroulant_tp.style.zIndex = "1"
    menu_deroulant_tp.style.transform = "translateX(35px)"
  })
}

if(menu_deroulant_tp) {

  menu_deroulant_tp.addEventListener('mouseleave', () => {
    menu_deroulant_tp.style.opacity = "0"
    menu_deroulant_tp.style.transform = "translateX(0px)"
   })
   
}