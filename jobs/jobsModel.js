const db = require('../data/db-config')

module.exports = {
    //function names:
    findJobs,
    findJobsById,
    createJobs,
    updateJobs,
    removeJobs,
    findPowers

}

    //functions:
    function findJobs(){
        return db('jobs')
    }
    function findJobsById(id){
        return db('jobs')
        .where({id})
        .first()
    }
    function findPowers(){
        return db('powerstate as p')
        .join('jobs as j', 'j.id', 'p.job_id')
        .select('j.job_title', 'j.employer', 'p.action', 'p.result', 'p.quant')
    }

    async function createJobs(job){
        const [id] = await
        db('jobs').insert(job)
            return db('jobs')
            .where({id})
            .first()
    }
    async function updateJobs(changes, id){
        const count = await db('jobs').where({id}).update(changes)
        if (count){ 
            return db('jobs')
            .where({id})
            .first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function removeJobs(id){
        const job = await db('jobs').where({id}).first()
        if (!job){
            return Promise.resolve(null)
        } else {
            await db('jobs')
            .where({id})
            .del()
            return Promise.resolve(job)
        }
    }