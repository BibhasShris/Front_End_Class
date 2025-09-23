import "./MenuList.css";
import MenuListitem from "./MenuListitem/MenuListitem";

type MenuListProps = {
  items: {
    itemName: string;
    itemPrice: string | number;
    numInCart: number;
  }[];
};
export default function MenuList({ items }: MenuListProps) {
  return ( <div className="menulist">
    {items.map(item) => (
      <MenuListitem
        key={item.itemName}
        itemName={item.itemName}
        itemPrice={item.itemPrice}
        numInCart={item.numInCart}
      />
    )}  
  </div>
    );
}
