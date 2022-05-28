module.exports = {
    async getPlayerId(line) {
        try {
            const regex = /Client(Connect|UserinfoChanged): ([0-9]*)/
            let playerId = line.match(regex)
            return playerId ? playerId[2] : 0
        } catch (error) {
            throw new Error('Error for getting player id: ' + error.message)
        }
    }
}