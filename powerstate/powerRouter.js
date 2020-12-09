const router = require('express').Router()

const Power = require('./powerModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
router.get('/', (req,res)=>{ 
    Power.findPower()
    .then(power => res.status(200).json(power))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

 router.post('/', (req, res) => {
    Power.createPower(req.body)
    .then(power => res.status(201).json(power))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
}) 

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Power.findPowerById(id)
      .then(power => {
        if (power) {
          return Power.updatePower(changes, id);
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id' });
        }
      })
      .then(updatedPower => {
        res.json(updatedPower);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to update power statemet', error: err.message, extra: err.stack });
      });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Power.removePower(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find power statement with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete power statement' });
      });
  });
module.exports = router