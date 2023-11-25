import { useContext } from "react";
import { DropdownContext } from "../../../context/dropdown.context";
import './cart.styles.scss'
import CartItemCheckout from "../../cart-item-checkout/cart-item-checkout.component";

const Cart = () => {
  const { cartItems, itemsTotalPrice } = useContext(DropdownContext);
  

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      {cartItems.map((item) => {
        return (
          <CartItemCheckout key={item.id} item={item}/>
        );
      })}
      <div className="total">
        <span>Total Price: {itemsTotalPrice} </span>
      </div>
    </div>
  );
};
export default Cart;
