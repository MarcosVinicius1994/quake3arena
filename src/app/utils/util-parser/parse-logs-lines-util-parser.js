const { newGame } = require('../util-game/new-util-game')
const { newPlayer } = require('../util-player/new-util-player')
const { update } = require('../util-player/update-util-player')
const { killPlayer } = require('../util-player/kill-player-util-player')

module.exports = {
    async parseLogs(Parser, lines) {
        let typeLog = ''
        try {
            for (let i = 0; i < lines.length; i++) {
                typeLog = lines[i].match(/^.{0,7}([a-z A-Z][^:]*)/)
                if (!!typeLog) {
                    switch (typeLog[1]) {
                        case 'InitGame':
                            await newGame(Parser)
                            break
                        case 'ClientConnect':
                            await newPlayer(Parser, lines[i])
                            break
                        case 'ClientUserinfoChanged':
                            await update(Parser, lines[i])
                            break
                        case 'Kill':
                            await killPlayer(Parser, lines[i])
                            break
                        default:
                            break
                    }
                }
            }
        } catch (error) {
            throw new Error('Error for reading from logs file: ' + error.message)
        }

    }
}