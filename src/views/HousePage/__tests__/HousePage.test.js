import HousePage from '../HousePage';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<HousePage />);
  expect(getByTestId('component-house-page')).toBeInTheDocument();
});
