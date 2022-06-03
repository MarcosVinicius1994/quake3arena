const { playersNames } = require('../util-game/player-name')
const { playersKills } = require('../util-game/player-add-kills')

module.exports = {
    async mountObject(Parser) {
        try {
            let result = {}
            const games = Parser.games
            const promises = []
            for (let i =1 ; i < games.size; i++) {
                promises.push(
                    result[`game_${parseInt(i)}`] = {
                    total_kills: await games.get(i).total_kills,
                    players: await playersNames(games.get(i)),
                    kills:  await playersKills(games.get(i))
                })
            }
            Promise.all(promises)
            return result
        } catch (error) {
            throw new Error('Error while amounting final object parser: ' + error.message)
        }
    },
}