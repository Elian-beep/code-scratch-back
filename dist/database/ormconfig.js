"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv").config();
exports.connectionSource = new typeorm_1.DataSource({
    "type": "postgres",
    "url": process.env.BD_URL + "?sslmode=require",
    // "host": process.env.POSTGRES_HOST,
    // "port": Number(process.env.BD_PORT),
    // "username": process.env.POSTGRES_USER,
    // "password": process.env.POSTGRES_PASSWORD,
    // "database": process.env.POSTGRES_DATABASE,
    "synchronize": false,
    "logging": true,
    "entities": ["src/entities/*.ts"],
    "migrations": ["src/database/migrations/*.ts"],
});
