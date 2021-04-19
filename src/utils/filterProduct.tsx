import { Products } from '../Interfaces/Products';

export const filterProduct = (
  id: number,
  productList: Products,
) => {
  const result = productList.filter(
    (product) => product.id !== id,
  );
  return result;
};
