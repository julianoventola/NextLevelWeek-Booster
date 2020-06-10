import express from "express";
import { celebrate, Joi } from "celebrate";

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
routes.get("/points/:id", PointsController.show);
routes.get("/points", PointsController.index);
routes.post(
  "/points",
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
        number: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  upload.single("image"),
  PointsController.create
);

export default routes;
