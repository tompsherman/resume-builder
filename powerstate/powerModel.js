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
    function findPowerById(id){
        return db('powerstate')
        .where({id})
        .first()
    }
    async function createPower(powerstate){
        const [id] = await
        db('powerstate').insert(powerstate)
            return db('powerstate')
            .where({id})
            .first()
    }
    async function updatePower(changes, id){
        const count = await db('powerstate').where({id}).update(changes)
        if (count){ 
            return db('powerstate')
            .where({id})
            .first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function removePower(id){
        const powerstate = await db('powerstate').where({id}).first()
        if (!powerstate){
            return Promise.resolve(null)
        } else {
            await db('powerstate')
            .where({id})
            .del()
            return Promise.resolve(powerstate)
        }
    }