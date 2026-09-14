import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    );
}