import { DataSource } from "typeorm";
import { User } from "./models/User.ts";
import { Person } from "./models/Person.ts";

import dotenv from 'dotenv'
dotenv.config({ path: '.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    synchronize: true,
    logging: true,
    entities: [User, Person],
    subscribers: [],
    migrations: [],
})