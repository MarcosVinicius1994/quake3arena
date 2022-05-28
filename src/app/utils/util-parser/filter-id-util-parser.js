module.exports = {
    async filterParser(parser,id){
        let gameObjectId = null
        Object.keys(parser).forEach(game => {
            if(game === `game_${id}`){
                 gameObjectId = parser[item]
            }
        })
        console.log(gameObjectId)
        return gameObjectId
    }
}