// Server
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Middleware
const cors = require('cors')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./middleware/middleware')
require('express-async-errors')

//Routers
const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const worksRouter = require('./controllers/works')
const twitterRouter = require('./controllers/twitter')

logger.info('connecting to', config.mongoURL)

mongoose.connect(config.mongoURL)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log(`Cannot connect to Mongo. Error ${error.message}`)
    })

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/login', loginRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/works', worksRouter)
app.use('/api/twitter', twitterRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app