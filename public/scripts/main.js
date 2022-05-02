import Modal from './modal.js'

const modal = Modal()

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach( button => {
    // adicionar a escuta
    button.addEventListener("click", event => {
        // Abrir modal (Pegar quando o marcar como lido for clicado)
        modal.open()
    })
})

/* Quando o botão delete for clicado abre a modal */
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach( button => {
    button.addEventListener("click", event => {
        modal.open()
    })
})

