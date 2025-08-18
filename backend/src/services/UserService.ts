import { User } from "../models/User.ts";
import { userRepository } from "../repositories/userRepository.ts";
import { AccountService } from "./AccountService.ts";

export type UserRequest = {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    hashedPassword: string;
}

export class UserService {

    async createUser({ firstName, lastName, dateOfBirth, email, 
        hashedPassword }: UserRequest): Promise<User> {

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
}