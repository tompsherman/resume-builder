const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
}

    //functions:
    function find(){
        return db('jobs')
    }