
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('job_powers').insert([
    {id: 1, job_id: 1, power_id: 2},
    {id: 2, job_id: 2, power_id: 3},
    {id: 3, job_id: 3, power_id: 4},
    {id: 4, job_id: 4, power_id: 4},
    {id: 5, job_id: 5, power_id: 1}
  ]);
};