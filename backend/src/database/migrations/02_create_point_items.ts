import Knex from "knex";

export async function up(knex: Knex) {
  // Cria uma tabela de relacionamento N para N de pontos e itens
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();

    // Cria a chave estrangeira para cada ponto de coleta
    table.integer("point_id").notNullable().references("id").inTable("points");

    // Cria a chave estrangeira para item coletável
    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex) {
  // Deleta a tabela de relacionamento N para N de pontos e itens
  knex.schema.dropTable("point_items");
}
