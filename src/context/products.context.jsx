import { createContext, useState } from "react";
import PRODUCTS from "../shopdata.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
