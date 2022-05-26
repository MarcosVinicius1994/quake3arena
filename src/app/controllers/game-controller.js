const { loadGamesService} = require('../services/game-service')


module.exports = {

    async loadGameController(){
        try {
           const resultGame = await loadGamesService()
           return {
               body: resultGame,
               statusCode: 200
           }
        } catch (error) {
            console.log(error)
        }
    }
}