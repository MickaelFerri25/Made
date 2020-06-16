const input_mdp = document.getElementById('mdp');
const input_email = document.getElementById('email');
const button_send = document.getElementById('button_form')

input_mdp.addEventListener('focus', () => {
    if(input_mdp.value.length < 8) {
        input_mdp.style.border = "solid 1px red"
    } else {
        input_mdp.style.border = "solid 1px green"
    }
})

input_mdp.addEventListener('input', () => {
    if(input_mdp.value.length < 8) {
        input_mdp.style.border = "solid 1px red"
    } else {
        input_mdp.style.border = "solid 1px green"
    }
})

input_email.addEventListener('focus', () => {
    if(input_email.value.length === 0) {
        input_email.style.border = "solid 1px red"
    } else {
        input_email.style.border = "solid 1px green"
    }
})

input_email.addEventListener('input', () => {
    if(input_email.value.length === 0) {
        input_email.style.border = "solid 1px red"
    } else {
        input_email.style.border = "solid 1px green"
    }
})

button_send.addEventListener('click', (e) => {
    if(input_mdp.value.length < 8) {
        e.preventDefault()
        input_mdp.style.border = "solid 1px red"
    }
    if(input_email.value.length === 0) {
        e.preventDefault()
        input_email.style.border = "solid 1px red"
    }
})
