import "./MenuListitem.css";

type MenuListitemProps = {
  itemName: string;
  itemPrice: string | number;
  numInCart: number;
};

export default function MenuListitem({
  itemName,
  itemPrice,
  numInCart,
}: MenuListitemProps) {
  return (
    <div className="menulistItem">
      <div className="menuListItemTopRow">
        <span>{itemName}</span>
        <span>{itemPrice}</span>
      </div>
      <div className="menuListItemBottomRow">
        <span>{numInCart === 0 ? "None in cart" : `${numInCart} in cart`}</span>
        <span>Add to cart</span>
      </div>
    </div>
  );
}
