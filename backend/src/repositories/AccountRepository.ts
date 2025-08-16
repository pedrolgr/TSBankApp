import { AppDataSource } from "../data-source.ts";
import { Account } from "../models/Account.ts";

export const accountRepository = AppDataSource.getRepository(Account);