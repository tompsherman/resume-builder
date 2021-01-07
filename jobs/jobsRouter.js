const router = require('express').Router()

const Job = require('./jobsModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})

// @desc		get all jobs
// @route		GET /
router.get('/', (req,res)=>{ 
    Job.findJobs()
    .then(jobs => res.status(200).json(jobs))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

// @desc		get job
// @route		GET /:id
router.get('/:id', (req,res)=>{
    const {id} =req.params
  
    Job.findJobsById(id)
    .then(job => {
      if(job){
        res.status(200).json(job)
      } else {
        res.status(404).json({ message: 'cannot find job with given ID'})
      }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

 // @desc		get a job's power statements
// @route		GET /:id/powers
 router.get('/:id/powers', (req, res) => {
   const { id } = req.params

   Job.findPowers(id)
    .then(powers => {
      if (powers.length) {
        res.json(powers)
      } else {
        res.status(404).json({ message: 'can not find power statements for given job'})
      }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		add new job
// @route		POST /
 router.post('/', (req, res) => {
    Job.createJobs(req.body)
    .then(job => res.status(201).json(job))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
}) 

// @desc		add new power statement to job
// @route		POST /:id/power
router.post('/:id/power', (req,res)=>{ 
    const powerData = {...req.body, job_id: req.params.id}
    const {id} = req.params

    Job.findJobsById(id)
    .then(job => {
      if(job){
        console.log(powerData)
        Job.createPower(powerData).then(job => { 
          console.log("router", job)
          res.status(201).json(job)
      })
      } else {
        res.status(404).json({ 
          message: 'could not find job with given id'
        })
      }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))

 })

// @desc		edit job
// @route		PUT /:id 
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Job.findJobsById(id)
      .then(job => {
        if (job) {
          return Job.updateJobs(changes, id);
        } else {
          res.status(404).json({ message: 'Could not find job with given id' });
        }
      })
      .then(updatedJob => {
        res.json(updatedJob);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to update job', error: err.message, extra: err.stack });
      });
  });
 
// @desc		delete a job
// @route		DELETE /  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Job.removeJobs(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find job with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete job' });
      });
  });
module.exports = router