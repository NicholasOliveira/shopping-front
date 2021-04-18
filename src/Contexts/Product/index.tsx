import { createContext, useContext } from 'react';
import { Products } from '../../Interfaces/Products';
import ProductsJSON from '../../mock/Products.json';

export type ProductContextType = {
  Product: Products;
  setProduct: (Product: Products) => void;
};

export const ProductsObj = ProductsJSON;

export const ProductContext = createContext<ProductContextType>({
  Product: ProductsJSON,
  setProduct: (Product) => console.warn('no products provider')
});
export const useProduct = () => useContext(ProductContext);
