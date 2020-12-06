
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('skills').insert([
        {skill_id: 1, skill: 'skill name', hard_skill: false},
        {skill_id: 2, skill: 'skill name', hard_skill: false},
        {skill_id: 3, skill: 'skill name', hard_skill: false},
      ]);
};
