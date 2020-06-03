import { Request, Response } from "express";
import knex from "../database/connection";

class PointController {
  // Exibe um ponto de coleta por ID
  async show(request: Request, response: Response) {
    // Pega o ponto pelos parametros
    const { id } = request.params;

    // Procura no BD o ponto com o Id recebido
    const point = await knex("points").where("id", id).first();

    // Valida se o ponto existe para ser retornado
    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }

    // Procura no BD pelos items que o ponto de coleta aceita
    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return response.json({ point, items });
  }

  // Cria um ponto de coleta
  async create(request: Request, response: Response) {
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

    // Aloca as informações do ponto em uma constante
    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      number,
    };

    // Salva os campos do Ponto
    const insertedIds = await trx("points").insert(point);

    // Recupera o ID do ponto criado
    const point_id = insertedIds[0];

    // Cria o objeto para salvar a relação Ponto x Items
    const pointItems = items.map((item_id: number) => {
      return { item_id, point_id };
    });

    // Salva a relação Ponto x Item
    await trx("point_items").insert(pointItems);

    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default new PointController();
