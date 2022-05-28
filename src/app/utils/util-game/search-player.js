module.exports = {
  async getPlayerById(game, id) {
    try {
      if (game.players.has(id)) {
      return game.players.get(id)
    }
    return null
    } catch (error) {
      throw new Error(' Error getting player: '+ + error.message)
    }
  }
}