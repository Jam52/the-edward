import LandingPage from '../LandingPage';
import { render } from '@testing-library/react';

describe('LangingPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<LandingPage />);
  });
  const renderData = ['component-landing-page'];

  describe.each(renderData)('When rendering', (component) => {
    test(`${renderData.id} renders correct text`, () => {
      expect(wrapper.getByTestId(component)).toBeInTheDocument();
    });
  });
});
