import '../../../__mocks__/intersectionObserverMock';
import '../../../__mocks__/matchMedia.mock';
import LandingPage from '../LandingPage';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
const setup = () =>
  render(
    <Router history={history}>
      <LandingPage />
    </Router>,
  );

describe('LangingPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  const renderData = ['component-landing-page'];

  describe.each(renderData)('When rendering', (component) => {
    test(`${renderData.id} renders correct text`, () => {
      expect(wrapper.getByTestId(component)).toBeInTheDocument();
    });
  });
});
