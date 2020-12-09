
exports.up = function(knex) {
    return knex.schema.createTable("jobs", table => {
        table.increments("")
        table.string("job_title", 128)
        table.string("employer", 128)
        table.string("start_date", 128)
        table.string("end_date", 128)
        table.string("img_url", 256)
    })
    .createTable("powerstate", table => {
      table.increments("")
      table.string("action", 128)
      table.string("result", 128)
      table.string("quant", 128)
      table.integer("job_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('jobs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable("job_powers", table => {
      table.increments("")
      table.integer("job_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('jobs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer("power_id")
        .unsigned()
        .notNullable()
        .references('id')
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
  