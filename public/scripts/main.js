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
    event.preventDefault() //para não aparecer o # na url, o link não se comporta mais como links

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"

    // pegar o código da sala
    const roomId = document.querySelector('#room-id').dataset.id

    //pegar a rota 
    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/room/${roomId}/:question/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // Abrir modal (Pegar quando o marcar como lido for clicado)
    modal.open()
}


// modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que você deseja excluir esta pergunta?"