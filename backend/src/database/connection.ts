import knex from "knex";
import path from "path";

// Arquivo de configuração de conexão com SQLite
const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
});

export default connection;
