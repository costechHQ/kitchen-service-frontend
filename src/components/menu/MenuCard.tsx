import type { MenuItem } from "@/types/menu";
import { useCartStore } from "@/stores/cart-store";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    if (!item.is_active) {
        return null;
    }
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>

            <button onClick={() => addItem(item)}>
                Add to Cart
            </button>
        </div>
    );
}