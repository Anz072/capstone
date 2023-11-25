import { useContext } from "react";
import { DropdownContext } from "../../context/dropdown.context";
import { ItemCount, ShoppingIcon, CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount } = useContext(DropdownContext);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
