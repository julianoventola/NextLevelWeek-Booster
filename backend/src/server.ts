import express from "express";

// Cria um servidor com express
const app = express();

// Cria uma resposta para rota "/"
app.get("/", (request, response) => {
  return response.json({ message: "Hello world!" });
});

// Mantem o servidor escutando na porta 3333
app.listen(3333, () => console.log(`Server running on port 3333`));
