import './matchMedia.mock';
import ImageContainer from '../ImageContainer';
import { render } from '@testing-library/react';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('renders TheEdward header', () => {
  const { getByTestId } = render(<ImageContainer />);
  expect(getByTestId('component-image-container')).toBeInTheDocument();
});
