require('dotenv').config()

const server = require('./server')

const PORT = process.env.PORT || 8888

server.listen(PORT, ()=>{
        console.log(`\n*** your lucky numbers are: ${PORT} ***`.bgBlue.black)
})


// ## In the Code:

// 14. package.json => line 6 ''scripts'' :
//     ''server'': ''nodemon index.js'',
//     ''start'': ''node index.js''

// 15. index.js _ STATIC _ :
//     dotenv.config ; server require ; PORT ; server.listen

// 16. .env :
//     PORT = 8888

// 17. server.js _ mostly static _ :
//     require dependencies ; //require router// ; define server ; use server ; //use router// ; export server

// 18. knexfile,js _STATIC_ :
//     zac rec dev sets

// 19. data => config.js _STATIC_ :
//     knex config.dev

// 20. models => models.js -dynamic-:
//     require config ; module.exports with function names for endpoitns ; functions for endpoitns

// 21. models => router.js - dynamic-:
//     express.Router ; pull in model ; //a ; export

// 22. test on postman

// 23. npx knex migrate:make create*ducks_table

// 24. data => migrations => 2020..._dynamic*:

// 25. npx knex migrate:latest

// 26. npx knex seed:make 01-cleanup

// 27. npx knex seed:make 02-ducks

// 28. data => seed => 01.js :
//     add in cleanup code

// 29. 02.js :
//     add in seed data

// 30. npx knex seed:run

// 31. create endpoints in router

// 32. create functions in model