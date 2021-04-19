import React from 'react';
import {
  Container,
  ImgProduct,
  Title,
  BtnAction,
} from './ProductItem.styles';
import { Product } from '../../../../Interfaces/Products';

const ProductItem: React.FC<Product> = (
  product: Product,
) => {
  return (
    <Container>
      <ImgProduct src={product.img.url} />
      <Title>{product.name}</Title>
      <BtnAction add="add">Adicionar</BtnAction>
    </Container>
  );
};

export default ProductItem;
