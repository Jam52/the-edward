import Footer from '../Footer';
import { render } from '@testing-library/react';

test('renders TheEdward footer', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('component-footer')).toBeInTheDocument();
});

test('renders contact', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('contact')).toBeInTheDocument();
});

test('renders address', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('adress')).toBeInTheDocument();
});
