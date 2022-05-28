const { Router } = require('express')

const pjson = require('../../../../package.json')
const gameRouter = require('../../../app/routes/games-router')
const routes = Router()

routes.get('/api/health', (req, res) => {
    return res.json({
        name: pjson.name,
        version: pjson.version,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        UserAgent: req.get('User-Agent'),
        url: req.url,
        host: req.hostName,
        baseUrl: req.baseUrl,
        method: req.method,
    })
})


routes.get('/', (req, res) => {
    return res.json({ message: 'Olá serviço de busca dos logs do game' })
})


routes.use('/v1/quake3', gameRouter)

module.exports = routes
