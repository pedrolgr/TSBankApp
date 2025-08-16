import { Entity, PrimaryGeneratedColumn, Column, OneToOne, type Relation } from "typeorm";
import { Account } from "./Account.ts";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: "date"})
    dateOfBirth: Date;

    @Column()
    age: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Account, account => account.user, { cascade: true })
    account: Relation<Account>;
    
}