import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, type Relation } from "typeorm";
import { Person } from "./Person.ts"; 

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Person, (person) => person.user)
    @JoinColumn()
    person: Relation<Person>;
    
}