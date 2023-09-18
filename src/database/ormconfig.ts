import { DataSource } from "typeorm";
require("dotenv").config();

export const connectionSource = new DataSource(
    {
        "type": "postgres",
        // "url": process.env.BD_URL,
        "host": process.env.BD_HOST,
        "port": Number(process.env.BD_PORT),
        "username": process.env.BD_USERNAME,
        "password": process.env.BD_PASSWORD,
        "database": process.env.BD_DATABASE,
        "synchronize": false,
        "logging": true,
        "entities": ["src/entities/*.ts"],
        "migrations": ["src/database/migrations/*.ts"],
    }
);