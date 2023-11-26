import "./cart.styles.scss";
import CartItemCheckout from "../../cart-item-checkout/cart-item-checkout.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../store/cart/cart.selector";

const Cart = () => {
  // const { cartItems, itemsTotalPrice } = useContext(DropdownContext);
  const cartItems = useSelector(selectCartItems);
  const itemsTotalPrice = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      {cartItems.map((item) => {
        return <CartItemCheckout key={item.id} item={item} />;
      })}
      <div className="total">
        <span>Total Price: {itemsTotalPrice} </span>
      </div>
    </div>
  );
};
export default Cart;
