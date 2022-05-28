const getDotEnv = () => {
    if (process.env.NODE_ENV === 'dev') {
        return '.env.dev'
    }
}


require('dotenv').config({ path: getDotEnv() })
require('express-async-errors')

const express = require('express')
const httpContext = require('express-http-context')
const { v4: uuidv4 } = require('uuid')
const { errors } = require('celebrate')

const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const yaml = require('js-yaml')

const routes = require('./routes')


const app = express()

const fileContexts = fs.readFileSync(
    `${__dirname}/../../../src/shared/presentation/documentation.yaml`,
    'utf8'
)

const data = yaml.load(fileContexts)

app.use(httpContext.middleware)
app.use(express.json())
app.use((req, res, next) => {
    httpContext.set('reqId', uuidv4())
    next()
})

app.use(routes)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(data))
app.use(errors)
app.use((error, req, res, next) =>{
    if (error) {
        return res.status(error.status || 500).json({
            status: 'error',
            message: error.message,
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    })
})

process.on('unhandledRejection', (reason, p) => {
    console.log('unhandledRejection', {
        error:{ p, reason: reason.toString()}
    })
})

process.on('uncaughtException',err => {
    console.log('uncaughtException', {
        error:{error: err.message, stack: err.stack}
    })
})

module.exports = app