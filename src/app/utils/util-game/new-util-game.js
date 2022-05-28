const { addGame } = require('../util-parser/add-game-util-parser')

module.exports = {
  async newGame(Parser) {
    const game = {
     "players": new Map(),
     "total_kills": 0
    }
    try {
      await addGame(Parser, game)
    } catch (error) {
      throw new Error('Error adding game: '+ error.message)
    }
  }
}