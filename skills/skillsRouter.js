const router = require('express').Router()

const Skill = require('./skillsModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
router.get('/', (req,res)=>{ 
    Skill.findSkills()
    .then(skill => res.status(200).json(skill))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

 router.post('/', (req, res) => {
    Skill.createSkills(req.body)
    .then(skill => res.status(201).json(skill))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
}) 

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Skill.findSkillsById(id)
      .then(skill => {
        if (skill) {
          return Skill.updateSkills(changes, id);
        } else {
          res.status(404).json({ message: 'Could not find skill with given id' });
        }
      })
      .then(updatedSkill => {
        res.json(updatedSkill);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to update skill', error: err.message, extra: err.stack });
      });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Skill.removeSkills(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find skill with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete skill' });
      });
  });
module.exports = router
module.exports = router