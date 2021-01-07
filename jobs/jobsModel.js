const db = require('../data/db-config')

module.exports = {
    //function names:
    findJobs,
    findJobsById,
    createJobs,
    updateJobs,
    removeJobs,
    findPowers,
    createPower
}

    //functions:
    function findJobs(){
        return db('jobs')
    }
    function findJobsById(job_id){
        return db('jobs')
        .where({job_id})
        .first()
    }
    function findPowers(id){
        return db('jobs as j')
        .join('powerstate as p', 'j.job_id', 'p.job_id')
        .select('j.job_title', 'j.employer', 'p.action', 'p.result', 'p.quant', 'p.power_id')
        .where({'j.job_id': id})
        .orderBy('p.power_id')
    }

    async function createJobs(job){
        const [job_id] = await
        db('jobs').insert(job)
            return db('jobs')
            .where({job_id})
            .first()
    }

    async function createPower(powerstate, job_id){
        const res = await db('powerstate').insert(powerstate, job_id)
            return db('powerstate')
            .where({job_id})
            .orderBy('id')
    }

    async function updateJobs(changes, job_id){
        const count = await db('jobs').where({job_id}).update(changes)
        if (count){ 
            return db('jobs')
            .where({job_id})
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