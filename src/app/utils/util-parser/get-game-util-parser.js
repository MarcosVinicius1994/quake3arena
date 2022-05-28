module.exports = {
  async getIdGame(agroupGames) {
    try {
      return agroupGames.games.get(agroupGames.idGame)
    } catch (error) {
      throw new Error('Error for get game: ' + error.message)
    }
  }
}