import express, { response } from "express";
import "reflect-metadata";
import { connectionSource } from "./database/ormconfig";
import { routes } from "./routes";
import cors from 'cors';
import axios from "axios";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// const intervalTime = 30000;
const intervalTime = 14 * 60 * 1000;

const performAction = async () => {
    try{
        const response = await axios.get(process.env.URL_SERVER);
        if(response.data){
            console.log(response.data);
        }else{
            console.error('Erro ao acordar com /!');
        }
    }catch(error){
        throw new Error(`Falha ao acordar api: ${error}`);
    }
}

connectionSource
    .initialize()
    .then(() => console.log("DataSource inicializado!"))
    .catch(err => console.error("Erro durante inicialização do DataSource: ", err));

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`));

const intervalId = setInterval(performAction, intervalTime);