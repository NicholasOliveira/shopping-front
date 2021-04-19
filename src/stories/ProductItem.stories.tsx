import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProductItem from '../pages/Home/Components/ProductItem';

export default {
  title: 'Products',
  component: ProductItem,
} as Meta;

export interface ProductItemProps {
  id: number;
  name: string;
  img: {
    url: string;
    title: string;
  };
}

const mock = {
  id: 1,
  name: 'Nome do Produto',
  img: {
    url: 'https://via.placeholder.com/150',
    title: 'nome do produto',
  },
};

export const ItemProduct: Story<ProductItemProps> = (
  args,
) => <ProductItem {...mock} />;
