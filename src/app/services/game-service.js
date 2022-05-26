const fs = require('fs')
const lines = fs.readFileSync('games.log').toString().split("\n")
const { parseQuake } = require('../utils/parse-quake-utils')


module.exports = {
    async loadGamesService(){
        try {
          const parser  = await parseQuake(parser, lines)
           return parser
        } catch (error) {
            console.log(error)
        }
    }
}