import { useCartStore } from "@/stores/cart-store";

export default function Checkout() {
  const items = useCartStore((state) => state.items);
  console.log("Cart items:", items);

  return (
    <div>
      <h1>My Cart</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
