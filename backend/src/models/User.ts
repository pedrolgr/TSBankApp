import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    
}