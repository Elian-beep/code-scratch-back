import { DataSource } from "typeorm";
require("dotenv").config();

export const connectionSource = new DataSource(
    {
        "type": "postgres",
        "url": process.env.BD_URL,
        // "url": "postgres://kihan:IAT5mIqo3Tfx9W7fv4SPqBrhJkxd5zfq@dpg-ck1ou4v03lhc73fd5q7g-a.oregon-postgres.render.com/code_scratch",
        // "host": process.env.BD_HOST,
        // "port": Number(process.env.BD_PORT),
        // "username": process.env.BD_USERNAME,
        // "password": process.env.BD_PASSWORD,
        // "database": process.env.BD_DATABASE,
        // "host": "dpg-ck1ou4v03lhc73fd5q7g-a",
        // "port": 5432,
        // "username": "postgres",
        // "password": "IAT5mIqo3Tfx9W7fv4SPqBrhJkxd5zfq",
        // "database": "code_scratch",
        "synchronize": false,
        "logging": true,
        "entities": ["src/entities/*.ts"],
        "migrations": ["src/database/migrations/*.ts"],
        "extra": {
            "ssl": true
        }
    }
);