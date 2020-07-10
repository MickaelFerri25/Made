const block_notif1 = document.getElementById('msg-succes1')
const i_delete1 = document.getElementById('i-delete1')

block_notif1.style.transform = "translateX(0)"
block_notif1.style.opacity = "1"

i_delete1.addEventListener('click', () => {
    block_notif1.style.display = "none"
})