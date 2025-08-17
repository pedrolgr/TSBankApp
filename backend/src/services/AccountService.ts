import { Account } from "../models/Account.ts";
import type { User } from "../models/User.ts"


export class AccountService {
    async createAccount(): Promise<Account> {

        const newAccount = new Account();
        newAccount.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000)
                                    .toString();
        newAccount.balance = Math.floor((Math.random() * (500 - 200) + 200) * 100) / 100;

        return newAccount;
    }
}