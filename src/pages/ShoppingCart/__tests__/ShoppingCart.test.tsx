import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ShoppingCart from '..';

const MockUseCard = jest.fn();
jest.mock('../../../Contexts/Cart', () => ({
  useCart: () => MockUseCard(),
}));

test('renders component Shopping Cart no product', () => {
  MockUseCard.mockReturnValue({
    Cart: [],
    setCart: jest.fn(),
  });
  const { getByText } = render(<ShoppingCart />);
  expect(getByText('0')).toBeInTheDocument();
});

test('renders component Shopping Cart no product', () => {
  MockUseCard.mockReturnValue({
    Cart: [mock],
    setCart: jest.fn(),
  });
  const { getByText, getByLabelText } = render(
    <ShoppingCart />,
  );
  expect(getByText('1')).toBeInTheDocument();
  const btn = getByLabelText('remove product');
  fireEvent.click(btn);
  expect(getByText(mock.name)).toBeInTheDocument();
});

const mock = {
  id: 1,
  name: 'Produto mockado',
  img: {
    url: 'urlImagem',
    title: 'titleImagem',
  },
};
