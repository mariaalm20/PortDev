import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('techs').insert([
        { title: 'Java', image: 'Java.png' },
        { title: 'Java Script', image: 'JS.png' },
        { title: 'PHP', image: 'PHP.png' },
        { title: 'Python', image: 'Python.png' },
        { title: 'C', image: 'C.png' },
        { title: 'C#', image: 'C-Sharp.png' },
        { title: 'C++', image: 'C++.png' },
        { title: 'Ruby', image: 'Ruby.png' },
        { title: 'HTML', image: 'HTML.png' },
        { title: 'CSS', image: 'CSS.png' },
    ]);
}