
exports.seed = function(knex) {
        // Inserts seed entries
      return knex('powerstate').insert([
        {id: 1, action: 'created', result: 'build-your-resume app', quant: 'in 48 hours', job_id: 4},
        {id: 2, action: 'marketed', result: 'build-your-resume app', quant: 'across 5 platforms', job_id: 4},
        {id: 3, action: 'sold', result: 'build-your-resume app', quant: '100 units of', job_id:4},
      ]);
};
