import type { Request, Response } from 'express';
import { UserService } from '../services/UserService.ts';

export class UserController {
    async create(req: Request, res: Response) {

        const { firstName, lastName, dateOfBirth, email, password } = req.body;

        if (!firstName || !lastName || !dateOfBirth || !email ||!password) {
            return res.status(400).json({error: "Missing required fields!"})
        }

        const userService = new UserService();

        try {
            const newUser = await userService.createUser({ firstName, lastName, dateOfBirth, 
            email, password })
            return res.json(newUser);

        } catch(error) {
            return res.status(400).json({ error: error instanceof Error ? error.message : error })
        }
    }
}