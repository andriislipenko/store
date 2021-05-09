import { User } from "src/app/shared/entities/User";

export interface LoginResponse {
    user: User;
    token: string
}