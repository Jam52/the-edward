import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import './__mocks__/intersectionObserverMock';

test('renders app component', () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>,
  );

  expect(getByTestId('component-app')).toBeInTheDocument();
});
