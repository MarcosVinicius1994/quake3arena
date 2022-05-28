const { loadGamesService} = require('../services/games-service')


module.exports = {

    async loadGameController(){
        try {
           const resultGame = await loadGamesService()
           return {
               body: resultGame,
               statusCode: 200
           }
        } catch (error) {
           return {
               statusCode: 500,
               body: error.message
           }
        }
    }
}