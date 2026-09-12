import type { User } from "./user"

export interface RegisterData {
    name: string;
    email: string;
    address: string;
    password: string;
}

export interface SigninData {
    email: string;
    password: string;
}

export interface SignResponse {
    message: string;
    session_id: string;
    user: User;
}