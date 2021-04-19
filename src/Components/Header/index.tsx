import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../../Contexts/Cart';
import {
  Container,
  ContainerHeader,
  Badge,
} from './header.styles';

const Header: React.FC = () => {
  const { Cart } = useCart();
  const inCart = Cart.length > 0 && true;
  const location = useLocation();

  return (
    <Container>
      <Link to="/">
        {location.pathname !== '/' && (
          <KeyboardBackspaceIcon aria-label="arrow back" />
        )}
      </Link>
      <Link to="cart">
        <ContainerHeader>
          {inCart && (
            <Badge aria-label="Badge">{Cart.length}</Badge>
          )}
          <ShoppingCartIcon aria-label="shopping cart" />
        </ContainerHeader>
      </Link>
    </Container>
  );
};

export default Header;
