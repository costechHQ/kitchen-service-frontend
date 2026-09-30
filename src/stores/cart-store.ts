import { create } from "zustand";
import type { MenuItem } from "@/types/menu";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (item) => {
    console.log("Adding to cart:", item);
    set((state) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    });
  },

  decreaseItem: (id) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
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
