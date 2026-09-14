import { create } from "zustand";
import type { MenuItem } from "@/types/menu";

interface CartItem extends MenuItem {
  quantity: number;
}

interface  CartState {
    items: CartItem[];
    addItem: (item: MenuItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (item) => {
    set((state) => ({
      items: [...state.items, { ...item, quantity: 1 }],
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },
}));