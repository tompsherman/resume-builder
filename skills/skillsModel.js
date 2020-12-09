const db = require('../data/db-config')

module.exports = {
    //function names:
    findSkills,
    findSkillsById,
    createSkills,
    updateSkills,
    removeSkills

}

    //functions:
    function findSkills(){
        return db('skills')
    }
    function findSkillsById(id){
        return db('skills')
        .where({id})
        .first()
    }
    async function createSkills(skills){
        const [id] = await
        db('skills').insert(skills)
            return db('skills')
            .where({id})
            .first()
    }
    async function updateSkills(changes, id){
        const count = await db('skills').where({id}).update(changes)
        if (count){ 
            return db('skills')
            .where({id})
            .first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function removeSkills(id){
        const skills = await db('skills').where({id}).first()
        if (!skills){
            return Promise.resolve(null)
        } else {
            await db('skills')
            .where({id})
            .del()
            return Promise.resolve(skills)
        }
    }