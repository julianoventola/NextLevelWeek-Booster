import express from "express";
import routes from "./routes";

// Cria um servidor com express
const app = express();

// Coloca interpretador de JSON para as requisições
app.use(express.json());

app.use(routes);

// Mantem o servidor escutando na porta 3333
app.listen(3333, () => console.log(`Server running on port 3333`));
