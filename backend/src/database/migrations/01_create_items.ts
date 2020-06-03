import Knex from "knex";

export async function up(knex: Knex) {
  // Cria uma tabela ITEMS para cada tipo de item coletado
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex) {
  // Deleta a tabela ITEMS para cada tipo de item coletado
  knex.schema.dropTable("items");
}
