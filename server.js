const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const resumeRouter = require('./resume/resumeRouter')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/resume', resumeRouter)

module.exports = server