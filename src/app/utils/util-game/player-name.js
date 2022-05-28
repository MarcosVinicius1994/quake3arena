module.exports = {
  async playersNames(game) {
    try {
      let result = []
      game.players.forEach(player => {
        result.push(player.username)
      })
      return result
    } catch (error) {
      throw new Error('Error adding game: ' + error.message)
    }
  }
}