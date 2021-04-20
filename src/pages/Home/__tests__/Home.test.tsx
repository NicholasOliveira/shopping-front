import * as React from 'react';
import { render } from '@testing-library/react';
import Home from '../';

const MockUseProduct = jest.fn();
jest.mock('../../../Contexts/Product', () => ({
  useProduct: () => MockUseProduct(),
}));

const MockUseState = jest.fn();
jest.mock('../../../converter/apiData', () => () =>
  MockUseState(),
);

const MockApi = jest.fn();
jest.mock('../../../services/api', () => ({
  api: {
    get: () => MockApi(),
  },
}));

const setLoading = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');

test('renders component Home and Products', () => {
  MockUseProduct.mockReturnValue({
    Product: mock,
    setProduct: () => {},
  });
  MockUseState.mockReturnValue(mock);
  MockApi.mockReturnValue({ data: mockInitial });
  useStateSpy.mockImplementation(() => [false, setLoading]);
  const { getByText } = render(<Home />);
  expect(getByText('Produto mockado')).toBeInTheDocument();
});

test('renders component Home and Error loading', () => {
  MockUseProduct.mockReturnValue({
    Product: mock,
    setProduct: () => {},
  });
  MockUseState.mockReturnValue(
    Promise.resolve(mockInitial),
  );
  MockApi.mockReturnValue(Promise.reject());
  useStateSpy.mockImplementation(() => [true, setLoading]);
  render(<Home />);
});

const mockInitial = [
  {
    id: 1,
    title: 'Produto mockado',
    img: 'urlImagem',
  },
];

const mock = [
  {
    id: 1,
    name: 'Produto mockado',
    img: {
      url: 'urlImagem',
      title: 'Produto mockado',
    },
  },
];
