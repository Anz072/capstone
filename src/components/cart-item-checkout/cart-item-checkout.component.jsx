import { useContext } from "react";
import "./cart-item-checkout.styles.scss";
import { DropdownContext } from "../../context/dropdown.context";

const CartItemCheckout = ({ item }) => {
  const { addItemToCart, removeItemFromCart, removeItemCompletely } = useContext(DropdownContext);
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
            removeItemFromCart(item);
          }}
        >
          less
        </button>
        <span className="value">{item.quantity}</span>
        <button
          onClick={() => {
            addItemToCart(item);
          }}
        >
          more
        </button>
      </span>
      <span className="price"> ${item.price}</span>
      <button onClick={()=>{removeItemCompletely(item)}}>X</button>
    </div>
  );
};

export default CartItemCheckout;
