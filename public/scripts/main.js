import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach( button => {
    // adicionar a escuta
    button.addEventListener("click", handleClick)
})

/* Quando o botão delete for clicado abre a modal */
const deleteButton = document.querySelectorAll('.actions a.delete')

// adicionar a escuta
deleteButton.forEach( button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")


    // Abrir modal (Pegar quando o marcar como lido for clicado)
    modal.open()
}


// modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que você deseja excluir esta pergunta?"