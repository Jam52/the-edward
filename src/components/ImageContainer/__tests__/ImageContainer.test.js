import ImageContainer from '../ImageContainer';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<ImageContainer />);
  expect(getByTestId('component-image-container')).toBeInTheDocument();
});
