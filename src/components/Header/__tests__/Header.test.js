import Header from '../Header';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('component-Header')).toBeInTheDocument();
});
