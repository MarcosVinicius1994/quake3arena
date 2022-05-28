const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const  { loadGameController } = require('../controllers/games-controller')
const  { loadGameIdController } = require('../controllers/games-controller')
const gamesRouter = Router()

gamesRouter.get('/result',
expressCallback(loadGameController))


gamesRouter.get('/result/gameId',
celebrate({
    [Segments.QUERY]:{
        idGame: Joi.number()
        .required()
        .messages({
            'number.baseq3': 'Param id needs to be a number',
            'any.required': 'Define any required',
            'number.empty': 'Define any number',
            'number.pattern': 'Define any number inside pattern'
        }),
    },
}),
expressCallback(loadGameIdController))


module.exports = gamesRouter