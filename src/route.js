const express = require('express') // importando modulo express

const route = express.Router() // falar quem é o route, ela guarda todas as funcionalidades de rota que o express tem

route.get('/', (req, res) => res.render('index')) // requisição e resposta; res.render() de renderizar na tela

module.exports = route // tenho que exportar o route para ele poder usar... estou exportando a constante route