
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('job_powers').insert([
    {job_power_id: 1, job_id: 1, power_id: 2},
    {job_power_id: 2, job_id: 2, power_id: 3},
    {job_power_id: 3, job_id: 3, power_id: 4},
    {job_power_id: 4, job_id: 4, power_id: 4},
    {job_power_id: 5, job_id: 5, power_id: 1}
  ]);
};