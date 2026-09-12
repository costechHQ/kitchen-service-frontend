export type UserRole = "customer" | "staff";

export interface User {
    email: string;
    name: string;
    address: string
    role: UserRole;
}