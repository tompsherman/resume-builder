
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('skills').insert([
        {
          skill_id: 1, 
          skill: 'javascript', 
          hard_skill: true
        },
        {
          skill_id: 2, 
          skill: 'micosoft office suite', 
          hard_skill: true
        },
        {
          skill_id: 3, 
          skill: 'communications', 
          hard_skill: false
        },
      ]);
};
