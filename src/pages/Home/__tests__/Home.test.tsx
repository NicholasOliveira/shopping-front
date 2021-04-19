import React from 'react';
import { render } from '@testing-library/react';
import Home from '../';

const MockUseProduct = jest.fn();
jest.mock('../../../Contexts/Product', () => ({
  useProduct: () => MockUseProduct(),
}));

test('renders component Home and Products', () => {
  MockUseProduct.mockReturnValue({ Product: mock });
  const { getByText } = render(<Home />);
  expect(getByText('Produto mockado')).toBeInTheDocument();
});

const mock = [
  {
    id: 1,
    name: 'Produto mockado',
    img: {
      url: 'urlImagem',
      title: 'titleImagem',
    },
  },
];
