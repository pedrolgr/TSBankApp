import { Transaction } from "typeorm";
import { AppDataSource } from "../data-source.ts";

export const transactionRepository = AppDataSource.getRepository(Transaction);
