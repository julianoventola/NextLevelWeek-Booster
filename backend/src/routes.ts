import express from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// Cria o "roteador"
const routes = express.Router();

const upload = multer(multerConfig);

// Rotas de items de coleta
routes.get("/items", ItemsController.index);

//Rotas de Pontos de coleta
routes.post("/points", upload.single("image"), PointsController.create);
routes.get("/points/:id", PointsController.show);
routes.get("/points", PointsController.index);

export default routes;
