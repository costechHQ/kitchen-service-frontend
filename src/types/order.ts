//import type { UserRole } from "./user";

export type OrderStatus = 
| "received"
| "cooking"
| "out_for_delivery"
| "delivered";

export interface OrderItem {
    menu_item_id: number;
    name: string;
    quantity: number;
    unit_price: number;
    line_total: number;
}

export interface Order {
    id: number;
    branch_id: number;
    status: OrderStatus;
    total_amount: number;
    created_at: string;
    items: OrderItem[];
}

export interface Tracking {
    order_id: number;
    status: OrderStatus;
    branch_id:  number;
    total_amount: number;
    created_at: string;
}

export interface OrderItemInput {
    menu_item_id: number;
    quantity: number;
}

export interface CreateOrderData {
    branch_id: number;
    items: OrderItemInput[];
}
