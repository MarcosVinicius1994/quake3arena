const { agroupKills } = require('../util-player/agroup-kills-util-player')

module.exports = {
  async playersKills(game) {
    let result = {}
    try {
      game.players.forEach((async (player) => {
        result[player.username] = await agroupKills(player)
      }))
      return result
    } catch (error) {
      throw new Error('Error for agroup kills player: '+ error.message)
    }
  }
}