
exports.seed = function(knex) {
        // Inserts seed entries
      return knex('powerstate').insert([
        {power_id: 1, action: 'created', result: 'build-your-resume app', quant: 'in 48 hours', job_id: 4},
        {power_id: 2, action: 'marketed', result: 'build-your-resume app', quant: 'across 5 platforms', job_id: 4},
        {power_id: 3, action: 'sold', result: 'build-your-resume app', quant: '100 units of', job_id:4},
        {power_id: 4, action: 'sold', result: 'ice cream', quant: '100 scoops of', job_id:1},
        {power_id: 5, action: 'sold', result: 'communications', quant: '100 proposals of', job_id:3},
        {power_id: 6, action: 'sold', result: 'stock', quant: '100 shares of', job_id:2},
      ]);
};
