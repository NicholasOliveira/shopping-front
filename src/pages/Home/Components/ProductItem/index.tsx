import React from 'react';
import {
  Container,
  ImgProduct,
  Title,
  BtnAction,
} from './ProductItem.styles';
import {
  Product,
  Products,
} from '../../../../Interfaces/Products';
import { useCart } from '../../../../Contexts/Cart';
import { findProduct } from '../../../../utils/findProduct';
import { filterProduct } from '../../../../utils/filterProduct';

const ProductItem: React.FC<Product> = ({
  id: idProduct,
  name,
  img,
}: Product) => {
  const { Cart, setCart } = useCart();

  const handleAddCart = (product: Product) => {
    setCart([...Cart, product]);
  };

  const handleRemoveCart = (id: number) => {
    const products: Products = filterProduct(id, Cart);
    setCart(products);
  };

  const inCart = findProduct(idProduct, Cart);
  return (
    <Container>
      <ImgProduct src={img.url} />
      <Title>{name}</Title>

      {!inCart ? (
        <BtnAction
          add
          onClick={() =>
            handleAddCart({ id: idProduct, name, img })
          }>
          Adicionar
        </BtnAction>
      ) : (
        <BtnAction
          onClick={() => handleRemoveCart(idProduct)}>
          Remover
        </BtnAction>
      )}
    </Container>
  );
};

export default ProductItem;
