import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { User } from "./User.ts";
import { Transaction } from "./Transaction.ts";

@Entity()
export class Account {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    accountNumber: string;

    @Column({ type: "decimal" })
    balance: number;

    @OneToOne(() => User, user => user.account)
    @JoinColumn()
    user: Relation<User>;

    @OneToMany(() => Transaction, transaction => transaction.account)
    transactions: Transaction[];
}