import { createContext, useContext } from 'react';
import { Products } from '../../Interfaces/Products';

export type CartContextType = {
  Cart: Products;
  setCart: (Product: Products) => void;
};

export const CartContext = createContext<CartContextType>({
  Cart: [],
  setCart: (Cart) => console.warn(Cart, 'no cart provider'),
});
export const useCart = () => useContext(CartContext);
