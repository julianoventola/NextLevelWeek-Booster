import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

// Cria um servidor com express
const app = express();

// Permite o acesso do backend de diferentes dominios
app.use(cors());

// Coloca interpretador de JSON para as requisições
app.use(express.json());

// Seta a utilização de rotas
app.use(routes);

// Seta a rota '/upload' para imagens estáticas(publicas)
// ex: http://localhost:3333/uploads/lampadas.svg
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

// Mantem o servidor escutando na porta 3333
app.listen(3333, () => console.log(`Server running on port 3333`));
