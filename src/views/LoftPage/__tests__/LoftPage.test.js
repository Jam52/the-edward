import LoftPage from '../LoftPage';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<LoftPage />);
  expect(getByTestId('component-loft-page')).toBeInTheDocument();
});
