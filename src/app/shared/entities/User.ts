import { UserRole } from "./UserRole";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    passwordConfirmation?: string;
    role: UserRole;
}