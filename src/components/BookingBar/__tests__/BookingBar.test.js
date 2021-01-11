import { render } from '@testing-library/react';
import BookingBar from '../BookingBar';

describe('BookingBar', () => {
  const wrapper = render(<BookingBar />);
  test('renders w/ error', () => {
    expect(wrapper.getByTestId('component-booking-bar')).toBeInTheDocument();
  });
});
