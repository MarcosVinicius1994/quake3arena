const { playersNames } = require('../util-game/player-name')
const { playersKills } = require('../util-game/player-add-kills')

module.exports = {
    async mountObject(Parser) {
        try {
            let result = {}
           Parser.games.forEach(async (item, index) => {
                result[`game_${parseInt(index)}`] = {
                    total_kills: item.total_kills,
                    players: await playersNames(item),
                    kills: await playersKills(item)
                }
            })
            return result
        } catch (error) {
            throw new Error('Error while amounting final object parser: ' + error.message)
        }
    },
}