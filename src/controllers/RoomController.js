const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password // senha do create-pass.ejs no input password

        let roomId

        for(let i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString() // número da sala
        }

        // console.log(parseInt(roomId)) testando 

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}