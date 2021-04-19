import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

const MockuseLocation = jest.fn();
jest.mock('react-router-dom', () => ({
  Link: 'Link',
  useLocation: () => MockuseLocation(),
}));

const MockUseCard = jest.fn();
jest.mock('../../../Contexts/Cart', () => ({
  useCart: () => MockUseCard(),
}));

test('renders component Header', () => {
  MockUseCard.mockReturnValue({
    Cart: [],
    setCart: jest.fn(),
  });
  MockuseLocation.mockReturnValue({ pathname: '/' });
  const { getByLabelText } = render(<Header />);
  expect(getByLabelText('shopping cart')).toBeTruthy();
});

test('renders component Header and true arrow back', () => {
  MockUseCard.mockReturnValue({
    Cart: [],
    setCart: jest.fn(),
  });
  MockuseLocation.mockReturnValue({ pathname: '/cart' });
  const { getByLabelText } = render(<Header />);
  expect(getByLabelText('arrow back')).toBeTruthy();
});

test('renders component Header and true Badge', () => {
  MockUseCard.mockReturnValue({
    Cart: [mock],
    setCart: jest.fn(),
  });
  MockuseLocation.mockReturnValue({ pathname: '/' });
  const { getByLabelText } = render(<Header />);
  expect(getByLabelText('Badge')).toBeTruthy();
});

const mock = {
  id: 1,
  name: 'Produto mockado',
  img: {
    url: 'urlImagem',
    title: 'titleImagem',
  },
};
