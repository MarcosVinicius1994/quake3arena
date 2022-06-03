const getDotEnv = () => {
    if (process.env.NODE_ENV === 'dev') {
        return '.env.dev'
    }
}


require('dotenv').config({ path: getDotEnv() })
require('express-async-errors')

const express = require('express')
const { errors } = require('celebrate')
const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const yaml = require('js-yaml')
const routes = require('./routes')
const jsonParser = require('../middlewares/json-parse')
const contentType = require('../middlewares/content-type')
const { httpContext, setContext } = require('../middlewares/http-context')


const app = express()
const fileContexts = fs.readFileSync(
    `${__dirname}/../../../src/shared/presentation/documentation.yaml`,
    'utf8'
)

const data = yaml.load(fileContexts)

app.use(jsonParser)
app.use(contentType)
app.use(httpContext)
app.use(setContext)
app.use(routes)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(data))
app.use(errors)

process.on('unhandledRejection', (reason, p) => {
    console.log('unhandledRejection', {
        error: { p, reason: reason.toString() }
    })
})

process.on('uncaughtException', err => {
    console.log('uncaughtException', {
        error: { error: err.message, stack: err.stack }
    })
})

module.exports = app