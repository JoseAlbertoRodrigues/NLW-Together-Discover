const express = require('express') // importando modulo express

const route = require('./route') // o server não conhece a existência do route, então eu tenho que importar ele aqui no server.js, como foi eu que criei tenho que dar o './route' 

const path = require('path')

const server = express() // criando o server 

server.set('view engine', 'ejs') // o responsável da view vai ser o ejs

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(route) // falar para o node usar o route

server.listen(3000, () => console.log('RODANDO')) // porta para ficar ouvindo o servidor