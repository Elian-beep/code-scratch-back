import express from "express";
import "reflect-metadata";
import { connectionSource } from "./database/ormconfig";

const app = express();
const port = 8080;

connectionSource
    .initialize()
    .then(() => console.log("DataSource inicializado!"))
    .catch(err => console.error("Erro durante inicialização do DataSource: ", err));

app.use(express.json());
// app.use(routes);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`));