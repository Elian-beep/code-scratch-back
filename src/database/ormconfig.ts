import { DataSource } from "typeorm";
require("dotenv").config();

export const connectionSource = new DataSource(
    {
        "type": "postgres",

        "url": process.env.BD_URL+"?sslmode=require",
        
        // "host": process.env.POSTGRES_HOST,
        // "port": Number(process.env.BD_PORT),
        // "username": process.env.POSTGRES_USER,
        // "password": process.env.POSTGRES_PASSWORD,
        // "database": process.env.POSTGRES_DATABASE,
        "synchronize": false,
        "logging": true,
        "entities": ["src/entities/*.js"],
        "migrations": ["src/database/migrations/*.js"],
    }
);