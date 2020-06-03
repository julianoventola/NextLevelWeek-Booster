import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// Cria o "roteador"
const routes = express.Router();

// Lista os items cadastrados
routes.get("/items", ItemsController.index);

// Cria um novo Ponto de coleta
routes.post("/points", PointsController.create);

export default routes;
