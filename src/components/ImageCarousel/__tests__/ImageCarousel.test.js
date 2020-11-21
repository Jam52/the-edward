import ImageCarousel from '../ImageCarousel';
import { render } from '@testing-library/react';

test('renders TheEdward header', () => {
  const { getByTestId } = render(<ImageCarousel />);
  expect(getByTestId('component-image-carousel')).toBeInTheDocument();
});
