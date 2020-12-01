import Footer from '../Footer';
import { renderSetup } from '../../../utils/testUtils';

test('renders TheEdward header', () => {
  const { getByTestId } = renderSetup(<Footer />);
  expect(getByTestId('component-footer')).toBeInTheDocument();
});

test('renders address', () => {
  const { getByText } = renderSetup(<Footer />);
  expect(getByText('Address')).toBeInTheDocument();
});

test('renders contact', () => {
  const { getByText } = renderSetup(<Footer />);
  expect(getByText('Contact')).toBeInTheDocument();
});

test('renders navigation', () => {
  const { getByText } = renderSetup(<Footer />);
  expect(getByText('Navigation')).toBeInTheDocument();
});
