import express from "express";
import knex from "./database/connection";

// Cria o "roteador"
const routes = express.Router();

// Lista os items cadastrados
routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

// Cria um novo Ponto de coleta
routes.post("/points", async (request, response) => {
  // Recupera os valores enviador no body
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    number,
    items,
  } = request.body;

  // Cria um vinculo do knex para garantir os dois inserts
  const trx = await knex.transaction();

  // Salva os campos do Ponto
  const insertedIds = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    number,
  });

  // Recupera o ID do ponto criado
  const point_id = insertedIds[0];

  // Cria o objeto para salvar a relação Ponto x Items
  const pointItems = items.map((item_id: number) => {
    return { item_id, point_id };
  });

  // Salva a relação Ponto x Item
  await trx("point_items").insert(pointItems);

  return response.json({ success: true });
});

export default routes;
