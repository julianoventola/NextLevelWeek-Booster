import express from "express";

// Cria o "roteador"
const routes = express.Router();

// Cria uma resposta para rota "/"
routes.get("/", (request, response) => {
  return response.json({ message: "connected!" });
});

export default routes;
