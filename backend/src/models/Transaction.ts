import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Account } from "./Account.ts";
import type { User } from "./User.ts";


@Entity()
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "decimal" })
    amount: number;

    @Column()
    type: "transfer";

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Account, account => account.transactions)
    account: Relation<Account>;
}