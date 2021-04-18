import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Container } from './header.styles';

const Header: React.FC = () => {
  return (
    <Container>
      <KeyboardBackspaceIcon />
      <ShoppingCartIcon />
    </Container>
  );
};

export default Header;
