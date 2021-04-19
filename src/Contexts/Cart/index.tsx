import { createContext, useContext } from "react";
import { Products } from "../../Interfaces/Products";
import CartJSON from "../../mock/Cart.json";

export type CartContextType = {
  Cart: Products;
  setCart: (Product: Products) => void;
};

export const CartObj = CartJSON;

export const CartContext = createContext<CartContextType>({
  Cart: CartJSON,
  setCart: (Cart) => console.warn(Cart, "no cart provider"),
});
export const useCart = () => useContext(CartContext);
