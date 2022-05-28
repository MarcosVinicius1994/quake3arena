module.exports = {
  async removeKill(player) {
    const killsToBeRemoved = player.kills > 0 ? 1 : 0
    player.kills -= killsToBeRemoved
  }
}