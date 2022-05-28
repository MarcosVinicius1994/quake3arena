const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const  { loadGameController } = require('../controllers/games-controller')
const gamesRouter = Router()




gamesRouter.get('/result',
expressCallback(loadGameController))



// gamesRouter.get('/result/player',
// celebrate({
//     [Segments.QUERY]:{
//         indexGame: Joi.number()
//         .required()
//         .message({
//             'number.base': 'O campo indexGame deve um numero',
//         }),
//         namePlayer: Joi.string()
//         .require()
//         .message({
//             'string.base': 'O campo deve ser uma palavra que representa um nome',
//         })
//     }
// }))

module.exports = gamesRouter