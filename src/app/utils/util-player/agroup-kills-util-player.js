module.exports = {
  async agroupKills(player) {
    const score = player.kills - player.killForWorld
    return score < 0 ? 0 : score
  }
}