import Knex from 'knex';

export async function up(knex: Knex) {
    
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('description').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        table.string('link').notNullable()
        table.string('dev_id').notNullable()

        table.foreign('dev_id').references('id').inTable('dev')
    });

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('projects')
}


