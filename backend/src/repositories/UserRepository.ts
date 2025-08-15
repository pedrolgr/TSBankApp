import { AppDataSource } from "../data-source.ts";
import { User } from "../models/User.ts";

export const userRepository = AppDataSource.getRepository(User);