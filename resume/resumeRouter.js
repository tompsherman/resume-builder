const router = require('express').Router()

const Job = require('./resumeModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
router.get('/', (req,res)=>{ 
    Job.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

module.exports = router