import { render } from '@testing-library/react';
import '../Calendar';
import Calendar from '../Calendar';

describe('Calendar', () => {
  test('renders w/ error', () => {
    const { getByTestId } = render(<Calendar />);
    expect(getByTestId('component-calendar')).toBeInTheDocument();
  });
});
