const sqlite3 = require("sqlite3");
const { open } = require("sqlite") //só irei precisar de uma função, que é a OPEN, sempre temos que abrir uma conexão com o banco de dados

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });