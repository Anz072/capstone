import { useDispatch, useSelector } from "react-redux";
import "./cart-item-checkout.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";

const CartItemCheckout = ({ item }) => {
  // const { addItemToCart, removeItemFromCart, removeItemCompletely } = useContext(DropdownContext);
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();

  return (
    <div className="checkout-item-container">
      <img
        className="image-container"
        src={item.imageUrl}
        alt={`${item.name}`}
      />
      <h2 className="name">{item.name}</h2>
      <span className="quantity">
        <button
          onClick={() => {
            dispatch(removeItemFromCart(cartItems,item));
          }}
        >
          less
        </button>
        <span className="value">{item.quantity}</span>
        <button
          onClick={() => {
            dispatch(addItemToCart(cartItems,item));
          }}
        >
          more
        </button>
      </span>
      <span className="price"> ${item.price}</span>
      <button onClick={()=>{dispatch(clearItemFromCart(cartItems,item))}}>X</button>
    </div>
  );
};

export default CartItemCheckout;
