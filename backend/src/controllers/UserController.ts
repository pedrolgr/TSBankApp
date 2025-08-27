import type { Request, Response } from 'express';
import { UserService } from '../services/UserService.ts';
import { userRepository } from '../repositories/userRepository.ts';
import bcrypt from "bcrypt";

export class UserController {
    async create(req: Request, res: Response) {

        const { firstName, lastName, dateOfBirth, email, password } = req.body;

        if (!firstName || !lastName || !dateOfBirth || !email ||!password) {
            return res.status(400).json({error: "Missing required fields!"})
        }

        const hashedPassword:string = bcrypt.hashSync(password, 10);

        const userService = new UserService();

        try {
            const newUser = await userService.createUser({ firstName, lastName, dateOfBirth, 
            email, hashedPassword })
            return res.json(newUser);

        } catch(error) {
            return res.status(400).json({ error: error instanceof Error ? error.message : error })
        }
    }

    async login(req: Request, res: Response) {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Missing required fields!"})
        }

        const userService = new UserService();

        try {
            const logedUser = await userService.loginUser({ email, password });
            return res.json(logedUser);
        } catch(error) {
            return res.status(400).json({ error: error instanceof Error ? error.message : error })
        }

    }
}