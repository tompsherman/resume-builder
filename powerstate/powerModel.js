const db = require('../data/db-config')

module.exports = {
    //function names:
    findPower,
    findPowerById,
    createPower,
    updatePower,
    removePower

}

    //functions:
    function findPower(){
        return db('powerstate')
    }
    function findPowerById(power_id){
        return db('powerstate')
        .where({power_id})
        .first()
    }
    async function createPower(powerstate){
        const [power_id] = await
        db('powerstate').insert(powerstate)
            return db('powerstate')
            .where({power_id})
            .first()
    }
    async function updatePower(changes, power_id){
        const count = await db('powerstate').where({power_id}).update(changes)
        if (count){ 
            return db('powerstate')
            .where({power_id})
            .first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function removePower(power_id){
        const powerstate = await db('powerstate').where({power_id}).first()
        if (!powerstate){
            return Promise.resolve(null)
        } else {
            await db('powerstate')
            .where({power_id})
            .del()
            return Promise.resolve(powerstate)
        }
    }