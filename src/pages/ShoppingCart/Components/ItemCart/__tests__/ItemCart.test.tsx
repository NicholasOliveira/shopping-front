import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ItemCart from '..';

test('renders component ItemCart has product', () => {
  const { getByText } = render(<ItemCart {...mock} />);
  expect(getByText(mock.name)).toBeInTheDocument();
});

test('renders component ItemCart has btn remove', () => {
  const { getByLabelText } = render(<ItemCart {...mock} />);
  expect(
    getByLabelText('remove product'),
  ).toBeInTheDocument();
});

test('renders component ItemCart has btn remove click', () => {
  const { getByLabelText } = render(<ItemCart {...mock} />);
  const btn = getByLabelText('remove product');
  fireEvent.click(btn);
  expect(mock.handleRemoveCart).toBeCalledTimes(1);
});

const mock = {
  id: 1,
  name: 'Produto mockado',
  img: {
    url: 'urlImagem',
    title: 'titleImagem',
  },
  handleRemoveCart: jest.fn(),
};
