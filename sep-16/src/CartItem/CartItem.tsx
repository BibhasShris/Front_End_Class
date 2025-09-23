import "./CartItem.css";

type CartItemProps = {
  itemName: string;
};

export default function CartItem({ itemName }: CartItemProps) {
  return (
    <div className="cartItem">
      <span>{itemName}</span>
      <button className="removeFromCartButton">Remove</button>
    </div>
  );
}
