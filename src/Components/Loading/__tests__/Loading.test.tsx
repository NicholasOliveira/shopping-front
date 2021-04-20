import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../';

test('renders component Loading', () => {
  const { getByLabelText } = render(<Loading />);
  expect(getByLabelText('Loading')).toBeTruthy();
});
