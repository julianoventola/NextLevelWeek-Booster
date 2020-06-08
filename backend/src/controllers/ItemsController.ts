import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  // Lista todos os items coletáveis
  async index(request: Request, response: Response) {
    // Procura no banco de dados todos os itens
    const items = await knex("items").select("*");

    // Cria um objeto no formato desejado
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.15.45:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default new ItemsController();
