
exports.up = function(knex) {
    return knex.schema.createTable("jobs", table => {
        table.increments("job_id")
        table.string("job_title", 128)
        table.string("employer", 128)
        table.string("start_date", 128)
        table.string("end_date", 128)
        table.string("img_url", 256)
    })
    .createTable("powerstate", table => {
      table.increments("power_id")
      table.string("action", 128)
      table.string("result", 128)
      table.string("quant", 128)
      table.integer("job_id")
        .unsigned()
        .notNullable()
        .references('job_id')
        .inTable('jobs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable("job_powers", table => {
      table.increments("job_power_id")
      table.integer("job_id")
        .unsigned()
        .notNullable()
        .references('job_id')
        .inTable('jobs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer("power_id")
        .unsigned()
        .notNullable()
        .references('power_id')
        .inTable('powerstate')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable("skills", table => {
        table.increments("skill_id")
        table.string("skill", 128)
        table.boolean("hard_skill")
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("skills")
      .dropTableIfExists("job_powers")
      .dropTableIfExists("powerstate")
      .dropTableIfExists("jobs")
  };
  