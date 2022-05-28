const fs = require('fs')
const lines = fs.readFileSync('games.log').toString().split("\n")
const { parseLogs } = require('../utils/util-parser/parse-logs-lines-util-parser')
const { mountObject } = require('../utils/util-parser/mount-util-parser')

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
    }
}