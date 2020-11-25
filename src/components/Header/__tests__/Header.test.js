import Header from '../Header';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const setup = () =>
  render(
    <Router history={history}>
      <Header />
    </Router>,
  );

test('renders TheEdward header', () => {
  const { getByTestId } = setup();
  expect(getByTestId('component-header')).toBeInTheDocument();
});

test('contains navigaion items', () => {
  const { getByText } = setup();
  expect(getByText('house')).toBeInTheDocument();
  expect(getByText('cabin')).toBeInTheDocument();
  expect(getByText('loft')).toBeInTheDocument();
});
