
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 1, 
          job_title: 'ice cream scooper', 
          employer: 'Baskin Robbins', 
          start_date: 'month, year', 
          end_date: 'month, year',
          img_url: ''
        },
        {
          id: 2, 
          job_title: 'finance intern', 
          employer: 'Merrill Lynch', 
          start_date: 'month, year', 
          end_date: 'month, year',
          img_url: ''
        },
        {
          id: 3, 
          job_title: 'communications specialist', 
          employer: 'NAMCO', 
          start_date: 'month, year', 
          end_date: 'month, year',
          img_url: ''
        },
        {
          id: 4, 
          job_title: 'full stack web developer (student)', 
          employer: 'Lambda School', 
          start_date: 'month, year', 
          end_date: 'month, year',
          img_url: ''
        }
      ]);
};
