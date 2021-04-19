import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProductItem from '../';

const MockUseCard = jest.fn();
jest.mock('../../../../../Contexts/Cart', () => ({
  useCart: () => MockUseCard(),
}));
test('renders component ProductItem has name', () => {
  MockUseCard.mockReturnValue({
    Cart: [],
    setCart: jest.fn(),
  });
  const { getByText } = render(<ProductItem {...mock} />);
  expect(getByText(mock.name)).toBeInTheDocument();
});

test('renders component ProductItem has button add ', () => {
  MockUseCard.mockReturnValue({
    Cart: [],
    setCart: jest.fn(),
  });
  const { getByText } = render(<ProductItem {...mock} />);
  const btn = getByText('Adicionar');
  fireEvent.click(btn);
  expect(getByText('Adicionar')).toBeInTheDocument();
});

test('renders component ProductItem has button remove ', () => {
  MockUseCard.mockReturnValue({
    Cart: [mock],
    setCart: jest.fn(),
  });
  const { getByText } = render(<ProductItem {...mock} />);
  const btn = getByText('Remover');
  fireEvent.click(btn);
  expect(getByText('Remover')).toBeInTheDocument();
});

const mock = {
  id: 1,
  name: 'Produto mockado',
  img: {
    url: 'urlImagem',
    title: 'titleImagem',
  },
};
