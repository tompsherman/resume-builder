
exports.seed = function(knex) {
        // Inserts seed entries
      return knex('powerstate').insert([
        {power_id: 1, action: 'created', result: 'build-your-resume app', quant: 'in 48 hours'},
        {power_id: 2, action: 'marketed', result: 'build-your-resume app', quant: 'across 5 platforms'},
        {power_id: 3, action: 'sold', result: 'build-your-resume app', quant: '100 units of'},
      ]);
};
