// O conteúdo da modal vai vim para cá
// exportar para cá, para depois poder importar em outro lugar
module.exports = {
    index(req, res) { // req, res que vem da rota
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password // pegando a senha que está lá no formulário, input name="password"

        console.log(`room = ${roomId},
                     questionId = ${questionId},
                     action = ${action},
                     password = ${password}`)
    }
}

