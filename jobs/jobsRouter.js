const router = require('express').Router()

const Job = require('./jobsModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    Job.findJobs()
    .then(jobs => res.status(200).json(jobs))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

 router.get('/powers', (req, res) => {
    Job.findPowers()
    .then(powers => {
        res.status(202).json(powers)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

 router.post('/', (req, res) => {
    Job.createJobs(req.body)
    .then(job => res.status(201).json(job))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
}) 

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