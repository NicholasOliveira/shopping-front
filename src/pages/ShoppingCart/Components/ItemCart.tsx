import React from 'react';
import { ProductRemoveCart } from '../../../Interfaces/Products';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {
  ItemCart,
  ImgProduct,
  Title,
  BtnAction,
} from './ItemCart.styles';

const Itemcart: React.FC<ProductRemoveCart> = ({
  id: idProduct,
  name,
  img,
  handleRemoveCart,
}) => {
  return (
    <ItemCart>
      <ImgProduct src={img.url} />
      <Title>{name}</Title>
      <BtnAction
        onClick={() => handleRemoveCart(idProduct)}>
        <RemoveCircleIcon />
      </BtnAction>
    </ItemCart>
  );
};

export default Itemcart;
