module.exports = {
  async newPlayerGame(game, player) {
    try {
      game.players.set(player.id, player)
    } catch (error) {
      throw new Error('Error for creating player in game: '+ error.message)
    }
  }
}