import React from 'react';
import Itemcart from './Components/ItemCart';
import {
  Container,
  ListCart,
  Title,
} from './shoppingCart.styles';
import { useCart } from '../../Contexts/Cart';
import { filterProduct } from '../../utils/filterProduct';
import { Products } from '../../Interfaces/Products';

const ShoppingCart: React.FC = () => {
  const { Cart, setCart } = useCart();
  const handleRemoveCart = (id: number) => {
    const products: Products = filterProduct(id, Cart);
    setCart(products);
  };

  return (
    <Container>
      <Title>
        Você tem <strong>{Cart.length}</strong> produtos
        adicionados.
      </Title>
      <ListCart>
        {Cart?.map((product) => (
          <Itemcart
            key={product.id}
            {...product}
            handleRemoveCart={handleRemoveCart}
          />
        ))}
      </ListCart>
    </Container>
  );
};

export default ShoppingCart;
