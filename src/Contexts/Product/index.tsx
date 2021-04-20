import { createContext, useContext } from 'react';
import { Products } from '../../Interfaces/Products';

export type ProductContextType = {
  Product: Products;
  setProduct: (Product: Products) => void;
};

export const ProductsObj = [];

export const ProductContext = createContext<ProductContextType>(
  {
    Product: [],
    setProduct: (Product) =>
      console.warn('no products provider'),
  },
);
export const useProduct = () => useContext(ProductContext);
