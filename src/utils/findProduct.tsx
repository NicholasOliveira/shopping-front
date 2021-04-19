import { Products } from '../Interfaces/Products';

export const findProduct = (
  id: number,
  productList: Products,
) => {
  const result = productList.find(
    (product) => product.id === id,
  );
  return result;
};
