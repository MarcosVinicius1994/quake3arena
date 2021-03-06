const fs = require('fs')
const lines = fs.readFileSync('games.log').toString().split("\n")
const { parseLogs } = require('../utils/util-parser/parse-logs-lines-util-parser')
const { mountObject } = require('../utils/util-parser/mount-util-parser')
const { filterParser } = require('../utils/util-parser/filter-id-util-parser')

module.exports = {
    async loadGamesService() {
        try {
            const parser = {
                "games": new Map(),
                "idGame": 0
            }
            await parseLogs(parser, lines)
            return mountObject(parser)
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    },
    async loadGameIdService(httpRequest) {
        try {
            const { idGame } = httpRequest.query
            const parser = {
                "games": new Map(),
                "idGame": 0
            }
            await parseLogs(parser, lines)
            const game = await mountObject(parser)
            if (game[`game_${idGame}`]) {
                return game[`game_${idGame}`]
            } else {
                throw new Error('Game not found')
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: error.message
            }
        }
    }
}