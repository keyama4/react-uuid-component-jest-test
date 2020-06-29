import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('uuid',() => ({
  v4: () => '12fa6ae8-75d3-40b3-97af-172d0a304d37',
}));

test('renders currently', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});
