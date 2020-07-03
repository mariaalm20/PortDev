import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('dev', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('user').notNullable();
        table.string('bio').notNullable()
        table.string('avatar').notNullable()
    });

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('dev')
}
