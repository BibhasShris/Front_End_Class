import "./Cart.css";
import CartItem from "./CartItem/CartItem";

type CartProps = {
  items: {
    id: number;
    name: string;
  }[];
};

export default function Cart({ items }: CartProps) {
  return (
    <div className="cart">  
    {items.map((item) => (
      <CartItem key={item.id} 
      itemName={item.name} />
    )}
    </div>
  );
}
