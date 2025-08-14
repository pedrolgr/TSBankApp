import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User.ts"
@Entity()
export class Person {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: "date"})
    dateOfBirth: Date;

    @OneToOne(() => User)
    user: User;

}