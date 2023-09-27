"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const ormconfig_1 = require("./database/ormconfig");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
ormconfig_1.connectionSource
    .initialize()
    .then(() => console.log("DataSource inicializado!"))
    .catch(err => console.error("Erro durante inicialização do DataSource: ", err));
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`));
