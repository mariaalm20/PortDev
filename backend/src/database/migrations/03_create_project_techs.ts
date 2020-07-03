import Knex from 'knex';

export async function up(knex: Knex) {
    
    return knex.schema.createTable('project_techs', table => {
        table.increments('id').primary();
    
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')

        table.integer('techs_id').notNullable()
            .references('id')
            .inTable('techs')

    });

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('project_techs')
}