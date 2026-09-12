import { RegisterData, SigninData } from "@/types/auth";
import { MenuResponse } from "@/types/menu";
import { CreateOrderData, Order, Tracking } from "@/types/order";


const API_URL = "http://localhost:8000/api/v1";

export async function registerUser(data: RegisterData) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response
}

export async function signinUser(data: SigninData) {
    const response = await fetch(`${API_URL}/users/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response;
}

export async function getCurrentUser(data: SigninData) {
    const response = await fetch(`${API_URL}/users/me`, {
        credentials: "include",
    });

    return response;
}

export async function signoutUser() {
    const response = await fetch(`${API_URL}/users/signout`, {
        method: "POST",
        credentials: "include",
    });

    return response;
}




export async function getMenu(): Promise<MenuResponse> {
    const response = await fetch(`${API_URL}/menu/`);

    return response.json();
}

export async function getMenuItem(menuID: number) {
    const response = await  fetch(`${API_URL}/menu/`);

    return response.json();
}



export async function placeOrder(data: CreateOrderData): Promise<Order> {
    const response = await fetch(`${API_URL}/orders/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    return response.json();
}

export async function getOrderHistory(): Promise<Order[]> {
    const response = await fetch(`${API_URL}/orders/history`, {
        credentials: "include",
    });

    return response.json();
}

