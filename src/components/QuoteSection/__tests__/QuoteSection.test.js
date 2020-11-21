import QuoteSection from '../QuoteSection';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<QuoteSection />);
  expect(getByTestId('component-quote-section')).toBeInTheDocument();
});
