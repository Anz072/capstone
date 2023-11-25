import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import Button from "../button/button.componenet";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { DropdownContext } from "../../context/dropdown.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, opened, setOpened } = useContext(DropdownContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Link className="nav-link" to="/cart">
        <Button
          onClick={() => {
            setOpened(!opened);
          }}
        >
          Go to checkout
        </Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
