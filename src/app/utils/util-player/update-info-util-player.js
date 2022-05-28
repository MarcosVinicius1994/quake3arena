module.exports = {
  async updateInfoPlayer(player, line) {
    try {
      player.username = line.match(/ClientUserinfoChanged: [0-9]* n\\(.*)\\t\\[0-9]+\\model/)[1]
    } catch (error) {
      throw new Error('Error for updating name for player: '+ error.message)
    }
  }
}