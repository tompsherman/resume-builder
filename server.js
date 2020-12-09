const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const jobsRouter = require('./jobs/jobsRouter')
const powerRouter = require('./powerstate/powerRouter')
const skillsRouter = require('./skills/skillsRouter')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/resume/jobs', jobsRouter)
server.use('/api/resume/power', powerRouter)
server.use('/api/resume/skills', skillsRouter)

module.exports = server