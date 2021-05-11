import { UserRequest } from "./user-request";
import { UserRole } from "./UserRole";

export class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: UserRole;

    constructor(options: {
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password_confirmation: string,
        role: UserRole,
        firstName: string,
        lastName: string,
        passwordConfirmation: string
    }) {
        this.firstName = options.firstName || options.first_name;
        this.lastName = options.lastName || options.last_name;
        this.email = options.email;
        this.password = options.password;
        this.passwordConfirmation = options.passwordConfirmation || options.password_confirmation;
        this.role = options.role;
    }

    public formatRequest(): UserRequest {
        return new UserRequest(this);
    }
}