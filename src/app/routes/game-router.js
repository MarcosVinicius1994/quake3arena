const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const  { loadGameController } = require('../controllers/game-controller')
const gamesRouter = Router()



gamesRouter.get('/result',
expressCallback(loadGameController))


module.exports = gamesRouter