import LandingPage from '../LandingPage';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<LandingPage />);
  expect(getByTestId('component-landing-page')).toBeInTheDocument();
});
