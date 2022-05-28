const { getIdGame } = require('../util-parser/get-game-util-parser')
const { newPlayerGame } = require('../util-game/new-player-util-game')
const { getPlayerId } = require('./get-id-util-player')



module.exports = {
    async newPlayer(parser, line) {
        try {
            let idGame = await getIdGame(parser)
            const player = {
                "id": 0,
                "username": '',
                "kills": 0,
                "killForWorld": 0
            }
            player.id = await getPlayerId(line)
            await newPlayerGame(idGame, player)
        } catch (error) {
            throw new Error('Error for creating new player: ' + error.message)
        }
    }
}