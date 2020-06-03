import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// Cria o "roteador"
const routes = express.Router();

// Rotas de items de coleta
routes.get("/items", ItemsController.index);

//Rotas de Pontos de coleta
routes.post("/points", PointsController.create);
routes.get("/points/:id", PointsController.show);

export default routes;
