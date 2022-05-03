const express = require('express') // importando modulo express

const route = express.Router() // falar quem é o route, ela guarda todas as funcionalidades de rota que o express tem

route.get('/', (req, res) => res.render('index')) // requisição e resposta; res.render() de renderizar na tela
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

// formato que o formulário de dentro da modal tem que passar a informação
// ação para quando for clicado no modal
route.get('/room/:room/:question/:action') //route.post('/room/sala/pergunta/acao')

module.exports = route // tenho que exportar o route para ele poder usar... estou exportando a constante route


// route.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req})) //route.post('/room/sala/pergunta/acao') não vamos usar