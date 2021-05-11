import { User } from "./User";
import { UserRole } from "./UserRole";

export class UserRequest {
    email: string;
    password: string;
    password_confirmaion?: string;
    first_name: string;
    last_name: string;
    role: UserRole;

    constructor (user: User) {
        this.email = user.email;
        this.password = user.password;
        this.password_confirmaion = user.passwordConfirmation;
        this.first_name = user.firstName;
        this.last_name = user.lastName;
        this.role = user.role || UserRole.User;
    }
}