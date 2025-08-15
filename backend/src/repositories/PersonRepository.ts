import { AppDataSource } from "../data-source.ts";
import { Person } from "../models/Person.ts";

export const personRepository = AppDataSource.getRepository(Person);