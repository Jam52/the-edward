import CabinPage from '../CabinPage';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<CabinPage />);
  expect(getByTestId('component-cabin-page')).toBeInTheDocument();
});
