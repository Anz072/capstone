import { createContext, useState, useEffect } from "react";

//add item to cart
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//remove item from cart
const removeCartItem = (cartItems, productToRemove) => {
  const product = cartItems.find((item) => item.id === productToRemove.id);
  if (product.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
};

const removeItemCompletely = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const DropdownContext = createContext({
  opened: false,
  setOpened: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  removeItemCompletely: () => {},
  itemsTotalPrice: 0,
});

export const DropdownContextProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [itemsTotalPrice, setItemsTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, currItem) => total + currItem.quantity,
      0
    );
    setcartCount(newCartCount);

    const completePrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    setItemsTotalPrice(completePrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemCompletelyC = (productToRemove) => {
    setCartItems(removeItemCompletely(cartItems, productToRemove));
  };

  const value = {
    opened,
    setOpened,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    removeItemCompletely:removeItemCompletelyC,
    itemsTotalPrice,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
