module.exports = {
  async addGame(Parser, game) {
    try {
      Parser.idGame++
      Parser.games.set(Parser.idGame, game)
      return Parser
    } catch (error) {
      throw new Error('Error adding game: '+ error.message)
    }
  }
}