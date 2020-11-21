import Button from '../Button';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId('component-button')).toBeInTheDocument();
});
