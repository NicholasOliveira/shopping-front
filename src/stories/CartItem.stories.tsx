import React from 'react';
import { Story, Meta } from '@storybook/react';
import ItemCart from '../pages/ShoppingCart/Components/ItemCart';
export default {
  title: 'Cart',
  component: ItemCart,
} as Meta;

export interface ItemCartProps {
  id: number;
  name: string;
  img: {
    url: string;
    title: string;
  };
  handleRemoveCart: () => void;
}

const mock = {
  id: 1,
  name: 'Nome do Produto',
  img: {
    url: 'https://via.placeholder.com/150',
    title: 'nome do produto',
  },
  handleRemoveCart: () => {},
};

export const CartItem: Story<ItemCartProps> = (args) => (
  <div style={{ width: '500px', alignSelf: 'center' }}>
    <ItemCart {...mock} />
  </div>
);
