const input_mdp = document.getElementById('mdp');
const input_confirm_mdp = document.getElementById('confirm_mdp');
const button_send = document.getElementById('button_form')

button_send.addEventListener('click', (e) => {
    if(input_mdp.value != input_confirm_mdp.value) {
        input_mdp.style.border = "solid 1px red"
        input_confirm_mdp.style.border = "solid 1px red"
    }
})