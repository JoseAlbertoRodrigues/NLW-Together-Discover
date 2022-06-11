//vai servir para rodar ele antes, para que as tabelas do banco de dados sejam criadas.
// para depois colocar o conteúdo lá dentro
// vai rodar separado do projeto
const Database = require("./config")

const initDb = { // guardar as funções aqui dentro
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

// chamando o initDb e executando 
initDb.init(); 

// await significa esperar: vai rodar o Database, só que ele vai esperar
// quando o Database() terminar de rodar e trouxer o resultado, ai você vai para a próxima 

// o async tem que ser sempre usado com o await, se for usar o await dentro de uma função,
// a função tem que ser async
