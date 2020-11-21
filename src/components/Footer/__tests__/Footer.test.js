import Footer from '../Footer';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('component-footer')).toBeInTheDocument();
});
