import { RegisterData, SigninData } from "@/types/auth";

const API_URL = "http://localhost:8000/api/v1";

export async function registerUser(data: RegisterData) {
    const response = await fetch('${API_URL}/users/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response
}

export async function signinUser(data: SigninData) {
    const response = await fetch('${API_URL}/users/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
}