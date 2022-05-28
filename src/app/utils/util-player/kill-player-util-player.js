const { getIdGame } = require('../util-parser/get-game-util-parser')
const { addKillsGame } = require('../util-game/add-kills-util-game')
const { addKillsPlayer } = require('../util-player/add-kill-util-player')

module.exports = {
  async killPlayer(parser, line) {
    let game = await getIdGame(parser)
    let players = line.match(/Kill: ([0-9]+) ([0-9]+)/) 
    if (players) {
      await addKillsGame(game)
      if (players[1] == 1022) {
        const player = game.players.get(players[2])
        player.killForWorld += 1
      } else {
        const player = game.players.get(players[2])
        await addKillsPlayer(player)
      }
    } else {
      console.log(`[WARNING] Could not find players to count kills (line: ${line})`)
    }
  }
}