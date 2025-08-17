import { DataSource } from "typeorm";
import { User } from "./models/User.ts";

import dotenv from 'dotenv'
import { Account } from "./models/Account.ts";
import { Transaction } from "./models/Transaction.ts";
dotenv.config({ path: '.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    synchronize: true,
    logging: false,
    entities: [User, Account, Transaction],
    subscribers: [],
    migrations: [],
})