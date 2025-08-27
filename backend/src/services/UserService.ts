import jwt from "jsonwebtoken";
import { User } from "../models/User.ts";
import { userRepository } from "../repositories/userRepository.ts";
import { AccountService } from "./AccountService.ts";
import bcrypt from "bcrypt";

const JWT_EXPIRES = "1h";

export type CreateUserRequest = {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    hashedPassword: string;
}

export type LoginUserRequest = {
    email: string;
    password: string;
}

export class UserService {

    async createUser({ firstName, lastName, dateOfBirth, email, 
        hashedPassword }: CreateUserRequest): Promise<User> {

            if(await userRepository.findOneBy({ email })) {
                throw new Error("User already exists")
            }

            const accountService = new AccountService();
            const account = await accountService.createAccount();

            const user = new User();
            user.firstName = firstName;
            user.lastName = lastName;
            user.dateOfBirth = dateOfBirth;
            user.age = 1;
            user.email = email;
            user.password = hashedPassword;
            user.account = account;

            try {
                
                const newUser = userRepository.create(user)
                await userRepository.save(newUser);

                return newUser;

            } catch(error) {

                throw error;
            }

    }

    async loginUser({ email, password }: LoginUserRequest): Promise<{user: User, token: string}> {

        const user = await userRepository.findOneBy({ email })
        if(!user) throw new Error ("Invalid Credentials");


        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) throw new Error("Invalid Credentials");

        const payload = { userId: user.id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: JWT_EXPIRES });

        return { user, token }
    }
}