const { updateInfoPlayer } = require('../util-player/update-info-util-player')
const { getIdGame } = require('../util-parser/get-game-util-parser')
const { getPlayerId } = require('./get-id-util-player')
const { getPlayerById } = require('../util-game/search-player')

module.exports = {
  async update(parser, line) {
    try {
      let idGame = await getIdGame(parser)
      let playerID = await getPlayerId(line)
      let player = await getPlayerById(idGame, playerID)
      if (player) {
        await updateInfoPlayer(player, line)
      }
    } catch (error) {
      throw new Error('Error for updateInfoPlayer player id: ' + error.message)
    }
  }
}